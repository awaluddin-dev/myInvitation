import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import the styles
import App from "./App.jsx";
import WeddingInvitation from "./pages/WeddingInvitation.jsx";
import EncryptName from "./pages/EncryptName.jsx";
import VideoKami from "./pages/VideoKami.jsx";
import ArdiWedding from "./pages/ardi/ArdiWedding.jsx";
import InvitationYudha from "./pages/yudha/InvitationYudha.jsx";
import "./index.css";
import InvitationNana from "./pages/nana/InvitationNana.jsx";
import BasoWedding from "./pages/baso/BasoWedding.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
        <ToastContainer position="top-right" autoClose={3000} />
      </>
    ),
  },
  {
    path: "/weddinginvitation/:name",
    element: (
      <>
        <WeddingInvitation />
        <ToastContainer position="top-center" autoClose={3000} style={{}} />
      </>
    ),
  },
  {
    path: "/namaUndangan",
    element: <EncryptName />,
  },
  {
    path: "/videokami",
    element: <VideoKami />,
  },
  {
    path: "/theweddingardiindri/:name",
    element: (
      <>
        <ArdiWedding />
        <ToastContainer position="top-center" autoClose={3000} style={{}} />
      </>
    ),
  },
  {
    path: "/undangannikahbasodanhusni/:name",
    element: (
      <>
        <BasoWedding />
        <ToastContainer position="top-center" autoClose={3000} style={{}} />
      </>
    ),
  },
  {
    path: "/ourweddingyudha/:name",
    element: (
      <>
        <InvitationYudha />
        <ToastContainer position="top-center" autoClose={3000} style={{}} />
      </>
    ),
  },
  {
    path: "/ourweddingnana/:name",
    element: (
      <>
        <InvitationNana />
        <ToastContainer position="top-center" autoClose={3000} style={{}} />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
