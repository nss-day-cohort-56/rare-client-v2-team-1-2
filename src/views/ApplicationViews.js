import { AdminViews } from "./AdminViews"
import { AuthorViews } from "./AuthorViews"

export const ApplicationViews = ({ token, setToken, setUserId, userId, setStaffBool }) => {

  const localUserStaffBool = localStorage.getItem("is_staff")

  if (localUserStaffBool === "true") {
    return <AdminViews token={token} setToken={setToken} setUserId={setUserId} userId={userId} setStaffBool={setStaffBool} />
  } else {
    return <AuthorViews token={token} setToken={setToken} setUserId={setUserId} userId={userId} setStaffBool={setStaffBool} />
  }

}
