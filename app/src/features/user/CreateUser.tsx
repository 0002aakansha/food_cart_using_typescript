import { Heading, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../../Store/userReducer'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function CreateUser() {
    const [name, setName] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function submitHandler(e: React.FormEvent) {
        e.preventDefault()
        if (name) {
            dispatch(addUser(name))
            navigate('/menu')
            toast.success(`👋 Welcome ${localStorage.getItem('user')}`)
        } else {
            toast.error('Please enter your name')
            return
        }
        setName('')
    }

    return (
        <div className='h-96 flex items-center flex-col justify-center'>
            <Heading size={'lg'} className='text-yellow-500 text-center'>👋 Welcome To Fast Pizza Onrender</Heading>
            <Text className='my-2'>Please tell us your name 🖋️</Text>
            <form action="" className='my-4' onSubmit={submitHandler}>
                <input type="text" placeholder='Your name' className="border-yellow-300 border-2 px-4 py-2 text-sm rounded-3xl outline-none" value={name} onChange={e => setName(e.target.value)} />
            </form>
        </div>
    )
}
