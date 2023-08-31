import { modalProps } from "../../types/types";
import useAddToCart from "../../customHooks/useAddToCart";
import useRemoveFromCart from "../../customHooks/useRemoveFromCart";

export default function ModalItem(props: modalProps) {
    const addToCart = useAddToCart()
    const removeFromCart = useRemoveFromCart()

    const addToCartHandler = () => {
        addToCart(props.items)
    }

    const deleteHandler = () => {
        removeFromCart(props.items.id)
    }

    return (
        <>
            <tr className="border border-zinc-300">
                <td className="p-2">
                    <img src={props.items.imageUrl} alt="" className="w-20" />
                </td>
                <td className="">{props.items.name}</td>
                <td className="border border-zinc-300 text-center">{props.items.unitPrice}$</td>
                <td className="border border-zinc-300 text-center">
                    <button className="bg-rose-600 px-2 py-1 rounded-sm text-stone-200 font-semibold mx-2" onClick={deleteHandler}>-</button>
                    {props.items.quantity}
                    <button className="bg-green-700 px-2 py-1 rounded-sm text-stone-200 font-semibold mx-2" onClick={addToCartHandler}>+</button>
                </td>
                <td className="border border-zinc-300 text-center">{props.items.totalPrice}$</td>
            </tr>
        </>
    )
}
