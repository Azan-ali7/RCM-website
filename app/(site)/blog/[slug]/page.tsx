import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { notFound } from "next/navigation"
import { getPostBySlug, getPosts } from "@/lib/posts"

type Params = { params: { slug: string } }

export async function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Params) {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | KingRevenuePro`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: Params) {
  const post = getPostBySlug(params.slug)
  if (!post) return notFound()

  const posts = getPosts()
  const idx = posts.findIndex((p) => p.slug === post.slug)
  const prev = idx > 0 ? posts[idx - 1] : null
  const next = idx < posts.length - 1 ? posts[idx + 1] : null

  return (
    <article className="py-12 md:py-20">
      <div className="container px-4 md:px-6 max-w-3xl">
        <Link href="/blog" className="inline-flex items-center text-sm text-sky-700 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        <h1 className="mt-4 text-3xl md:text-4xl font-bold">{post.title}</h1>
        <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <User className="h-4 w-4" />
            {post.author}
          </span>
        </div>

        <div className="mt-6">
          <Image
            src={post.image.src || "/placeholder.svg"}
            alt={post.image.alt}
            width={1200}
            height={630}
            className="rounded-lg border bg-background"
          />
        </div>

        <div className="prose prose-slate dark:prose-invert mt-8 max-w-none">
          {post.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <hr className="my-10" />

        <div className="flex justify-between text-sm">
          {prev ? (
            <Link href={`/blog/${prev.slug}`} className="text-sky-700 hover:underline">
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/blog/${next.slug}`} className="text-sky-700 hover:underline">
              {next.title} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </article>
  )
}
