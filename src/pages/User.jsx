import {useEffect,useContext, useRef } from 'react'
import GithubContext  from '../context/githhub/GithubContext';
import {getUserAndRepos}  from '../context/githhub/GithubAction';
import Loader from '../components/shared/Loader';
import ReposList from '../components/repos/ReposList';
//import {Link} from 'react-router-dom'
import {FaCodepen,FaUsers,FaUserFriends,FaHome} from  'react-icons/fa'
import {useParams} from 'react-router-dom'
import './User.scss'
function User() {

    const { user, loading,dispatch,repos} = useContext(GithubContext);

    const params = useParams();


    const getUserTemp = useRef();
    
    const getUserData = async ()=> {
        dispatch({
            type: "SET_LOADING"                
        });
        const userData = await getUserAndRepos(params.login) ;
        dispatch({
            type: "GET_USER_AND_REPOS",
            payload: userData,
        });

        // const userUserRepos = await getUserRepos(params.login) ;
        // dispatch({
        //     type: "GET_REPOS",
        //     payload: userUserRepos,
        // });
    }

    
    getUserTemp.current = getUserData;
        
    useEffect(()=> {
      
        //     getUser(params.login)
       // getUserRepos(params.login)

        /// eslint-disable-next-line react-hooks/exhaustive-deps

        getUserTemp.current();
    }, [dispatch, params.login])

    if(loading) {
        return <Loader />
    }


    const {
        name,
        type,
        avatar_url,
        location,
        bio,
        blog,
        twitter_username,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
    } = user
    return (
        <>
        <section className='banner_box'>
            <div className='avBox'>
                <img src={avatar_url} alt={name} width="450" height="450"/>
                <div className='c_'>
                <div className='c_name'>{name}</div>
                <div className='c_tag'>{login}</div>
                </div>
            </div>
            <div className='c_box'>
                <div className='title_'>
                    <span>{name}</span>
                    <i className='tag_ '>{type}</i>
                    {hireable && (
                        <i className='hire'>Hireable</i>
                    )}                    
                </div>

                <div className='text_box'>
                    <p>{bio}</p>
                </div>
                <div className='more_wrap'>
                    <a href={html_url} className='link_' target="_blank" rel="noopener noreferrer">
                        <span>Visit Github</span>
                    </a>
                </div>

                <div className="metaBox">
                    <div className='mBox'>
                        <div className='t_'>Location</div>
                        <div className='v_'>{location}</div>
                    </div>
                    {blog && (
                         <div className='mBox'>
                            <div className='t_'>Website</div>
                            <div className='v_'><a href={`http://${blog}`} className='link_' target="_blank" rel="noopener noreferrer">{blog}</a></div>
                        </div>)
                    }
                    {twitter_username && (
                         <div className='mBox'>
                            <div className='t_'>Twitter</div>
                            <div className='v_'><a href={`http://twitter.com/${twitter_username}`} className='link_' target="_blank" rel="noopener noreferrer">{twitter_username}</a></div>
                        </div>
                        )
                    }                                      
                </div>
            </div>
        </section>
        <section className="pageSection">
            <div className='publicGrid'>
                <div className='p_item'>
                    <div className='c_'>
                        <div className='t_'>Followers</div>
                        <div className='v_'>{followers}</div>
                    </div>
                    <div className='icon_'>
                        <FaUsers className='text-3xl md:text-4xl' />
                    </div>
                </div>
                <div className='p_item'>
                    <div className='c_'>
                        <div className='t_'>Following</div>
                        <div className='v_'>{following}</div>
                    </div>
                    <div className='icon_'>
                        <FaUserFriends className='text-3xl md:text-4xl' />
                    </div>
                </div>
                <div className='p_item'>
                    <div className='c_'>
                        <div className='t_'>Public Repos</div>
                        <div className='v_'>{public_repos}</div>
                    </div>
                    <div className='icon_'>
                        <FaCodepen className='text-3xl md:text-4xl' />
                    </div>
                </div>
                <div className='p_item'>
                    <div className='c_'>
                        <div className='t_'>Public Gists</div>
                        <div className='v_'>{public_gists}</div>
                    </div>
                    <div className='icon_'>
                        <FaHome className='text-3xl md:text-4xl' />
                    </div>
                </div>
            </div>

            
        </section>
        <section className="pageSection">
            <ReposList repos={repos} />
        </section>
        </>
    )
}

export default User
