import { ReactNode } from "react"

type Props = {
  title: string,
  url: string,
  description: string,
  pubDate: ReactNode,
  author: string,
  image: string,
  alt: string
}

export const EntriesOne = ({ title, url, description, pubDate, author }: Props) => {
  return (
    <li>
      <a href={url} title={title} className="group">
        <div
          className="flex flex-col items-start justify-between flex-1 w-full text-xs text-black bg-white uppercase">
          <div
            className="inline-flex items-center p-3 justify-between w-full bg-black text-white">
            <p>
              {author}
            </p>
            <time dateTime="2020-03-16"> {pubDate}</time>
          </div>
          <div className="w-full p-3 hover:bg-orange-500 hover:text-white duration-200">
            <p>{title}</p>

            <p className="mt-2">
              {description}
            </p>
          </div>
        </div>
      </a>
    </li>
  )
}