export default defineAppConfig({
  ui: {
    colors: {
      primary: "primary",
      neutral: "gray",
    },

    input: {
      slots: {
        root: "w-full",
      },
    },

    button: {
      slots: {
        base: "cursor-pointer font-semibold",
      },
    },

    container: {
      base: "max-w-6xl w-full",
    },
  },
});
