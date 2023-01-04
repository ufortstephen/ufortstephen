const Home = () => import("../views/Home.vue");
const Login = () => import("../views/Login.vue");
const SignUp = () => import("../views/SignUp.vue");
// import Auth from '../../../layouts/Auth.vue'


export default [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: '' , 
    meta: { layout: 'Default',  title: "Home" },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    redirect: '' , 
    meta: { layout: 'Auth',  title: "Login" },
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    component: SignUp,
    redirect: '' , 
    meta: { layout: '',  title: "Sign Up" },
  },
//   {
//     path: "/calls/:id/:slug",
//     name: "call",
//     component: CallDetails,
//     meta: {
//       layout: "default",
//       auth: true,
//       permission: "view-call",
//       title: "Call Details",
//     },
//   },
];
