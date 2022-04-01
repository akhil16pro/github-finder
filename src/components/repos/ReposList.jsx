import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

function ReposList({repos}) {
    return (
        <div className="repoWrap">
            <div className="section-title"> Latest Repositories</div>

            <div className="reposList">
                {repos.map((repo)=> (
                    <RepoItem key={repo.id} repo={repo}/>
                ))}
            </div>
        </div>
    )
}

ReposList.propTypes = {
    repos : PropTypes.array.isRequired
}

export default ReposList
