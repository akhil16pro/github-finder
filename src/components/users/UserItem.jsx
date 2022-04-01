import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function UserItem({user: {login , avatar_url}}) {
    return (
        <div className='u_item'>
            <Link to={`/user/${login}`} className="inner_">
                
                    <div className='img_box'>
                        <img src={avatar_url} />
                    </div>
                    <div className='name_'>
                        {login}
                    </div>
                
            </Link>
            
        </div>
    )
}

UserItem.propTypes = {
    user : PropTypes.object.isRequired
}

export default UserItem
