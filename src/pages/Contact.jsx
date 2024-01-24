import { useState } from "react";

export default function Contact() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    contact: "",
    email: "",
    message: "",
  });

  return (
    <>
      <section
        className={
          "flex flex-col place-content-center place-items-center w-full h-[500px] uppercase tracking-widest px-[5%] bg-bg9 bg-cover bg-no-repeat bg-fixed bg-center"
        }
      >
        <p
          className={
            "text-blue-50 w-full text-center font-bold drop-shadow-title2 xs:text-[5vw] sm:text-[30px] md:text-[30px] lg:text-[30px] xl:text-[40px] 2xl:text-[40px]"
          }
        >
          A MAGICAL PLACE
        </p>

        <p
          className={
            "text-blue-50 w-full text-center font-bold font-serif drop-shadow-title2 xs:text-[7vw] sm:text-[40px] md:text-[40px] lg:text-[50px] xl:text-[70px] 2xl:text-[70px]"
          }
        >
          OUR RESORT'S
        </p>

        <p
          className={
            "text-blue-50 w-full text-center font-bold font-serif drop-shadow-title2 xs:text-[7vw] sm:text-[40px] md:text-[40px] lg:text-[50px] xl:text-[70px] 2xl:text-[70px]"
          }
        >
          LOCATION
        </p>
      </section>

      <section
        className={
          "flex flex-col place-content-center place-items-center w-full uppercase tracking-widest font-extrabold p-[5%]"
        }
      >
        <p
          className={
            "text-blue-950 mb-10 font-serif xs:text-[7vw] sm:text-[40px] md:text-[40px] lg:text-[50px] xl:text-[70px] 2xl:text-[70px]"
          }
        >
          Location
        </p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1971.926779370329!2d115.16744527417775!3d-8.7054535164458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd246c258965339%3A0x15583b5c6fe9edee!2sBali%20Mandira%20Beach%20Resort%20%26%20Spa!5e0!3m2!1sen!2sph!4v1705987596583!5m2!1sen!2sph"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={
            "w-full h-[500px] mb-20 outline outline-4 outline-blue-950 xs:h-[50vw] sm:h-[300px] md:h-[400px]"
          }
        />
      </section>

      <section
        className={
          "flex flex-col place-content-center place-items-center w-full p-[5%] bg-bg7 bg-cover bg-center bg-no-repeat bg-fixed"
        }
      >
        <form
          className={
            "flex flex-col w-[500px] bg-blue-300 px-10 py-5 font-bold outline outline-4 outline-blue-950 xs:w-full"
          }
          onSubmit={(e) => {
            e.preventDefault();
            alert("Sent Successfully!");
            setFormInfo({
              ...formInfo,
              name: "",
              contact: "",
              email: "",
              message: "",
            });
          }}
        >
          <label
            className={
              "text-center uppercase font-bold text-blue-950 font-serif xs:text-[9vw] sm:text-[40px] md:text-[40px] lg:text-[50px] xl:text-[70px] 2xl:text-[70px]"
            }
          >
            Contact
          </label>

          <label className={"text-xl text-blue-950 xs:text-[4vw]"}>Name</label>
          <input
            type="text"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="off"
            required
            placeholder="Oasis"
            className={"text-center text-lg py-1 rounded-sm mb-3 xs:text-[4vw]"}
            value={formInfo.name}
            onChange={(e) => setFormInfo({ ...formInfo, name: e.target.value })}
          />

          <label className={"text-xl text-blue-950 xs:text-[4vw]"}>
            Contact
          </label>
          <input
            type="number"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="off"
            required
            placeholder="0912-345-678"
            className={"text-center text-lg py-1 rounded-sm mb-3 xs:text-[4vw]"}
            value={formInfo.contact}
            onChange={(e) =>
              setFormInfo({ ...formInfo, contact: e.target.value })
            }
          />

          <label className={"text-xl text-blue-950 xs:text-[4vw]"}>Email</label>
          <input
            type="email"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="off"
            required
            placeholder="oasis@email.com"
            className={"text-center text-lg py-1 rounded-sm mb-3 xs:text-[4vw]"}
            value={formInfo.email}
            onChange={(e) =>
              setFormInfo({ ...formInfo, email: e.target.value })
            }
          />

          <label className={"text-xl text-blue-950 xs:text-[4vw]"}>
            Message
          </label>
          <textarea
            rows="5"
            cols="20"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="off"
            required
            placeholder="I Love Oasis"
            className={"resize-none text-lg py-2 px-3 rounded-sm xs:text-[4vw]"}
            value={formInfo.message}
            onChange={(e) =>
              setFormInfo({ ...formInfo, message: e.target.value })
            }
          />

          <div className={"flex place-content-evenly py-5 text-blue-950"}>
            <button
              className={
                "bg-blue-50 w-28 leading-10 cursor-pointer text-2xl uppercase hover:text-blue-50 hover:bg-blue-950 transition-all xs:text-[4vw] xs:w-[20vw] hover:active:scale-[0.9]"
              }
              onClick={() =>
                setFormInfo({
                  ...formInfo,
                  name: "",
                  contact: "",
                  email: "",
                  message: "",
                })
              }
            >
              Clear
            </button>

            <input
              type="submit"
              value="Submit"
              className={
                "bg-blue-50 w-28 leading-10 cursor-pointer text-2xl uppercase hover:text-blue-50 hover:bg-blue-950 transition-all xs:text-[4vw] xs:w-[20vw] hover:active:scale-[0.9]"
              }
            />
          </div>
        </form>
      </section>
    </>
  );
}
