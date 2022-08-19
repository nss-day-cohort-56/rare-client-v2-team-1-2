import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { getAllPosts, getSearchTitlePost } from "../../managers/PostManager"

export const PostTitleSearch = ({ setPosts, loadPosts }) => {
    const [searchCriteria, setSearchCriteria] = useState([])
    //searchedPosts is a function to fetch post by title search and display posts that match the criteria
    const searchedPosts = () => {
        getSearchTitlePost(searchCriteria)
            .then(setPosts)
    }


    return <section className="search">
        <p className="panel-heading">
            Search by Title
        </p>
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


        />
        {/* on click displays searched posts */}
        <a onClick={searchedPosts}><FaSearch /></a>

    </section>
}