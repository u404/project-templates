// import asyncComponent from "./utils/asyncComponent"


// const routes = [
//   {
//     name: "首页",
//     exact: true,
//     path: "/",
//     component: asyncComponent(() => import("./pages/Home/Index")),
//   },
//   {
//     name: "关于",
//     path: "/about",
//     component: asyncComponent(() => import("./pages/About/Index")),
//   },
// ]

// export default routes

import dynamic from "dva/dynamic"

const getRoutes = () => [
  {
    name: "首页",
    exact: true,
    path: "/",
    component: dynamic({
      component: () => import("./pages/Home/Index"),
    }),
  },
  {
    name: "关于",
    path: "/about",
    component: dynamic({
      component: () => import("./pages/About/Index"),
    }),
  },
]

export default getRoutes
