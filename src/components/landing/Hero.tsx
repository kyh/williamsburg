export const Hero = () => {
  return (
    <section>
      <div className="2xl:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 text-center">
          <a
            href="/store/product-details"
            className="relative flex h-96 xl:h-screen 2xl:h-96 w-full flex-col overflow-hidden hover:opacity-75 xl:w-auto">
            <span aria-hidden="true" className="absolute inset-0">
              <img
                src="/17.jpeg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </span>

            <span className="relative mt-auto uppercase text-xs text-black p-3">
              <span className="block">cmt-90</span>
              <span className="block">price $1.082</span>
            </span>
          </a>
          <a
            href="/store/product-details"
            className="relative flex h-96 xl:h-screen 2xl:h-96 w-full flex-col overflow-hidden hover:opacity-75 xl:w-auto">
            <span aria-hidden="true" className="absolute inset-0">
              <img
                src="/8.jpeg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </span>

            <span className="relative mt-auto uppercase text-xs text-black p-3">
              <span className="block">kl-34</span>
              <span className="block">price $982</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}