export const Newsletter = () => {
  return (
    <section>
      <div className="2xl:max-w-7xl 2xl:mx-auto">
        <div
          className="flex flex-col text-xs divide-y divide-black uppercase items-start">
          <div
            className="bg-white p-3 mt-11 text-black w-full border-t inline-flex items-center justify-between border-black">
            sing up to our newsletter
          </div>
          <form
            action="#_"
            className="w-full divide-y divide-black h-full flex flex-col">
            <div className="p-3">
              <label htmlFor="email" className="block">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Your email address"
                className="block w-full border-0 text-xs uppercase px-0 bg-transparent placeholder:text-neutral-600 focus:ring-2 focus:ring-inset focus:ring-gray font-light"
              />
            </div>
            <div className="p-3">
              <label htmlFor="name" className="block">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                placeholder="Insert our name"
                className="block w-full border-0 text-xs uppercase px-0 bg-transparent placeholder:text-neutral-600 focus:ring-2 focus:ring-inset focus:ring-gray font-light"
              />
            </div>
            <div className="p-3">
              <label htmlFor="surname" className="block">Surame</label>
              <input
                type="text"
                name="surname"
                id="surname"
                autoComplete="surname"
                placeholder="Enter your surname"
                className="block w-full border-0 text-xs uppercase px-0 bg-transparent placeholder:text-neutral-600 focus:ring-2 focus:ring-inset focus:ring-gray font-light"
              />
            </div>
            <div className="p-3">
              <label htmlFor="country" className="block">country</label>
              <input
                type="text"
                name="country"
                id="surname"
                autoComplete="country"
                placeholder="Enter your country"
                className="block w-full border-0 text-xs uppercase px-0 bg-transparent placeholder:text-neutral-600 focus:ring-2 focus:ring-inset focus:ring-gray font-light"
              />
            </div>
            <div className="p-3">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-3 w-3 rounded-full border-zinc-300 text-orange-600 focus:ring-orange-500"
                />
                <label htmlFor="remember-me" className="ml-3">Remember me</label>
              </div>
            </div>
            <button
              className="text-xs p-3 shrink-0 w-full bg-black uppercase text-white hover:bg-orange-500"
            >
              send
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}