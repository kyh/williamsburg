
type Props = {
  title: string,
  description: string,
  url: string,
  socialImage: string,
  twitterImage: string,
  author: string
}

let subtitle = "Lexington Themes";

export const Metas = ({ title, description, url, socialImage, twitterImage, author }: Props) => {
  return (
    <>
      {/* Standard meta */}
      <meta charSet="UTF-8" />
      <meta name="author" content="Yout name" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="your keywords" content="Add ypour keywords here" />
      
      {/* General meta for Open Graphs */}

      <meta name="title" content={`${title} - ${subtitle}`} />
      <meta name="description" content={description} />
      <meta name="author" content={author} />

      {/* open graph standard */}

      <meta property="og:title" content={`${title} - ${subtitle}`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      
      {/* open graph Meta */}

      {/* <meta
        property="og:image"
        content={Astro.site ? `${Astro.site}${socialImage}` : socialImage}
      /> */}
      
      {/* Open Graph Twitter */}


      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      {/* <meta
        name="twitter:image"
        content={Astro.site ? `${Astro.site}${twitterImage}` : twitterImage}
      /> */}
      <title>{title} - {subtitle}</title>
    </>
  )
}