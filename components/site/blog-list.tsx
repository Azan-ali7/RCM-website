import Image from "next/image"
import Link from "next/link"

type Post = {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  categories: string[]
  image: { src: string; alt: string }
}

export default function BlogList({ posts = [] as Post[] }) {
  if (!posts.length) {
    return <div className="text-sm text-muted-foreground">No posts yet. Check back soon.</div>
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((p) => (
        <article
          key={p.slug}
          className="rounded-xl border bg-background overflow-hidden hover:shadow-sm transition-shadow"
        >
          <Link href={`/blog/${p.slug}`}>
            <Image
              src={p.image.src || "/placeholder.svg"}
              alt={p.image.alt}
              width={800}
              height={450}
              className="h-44 w-full object-cover"
            />
          </Link>
          <div className="p-6">
            <div className="text-xs text-emerald-700">{p.categories.join(" • ")}</div>
            <h3 className="mt-2 font-semibold">
              <Link href={`/blog/${p.slug}`} className="hover:underline">
                {p.title}
              </Link>
            </h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
            <div className="mt-4 text-xs text-muted-foreground">
              {p.date} · {p.author}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
