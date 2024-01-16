import { allproducts } from "@/data/allproducts.json";

export const AllProducts = () => {
  return (
    <section>
      <div className="2xl:max-w-7xl mx-auto text-center">
        <div className="px-6 py-3.5 bg-black">
          <p className="uppercase text-xs text-white">All products</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {
            allproducts.map((template, id) => (
              <div key={id}>
                <a href={template.url} className="hover:opacity-75 duration-200">
                  <img
                    src={template.image}
                    className=" lg:object-cover aspect-square"
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