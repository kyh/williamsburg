export const Overview = () => {
  return (
    <section>
      <div className="2xl:max-w-7xl 2xl:mx-auto">
        <div
          className="flex flex-col text-xs divide-y divide-black uppercase items-start">
          <div
            className="bg-white p-3 mt-11 text-black w-full border-t inline-flex items-center justify-between border-black">
            Overview
          </div>
          <div
            className="bg-white p-3 text-black w-full border-t inline-flex items-center justify-between border-black">
            Main pages
          </div>
          <div className="flex flex-col divide-y divide-white w-full">
            <a
              href="/"
              className="text-xs p-3 shrink-0 w-full bg-black uppercase text-white hover:bg-orange-500"
            >home</a>
            <a
              href="/infopages/about"
              className="text-xs p-3 shrink-0 w-full bg-black uppercase text-white hover:bg-orange-500"
            >about</a>
            <a
              href="/infopages/refunds"
              className="text-xs p-3 shrink-0 w-full bg-black uppercase text-white hover:bg-orange-500"
            >Return and refunds</a>
            <a
              href="/infopages/terms"
              className="text-xs p-3 shrink-0 w-full bg-black uppercase text-white hover:bg-orange-500"
            >Terms of service</a>
            <a
              href="/infopages/privacy"
              className="text-xs p-3 shrink-0 w-full bg-black uppercase text-white hover:bg-orange-500"
            >Privacy policy</a>
            <a
              href="/infopages/cookies"
              className="text-xs p-3 shrink-0 w-full bg-black uppercase text-white hover:bg-orange-500">
              Cookies policy</a>
          </div>
          <div
            className="bg-white text-black p-3 w-full border-t inline-flex items-center justify-between border-black">
            Store
          </div>
          <div className="flex flex-col divide-y divide-white w-full">
            <a
              href="/store/all-products"
              className="text-xs p-3 shrink-0 w-full bg-black uppercase text-white hover:bg-orange-500"
            >All products</a>
            <a
              href="/store/product-details"
              className="text-xs p-3 shrink-0 w-full bg-black uppercase text-white hover:bg-orange-500"
            >product details</a>
            <a
              href="/store/cart"
              className="text-xs p-3 shrink-0 w-full bg-black uppercase text-white hover:bg-orange-500"
            >Cart</a>
          </div>
          <div
            className="bg-white text-black p-3 w-full border-t inline-flex items-center justify-between border-black">
            forms
          </div>
          <div className="flex flex-col divide-y divide-white w-full">
            <a
              href="/forms/newsletter"
              className="text-xs p-3 shrink-0 w-full bg-black uppercase text-white hover:bg-orange-500"
            >Newsletter</a>
            <a
              href="/forms/contact"
              className="text-xs p-3 shrink-0 w-full bg-black uppercase text-white hover:bg-orange-500"
            >Contact</a>
            <a
              href="/forms/login"
              className="text-xs p-3 shrink-0 w-full bg-black uppercase text-white hover:bg-orange-500"
            >log in</a>
            <a
              href="/forms/signup"
              className="text-xs p-3 shrink-0 w-full bg-black uppercase text-white hover:bg-orange-500"
            >sing up</a>
          </div>
          <div
            className="bg-white p-3 text-black w-full border-t inline-flex items-center justify-between border-black">
            blog
          </div>
          <div className="flex flex-col divide-y divide-white w-full">
            <a
              href="/blog/blog-one"
              className="text-xs p-3 shrink-0 w-full bg-black uppercase text-white hover:bg-orange-500"
            >Blog</a>
            <a
              href="/posts/1"
              className="text-xs p-3 shrink-0 w-full bg-black uppercase text-white hover:bg-orange-500"
            >Blog post</a>
            <a
              href="/tags"
              className="text-xs p-3 shrink-0 w-full bg-black uppercase text-white hover:bg-orange-500"
            >Tag index</a>
            <a
              href="/tags/Tailwind"
              className="text-xs p-3 shrink-0 w-full bg-black uppercase text-white hover:bg-orange-500"
            >Tag category</a>
          </div>
          <div
            className="bg-white p-3 text-black w-full border-t inline-flex items-center justify-between border-black">
            help center
          </div>
          <div className="flex flex-col divide-y divide-white w-full">
            <a
              href="/helpcenter/home"
              className="text-xs p-3 shrink-0 w-full bg-black uppercase text-white hover:bg-orange-500"
            >help center home</a>
            <a
              href="/helpcenter/category"
              className="text-xs p-3 shrink-0 w-full bg-black uppercase text-white hover:bg-orange-500"
            >help center category</a>
            <a
              href="/helpcenter/details"
              className="text-xs p-3 shrink-0 w-full bg-black uppercase text-white hover:bg-orange-500"
            >help center details</a>
          </div>
        </div>
      </div>
    </section>
  )
}