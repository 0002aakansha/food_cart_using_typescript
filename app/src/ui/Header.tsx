import Cart from "../features/cart/Cart";

export default function Header() {
  return (
    <header className='bg-yellow-500'>
      <nav className='flex justify-between items-center px-5 py-2 invert-1 cursor-pointer'>
        <div>
          <h3 className='font-semibold text-zinc-50 tracking-wide text-xl '>Fast Pizza Onrender. </h3>
        </div>
        <Cart />
      </nav>
    </header>
  )
}
