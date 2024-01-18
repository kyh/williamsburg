import { BaseLayout } from "@/layouts/BaseLayout";
import { Cart } from "@/components/store/Cart";

export default function Page(){
  return (
    <BaseLayout>
      <Cart />
    </BaseLayout>
  )
}