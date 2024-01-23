export default function Contact() {
  return (
    <>
      <section
        className={
          "flex flex-col place-content-center place-items-center w-full h-[600px] uppercase tracking-widest font-extrabold px-[5%] bg-bg9 bg-cover bg-no-repeat bg-fixed bg-center"
        }
      >
        <p className={"text-3xl mb-10 text-blue-50"}>A MAGICAL PLACE</p>
        <p className={"text-7xl mb-10 text-blue-50"}>OUR RESORT'S LOCATION</p>
      </section>

      <section
        className={
          "flex flex-col place-content-center place-items-center w-full uppercase tracking-widest font-extrabold px-[5%] py-[10%]"
        }
      >
        <p className={"text-7xl mb-10 text-blue-950"}>Location</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1971.926779370329!2d115.16744527417775!3d-8.7054535164458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd246c258965339%3A0x15583b5c6fe9edee!2sBali%20Mandira%20Beach%20Resort%20%26%20Spa!5e0!3m2!1sen!2sph!4v1705987596583!5m2!1sen!2sph"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={
            "w-full h-[500px] rounded-md mb-10 outline outline-4 outline-blue-950"
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
            "flex flex-col w-[500px] bg-blue-300 px-10 py-5 rounded-md font-bold outline outline-4 outline-blue-950"
          }
        >
          <label
            className={
              "text-7xl text-center uppercase font-bold mb-10 text-blue-950"
            }
          >
            Contact
          </label>

          <label className={"text-xl text-blue-950"}>Name</label>
          <input
            type="text"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="off"
            required
            placeholder="Oasis"
            className={"text-center text-lg py-1 rounded-sm mb-3"}
          />

          <label className={"text-xl text-blue-950"}>Contact</label>
          <input
            type="number"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="off"
            required
            placeholder="0912-345-678"
            className={"text-center text-lg py-1 rounded-sm mb-3"}
          />

          <label className={"text-xl text-blue-950"}>Email</label>
          <input
            type="email"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="off"
            required
            placeholder="oasis@email.com"
            className={"text-center text-lg py-1 rounded-sm mb-3"}
          />

          <label className={"text-xl text-blue-950"}>Message</label>
          <textarea
            rows="5"
            cols="20"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="off"
            required
            placeholder="I Love Oasis"
            className={"resize-none py-2 px-3 rounded-sm"}
          />

          <div className={"flex place-content-evenly pt-5 text-blue-950"}>
            <input
              type="reset"
              value="Clear"
              className={
                "bg-blue-50 w-28 leading-10 cursor-pointer text-2xl hover:text-blue-50 hover:bg-blue-950 transition-all"
              }
            />

            <input
              type="submit"
              value="Submit"
              className={
                "bg-blue-50 w-28 leading-10 cursor-pointer text-2xl  hover:text-blue-50 hover:bg-blue-950 transition-all"
              }
            />
          </div>
        </form>
      </section>
    </>
  );
}
