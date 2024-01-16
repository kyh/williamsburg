import Head from "next/head";
import { BaseHead } from "@/components/BaseHead";
import { Navigation } from "@/components/global/Navigation";
import { Footer } from "@/components/global/Footer";

export const BaseLayout = (props: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <Head>
        <BaseHead />
      </Head>
      <body className="bg-white flex flex-col min-h-screen font-mono">
        <Navigation />
        <main className="flex-1">
          {props.children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
