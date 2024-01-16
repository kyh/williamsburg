import { getPostsData } from "@/content/config";
import { MarkdownPostLayout } from "@/layouts/MarkdownPostLayout";

type Props = {
  params: {
    slug: string[]
  }
}
export default function Page({ params: { slug } }: Props) {
  const blogEntries = getPostsData();
  const content = blogEntries.filter(blog => blog.id === slug[0])[0];
  return (
    content && (
      <MarkdownPostLayout content={content} >
      </MarkdownPostLayout>
    )
  )
}