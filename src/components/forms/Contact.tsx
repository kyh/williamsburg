export const Contact = () => {
  return (
    <section>
      <div className="2xl:max-w-7xl 2xl:mx-auto">
        <div
          className="flex flex-col text-xs border-b border-black divide-y divide-black uppercase items-start">
          <div
            className="bg-white p-3 mt-11 text-black w-full border-t inline-flex items-center justify-between border-black">
            contact us
          </div>
          <div
            className="bg-white p-3 text-black w-full border-t inline-flex items-center justify-between border-black">
            <address>
              <p>ACME CORPORATION</p>
              <p>1234 Elm Street - Springfield (SP)</p>
              <p>T: +1 555 123 4567</p>
              <p>F: +1 555 987 6543</p>
              <p>
                Email: <a
                  href="mailto:info@acmecorp.com"
                  className="underline hover:text-orange-500">info@acmecorp.com</a>
              </p>
              <p>VAT ID: US987654321</p>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}