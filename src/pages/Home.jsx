import cedrick from "../assets/img/team/cedrick.png";
import aubrey from "../assets/img/team/aubrey.jpg";
import mary from "../assets/img/team/mary.jpg";
import logo from "../assets/img/icon/favicon.png";

export default function Home() {
  return (
    <>
      <section
        className={
          "flex flex-col place-content-center place-items-center w-full h-[550px] uppercase tracking-widest font-extrabold bg-bg3 bg-cover bg-center bg-no-repeat bg-fixed"
        }
      >
        <p className={"text-3xl text-blue-950 "}>Indoor & Outdoor</p>
        <p className={"text-6xl text-blue-950"}>Enjoy a Luxury</p>
        <p className={"text-6xl text-blue-950"}> Experience</p>
      </section>

      <section className={"bg-blue-50 px-[5%] pt-[10%]"}>
        <p
          className={
            "text-6xl text-blue-950 text-center tracking-wider font-bold uppercase"
          }
        >
          Oasis Resort
        </p>

        <p
          className={
            "text-lg text-blue-950 text-center tracking-wide font-medium"
          }
        >
          ONE OF THE BEST PLACES TO RELAX & ENJOY
        </p>

        <p
          className={
            "text-xl text-blue-950 text-justify tracking-wide font-medium mt-10"
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
            "flex w-full place-content-between px-[5%] my-20 bg-blue-50"
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
          "flex place-content-between place-items-center w-full px-[5%] pb-[10%] uppercase tracking-widest font-extraboldbbg-blue-50"
        }
      >
        <OasisService oasis="spa">Spa</OasisService>
        <OasisService oasis="gym">Gym</OasisService>
        <OasisService oasis="food">Food</OasisService>
      </section>

      <section
        className={
          "flex flex-col place-content-center place-items-center w-full h-[500px] uppercase tracking-widest font-extrabold bg-bg8 bg-cover bg-no-repeat bg-center bg-fixed"
        }
      >
        <p className={"text-5xl text-blue-950 bg-blue-50 px-5 py-3"}>
          GET 25% OFF TODAY
        </p>

        <p className={"text-lg text-blue-950 bg-blue-50 px-5 py-3"}>
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
      } bg-cover bg-center bg-no-repeat w-[30%] h-[500px] relative p-5`}
    >
      <p className={"text-5xl text-blue-950 font-semibold"}>Oasis</p>
      <p className={"text-blue-950 text-3xl font-medium"}>{props.children}</p>
    </div>
  );
};

const OasisTeam = (props) => {
  return (
    <div className={"flex flex-col bg-blue-50"}>
      <div className={`w-[200px] h-[200px] bg-blue-50`}>
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

      <p className={"text-center text-xl text-blue-950 font-medium bg-blue-50"}>
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
