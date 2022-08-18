import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { createSubscription, updateSubscription } from "../../managers/SubscriptionManager"
import { getAllActiveUsers } from "../../managers/UserManager"

export const AuthorUserList = () => {
    const [users, setUsers] = useState([])

    const handleSub = () => {
        getAllActiveUsers().then(setUsers)
    }
    useEffect(
        () => {
            handleSub()
        },
        []
    )

    return <section className="section">
        <div className="column">
            <table className="table is-fullwidth">
                <thead>
                    <tr>
                        <th>Users</th>
                        <th>Full Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.id}>
                                <td><Link to={`/users/${user.id}`}>{user.user.username}</Link></td>
                                <td>{user.user.first_name} {user.user.last_name}</td>
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
                                            onClick={(evt) =>{
                                                evt.preventDefault()
                                                createSubscription(user.id)
                                                .then(handleSub)
                                            }}>
                                                Subscribe
                                            </button>
                                    }
                                    </div>
                                    </tr>
                                    )
            )}
                </tbody>
            </table>
        </div>
    </section>
}