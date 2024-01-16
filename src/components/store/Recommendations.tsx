import { newarrivals } from "../../data/newarrivals.json";

export const Recommendations = () => {
  return (
    <section>
      <div className="2xl:max-w-7xl mx-auto text-center">
        <div className="px-6 py-3.5 bg-black">
          <p className="uppercase text-xs text-white">You may also like</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4">
          {
            newarrivals.slice(0, 4).map((template, id) => (
              <div key={id}>
                <a href={template.url}>
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