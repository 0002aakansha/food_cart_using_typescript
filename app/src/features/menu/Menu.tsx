import { useLoaderData } from "react-router-dom"
import MenuItem from "./MenuItem"
import { getMenu } from "../../api/foodAPI"
import { itemObject } from "../../types/types"

export default function Menu() {
    const menu = useLoaderData() as itemObject[]
    return (
        <section className="bg-zinc-300">
            <div className="md:container mx-auto grid grid-cols-2 gap-2">
                {menu.map((item) => <MenuItem key={item.id} item={item} />)}
            </div>
        </section>
    )
}

export async function loader() {
    return await getMenu()
}


