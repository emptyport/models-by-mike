// See https://tailwindcss.com/docs/configuration for details
const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    extend: {
      fontSize: {
        tiny: "10px",
      },
      colors: {
        gray: colors.gray,
        orange: colors.orange,
        mbmPurple: "#660099",
        mbmPink: "#FAA6FF",
        mbmCoral: "#EE4266",
        mbmYellow: "#FFD23F",
        mbmDark: "#030027",
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
  corePlugins: {
    fontFamily: false,
  },
};
