import { getApprovePostList } from "../../managers/PostManager"
import { useEffect, useState } from "react"
import { PostsTable } from "./PostsTable"
 
export const ApprovePostList = () => {
    const [posts, setPosts] = useState([])
  
    const loadPosts = () => getApprovePostList().then(data => setPosts(data))
  
    useEffect(() => {
      loadPosts()
    }, [])
  
    return <section className="section">
      <article className="panel is-info">
        <p className="panel-heading">
          Posts for Approval
        </p>
  
        <div className="panel-block">
          <PostsTable posts={posts} />
        </div>
      </article>
    </section>
  }
  