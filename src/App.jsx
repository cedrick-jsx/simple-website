import Home from "./pages/Homes.jsx";
import Rooms from "./pages/Rooms.jsx";
import Contact from "./pages/Contact.jsx";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
      <nav
        className={
          "flex place-content-between place-items-center px-[5%] bg-blue-950 w-full sticky top-0 z-50 xs:h-[12vw] sm:h-[40px] md:h-[40px] lg:h-[50px] xl:h-[70px] 2xl:h-[70px]"
        }
      >
        <div
          className={
            "px-2 uppercase text-blue-50 font-extrabold tracking-wide font-serif xs:text-[6vw] sm:text-[25px] md:text-[25px] lg:text-[30px] xl:text-[35px] 2xl:text-[35px]"
          }
        >
          Oasis
        </div>

        <div
          className={
            "text-blue-50 flex place-content-center place-items-center uppercase font-bold h-full xs:text-[4vw] sm:text-[15px] md:text-[15px] lg:text-[20px] xl:text-[25px] 2xl:text-[25px]"
          }
        >
          <Link
            to="/"
            className={`px-3 transition-all ${
              currentPage === "home" &&
              "bg-blue-50 text-blue-950 pointer-events-none"
            } h-full flex place-content-center place-items-center`}
            onClick={() => setCurrentPage("home")}
          >
            Home
          </Link>

          <Link
            to="/Rooms"
            className={`px-3 transition-all ${
              currentPage === "rooms" &&
              "bg-blue-50 text-blue-950 pointer-events-none"
            } h-full flex place-content-center place-items-center`}
            onClick={() => setCurrentPage("rooms")}
          >
            Rooms
          </Link>

          <Link
            to="/Contact"
            className={`px-3 transition-all ${
              currentPage === "contact" &&
              "bg-blue-50 text-blue-950 pointer-events-none"
            } h-full flex place-content-center place-items-center`}
            onClick={() => setCurrentPage("contact")}
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
