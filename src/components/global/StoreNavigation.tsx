import Image from "next/image";
import { useState } from "react"

export const StoreNavigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="2xl:max-w-7xl 2xl:mx-auto">
      <div className="w-full bg-black md:max-w-sm text-xs z-50 fixed right-0">
        <nav
          x-data="{ open: false }"
          className="relative flex flex-col w-full mx-auto items-center justify-between"
        >
          <div className="inline-flex w-full items-center justify-between p-3 bg-black">
            <a
              className="tracking-tight text-white uppercase focus:outline-none focus:ring"
              href="/"
            >
              WILLIAMSBURG
            </a>
            <button
              className="inline-flex items-center justify-end text-white hover:text-orange-400 focus:outline-none focus:text-white"
              onClick={() => setOpen(prev => !prev)}
            >
              <svg
                className="w-5 h-5"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={open ? "hidden" : "inline-flex"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h16"></path>
                <path
                  className={open ? "inline-flex" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div x-data="{ open: false }" className="w-full">
            <button
              className="bg-white inline-flex w-full items-center justify-between p-3"
              onClick={() => setOpen(prev => !prev)}
            >
              <span className="text-black">ACCOUNT</span>
              <span className="text-black">Cart (0)</span>
            </button>
            <div
              className="text-white bg-white"
              x-show="open"
            // @click.outside="open = false"
            >
              <div
                className="p-3 justify-between inline-flex items-center w-full text-black text-xs uppercase"
              >
                <span> quantity</span>
                <span className="inline-flex items-center gap-2 ml-auto font-medium">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler w-4 h-4 icon-tabler-minus"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l14 0"></path>
                    </svg>
                  </button>
                  <span>1</span>
                  <button
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler w-4 h-4 icon-tabler-plus"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 5l0 14"></path>
                      <path d="M5 12l14 0"></path>
                    </svg>
                  </button>
                </span>
              </div>
              <div
                className="grid md:grid-cols-2 lg:divide-x divide-black border-y border-black text-black uppercase text-xs"
              >
                <img src="/9.jpeg" alt="" />
                <div className="flex flex-col h-full justify-between">
                  <div className="flex flex-col gap-2 p-3">
                    <span className="inline-flex items-center justify-between"
                    ><span>subtotal</span>
                      <span>$399.00</span>
                    </span>
                    <span className="inline-flex items-center justify-between">
                      <span>tax</span>
                      <span>$0.00</span>
                    </span>
                    <span className="inline-flex items-center justify-between">
                      <span>shipping</span>
                      <span> $0.00</span>
                    </span>
                    <span className="inline-flex items-center justify-between">
                      <span>total</span>
                      <span>$399.00</span>
                    </span>
                  </div>
                  <button
                    className="text-white uppercase text-xs justify-between inline-flex items-center mt-10 lg:mt-0 p-3 bg-black"
                  ><span>remove</span>
                    <span>x</span>
                  </button>
                </div>
              </div>
              <div className="bg-white p-3 text-black uppercase text-xs">
                <span>add a note to your order</span>
                <div>
                  <textarea
                    rows={4}
                    name="comment"
                    id="comment"
                    placeholder="your message here"
                    className="block w-full uppercase border-0 py-1.5 px-0 text-xs text-zinc-900 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
              <div className="divide-y divide-blackw-full text-center">
                <button
                  className="p-3 bg-black hover:bg-orange-500 duration-200 text-white uppercase text-xs w-full"
                >
                  check out
                </button>
                <div className="flex">
                  <a
                    href="/store/cart"
                    className="p-3 bg-white text-black uppercase text-xs w-full"
                  >go to cart
                  </a>
                </div>
                <div className="flex">
                  <a
                    href="/store/all-products"
                    className="p-3 bg-white text-black uppercase text-xs w-full"
                  >
                    continue shopping
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="SEARCH..."
              className="block w-full text-xs border-0 p-3 text-white bg-black  upercase font-light placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
            />
          </div>

          <ul
            className={`${open ? "flex" : "hidden"} flex-col bg-black h-screen border-t border-white flex-1 w-full`}
          >
            <nav role="navigation">
              <ul className="flex flex-col text-white uppercase divide-y border-b">
                <li className="p-3"><a href="/store/category"> Category page</a></li>
                <li className="p-3"><a href="/system/overview"> overview</a></li>
                <li className="p-3"><a href="/system/style-guide"> styleguide</a></li>
                <li className="p-3">
                  <a
                    href="https://lexingtonthemes.lemonsqueezy.com/checkout/buy/0618db8c-ffa9-43da-a152-eb4b744716d6"
                  >
                    Buy WILLIAMSBURG</a>
                </li>
              </ul>
            </nav>
          </ul>
        </nav>
      </div>
    </div>
  )
}
