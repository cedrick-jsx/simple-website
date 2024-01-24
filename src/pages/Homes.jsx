import cedrick from "../assets/img/team/cedrick.png";
import aubrey from "../assets/img/team/aubrey.jpg";
import mary from "../assets/img/team/mary.jpg";
import logo from "../assets/img/icon/favicon.png";

export default function Homes() {
  return (
    <>
      <section
        className={
          "flex flex-col place-content-center place-items-center w-full h-[500px] uppercase tracking-widest bg-bg3 bg-cover bg-center bg-no-repeat bg-fixed"
        }
      >
        <p
          className={
            "text-blue-950 font-bold drop-shadow-title xs:text-[5vw] sm:text-[30px] md:text-[30px] lg:text-[30px] xl:text-[40px] 2xl:text-[40px]"
          }
        >
          Indoor & Outdoor
        </p>
        <p
          className={
            "text-blue-950 font-serif font-bold drop-shadow-title xs:text-[7vw] sm:text-[40px] md:text-[40px] lg:text-[50px] xl:text-[70px] 2xl:text-[70px]"
          }
        >
          Enjoy a Luxury
        </p>
        <p
          className={
            "text-blue-950 font-serif font-bold drop-shadow-title xs:text-[7vw] sm:text-[40px] md:text-[40px] lg:text-[50px] xl:text-[70px] 2xl:text-[70px]"
          }
        >
          Experience
        </p>
      </section>

      <section className={"bg-blue-50 px-[5%] pt-[10%]"}>
        <p
          className={
            "text-blue-950 text-center tracking-wider font-bold font-serif uppercase xs:text-[7vw] sm:text-[40px] md:text-[40px] lg:text-[50px] xl:text-[70px] 2xl:text-[70px]"
          }
        >
          Oasis Resort
        </p>

        <p
          className={
            "text-blue-950 text-center tracking-wide font-medium xs:text-[3vw] sm:text-[20px] md:text-[20px] lg:text-[20px] xl:text-[30px] 2xl:text-[30px]"
          }
        >
          ONE OF THE BEST PLACES TO RELAX & ENJOY
        </p>

        <p
          className={
            "text-blue-950 text-justify tracking-wide font-medium mt-10 xs:text-[3vw] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[25px] 2xl:text-[25px]"
          }
        >
          Welcome to the extraordinary world of the Oasis Resort, a dazzling and
          enchanting destination crafted purely from the realms of imagination.
          Nestled within a vibrant landscape that defies the ordinary, this
          resort is a haven for those seeking an escape from the mundane. As you
          step into the Oasis Resort, you'll find yourself transported to a
          place where reality seamlessly blends with fantasy. Picture lush,
          otherworldly gardens adorned with exotic flora, cascading waterfalls
          that defy gravity, and a sky that shimmers with hues beyond
          imagination. The architecture, a harmonious fusion of styles from
          different epochs and cultures, creates an ambiance that is both
          awe-inspiring and dreamlike.
        </p>

        <div
          className={
            "flex w-full place-content-between px-[5%] my-20 bg-blue-50 xs:flex-col sm:flex-col md:flex-col"
          }
        >
          <OasisTeam name="mance" />
          <OasisTeam name="aubrey" />
          <OasisTeam name="cedrick" />
          <OasisTeam name="mary" />
          <OasisTeam name="marko" />
        </div>
      </section>

      <section
        className={
          "flex place-content-between place-items-center w-full px-[5%] pb-[10%] uppercase tracking-widest bg-blue-50 xs:flex-col sm:flex-col md:flex-col"
        }
      >
        <OasisService oasis="spa">Spa</OasisService>
        <OasisService oasis="gym">Gym</OasisService>
        <OasisService oasis="food">Food</OasisService>
      </section>

      <section
        className={
          "flex flex-col place-content-center place-items-center w-full h-[500px] uppercase tracking-widest font-extrabold bg-bg8 bg-cover bg-no-repeat bg-center bg-fixed px-[5%]"
        }
      >
        <p
          className={
            "text-center text-blue-950 bg-blue-50 px-5 py-3 w-full bg-opacity-50 font-serif xs:text-[7vw] sm:text-[40px] md:text-[40px] lg:text-[50px] xl:text-[70px] 2xl:text-[70px]"
          }
        >
          GET 25% OFF TODAY
        </p>

        <p
          className={
            "text-center text-blue-950 bg-blue-50 px-5 py-3 w-full bg-opacity-50 xs:text-[3vw] sm:text-[15px] md:text-[15px] lg:text-[15px] xl:text-[25px] 2xl:text-[25px]"
          }
        >
          Book your stay online and secure your summer vacations on time with an
          amazing discount!
        </p>
      </section>
    </>
  );
}

const OasisService = (props) => {
  return (
    <div
      className={`${
        props.oasis === "spa"
          ? "bg-spa"
          : props.oasis === "gym"
          ? "bg-gym"
          : props.oasis === "food" && "bg-restaurant"
      } bg-cover bg-center bg-no-repeat p-5 mb-10 outline outline-4 outline-blue-950 xs:w-full xs:h-[40vw] sm:w-full sm:h-[200px] md:w-3/4 md:h-[250px] lg:w-[30%] lg:h-[400px] xl:w-[30%] xl:h-[500px] 2xl:w-[30%] 2xl:h-[500px]`}
    >
      <p
        className={
          "text-blue-950 text-center font-bold font-serif bg-blue-50 bg-opacity-50 xs:text-[4vw] sm:mb-5 sm:text-[25px] md:mb-5 md:text-[25px] lg:text-[25px] xl:text-[30px] 2xl:text-[30px]"
        }
      >
        {props.children}
      </p>
    </div>
  );
};

const OasisTeam = (props) => {
  return (
    <div
      className={
        "flex flex-col place-content-center place-items-center bg-blue-50"
      }
    >
      <div
        className={`bg-blue-50 xs:w-[35vw] xs:h-[35vw] sm:w-[150px] sm:h-[150px] md:w-[170px] md:h-[170px] lg:w-[170px] lg:h-[170px] xl:w-[200px] xl:h-[200px] 2xl:w-[200px] 2xl:h-[200px]`}
      >
        <img
          src={
            props.name === "cedrick"
              ? cedrick
              : props.name === "aubrey"
              ? aubrey
              : props.name === "mary"
              ? mary
              : logo
          }
          alt={props.name}
          className={`w-full h-full rounded-full object-cover bg-blue-50`}
        />
      </div>

      <p
        className={
          "text-center text-blue-950 font-medium bg-blue-50 xs:mb-5 xs:text-[4vw] sm:mb-5 sm:text-[25px] md:mb-5 md:text-[25px] lg:text-[25px] xl:text-[30px] 2xl:text-[30px]"
        }
      >
        {props.name === "cedrick"
          ? "Cedrick"
          : props.name === "aubrey"
          ? "Aubrey Mae"
          : props.name === "mary"
          ? "Mary Kierine"
          : props.name === "mance"
          ? "Rizzalyn"
          : props.name === "marko" && "Marko Paulo"}
      </p>
    </div>
  );
};
