import Home from "./pages/Home.jsx";
import Rooms from "./pages/Rooms.jsx";
import Contact from "./pages/Contact.jsx";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <nav
        className={
          "flex place-content-between px-[5%] bg-blue-950 w-full sticky top-0 z-50"
        }
      >
        <div
          className={
            "text-4xl px-2 uppercase text-blue-100 leading-loose font-extrabold tracking-wide"
          }
        >
          Oasis
        </div>

        <div className={"text-blue-100 text-2xl leading-[3] uppercase"}>
          <Link
            reloadDocument
            to="/"
            className={
              "px-3 py-5 hover:bg-blue-50 hover:text-blue-950 font-medium transition-all"
            }
          >
            Home
          </Link>

          <Link
            reloadDocument
            to="/Rooms"
            className={
              "px-3 py-5 hover:bg-blue-50 hover:text-blue-950 font-medium transition-all"
            }
          >
            Rooms
          </Link>

          <Link
            reloadDocument
            to="/Contact"
            className={
              "px-3 py-5 hover:bg-blue-50 hover:text-blue-950 font-medium transition-all"
            }
          >
            Contact
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Rooms" element={<Rooms />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <footer
        className={
          "text-center px-[5%] bg-blue-950 text-blue-100 w-full leading-[3]"
        }
      >
        Oasis © 2024
      </footer>
    </>
  );
}
