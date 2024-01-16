export const StyleGuide = () => {
  return (
    <section>
      <div className="2xl:max-w-7xl 2xl:mx-auto">
        <div
          className="flex flex-col text-xs border-b border-black divide-y divide-black uppercase items-start">
          <div
            className="bg-white p-3 mt-11 text-black w-full border-t inline-flex items-center justify-between border-black">
            style guide
          </div>
          <div
            className="bg-black p-3 text-white w-full border-t inline-flex items-center justify-between border-black">
            Typography - IBM Plex Mono &amp; Inter
          </div>
          <div
            className="bg-white p-3 text-black w-full border-t inline-flex items-center justify-between border-black">
            Paragraph, Headings, Emphasis, Strong Importance, Underline, Anchor (for
            links), Line Break, Inline Container, Block Quotation, Citation, Inline
            Code, Preformatted Text, Highlighted Text, Subscript, Superscript.
          </div>
          <div
            className="bg-black p-3 text-white w-full border-t inline-flex items-center justify-between border-black">
            main colors
          </div>
          <div className="bg-white p-3 w-full"></div>
          <div className="bg-orange-50 p-3 w-full"></div>
          <div className="bg-orange-100 p-3 w-full"></div>
          <div className="bg-orange-200 p-3 w-full"></div>
          <div className="bg-orange-300 p-3 w-full"></div>
          <div className="bg-orange-400 p-3 w-full"></div>
          <div className="bg-orange-500 p-3 w-full"></div>
          <div className="bg-orange-600 p-3 w-full"></div>
          <div className="bg-orange-700 p-3 w-full"></div>
          <div className="bg-orange-800 p-3 w-full"></div>
          <div className="bg-orange-900 p-3 w-full"></div>
          <div className="bg-orange-950 p-3 w-full"></div>
          <div className="bg-black p-3 w-full"></div>
          <div
            className="bg-black p-3 text-white w-full border-t inline-flex items-center justify-between border-black">
            buttons
          </div>
          <button
            className="text-black w-full uppercase text-xs inline-flex items-center p-3 bg-white hover:bg-orange-500 duration-200 hover:text-white"
          >primary button
          </button>
          <button
            className="text-white w-full uppercase text-xs inline-flex items-center p-3 bg-black hover:bg-orange-500 duration-200"
          >secondary button
          </button>
        </div>
      </div>
    </section>
  )
}