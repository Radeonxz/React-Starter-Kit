export default {
  easing: {
    easeIn: `cubic-bezier(0.4, 0, 1, 1)`,
    easeOut: `cubic-bezier(0.0, 0, 0.2, 1)`
  },
  font: {
    family: "Roboto, Helvetica, sans-serif",
    size: {
      h1: 32,
      h2: 22,
      h3: 18,
      h4: 14,
      body: 12,
      caption: 11
    }
  },
  iconSize: {
    s: 14,
    m: 24,
    l: 40
  },
  radius: {
    s: 3,
    m: 6,
    l: 9
  },
  shadow: {
    1: `0px 1px 4px rgba(0, 0, 0, 0.16), 0px 0px 2px rgba(0, 0, 0, 0.08)`,
    2: `0 2px 2px black`,
    3: `0px 16px 32px rgba(0, 0, 0, 0.6)`
  },
  space: {
    xxs: 2,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 40,
    xxxl: 80
  },
  transition: {
    default: `280ms ease-out`,
    0: `180ms`,
    1: `240ms`,
    2: `300ms`
  }
};
