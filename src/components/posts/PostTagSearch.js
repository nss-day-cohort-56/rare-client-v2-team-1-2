import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { getSearchTagPost } from "../../managers/PostManager"

export const PostTagSearch = ({ setPosts, loadPosts }) => {
    const [searchCriteria, setSearchCriteria] = useState([])
    const searchedPosts = () => {
        getSearchTagPost(searchCriteria)
            .then(setPosts)
    }

    return <section className="search">
    <br/>
    <div className="field has-addons">
        <div className="control">
            <input
                //filters posts to search criteria if there is a search
                onChange={
                    (event) => {
                        setSearchCriteria(event.target.value.toLowerCase())
                        if (event.target.value === "") {
                            loadPosts()
                        }
                    }
                }
                type="search" placeholder="Search post by tag"
                className="input"


            />
        </div>
        <div className="control">
            {/* on click displays searched posts */}
            <a className="button is-info" onClick={searchedPosts}><FaSearch  /></a>
        </div>
    </div>
</section>
}