import { BaseLayout } from "@/layouts/BaseLayout";
import { Cookies } from "@/components/infopages/Cookies";

export default function Page(){
  return (
    <BaseLayout>
      <Cookies />
    </BaseLayout>
  )
}