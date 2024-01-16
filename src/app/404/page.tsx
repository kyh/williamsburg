
import { BaseLayout } from "@/layouts/BaseLayout";
import { Error404 } from "@/components/infopages/Error404";

export default function NotFound() {
	return (
		<BaseLayout>
			<Error404 />
		</BaseLayout>
	)
}
