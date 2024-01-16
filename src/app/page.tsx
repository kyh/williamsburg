import { BaseLayout } from "@/layouts/BaseLayout";
import { Hero } from "@/components/landing/Hero";
import { NewArrivals } from "@/components/landing/NewArrivals";

export default function Home() {
  return (
    <BaseLayout>
      <Hero />
      <NewArrivals />
    </BaseLayout>
  )
}