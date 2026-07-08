"use client"

import { useEffect, useRef, useState } from "react"

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 })
  const target = useRef({ x: -9999, y: -9999 })
  const raf = useRef<number | null>(null)
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    const reduce = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    if (reduce) setEnabled(false)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const onMove = (e: PointerEvent) => {
      target.current = { x: e.clientX, y: e.clientY }
    }
    const onLeave = () => {
      target.current = { x: -9999, y: -9999 }
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    window.addEventListener("pointerleave", onLeave, { passive: true })

    const step = () => {
      // simple lerp for smoothness
      setPos((p) => {
        const nx = p.x + (target.current.x - p.x) * 0.15
        const ny = p.y + (target.current.y - p.y) * 0.15
        return { x: nx, y: ny }
      })
      raf.current = requestAnimationFrame(step)
    }
    raf.current = requestAnimationFrame(step)
    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerleave", onLeave)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      {/* Soft radial glow */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-40" style={{ transform: "translateZ(0)" }}>
        <div
          className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-40 md:opacity-30"
          style={{
            left: pos.x,
            top: pos.y,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background:
              "radial-gradient(120px 120px at center, rgba(56, 189, 248, 0.25), rgba(16, 185, 129, 0.18) 50%, rgba(0,0,0,0) 70%)",
            mixBlendMode: "soft-light",
            transition: "background-color 200ms",
          }}
        />
      </div>
      {/* Small accent dot */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed z-40 hidden md:block"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "rgba(14,165,233,0.7)", // sky-500
          boxShadow: "0 0 12px rgba(14,165,233,0.6)",
        }}
      />
    </>
  )
}
