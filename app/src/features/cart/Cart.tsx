import { useDispatch } from 'react-redux'
import cart_img from '../../assets/cart.png'
import { setOpen } from '../../Store/cartReducer'
import MenuModal from '../modal/MenuModal'
import { UseItems, UseOpen, UseSubTotal, UseTotalQuantity } from '../../customHooks/reducerHooks'

export default function Cart() {
    const dispatch = useDispatch()
    const isOpen = UseOpen()
    const items = UseItems()
    const subTotal = UseSubTotal()
    const totalQuantity = UseTotalQuantity()

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
