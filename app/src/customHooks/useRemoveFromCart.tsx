import { useDispatch } from 'react-redux'
import { removeFromCart } from '../Store/cartReducer'

export default function useRemoveFromCart() {
    const dispatch = useDispatch()
    return (id: number) => {
        return dispatch(removeFromCart(id))
    }
}

