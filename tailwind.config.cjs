import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-secundary": "#e0f1e7;",
        "green-default": "#0c7d69",
      },
    },
  },
  plugins: [],
});
