import { extendTheme } from "@chakra-ui/react";
export const chakraTheme = extendTheme({
  components: {
    Table: {
      variants: {
        simple: {
          th: {
            borderColor: "rgba(255,255,255,0.3)",
            color: "orange",
            width: "1021 px",
            textAlign: "center",
          },
          td: {
            borderColor: "rgba(255,255,255,0.2)",
            textAlign: "!center",
            width: "1021 px",
          },
        },
        bright: {
          th: {
            borderColor: "rgba(255,255,255,0.2)",
            color: "black",
            width: "1021 px",
            textAlign: "center",
          },
          td: {
            borderColor: "rgba(255,255,255,0.2)",
            textAlign: "!center",
            width: "1021 px",
          },
        },
        transaction: {
          th: {
            border: "none",
            width: "1021 px",
            textAlign: "center",
          },
          td: {
            border: "none",
            textAlign: "!center",
            width: "1021 px",
          },
        },
      },
    },
    Tab: {
      variants: {
        "soft-rounded": {
          borderRadius: "5px", // Customize the border radius here
        },
      },
    },
  },
});
