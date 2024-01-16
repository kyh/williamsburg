import { ProductFilter } from "./ProductFilter";

export const ProductDetails = () => {
  return (
    <section>
      <div className="2xl:max-w-7xl mx-auto relative flex flex-col">
        <ProductFilter />
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="h-96 xl:h-screen w-full">
            <img
              src="/17.jpeg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-2">
            <img
              src="/9.jpeg"
              alt=""
              className="h-full w-full object-cover object-center"
            /><img
              src="/8.jpeg"
              alt=""
              className="h-full w-full object-cover object-center"
            /><img
              src="/7.jpeg"
              alt=""
              className="h-full w-full object-cover object-center"
            /><img
              src="/12.jpeg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
