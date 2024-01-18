import { ProductDetails } from "@/components/store/ProductDetails";
import { Recommendations } from "@/components/store/Recommendations";
import { StoreLayout } from "@/layouts/StoreLayout";

export default function Page(){
  return (
    <StoreLayout>
      <ProductDetails />
      <Recommendations />
    </StoreLayout>
  )
}