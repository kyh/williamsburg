import { BaseLayout } from "@/layouts/BaseLayout";
import { ProductDetails } from "@/components/store/ProductDetails";
import { Recommendations } from "@/components/store/Recommendations";

export default function Page(){
  return (
    <BaseLayout>
      <ProductDetails />
      <Recommendations />
    </BaseLayout>
  )
}