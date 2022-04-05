import {useEffect, useState} from 'react'
import UserItem from './UserItem'

function UserResults() {
    const [users, setUsers] = useState([]);
    const [ loading, setLoading] = useState(true)
    useEffect(() =>{
        getUsers ()
    }, [])

    const getUsers =async () =>{
      const response = await fetch(`https://api.github.com/users`)
      const data = await response.json()
      setUsers(data)
      setLoading(false)
     }
     if(!loading){
        return <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
           <UserItem key={user.id} user={user}/>
        ))}
    </div>
     } else {
         return <h3 className='text-center'>Loading...</h3>
     }
     

}
export default UserResults
