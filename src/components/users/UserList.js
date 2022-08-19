import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getAllActiveUsers, getAllInactiveUsers, updateUserActiveStatus } from "../../managers/UserManager"
import { createSubscription, updateSubscription } from "../../managers/SubscriptionManager"

export const UserList = () => {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])

    useEffect(
        () => {
            showActiveUsers()
            handleSub()
        },
        []
    )

    const handleSub = () => {
        getAllActiveUsers().then(setUsers)
    }

    const showActiveUsers = () => {
        getAllActiveUsers().then(setUsers)
    }

    const showInactiveUsers = () => {
        getAllInactiveUsers().then(setUsers)
    }

    const confirmDeactivate = (userId) => {
        if (window.confirm("Do you want to deactivate this user?")) {
            handleDeactivate(userId)
        }
    }

    const handleDeactivate = (userId) => {
        updateUserActiveStatus(userId).then(
            showActiveUsers()
        )
    }

    const confirmActivate = (userId) => {
        if (window.confirm("Do you want to reactivate this user?")) {
            handleActivate(userId)
        }
    }

    const handleActivate = (userId) => {
        updateUserActiveStatus(userId).then(
            showInactiveUsers()
        )
    }

    return <section className="section">
        <div>
            <button className="button is-info" onClick={() => { showActiveUsers() }}>View Active Users</button>
            <button className="button is-warning" onClick={() => { showInactiveUsers() }}>View Inactive Users</button>
        </div>
        <div className="column">
            <table className="table is-fullwidth">
                <thead>
                    <tr>
                        <th>Users</th>
                        <th>Edit Profile</th>
                        <th>Full Name</th>
                        <th>User Type</th>
                        <th>Update User Status</th>
                        <th>Subscribe</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.id}>
                                <td><Link to={`/users/${user.id}`}>{user.user.username}</Link></td>
                                <td>
                                    <button className="button is-warning" onClick={() => { navigate(`${user.id}/edit`) }}>Edit Profile</button>
                                </td>
                                <td>{user.user.first_name} {user.user.last_name}</td>
                                <td>
                                    {
                                        (user.user.is_staff)
                                            ? <>Admin</>
                                            : <>Author</>
                                    }
                                </td>
                                <td>
                                    {
                                        (user.user.is_active)
                                            ? <button className="button is-danger" onClick={() => { confirmDeactivate(user.id) }}>Deactivate</button>
                                            : <button className="button is-warning" onClick={() => { confirmActivate(user.id) }}>Activate</button>
                                    }
                                </td>
                                <td>
                                    <div className="subscription__container">
                                        {
                                            user.following ? <button id={user.id}
                                                onClick={(evt) => {
                                                    evt.preventDefault()
                                                    updateSubscription(user.id)
                                                        .then(handleSub)
                                                }}>
                                                Unsubscribe
                                            </button>
                                                :
                                                <button id={user.id}
                                                    onClick={(evt) => {
                                                        evt.preventDefault()
                                                        createSubscription(user.id)
                                                            .then(handleSub)
                                                    }}>
                                                    Subscribe
                                                </button>
                                        }
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </section>
}