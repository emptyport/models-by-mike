// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  theme: {
    extend: {
      fontSize: {
        tiny: "8px"
      }
    }
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")]
};
