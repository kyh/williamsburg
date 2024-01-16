import { EntriesOne } from "@/components/entries/EntriesOne";
import { getPostsData } from "@/content/config";
import { BaseLayout } from "@/layouts/BaseLayout";

type Props = {
  params: {
    tag: string
  }
}
export default function Page({ params: { tag } }: Props) {
  const allPosts = getPostsData();
  const posts = allPosts.filter((post) =>
    post.tags.includes(tag)
  );

  return (
    <BaseLayout>
      <section>
        <div className="2xl:max-w-7xl 2xl:mx-auto">
          <div
            className="bg-black p-3 mt-11 text-xs uppercase text-white w-full border-t inline-flex items-center justify-between border-black">
            tags with {tag}
          </div>
          <ul className="grid grid-cols-1 divide-y divide-black border-b border-black">
            {
              posts.map((post, id) => (
                <EntriesOne
                  key={id}
                  url={"/posts/" + post.id}
                  title={post.title}
                  description={post.description}
                  alt={post.title}
                  pubDate={post.pubDate.toString().slice(0, 10)}
                  author={post.author}
                  image={post.image.url}
                />
              ))
            }
          </ul>
        </div>
      </section>
    </BaseLayout>
  )
}