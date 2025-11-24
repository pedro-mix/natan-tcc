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

    switch: {
      slots: {
        base: "cursor-pointer",
      },
    },

    slideover: {
      slots: {
        body: "sm:p-0 p-0 nice-scroll",
      },
    },

    modal: {
      variants: {
        fullscreen: {
          false: {
            content: "max-w-[85vw]",
          },
        },
      },
    },
  },
});
