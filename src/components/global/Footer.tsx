export const Footer = () => {
  return (
    <section>
      <div className="2xl:max-w-7xl 2xl:mx-auto border-t border-white">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px text-xs uppercase lg:grid-cols-4 bg-white">
          <div className="divide-y divide-white bg-black text-white">
            <div className="p-3"><a href="/">WILLIAMSBURG</a></div>
            <div className="p-3">
              <span className="block">© 2023 Lexington Themes.</span>
              <span className="block">All rights reserved</span>
              <span className="block">since 2023</span>
            </div>
          </div>
          <div className="divide-y divide-white bg-black text-white">
            <div className="p-3"><a href="/system/overview">overview</a></div>
            <div className="p-3"><a href="/system/styleguide">style guide</a></div>
            <div className="p-3">
              <a href="https://www.lexingtonthemes.com/license">License</a>
            </div>
          </div>
          <div className="divide-y divide-white bg-black text-white"></div>
          <div className="divide-y divide-white bg-black text-white">
            <div className="p-3">
              <a href="/forms/newsletter">subscribe to our newsletter</a>
            </div>
          </div>
          <div className="p-3 col-span-full bg-black text-white">
            Lexington Themes is not affiliated with Astro or Tailwind Labs team, nor
            is it endorsed by or sponsored by this ones. A side project by Michael
            Andreuzza This website was built with Astro & Tailwind. Crafted in Åland
            Islands, Finland.
          </div>
        </div>
      </div>
    </section>
  )
}
