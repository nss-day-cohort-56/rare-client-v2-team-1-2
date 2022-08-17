import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getAllActiveUsers } from "../../managers/UserManager"

export const AuthorUserList = () => {
    const [users, setUsers] = useState([])

    useEffect(
        () => {
            getAllActiveUsers().then(setUsers)
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
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </section>
}