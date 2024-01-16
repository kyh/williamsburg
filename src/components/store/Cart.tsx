export const Cart = () => {
  return (
    <section>
      <div className="2xl:max-w-7xl 2xl:mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-2 border-b border-black text-xs uppercase lg:grid-cols-4 items-start">
          <div className="col-span-3 mt-11 lg:border-r lg:border-black">
            <div
              className="bg-white text-black w-full border-t inline-flex items-center justify-between border-black">
              <div className="p-3 bg-white w-full">Your cart</div>
              <a
                href="/store/all-products"
                className="text-xs p-3 shrink-0 bg-black border-l border-black uppercase text-white hover:bg-orange-500"
              >continue shopping</a>
            </div>
            <div
              className="hidden lg:grid lg:grid-cols-5 text-black uppercase text-xs border-t border-black">
              <div className="col-span-2">
                <div className="divide-y divide-black">
                  <div className="p-3">product</div>
                </div>
              </div>
              <div
                className="divide-y divide-black w-full lg:flex flex-col text-right hidden">
                <div className="p-3">price</div>
              </div>
              <div
                className="divide-y divide-black w-full lg:flex flex-col text-right hidden">
                <div className="p-3">quantity</div>
              </div>
              <div
                className="divide-y divide-black w-full lg:flex flex-col text-right hidden">
                <div className="p-3">quantity</div>
              </div>
            </div>
            <div
              className="grid lg:grid-cols-5 text-black uppercase text-xs border-t border-black">
              <div className="col-span-2">
                <div className="divide-y divide-black">
                  <div
                    className="grid lg:grid-cols-2 lg:divide-x divide-black lg:border-r border-black">
                    <img src="/1.jpeg" alt="" />
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
                </div>
              </div>
              <span className="p-3 hidden lg:block text-right">€0,00 €40,00</span>
              <span className="p-3 hidden lg:block text-right">€0,00 €40,00</span>
              <span className="p-3 hidden lg:block text-right">€0,00 €40,00</span>
            </div>
            <div
              className="grid lg:grid-cols-5 text-black uppercase text-xs border-t border-black">
              <div className="col-span-2">
                <div className="divide-y divide-black">
                  <div
                    className="grid lg:grid-cols-2 lg:divide-x divide-black lg:border-r border-black">
                    <img src="/4.jpeg" alt="" />
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
                        <span>x</span></button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="divide-y divide-black w-full lg:flex flex-col text-right hidden">
                <span className="p-3">€0,00 €40,00</span>
              </div>
              <div
                className="divide-y divide-black w-full lg:flex flex-col text-right hidden">
                <span className="p-3">€0,00 €40,00</span>
              </div>
              <div
                className="divide-y divide-black w-full lg:flex flex-col text-right hidden">
                <span className="p-3">€0,00 €40,00</span>
              </div>
            </div>
            <div
              className="grid lg:grid-cols-5 text-black uppercase text-xs border-t border-black">
              <div className="col-span-2">
                <div className="divide-y divide-black">
                  <div
                    className="grid lg:grid-cols-2 lg:divide-x divide-black lg:border-r border-black">
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
                </div>
              </div>
              <div
                className="divide-y divide-black w-full lg:flex flex-col text-right hidden">
                <span className="p-3">€0,00 €40,00</span>
              </div>
              <div
                className="divide-y divide-black w-full lg:flex flex-col text-right hidden">
                <span className="p-3">€0,00 €40,00</span>
              </div>
              <div
                className="divide-y divide-black w-full lg:flex flex-col text-right hidden">
                <span className="p-3">€0,00 €40,00</span>
              </div>
            </div>
          </div>
          <div
            className="items-start border-t w-full flex flex-col border-black divide-y lg:mt-11 divide-black">
            <div
              className="inline-flex p-3 bg-white justify-between items-center w-full">
              <span>summary</span>
              <span>1</span>
            </div>
            <div
              className="inline-flex p-3 bg-white justify-between items-center w-full">
              <span>subtotal</span>
              <span>$399</span>
            </div>
            <div
              className="inline-flex p-3 bg-white justify-between items-center w-full">
              Tax included and shipping calculated at checkout
            </div>
            <div className="p-3 bg-white flex flex-col w-full">
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
            <button
              className="p-3 bg-black hover:bg-orange-500 duration-200 text-white uppercase text-xs w-full"
            >
              check out
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}