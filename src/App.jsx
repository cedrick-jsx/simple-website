import Home from "./pages/Homes.jsx";
import Rooms from "./pages/Rooms.jsx";
import Contact from "./pages/Contact.jsx";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Spiral as Hamburger } from "hamburger-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className={
          "flex place-content-between place-items-center px-[5%] bg-blue-950 w-full sticky top-0 z-50 xs:h-[10vw] sm:h-[40px] md:h-[40px] lg:h-[50px] xl:h-[70px] 2xl:h-[70px]"
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
            "text-blue-50 flex place-content-center place-items-center uppercase font-bold h-full xs:hidden sm:hidden md:hidden lg:text-[20px] xl:text-[25px] 2xl:text-[25px]"
          }
        >
          <Link
            to="/"
            className={`px-3 transition-all ${
              currentPage === "home" &&
              "bg-blue-50 text-blue-950 pointer-events-none"
            } h-full flex place-content-center place-items-center hover:active:scale-[0.9]`}
            onClick={() => setCurrentPage("home")}
          >
            Home
          </Link>

          <Link
            to="/Rooms"
            className={`px-3 transition-all ${
              currentPage === "rooms" &&
              "bg-blue-50 text-blue-950 pointer-events-none"
            } h-full flex place-content-center place-items-center hover:active:scale-[0.9]`}
            onClick={() => setCurrentPage("rooms")}
          >
            Rooms
          </Link>

          <Link
            to="/Contact"
            className={`px-3 transition-all ${
              currentPage === "contact" &&
              "bg-blue-50 text-blue-950 pointer-events-none"
            } h-full flex place-content-center place-items-center hover:active:scale-[0.9]`}
            onClick={() => setCurrentPage("contact")}
          >
            Contact
          </Link>
        </div>

        <button
          className={"lg:hidden xl:hidden 2xl:hidden"}
          onClick={() => setIsOpen(() => !isOpen)}
        >
          <Hamburger
            rounded
            easing="ease-in"
            distance="sm"
            size={28}
            hideOutline={false}
            color="rgb(239 246 255)"
            toggled={isOpen}
          />
        </button>
      </nav>

      {isOpen && (
        <div
          className={
            "text-blue-50 bg-blue-950 flex flex-col place-content-center place-items-center uppercase font-bold w-full fixed z-10 transition-all animate-nav"
          }
        >
          <Link
            to="/"
            className={`px-3 transition-all ${
              currentPage === "home" &&
              "bg-blue-50 text-blue-950 pointer-events-none"
            } w-full flex place-content-center place-items-center hover:active:scale-[0.9] p-2`}
            onClick={() => {
              setCurrentPage("home");
              setIsOpen(() => !isOpen);
            }}
          >
            Home
          </Link>

          <Link
            to="/Rooms"
            className={`px-3 transition-all ${
              currentPage === "rooms" &&
              "bg-blue-50 text-blue-950 pointer-events-none"
            } w-full flex place-content-center place-items-center hover:active:scale-[0.9] p-2`}
            onClick={() => {
              setCurrentPage("rooms");
              setIsOpen(() => !isOpen);
            }}
          >
            Rooms
          </Link>

          <Link
            to="/Contact"
            className={`px-3 transition-all ${
              currentPage === "contact" &&
              "bg-blue-50 text-blue-950 pointer-events-none"
            } w-full flex place-content-center place-items-center hover:active:scale-[0.9] p-2`}
            onClick={() => {
              setCurrentPage("contact");
              setIsOpen(() => !isOpen);
            }}
          >
            Contact
          </Link>
        </div>
      )}

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
