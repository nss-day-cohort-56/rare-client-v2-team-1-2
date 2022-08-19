import { useParams, Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { getDetailedUser, updateUser } from "../../managers/UserManager"


export const AdminEditUserProfile = () => {
    const { userId } = useParams()
    const navigate = useNavigate()
    const [userDetails, setUserDetails] = useState({})
    const [editedUserData, setEditedUserData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        bio: "",
        is_staff: false
    })

    //Get detailed user data
    useEffect(
        () => {
            getDetailedUser(userId).then(setUserDetails)
        },
        []
    )

    //store detailed user data in a new object that is formatted in a way that is easy to work with/send to api (no nested objects)
    useEffect(
        () => {
            if (userDetails.user !== {}) {
                let userCopy = { ...editedUserData }
                userCopy.first_name = userDetails?.user?.first_name
                userCopy.last_name = userDetails?.user?.last_name
                userCopy.username = userDetails?.user?.username
                userCopy.email = userDetails?.user?.email
                userCopy.bio = userDetails?.bio
                userCopy.is_staff = userDetails?.user?.is_staff

                setEditedUserData(userCopy)
            }
        },
        [userDetails]
    )

    // function to handle on change
    const handleChange = (event) => {
        const userCopy = { ...editedUserData }
        userCopy[event.target.name] = event.target.value
        setEditedUserData(userCopy)
    }

    
    const handleUpdateUser = (evt) => {
        evt.preventDefault()
        const userCopy = { ...editedUserData }
        userCopy.is_staff = JSON.parse(userCopy.is_staff)
        updateUser(userId, userCopy).then(
            navigate("/users")
        )
    }


    return <>
        {
            (editedUserData)
                ? <>
                    <section className="columns is-centered">
                        <form className="column is-two-thirds" onSubmit={handleUpdateUser}>
                            <h1 className="title">Edit Profile</h1>
                            <div className="field">
                                <label className="label">First Name</label>
                                <div className="control">
                                    <input className="input" type="text" name="first_name"
                                        value={editedUserData.first_name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Last Name</label>
                                <div className="control">
                                    <input className="input" type="text" name="last_name"
                                        value={editedUserData.last_name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Username</label>
                                <div className="control">
                                    <input className="input" type="text" name="username"
                                        value={editedUserData.username}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input className="input" type="text" name="email"
                                        value={editedUserData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div class="control">
                                <label className="label">Select user type</label>
                                <label class="radio">
                                    <input type="radio" name="is_staff" value={true}
                                        onChange={handleChange}
                                        checked={editedUserData.is_staff === true ||editedUserData.is_staff === "true"}
                                    />
                                        Admin
                                </label>
                                <label class="radio"> 
                                    <input type="radio" name="is_staff" value={false}
                                        onChange={handleChange}
                                        checked={editedUserData.is_staff === false || editedUserData.is_staff === "false"}
                                    />
                                        Author
                                </label>
                            </div>

                            <div className="field">
                                <label className="label">Bio</label>
                                <div className="control">
                                    <textarea className="textarea"
                                        value={editedUserData.bio}
                                        name="bio"
                                        onChange={handleChange}>
                                    </textarea>
                                </div>
                            </div>

                            <div className="field is-grouped">
                                <div className="control">
                                    <button className="button is-link" type="submit">Submit</button>
                                </div>
                                <div className="control">
                                    <Link to="/login" className="button is-link is-light">Cancel</Link>
                                </div>
                            </div>

                        </form>
                    </section>

                </>
                : <></>
        }
    </>
}