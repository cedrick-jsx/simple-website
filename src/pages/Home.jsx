import spa from "../assets/img/service/spa.jpg";
import gym from "../assets/img/service/gym.jpg";
import restaurant from "../assets/img/service/restaurant.jpg";

export default function Home() {
  return (
    <>
      <section
        className={
          "flex flex-col place-content-center place-items-center w-full h-[500px] uppercase tracking-widest font-extrabold bg-bg3 bg-cover bg-center bg-no-repeat bg-fixed"
        }
      >
        <p className={"text-3xl text-blue-950 "}>Indoor & Outdoor</p>
        <p className={"text-6xl text-blue-950"}>Enjoy a Luxury Experience</p>
      </section>

      <section
        className={
          "flex place-content-between place-items-center w-full px-[5%] py-[10%] uppercase tracking-widest font-extrabold bg-blue-50"
        }
      >
        <div
          className={
            "bg-spa bg-cover bg-center bg-no-repeat w-[30%] h-[500px] relative p-5"
          }
        >
          <p className={"text-4xl text-blue-950"}>Oasis</p>
          <p className={"text-blue-950 text-4xl"}>Spa</p>
        </div>

        <div
          className={
            "bg-gym bg-cover bg-center bg-no-repeat w-[30%] h-[500px] relative p-5"
          }
        >
          <p className={"text-4xl text-blue-950"}>Oasis</p>
          <p className={"text-blue-950 text-4xl"}>Gym</p>
        </div>

        <div
          className={
            "bg-restaurant bg-cover bg-center bg-no-repeat w-[30%] h-[500px] relative p-5"
          }
        >
          <p className={"text-4xl text-blue-950"}>Oasis</p>
          <p className={"text-blue-950 text-4xl"}>Restaurant</p>
        </div>
      </section>

      <section
        className={
          "flex flex-col place-content-center place-items-center w-full h-[500px] uppercase tracking-widest font-extrabold bg-bg8 bg-cover bg-no-repeat bg-center bg-fixed"
        }
      >
        <p className={"text-5xl text-blue-950 bg-blue-50 px-5 py-3"}>
          GET 15% OFF TODAY
        </p>
        <p className={"text-lg text-blue-950 bg-blue-50 px-5 py-3"}>
          Book your stay online and secure your summer vacations on time with an
          amazing discount!
        </p>
      </section>
    </>
  );
}
