import { initUsers, setIsLoading } from '../store/slices/usersSlice'
import UsersList from '../components/shared/UsersList'
import { useDispatch } from 'react-redux'
import { useEffect } from "react"

const Users = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        if(!localStorage.getItem('users')){
            dispatch(setIsLoading(true))
            const xhr = new XMLHttpRequest()
            xhr.open('GET' , 'https://jsonplaceholder.typicode.com/users')
            xhr.addEventListener('load' , () => {
                const response = JSON.parse(xhr.response)
                localStorage.setItem('users' , JSON.stringify(response))
                dispatch(setIsLoading(false))
                dispatch(initUsers(response))
            })
            xhr.send()
        }else{
            const users = JSON.parse(localStorage.getItem('users'))
            dispatch(initUsers(users))
        }
    }, [dispatch])

    return <UsersList/>
}

export default Users