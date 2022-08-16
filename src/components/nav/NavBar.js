import { AdminNavBar } from "./AdminNavBar"
import { AuthorNavBar } from "./AuthorNavBar"

export const NavBar = ({ token, setToken }) => {

  const localUserStaffBool = localStorage.getItem("is_staff")

  if (localUserStaffBool === "true") {
    return <AdminNavBar token={token} setToken={setToken} />
  } else {
    return <AuthorNavBar token={token} setToken={setToken} />
  }

}
