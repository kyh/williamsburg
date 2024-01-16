import { Metas } from "./seo/Metas";
import { Favicons } from "./seo/Favicons";

type Props = {
  title?: string,
  description?: string,
  url?: string,
  socialImage?: string,
  twitterImage?: string,
  author?: string
}

export const BaseHead = ({
  title = "Lexington Starter",
  description = "#",
  url,
  socialImage = "/social-preview-image.png",
  twitterImage = "/twitter-preview-image.png", // Assuming you have a separate image for Twitter
  author = "Lexington Themes",
}: Props) => {
  const sanitizedTitle = title.toLowerCase().replaceAll(" ", "-");

  return (
    <>
      <Metas
        title={title}
        description={description.substring(0, 100)}
        url={`https://lexingtonthemes.com/${sanitizedTitle}`}
        socialImage={socialImage}
        author={author}
        twitterImage={twitterImage}
      />
      <Favicons />
      {/* HTML in your document's head */}
      <link rel="preconnect" href="https://rsms.me/" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <link
        href="https://api.fontshare.com/v2/css?f[]=jet-brains-mono@1,2&display=swap"
        rel="stylesheet"
      />
      <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>

      {/* HTML in your document's head */}
      <link rel="preconnect" href="https://rsms.me/" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      {/* <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;1,100;1,200&family=Newsreader:ital,opsz,wght@1,6..72,200&display=swap" rel="stylesheet" /> */}
      <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    </>
  )
}

