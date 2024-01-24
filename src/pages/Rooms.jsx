import single from "../assets/img/room/single.jpg";
import double from "../assets/img/room/double.jpg";
import family from "../assets/img/room/family.jpg";
import deluxe from "../assets/img/room/deluxe.jpg";

export default function Rooms() {
  return (
    <>
      <section
        className={
          "flex flex-col place-content-center place-items-center w-full h-[500px] uppercase tracking-widest bg-bg5 bg-cover bg-no-repeat bg-fixed bg-center px-[5%]"
        }
      >
        <p
          className={
            "text-blue-50 text-left w-full font-serif xs:text-[7vw] sm:text-[40px] md:text-[40px] lg:text-[50px] xl:text-[70px] 2xl:text-[70px]"
          }
        >
          OUR ROOMS & SUITES
        </p>

        <p
          className={
            "text-blue-50 text-left w-full xs:text-[3vw] sm:text-[20px] md:text-[20px] lg:text-[20px] xl:text-[30px] 2xl:text-[30px]"
          }
        >
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
        "flex place-content-between place-items-center bg-blue-300 my-10 xs:flex-col sm:flex-col md:flex-col"
      }
    >
      <div className={"p-5 h-full xs:order-2 sm:order-2 md:order-2"}>
        <p
          className={
            "text-blue-950 font-serif xs:text-[7vw] sm:text-[30px] md:text-[30px] lg:text-[40px] xl:text-[60px] 2xl:text-[60px]"
          }
        >
          {props.bed === "single"
            ? "Single Room"
            : props.bed === "double"
            ? "Double Room"
            : props.bed === "family"
            ? "Family Room"
            : props.bed === "deluxe" && "Deluxe Room"}
        </p>

        <p
          className={
            "font-medium normal-case text-blue-950 xs:text-[3vw] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[20px] 2xl:text-[20px]"
          }
        >
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
        className={
          "h-full w-full xs:h-[50vw] sm:h-[400px] md:h-[500px] lg:w-2/4 xl:w-2/4 2xl:w-2/4"
        }
      />
    </div>
  );
};
