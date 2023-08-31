import {  itemProps } from '../../types/types'
import useAddToCart from '../../customHooks/useAddToCart'

export default function MenuItem(props: itemProps) {
    const addToCart = useAddToCart()

    function addToCartHandler() {
        addToCart(props.item)
    }

    return (
        <div className='cursor-pointer p-2 grid grid-cols-12 w-full shadow-md bg-slate-50 rounded-md my-4 relative'>
            <div className='w-full col-span-3 flex items-center'>
                <img src={props.item.imageUrl} alt='food item' className='rounded-sm' />
            </div>
            <div className='px-4 py-2 col-span-9'>
                <h5 className='text-yellow-600 font-semibold'>{props.item.name}</h5>
                <h6 className='text-xs'>Ingredients: {props.item.ingredients.join(',')}</h6>
                <p className='text-sm'>Price: <span className='text-green-700 font-semibold text-base'>{props.item.unitPrice}$</span></p>
                {props.item.soldOut && <div className='absolute top-0 left-0 bg-rose-600 px-2 py-1 rounded-sm'>
                    <p className='text-stone-100 font-semibold text-xs'>Sold out</p>
                </div>}
                {!props.item.soldOut &&
                    <button
                        className='text-sm text-yellow-600 font-semibold'
                        onClick={addToCartHandler}
                    >+ Add to Cart</button>
                }
            </div>
        </div>
    )
}
