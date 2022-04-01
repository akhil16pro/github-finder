import {useEffect,useContext } from 'react'
import Loader from '../shared/Loader';
import UserItem from './UserItem';
import GithubContext  from '../../context/githhub/GithubContext';
function UserResults() {

    const { users, loading} = useContext(GithubContext);
 
    // useEffect(()=>{
    //     fetchUsers();
    // },[]);  

    if(!loading) {
        return (
            <div className='user_grid_wrap'>
                {users.map((user)=> (
                    <UserItem user={user} key={user.id} />                
                )               
                )}
                
            </div>
        )
    }else {
        return (
            <Loader />
        )
    }
    
}

export default UserResults
