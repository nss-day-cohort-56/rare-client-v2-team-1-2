import { saveNewComment } from "../../managers/CommentManager"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const CommentForm = () => {
  const { postId } = useParams()
  const navigate = useNavigate()

  const [comment, setComment] = useState({
    post_id: postId,
    content: "",
    subject: ""
  })

  const handleSave = (event) => {
    event.preventDefault()
    saveNewComment(comment)
    navigate(`/posts/${postId}/comments`)
  }

  const handleUpdate = (evt) => {
    const copy = { ...comment }
    copy[evt.target.name] = evt.target.value
    setComment(copy)
  }

  return (
    <section className="section">
      <div className="card">
        <div className="card-content">
          <div className="field">
            <label className="label">Add a new comment</label>
            <div className="control">
              Subject
              <input className="input" required autoFocus
                type="text"
                name="subject"
                value={comment.subject}
                onChange={handleUpdate } />
            </div>
            <br />
            <div className="control">
              Content
              <input className="input"
                type="text"
                name="content"
                value={comment.content}
                onChange={handleUpdate } />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button
                onClick={handleSave}
                className="button is-success">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
