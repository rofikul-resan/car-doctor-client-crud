import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router";
import AuthProvider from "./provider/AuthProvider";
import LoadingPage from "./components/LoadingPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <LoadingPage>
        <RouterProvider router={router} />
      </LoadingPage>
    </AuthProvider>
  </React.StrictMode>
);
