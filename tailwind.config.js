/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bg1: `url("./src/assets/img/background/1.jpg")`,
        bg2: `url("./src/assets/img/background/2.jpg")`,
        bg3: `url("/src/assets/img/background/3.jpg")`,
        bg4: `url("./src/assets/img/background/4.jpg")`,
        bg5: `url("./src/assets/img/background/5.jpg")`,
        bg6: `url("./src/assets/img/background/6.jpg")`,
        bg7: `url("./src/assets/img/background/7.jpg")`,
        bg8: `url("./src/assets/img/background/8.jpg")`,
        bg9: `url("./src/assets/img/background/9.jpg")`,
        spa: `url("./src/assets/img/service/spa.jpg")`,
        gym: `url("./src/assets/img/service/gym.jpg")`,
        restaurant: `url("./src/assets/img/service/restaurant.jpg")`,
      },
    },
  },
  plugins: [],
};
