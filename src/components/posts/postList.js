import { useEffect, useState } from "react"
import { getAllPosts } from "../../managers/PostManager"
import { PostsTable } from "./PostsTable"
import { PostTitleSearch } from "./PostTitleSearch"


export const PostList = () => {
  const [posts, setPosts] = useState([])

  const loadPosts = () => getAllPosts().then(data => setPosts(data))

  useEffect(() => {
    loadPosts()
  }, [])

  return <section className="section">
{/* added post title module to post list and passed down setPosts and loadPosts */}
    <PostTitleSearch setPosts={setPosts} loadPosts={loadPosts}/>
    <article className="panel is-info">
      <p className="panel-heading">
        Posts
      </p>

      <div className="panel-block">
        <PostsTable posts={posts} />
      </div>
    </article>
  </section>
}
