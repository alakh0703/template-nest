import logo from './logo.svg';
import './App.css';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import About from './components/About';
import Templates from './components/Templates';
import Accred from './components/Accred';
import DisableRightClick from './components/DisableRightClick';
import LoginModal from './components/navbar_subs/LoginModal';


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
      <LoginModal />
    )
  }
]);
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <DisableRightClick /> */}
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
