import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getPostById } from "../../managers/PostManager"
import { FaUserCircle } from 'react-icons/fa'
import { getDetailedUser } from "../../managers/UserManager"

export const AuthorUserDetails = () => {
  const [user, setUserDetails ] = useState({})
  const [formattedDate, setFormattedDate] = useState("")
  const { userId } = useParams()

  useEffect(() => {
    getDetailedUser(userId).then(setUserDetails)
  }, [userId])

  return <section className="section">
    <div className="card">
      <header className="card-header is-justify-content-center">
        <h2 className="title is-size-3 p-3 ">
          {user?.user?.first_name} {user?.user?.last_name}
        </h2>
      </header>
      <div className="card-image">
        <figure className="image">
            {
                (user.profile_image_url)
                ? <img src={user?.profile_image_url} alt={user?.user?.username} />
                : <img src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg" alt="default image" />
            }
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            {/* <span className="icon is-large">
              <FaUserCircle size={'3rem'} />
            </span> */}
          </div>
          <div className="media-content">
            
            <p className="subtitle is-6">Username: {user.user?.username}</p>
            <p className="subtitle is-6">email{user?.user?.email}</p>
            
          </div>
        </div>

        <div className="content">
          Bio: {user?.bio}
          <hr />
        </div>

        <div className="content">
        <time>Date Joined: {new Date(user?.user?.date_joined).toLocaleDateString('en-US')}</time>
          <hr />
        </div>

        

        <div className="content">
            {
                (user?.user?.is_staff)
                ? <p>User Type: Admin</p>
                : <p>User Type: Author</p>
            }
        </div>
      </div>
      <footer className="card-footer">
        
      </footer>
    </div>
  </section>
}