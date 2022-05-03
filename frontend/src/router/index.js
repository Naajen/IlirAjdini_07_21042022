import { createRouter, createWebHashHistory } from 'vue-router'
//import les routes users
import Signup from '@/views/users/Signup-users'
import Login from '@/views/users/Login-users'
import ModifyUser from '@/views/users/Modify-users'
import DeleteUser from '@/views/users/Delete-users'
//import les Posts
import GetPost from '@/views/posts/Get-posts'
import CreatePost from '@/views/posts/Create-posts'
import DeletePost from '@/views/posts/Delete-posts'
import ModifyPost from '@/views/posts/Modify-posts'
import SinglePost from '@/views/posts/Single-post'
//import les comments
import ModifyComment from '@/views/comments/Modify-comments'
import DeleteComment from '@/views/comments/Delete-comments'
//import les routes admin
import AdminUsers from '@/views/admin/Users-admin'
import AdminModify from '@/views/admin/Modify-admin'
import AdminDelete from '@/views/admin/Delete-admin'
//404
//import NotFound from '@/views/404-error'


//pont de la request
const routes = [
  // User routes
  { path: '/login', name: 'login', component: Login },
  { path: '/', name: 'signup', component: Signup }, // erreur probable
  { path: '/modify-user', name: 'modifyUser', component: ModifyUser },
  { path: '/delete-user', name: 'deleteUser', component: DeleteUser },
  // Admin routes
  { path: '/admin/users', name: 'GetUsers', component: AdminUsers  },
  { path: '/admin/modify-user/:id', name: 'adminModify', component: AdminModify },
  { path: '/admin/delete-user/:id', name: 'adminDelete', component: AdminDelete },
  // Posts routes
  { path: '/posts', name: 'Getpost', component:GetPost },
  { path: '/create-post', name: 'createPost', component:CreatePost },
  { path: '/delete-post/:id', name: 'deletePost', component:DeletePost },
  { path: '/modify-post/:id', name: 'modifyPost', component:ModifyPost },
  { path: '/posts/:id', name: 'signlePost', component:SinglePost },
  // Comments routes
  { path: '/post/:postID/modify-comment/:id', name: 'modifycomment', component: ModifyComment },
  { path: '/post/:postID/delete-comment/:id', name: 'deletecomment', component: DeleteComment },
  // 404
  //{ path: '*', name: 'notFound', component: NotFound }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
