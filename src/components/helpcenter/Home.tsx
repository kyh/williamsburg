import { helpcenter } from "@/data/helpcenter.json"

export const Home = () => {
  return (
    <section>
      <div className="2xl:max-w-7xl 2xl:mx-auto">
        <div
          className="flex flex-col text-xs divide-y divide-black uppercase items-start">
          <div
            className="bg-black p-3 mt-11 text-white w-full border-t inline-flex items-center justify-between border-black">
            help center
          </div>
          <div className="flex flex-col divide-y divide-black w-full">
            {
              helpcenter.map((template, id) => (
                <a
                  key={id}
                  href={template.url}
                  className="text-xs p-3 shrink-0 w-full bg-white uppercase hover:text-white text-black hover:bg-orange-500"
                >
                  {template.description}
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}
