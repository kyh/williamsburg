import { BaseLayout } from "./BaseLayout";

type Props = {
  content: {
    title: string,
    description: string,
    author: string,
    pubDate: Date,
    tags: string[],
  }
  // children: React.ReactNode
}

export const MarkdownPostLayout = ({ content: { pubDate, title, description, author, tags } }: Props) => {
  return (
    <BaseLayout>
      <section>
        <div className="2xl:max-w-7xl mx-auto">
          <div
            className="mx-w-xs prose text-xs uppercase prose-headings:text-xs mx-auto py-24">
            <p>{pubDate.toString().slice(0, 10)}</p>
            <p>{title}</p>
            <p><em>{description}</em></p>
            <p>Written by: {author}</p>
            <div
              className="flex flex-col divide-y border-y border-black uppercase divide-black text-xs text-black">
              {
                tags.map((tag, id) => (
                  <span key={id} className="p-3 not-prose">
                    <a href={`/tags/${tag}`}>{tag}</a>
                  </span>
                ))
              }
            </div>
            <div className="mt-12"></div>
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}