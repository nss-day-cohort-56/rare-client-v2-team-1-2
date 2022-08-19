import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { getSearchTitlePost } from "../../managers/PostManager"

export const PostTitleSearch = ({ setPosts, loadPosts }) => {
    const [searchCriteria, setSearchCriteria] = useState([])
    //searchedPosts is a function to fetch post by title search and display posts that match the criteria
    const searchedPosts = () => {
        getSearchTitlePost(searchCriteria)
            .then(setPosts)
    }


    return <section className="search">
        <p className="panel-heading">
            Search Posts
        </p>
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
                    type="search" placeholder="Search post by title"
                    className="input"


                />
            </div>
            <div className="control">
                {/* on click displays searched posts */}
                <a className="button is-info" onClick={searchedPosts}><FaSearch /></a>
            </div>
        </div>
    </section>
}