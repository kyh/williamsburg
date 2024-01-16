import { getPostsData } from "@/content/config";
import { BaseLayout } from "@/layouts/BaseLayout";

export default function Page() {
  const allPosts = getPostsData();
  const tags = Array.from(new Set(allPosts.map((post) => post.tags).flat()));

  return (
    <BaseLayout>
      <section>
        <div className="2xl:max-w-7xl 2xl:mx-auto">
          <div
            className="bg-black p-3 mt-11 text-xs uppercase text-white w-full border-t inline-flex items-center justify-between border-black">
            tag category
          </div>
          <ol
            role="list"
            className="flex flex-col divide-y border-b border-black uppercase divide-black text-xs text-black">
            {
              tags.map((tag, id) => (
                <li key={id} className="p-3 flex">
                  <a className="w-full " href={`/tags/${tag}`}>
                    {tag}
                  </a>
                </li>
              ))
            }
          </ol>
        </div>
      </section>
    </BaseLayout>
  )
}