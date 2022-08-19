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
import { UserList } from "../components/users/UserList"

import { ApprovePostList } from "../components/posts/ApprovePostList"

import { CommentEdit } from "../components/comments/CommentEdit"
import { AdminEditUserProfile } from "../components/users/AdminEditUserProfile"
import { SubscribedPostList } from "../components/posts/SubscribedPost"




export const AdminViews = ({ token, setToken, setUserId, userId, setStaffBool }) => {
  return <Routes>
    <Route path="/login" element={<Login setToken={setToken} setUserId={setUserId} setStaffBool={setStaffBool}/>} />
    <Route path="/register" element={<Register setToken={setToken} setUserId={setUserId} setStaffBool={setStaffBool}/>} />
    <Route element={<Authorized token={token} />}>
      {/* Add Routes here */}
      <Route path="/tags" element={<TagList />} />

      <Route path="/posts" element={<PostList />} />
      <Route path="/approve_post_list" element={<ApprovePostList />} />
      <Route path="/" element={<SubscribedPostList />} />

      <Route path="/my-posts" element={<MyPost />} />
      <Route path="/posts/create" element={<PostForm />} />
      <Route path="/posts/:postId/edit" element={<EditPost />} />

      <Route path="/categories" element={<CategoriesList />} />
      <Route path="/posts/:postId/comments" element={<CommentsList userId={userId} />} />
      <Route path="/posts/:postId" element={<PostDetails userId={userId} />} />
      <Route path="/posts/:postId/add-comment" element={<CommentForm userId={userId}/>} />
      <Route path="/posts/:commentId/edit-comment" element={<CommentEdit userId={userId}/>} />
      <Route path="/users" element={<UserList/>} />
      <Route path="/users/:userId/edit" element={<AdminEditUserProfile />} />
      
    </Route>
  </Routes>
}