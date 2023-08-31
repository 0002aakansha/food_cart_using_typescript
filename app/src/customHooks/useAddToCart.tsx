import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { cartObject, itemObject } from '../types/types'
import { addToCart } from '../Store/cartReducer'

export default function useAddToCart() {
    const dispatch = useDispatch()
    return (item: itemObject | cartObject) => {
        toast.success('Item added to cart!')
        return dispatch(addToCart(item))
    }
}

