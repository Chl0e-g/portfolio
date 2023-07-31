const theme = {
  colors: {
    primaryDark: "#2F2F2F",
    primaryDarkMuted: "#7B7B7B",
    primaryLight: "#FFFFFF",
    accentLight: "#F7F6F8",
    gradientLeft: "#7BEE0F",
    gradientRight: "#28BDEB",
  },
  typography: {
    h1: {
      margin: 0,
      fontSize: "4.5rem",
    },
    h2: {
      margin: 0,
      textTransform: "uppercase",
      fontSize: "2rem",
    },
    h3: { margin: 0, textTransform: "uppercase", fontSize: "1.5rem", fontWeight: "500" },
    label: {
      large: {
        fontSize: "1rem",
        textTransform: "uppercase",
        fontWeight: 700,
        lineHeight: "1.2rem",
      },
      normal: {
        fontSize: "0.9rem",
        textTransform: "uppercase",
        fontWeight: 700,
        lineHeight: "1rem",
      },
      small: {
        fontSize: "0.75rem",
        textTransform: "uppercase",
        lineHeight: "0.75rem",
        fontWeight: 700,
      },
    },
    p: {
      large: {
        margin: 0,
        fontSize: "1.5rem",
        letterSpacing: "1px",
        textAlign: "center",
      },
      normal: {
        margin: 0,
        fontSize: "1.2rem",
        lineHeight: "2rem",
      },
      small: {
        margin: 0,
        fontSize: "1rem",
        lineHeight: "1.8rem",
      },
    },
  },
};

export default theme;
