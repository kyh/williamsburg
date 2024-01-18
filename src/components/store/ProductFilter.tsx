"use client"

import { useState } from "react"

export const ProductFilter = () => {
  const [selected, setSelected] = useState(0)

  return (
    <div className="2xl:max-w-7xl 2xl:mx-auto order-last">
      <div
        className="w-full bg-white md:max-w-sm text-xs z-30 border-t border-black md:border-none md:absolute bottom-0 right-0">
        <div className="relative mx-auto rounded-3xl" x-data="{selected:null}">
          <ul
            className="list-none -space-y-1 divide-y divide-black"
            role="list"
          >
            <li className="relative bg-white border-b border-black">
              <button
                type="button"
                className="w-full text-left p-3 border-b border-black"
                onClick={() => setSelected(prev => prev !== 1 ? 1 : 0)}
              >
                <div
                  className="flex items-center justify-between text-black uppercase text-xs group">
                  <p>onm-12</p>
                  <svg
                    className={`{inline w-4 h-4 ml-4 transition-transform duration-200 transform ${selected === 1 ? "rotate-180" : "rotate-0"}}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                </div>
              </button>
              <div
                className={`${selected === 1 ? "max-h-full" : "max-h-0"} relative overflow-hidden`}
              // x-ref="container1"
              // x-bind:style="selected == 1 ? 'max-height: ' + $refs.container1.scrollHeight + 'px' : ''"
              >
                <div className="p-3">
                  <div className="py-3 flex flex-col gap-3 uppercase">
                    <span>
                      onm-12 is our portable high-fidelity bluetooth loudspeaker
                      featuring a 40 hour rechargable battery
                    </span>

                    <span>
                      listen using line input, bluetooth, FM radio or disk mode.
                      onm-12 memorizes everything you play on an endless looping.
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative bg-white border-b border-black">
              <button
                type="button"
                className="w-full text-left p-3 border-b border-black"
                onClick={() => setSelected(prev => prev !== 2 ? 2 : 0)}
              >
                <div
                  className="flex items-center justify-between text-black uppercase text-xs group">
                  <p>Product options</p>
                  <svg
                    className={`{inline w-4 h-4 ml-4 transition-transform duration-200 transform ${selected === 2 ? "rotate-180" : "rotate-0"}}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"></path>
                  </svg>
                </div>
              </button>
              <div
                className={`${selected === 2 ? "max-h-full" : "max-h-0"} relative overflow-hidden`}
              // x-ref="container1"
              // x-bind:style={selected == 2 ? 'max-height: ' + $refs.container1.scrollHeight + 'px' : ''}
              >
                <div className="p-3">
                  <div className="py-3 flex flex-col gap-3 uppercase">
                    <span> Size</span>

                    <span className="flex flex-row gap-4">
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-color-0"
                          name="size[]"
                          value="s"
                          type="checkbox"
                          className="h-3 w-3 rounded-full border-zinc-300 text-orange-600 focus:ring-orange-500"
                        />
                        <label
                          htmlFor="filter-mobile-color-0"
                          className="ml-3 min-w-0 flex-1 text-xs uppercase">
                          S
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-color-2"
                          name="size[]"
                          value="m"
                          type="checkbox"
                          className="h-3 w-3 rounded-full border-zinc-300 text-orange-600 focus:ring-orange-500"
                        />
                        <label
                          htmlFor="filter-mobile-color-2"
                          className="ml-3 min-w-0 flex-1 text-xs uppercase">
                          M
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-color-0"
                          name="size[]"
                          value="l"
                          type="checkbox"
                          className="h-3 w-3 rounded-full border-zinc-300 text-orange-600 focus:ring-orange-500"
                        />
                        <label
                          htmlFor="filter-mobile-color-0"
                          className="ml-3 min-w-0 flex-1 text-xs uppercase">L</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-color-0"
                          name="size[]"
                          value="xl"
                          type="checkbox"
                          className="h-3 w-3 rounded-full border-zinc-300 text-orange-600 focus:ring-orange-500"
                        />
                        <label
                          htmlFor="filter-mobile-color-0"
                          className="ml-3 min-w-0 flex-1 text-xs uppercase">XL</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-color-0"
                          name="size[]"
                          value="xxl"
                          type="checkbox"
                          className="h-3 w-3 rounded-full border-zinc-300 text-orange-600 focus:ring-orange-500"
                        />
                        <label
                          htmlFor="filter-mobile-color-0"
                          className="ml-3 min-w-0 flex-1 text-xs uppercase">XXL</label>
                      </div>
                    </span>
                  </div>
                  <div className="pt-3 flex flex-col gap-3">
                    <span> Color</span>

                    <span className="flex flex-row gap-4">
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-color-0"
                          name="color[]"
                          value="white"
                          type="checkbox"
                          className="h-3 w-3 rounded-full border-zinc-300 text-orange-600 focus:ring-orange-500"
                        />
                        <label
                          htmlFor="filter-mobile-color-0"
                          className="ml-3 min-w-0 flex-1 text-xs uppercase">White</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-color-1"
                          name="color[]"
                          value="gray"
                          type="checkbox"
                          className="h-3 w-3 rounded-full border-zinc-300 text-orange-600 focus:ring-orange-500"
                        />
                        <label
                          htmlFor="filter-mobile-color-1"
                          className="ml-3 min-w-0 flex-1 text-xs uppercase">Gray</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-color-2"
                          name="color[]"
                          value="orange"
                          type="checkbox"

                          className="h-3 w-3 rounded-full border-zinc-300 text-orange-600 focus:ring-orange-500"
                        />
                        <label
                          htmlFor="filter-mobile-color-2"
                          className="ml-3 min-w-0 flex-1 text-xs uppercase"
                        >
                          Orange
                        </label>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div
            className="p-3 text-black text-xs uppercase justify-between inline-flex items-center w-full">
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
                  strokeLinejoin="round">
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
                strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 5l0 14"></path>
                  <path d="M5 12l14 0"></path>
                </svg>
              </button>
            </span>
          </div>
          <button
            className="p-3 text-white gap-4 text-xs uppercase text-center justify-center inline-flex items-center w-full bg-black">
            <span> add to cart</span>
            <span>$399</span>
          </button>
        </div>
      </div>
    </div>
  )
}