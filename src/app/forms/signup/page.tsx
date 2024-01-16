import { BaseLayout } from "@/layouts/BaseLayout";
import { Signup } from "@/components/forms/Signup";

export default function Page(){
  return (
    <BaseLayout>
      <Signup />
    </BaseLayout>
  )
}