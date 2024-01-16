import { helpcenterCategories } from "@/data/helpcenterCategories.json"

export const Category = () => {
  return (
    <section>
      <div className="2xl:max-w-7xl 2xl:mx-auto">
        <div
          className="flex flex-col text-xs divide-y divide-black uppercase items-start">
          <div
            className="bg-black p-3 mt-11 text-white w-full border-t inline-flex items-center justify-between border-black"
          >
            Payments
          </div>
          <div className="flex flex-col divide-y divide-black w-full">
            {
              helpcenterCategories.map((template, id) => (
                <a
                  key={id}
                  href={template.url}
                  className="text-xs p-3 shrink-0 w-full justify-between inline-flex items-center bg-white uppercase hover:text-white text-black hover:bg-orange-500"
                >
                  {template.description}
                  <span>&rarr;</span>
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}