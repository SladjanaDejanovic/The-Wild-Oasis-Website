import { PencilSquareIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function UpdateReservation({ bookingId }) {
	return (
		<Link
			href={`/account/reservations/edit/${bookingId}`}
			className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-b border-primary-800 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
		>
			<PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
			<span className="mt-1">Edit</span>
		</Link>
	);
}

export default UpdateReservation;
