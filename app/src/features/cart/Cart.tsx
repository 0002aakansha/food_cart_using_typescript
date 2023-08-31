import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Store/store'
import cart_img from '../../assets/cart.png'
import { setOpen } from '../../Store/cartReducer'
import { cartObject } from '../../types/types'
import MenuModal from '../modal/MenuModal'

export default function Cart<T extends RootState>() {
    const dispatch = useDispatch()
    const isOpen = useSelector<T>(state => state.cart.open)
    const items = useSelector<RootState>(state => state.cart.items) as cartObject[]
    const subTotal = useSelector<RootState>(state => state.cart.subTotal) as number
    const totalQuantity = useSelector<RootState>(state => state.cart.totalQuantity) as number

    function clickHandler() {
        dispatch(setOpen())
    }

    return (
        <>
            <div onClick={clickHandler} className='relative'>
                <img src={cart_img} alt="" className='w-10' />
                <span className='absolute bottom-5 right-0 bg-stone-900 text-zinc-100 w-6 h-6 rounded-2xl flex justify-center items-center text-xs'>{totalQuantity}</span>
            </div >
            {isOpen && <MenuModal items={items} subTotal={subTotal} />}
        </>
    )
}
