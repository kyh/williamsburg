import { BaseLayout } from "@/layouts/BaseLayout";
import { AllProducts } from "@/components/store/AllProducts";

export default function Page(){
  return (
    <BaseLayout>
      <AllProducts />
    </BaseLayout>
  )
}