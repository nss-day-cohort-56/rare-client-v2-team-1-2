import { useEffect, useState } from "react"
import { getAllPosts, getPostBySubscription } from "../../managers/PostManager"
import { PostsTable } from "./PostsTable"
import { PostTitleSearch } from "./PostTitleSearch"


export const SubscribedPostList = () => {
const [posts, setPosts] = useState([])

const loadPosts = () => getPostBySubscription().then(data => setPosts(data))

useEffect(() => {
    loadPosts()
}, [])

return <section className="section">
{/* added post title module to post list and passed down setPosts and loadPosts */}
    <PostTitleSearch setPosts={setPosts} loadPosts={loadPosts}/>
    <article className="panel is-info">
    <p className="panel-heading">
        Your Subscribed Post
    </p>

    <div className="panel-block">
        <PostsTable posts={posts} />
    </div>
    </article>
</section>
}
