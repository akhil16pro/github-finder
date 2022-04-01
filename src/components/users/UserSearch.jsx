import {useEffect, useContext, useRef} from 'react'
import GithubContext  from '../../context/githhub/GithubContext';
import {searchUsers}  from '../../context/githhub/GithubAction';
import AlertContext  from '../../context/alert/AlertContext';
function UserSearch() {

    
    const { users, searchText, dispatch} = useContext(GithubContext);
    const {setAlert} = useContext(AlertContext);
    const searchFunTemp = useRef();
    const handleChange = (e)=>{
 
        dispatch({
            type: "SET_SEARCH",
            payload : e.target.value
        })    
    };


    const clearText = (e)=> {       

        dispatch({
            type: "CLEAR_USERS",
        })
        dispatch({
            type: "CLEAR_SEARCH",
        })        
    }


    const searchFun = async (error_ch)=> {
        //console.log(error_ch)
        if(error_ch === true && searchText === '') {
            setAlert('please enter something', 'error')
        }else if(error_ch === false && searchText === '') {
            return '';
            
        }else{       
            // dispatch({
            //     type: "SET_LOADING"                
            // });
            const users = await searchUsers(searchText) ;
            dispatch({
                type: "GET_USERS",
                payload: users,
            });
        }
    }

    searchFunTemp.current = searchFun;

    const handleSubmit = async (e)=> {
        e.preventDefault()
     
        searchFunTemp.current(true);
       
    }
    useEffect(()=>{
        searchFunTemp.current(false);
     
    },[searchText]);
    return ( 
        <div>
            <div className="search_wrap">
                <form onSubmit={handleSubmit}>
                    <div className="input_wrap">
                        <div className="input_">
                            <input type="text" className="input_box" placeholder="Search"
                            value = {searchText}
                            onChange={handleChange} />
                            <button type="button" className={`reset_btn ${(users.length === 0)? 'hide': ''}`} onClick={clearText}>
                                <svg  x="0" y="0" viewBox="0 0 512 512" >
                                    <path d="M256,0C115.39,0,0,115.39,0,256s115.39,256,256,256s256-115.39,256-256S396.61,0,256,0z M383.28,340.858l-42.422,42.422    L256,298.422l-84.858,84.858l-42.422-42.422L213.578,256l-84.858-84.858l42.422-42.422L256,213.578l84.858-84.858l42.422,42.422    L298.422,256L383.28,340.858z"  ></path>
                                </svg>
                            </button>
                        </div>
                        <button type="submit" className="s_btn">
                            <span>Go</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserSearch
