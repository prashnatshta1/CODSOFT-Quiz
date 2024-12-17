import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { action as registerAction } from "./pages/Register/RegisterPage";
import { action as loginAction } from "./pages/Login/LoginPage";
import Layout from "./layout/Layout"

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import {
  LoginPage,
  Question,
  RegisterPage,
  SingleQuestion,
  RequiredAuth,
  RequiredLogOut,
  Success,
} from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route element={<RequiredLogOut />}>
        {/* User Need to logout */}
        <Route path="login" element={<LoginPage />} action={loginAction} />
        <Route
          path="register"
          element={<RegisterPage />}
          action={registerAction}
        />
      </Route>

      <Route element={<RequiredAuth />}>
        {/* User need to login */}
        <Route index element={<App />} />
        <Route path="question" element={<Question />} />
        <Route path="question/:id" element={<SingleQuestion />} />
        <Route path="finish" element={<Success />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
