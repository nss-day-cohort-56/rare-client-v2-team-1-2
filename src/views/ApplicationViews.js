import { AdminViews } from "./AdminViews"
import { AuthorViews } from "./AuthorViews"
import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { TagList } from "../components/tags/TagList"
import { CategoriesList } from "../components/categories/CategoriesList"
import { MyPost } from "../components/posts/MyPost"
import { PostDetails } from "../components/posts/PostDetails"
import { PostForm } from "../components/posts/PostForm"
import { PostList } from "../components/posts/postList"
import { EditPost } from "../components/posts/EditPost"
import { CommentForm } from "../components/comments/CommentForm"
import { CommentsList } from "../components/comments/CommentList"
import { CommentEdit } from "../components/comments/CommentEdit"


export const ApplicationViews = ({ token, setToken, setUserId, userId, setStaffBool }) => {

  const localUserStaffBool = localStorage.getItem("is_staff")

  if (localUserStaffBool === "true") {
    return <AdminViews token={token} setToken={setToken} setUserId={setUserId} userId={userId} setStaffBool={setStaffBool} />
  } else {
    return <AuthorViews token={token} setToken={setToken} setUserId={setUserId} userId={userId} setStaffBool={setStaffBool} />
  }


}
