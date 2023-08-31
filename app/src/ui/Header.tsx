import { useSelector } from "react-redux";
import Cart from "../features/cart/Cart";
import Logout from "../features/user/Logout";
import User from "../features/user/User";
import { RootState } from "../Store/store";

export default function Header() {
  const isLoggedIn = useSelector<RootState>(state => state.user.isLoggedIn) as boolean

  return (
    <header className='bg-yellow-500'>
      <nav className='flex justify-between items-center px-5 py-2 invert-1 cursor-pointer'>
        <div>
          <h3 className='font-semibold text-zinc-50 tracking-wide text-xl '>Fast Pizza Onrender. </h3>
        </div>
        {
          isLoggedIn && (
            <div className="flex items-center gap-5">
              <User />
              <Cart />
              <Logout />
            </div>
          )
        }
      </nav>
    </header >
  )
}
