import { useEffect, useState } from 'react';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import './App.css';
import About from './components/About';
import Accred from './components/Accred';
import Cancel from './components/Cancel';
import Contact from './components/Contact';
import DisableRightClick from './components/DisableRightClick';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import PaymentPage from './components/PaymentPage';
import ProfileSettings from './components/ProfileSettings';
import Success from './components/Success';
import Templates from './components/Templates';
import WarningModal from './components/WarningModal';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home />
    ),
  },
  {
    path: "/faq",
    element: (
      <FAQ />
    ),

  },
  {
    path: "/about",
    element: (
      <About />
    ),
  },
  {
    path: "/contact",
    element: (
      <Contact />
    ),
  },
  {
    path: "/templates",
    element: (
      <Templates />
    ),
  },
  {
    path: "/accreditation",
    element: (
      <Accred />
    ),
  },
  {
    path: "/login",
    element: (
      <Login />
    )
  },
  {
    path: "/profile-setting",
    element: (
      <ProfileSettings />
    )
  },
  {
    path: "/forgot-password",
    element: (
      <ForgotPassword />
    )
  },
  {
    path: "/premium-payment",
    element: (<PaymentPage />),

  },
  {
    path: "/success-070303",
    element: (
      <Success />
    )
  },
  {
    path: "/cancel",
    element: (
      <Cancel />
    )

  }
]);
function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        e.preventDefault();
        setIsModalOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="App">
      <Navbar />
      {/* <DisableRightClick /> */}
      <RouterProvider router={router} />
      <Footer />
      <WarningModal show={isModalOpen} onClose={closeModal} />

    </div>
  );
}

export default App;
