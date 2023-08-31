import { useDispatch } from "react-redux"
import { removeUser } from "../../Store/userReducer"
import { useNavigate } from "react-router-dom"

export default function Logout() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function logoutHandler() {
        dispatch(removeUser())
        navigate('/')
    }
    return (
        <div>
            <button
                className='bg-yellow-950 text-zinc-100 text-sm px-3 py-2 rounded-md'
                onClick={logoutHandler}
            >Logout</button>
        </div>
    )
}
