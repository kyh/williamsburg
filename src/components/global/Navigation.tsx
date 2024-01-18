"use client"

import { useState } from "react"

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="2xl:max-w-7xl 2xl:mx-auto">
      <div
        className="w-full bg-black md:max-w-sm text-xs z-50 fixed right-0 2xl:max-w-7xl 2xl:mx-auto">
        <nav
          className="relative flex flex-col w-full mx-auto items-center justify-between">
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
                viewBox="0 0 24 24">
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

          <ul
            className={`${open ? "flex" : "hidden"} flex-col bg-black h-screen border-t border-white flex-1 w-full`}
          >
            <nav role="navigation">
              <ul className="flex flex-col text-white uppercase divide-y border-b">
                <li className="p-3"><a href="/system/overview"> overview</a></li>
                <li className="p-3"><a href="/system/styleguide"> styleguide</a></li>
                <li className="p-3"><a href="https://lexingtonthemes.lemonsqueezy.com/checkout/buy/0618db8c-ffa9-43da-a152-eb4b744716d6"> Buy WILLIAMSBURG</a></li>
              </ul>
            </nav>
            <nav role="navigation " className="mt-24 grid grid-cols-2">
              <ul className="flex flex-col text-white uppercase p-3 gap-2">
                <li>
                  <a href="/forms/contact"> contact</a>
                </li>
                <li>
                  <a href="/infopages/terms"> terms</a>
                </li>
                <li>
                  <a href="/infopages/Privacy"> privacy</a>
                </li>
                <li>
                  <a href="/infopages/cookies"> cookie policy</a>
                </li>
                <li>
                  <a href="/forms/newsletter"> Newsletter</a>
                </li>
              </ul>
              <ul className="flex flex-col text-white uppercase p-3 gap-2">
                <li>
                  <a href="#_"> Twitter</a>
                </li>
                <li>
                  <a href="3_"> instagram</a>
                </li>
                <li>
                  <a href="#_"> youtube</a>
                </li>
                <li>
                  <a href="#_"> facebook</a>
                </li>
              </ul>
            </nav>
          </ul>
        </nav>
      </div>
    </div>
  )
}
