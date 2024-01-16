import Head from "next/head";
import { BaseHead } from "@/components/BaseHead";
import { StoreNavigation } from "@/components/global/StoreNavigation";
import { Footer } from "@/components/global/Footer";

export const StoreLayout = () => {
  return (
    <html lang="en">
      <Head>
        <BaseHead />
      </Head>
      <body className="bg-white flex flex-col min-h-screen">
        <StoreNavigation />
        <main className="flex-grow">
          <slot />
        </main>
        <Footer />
      </body>
    </html>
  )
}