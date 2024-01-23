import single from "../assets/img/room/single.jpg";
import double from "../assets/img/room/double.jpg";
import family from "../assets/img/room/family.jpg";
import deluxe from "../assets/img/room/deluxe.jpg";

export default function Rooms() {
  return (
    <>
      <section
        className={
          "flex flex-col place-content-center place-items-center w-full h-[550px] uppercase tracking-widest bg-bg5 bg-cover bg-no-repeat bg-fixed bg-center px-[5%]"
        }
      >
        <p className={"text-blue-50 text-6xl text-left w-full"}>
          OUR ROOMS & SUITES
        </p>

        <p className={"text-blue-50 text-2xl text-left w-full"}>
          Discover our Resort's accommodation and feel free to book your stay
          any time!
        </p>
      </section>

      <section
        className={
          "flex flex-col place-content-center place-items-center w-full uppercase tracking-widest font-extrabold bg-blue-50 px-[5%] py-[5%]"
        }
      >
        <OasisRooms bed="single">
          Step into the serene ambiance of our Single Rooms, where a harmonious
          blend of minimalist elegance and modern amenities awaits. The
          well-appointed space is designed to provide a peaceful sanctuary for
          solo adventurers, ensuring a restful and rejuvenating experience.
        </OasisRooms>

        <OasisRooms bed="double">
          Discover the perfect retreat for two in our elegantly appointed Double
          Rooms. Designed for intimacy and comfort, our limited number of
          exclusive double rooms offer a serene escape for couples seeking a
          romantic getaway.
        </OasisRooms>

        <OasisRooms bed="family">
          Experience the perfect blend of space and comfort in our Family Rooms,
          designed with your loved ones in mind. This expansive and welcoming
          accommodation is ideal for families seeking a memorable retreat.
        </OasisRooms>

        <OasisRooms bed="deluxe">
          Indulge in the epitome of luxury with our Deluxe Rooms, where
          sophistication meets comfort. With only a limited number of exclusive
          rooms, this lavish resort pays homage to a bygone era of opulence
          reminiscent of royal splendor.
        </OasisRooms>
      </section>
    </>
  );
}

const OasisRooms = (props) => {
  return (
    <div
      className={
        "flex place-content-between place-items-center bg-blue-300 my-10"
      }
    >
      <div className={"p-5 h-full"}>
        <p className={"text-5xl text-blue-950"}>
          {props.bed === "single"
            ? "Single Room"
            : props.bed === "double"
            ? "Double Room"
            : props.bed === "family"
            ? "Family Room"
            : props.bed === "deluxe" && "Deluxe Room"}
        </p>
        <p className={"text-xl font-medium mt-10 normal-case text-blue-950"}>
          {props.children}
        </p>
      </div>

      <img
        src={
          props.bed === "single"
            ? single
            : props.bed === "double"
            ? double
            : props.bed === "family"
            ? family
            : props.bed === "deluxe" && deluxe
        }
        alt={props.bed}
        className={"w-2/4 h-full"}
      />
    </div>
  );
};
