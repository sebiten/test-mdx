import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"
import Image from "next/image"

type Props = {
    post: Meta
}

export default function ListItem({ post }: Props) {
    const { id, title, date, imageUrl } = post
    const formattedDate = getFormattedDate(date)

    return (
        <li className="mt-4 text-2xl dark:text-white/90">
            <Image
                src={imageUrl}
                alt={id}
                height={200}
                width={200}
            />
            <Link className="underline hover:text-black/70 dark:hover:text-white" href={`/posts/${id}`}>{title}</Link>
            <br />
            <p className="text-sm mt-1">{formattedDate}</p>
        </li>
    )
}