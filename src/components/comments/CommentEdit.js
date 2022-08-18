import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getSingleComment, saveEditComment } from "../../managers/CommentManager"

export const CommentEdit = ({ userId }) => {
    const { commentId } = useParams()
    const { postId } = useParams()
    const navigate = useNavigate()
    const [editComment, setEditComment] = useState({})

    const Comment = (commentId) => {
        getSingleComment(commentId)
            .then(setEditComment)
    }

    useEffect(() => {
        Comment(commentId)
    }, [])

    return (
        <section className="section">
            <div className="card">
                <div className="card-content">
                    <div className="field">
                        <label className="label">Edit comment</label>
                        <div className="control">
                            Subject
                            <input className="input" required autoFocus
                                type="text"
                                value={editComment.subject}
                                onChange={(evt) => {
                                    const copy = { ...editComment }
                                    copy.subject = evt.target.value
                                    setEditComment(copy)
                                }}
                            />
                        </div>
                        <br />
                        <div className="control">
                            Content
                            <input className="input"
                                type="text"
                                value={editComment.content}
                                onChange={(evt) => {
                                    const copy = { ...editComment }
                                    copy.content = evt.target.value
                                    setEditComment(copy)
                                }}
                            />
                        </div>
                    </div>
                    <div className="field is-grouped">
                        <div className="control">
                            <button
                                onClick={evt => {
                                    evt.preventDefault()

                                    const comment = {
                                        id: commentId,
                                        content: editComment.content,
                                        author_id: parseInt(userId),
                                        post_id: editComment.post_id,
                                        created_on: editComment.created_on,
                                        subject: editComment.subject
                                    }

                                    saveEditComment(commentId, comment)
                                        .then(() => navigate(`/posts/${editComment.post_id}/comments`))
                                }}
                                className="button is-success">
                                Save
                            </button>
                            <button onClick={() => { navigate(`/posts/${editComment.post_id}/comments`) }} className="button is-success">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}