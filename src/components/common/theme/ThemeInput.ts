export const themeInput = {
  input: {
    defaultProps: {
      color: "green-default",
    },
    styles: {
      variants: {
        outlined: {
          base: {
            input: {
              floated: {
                borderColor: "focus:border-green-default",
              },
            },
          },
        },
      },
    },
  },
  textarea: {
    defaultProps: {
      color: "green-default",
    },
    styles: {
      variants: {
        outlined: {
          base: {
            input: {
              floated: {
                borderColor: "focus:border-green-default",
              },
            },
          },
        },
      },
    },
  },
};
