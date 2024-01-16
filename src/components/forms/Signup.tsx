export const Signup = () => {
  return (
    <section>
      <div className="2xl:max-w-7xl 2xl:mx-auto">
        <div
          className="flex flex-col text-xs divide-y divide-black border-b border-black uppercase items-start">
          <div
            className="bg-white p-3 mt-11 text-black w-full border-t inline-flex items-center justify-between border-black">
            Create an account
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
              <label htmlFor="password" className="block">password</label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="password"
                placeholder="enter your password"
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
            >create account</button
            >
            <button
              className="text-xs p-3 shrink-0 w-full bg-white uppercase text-black"
            >signup with google</button
            >
            <button
              className="text-xs p-3 shrink-0 w-full bg-white uppercase text-black"
            >signup with twitter</button
            >
          </form>
          <div
            className="bg-white p-3 text-black w-full border-t inline-flex items-center gap-3 border-black">
            Already have an account? <a
              className="hover:text-orange-500 underline"
              href="/forms/login">Login in instead</a
            >
          </div>
        </div>
      </div>
    </section>
  )
}
