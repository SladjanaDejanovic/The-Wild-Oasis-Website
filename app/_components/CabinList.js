import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "@/app/_lib/data-service";
import { revalidatePath } from "next/cache";

async function CabinList() {
	const cabins = await getCabins();
	// revalidatePath("/cabins"); // changed data in supabse doesn't show, so to get new data, use revalidatePath (but this prevents static rendering)
	if (!cabins.length) return null;

	return (
		<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
			{cabins.map((cabin) => (
				<CabinCard cabin={cabin} key={cabin.id} />
			))}
		</div>
	);
}

export default CabinList;
