import Image from "next/image"
import { newarrivals } from "@/data/newarrivals.json"

export const NewArrivals = () => {
  return (
    <section>
      <div className="2xl:max-w-7xl mx-auto text-center">
        <div className="px-6 py-3.5 bg-black">
          <p className="uppercase text-xs text-white">New Arrivals</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {
            newarrivals.map((template, id) => (
              <div key={id}>
                <a href={template.url} className="hover:opacity-75 duration-200">
                  <img
                    src={template.image}
                    className="lg:object-cover aspect-square"
                    alt=""
                  />
                  <div className=" uppercase text-xs text-black p-4 ">
                    <span className="block">{template.description}</span>
                    <span className="block">price {template.price}</span>
                  </div>
                </a>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}