export const textStaggerParent = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 1,
      ease: "easeOut",
    },
  },
  hidden: { opacity: 0 },
};

export const textStaggerChild = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut" },
  },
  hidden: { opacity: 0, y: 50 },
};

export const textStaggerChildButton = {
  visible: {
    opacity: 1,
    transition: { ease: "easeOut" },
  },
  hidden: { opacity: 0 },
};
