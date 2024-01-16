export const Error404 = () => {
  return (
    <section>
      <div className="2xl:max-w-7xl 2xl:mx-auto">
        <div
          className="flex flex-col text-xs border-b border-black divide-y divide-black uppercase items-start">
          <div
            className="bg-white p-3 mt-11 text-black w-full border-t inline-flex items-center justify-between border-black">
            error 404
          </div>
          <div
            className="bg-white p-3 text-black w-full border-t inline-flex items-center justify-between border-black">
            <address>
              <p>
                Page Not Found. The requested page could not be located. Please
                verify the URL and try again. If you believe this is an error,
                please contact our support team for assistance. <a
                  href="/"
                  className="underline hover:text-orange-500">go back home</a>
              </p>
            </address>
          </div>
        </div>
      </div>
    </section>
  )
}