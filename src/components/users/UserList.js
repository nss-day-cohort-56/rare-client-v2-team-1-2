import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getAllUsers } from "../../managers/UserManager"

export const UserList = () => {

    const [users, setUsers] = useState([])

    useEffect(
        () => {
            getAllUsers().then(setUsers)
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
                        <th>User Type</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.user.username}</td>
                                <td>{user.user.first_name} {user.user.last_name}</td>
                                <td>
                                    {
                                        (user.user.is_staff)
                                            ? <>Admin</>
                                            : <>Author</>
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </section>
}