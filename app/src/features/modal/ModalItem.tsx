import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../Store/cartReducer";

interface itemProps {
    id: number;
    name: string;
    src: string;
    price: number;
    quantity: number;
    totalPrice: number;
}

export default function ModalItem(props: itemProps) {
    const dispatch = useDispatch()

    const addToCartHandler = () => {
        dispatch(addToCart({ id: props.id, name: props.name, imageUrl: props.src, unitPrice: props.price, quantity: props.quantity, totalPrice: props.totalPrice }))
    }

    const deleteHandler = () => {
        dispatch(removeFromCart(props.id))
    }

    return (
        <>
            <tr className="border border-zinc-300">
                <td className="p-2">
                    <img src={props.src} alt="" className="w-20" />
                </td>
                <td className="">{props.name}</td>
                <td className="border border-zinc-300 text-center">{props.price}$</td>
                <td className="border border-zinc-300 text-center">
                    <button className="bg-rose-600 px-2 py-1 rounded-sm text-stone-200 font-semibold mx-2" onClick={deleteHandler}>-</button>
                    {props.quantity}
                    <button className="bg-green-700 px-2 py-1 rounded-sm text-stone-200 font-semibold mx-2" onClick={addToCartHandler}>+</button>
                </td>
                <td className="border border-zinc-300 text-center">{props.totalPrice}$</td>
            </tr>
        </>
    )
}
