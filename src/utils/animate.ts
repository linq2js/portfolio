import "animate.css";

const animate = (...types: string[]) =>
  `animate__animated ${types.map((type) => `animate__${type}`)}`;

export { animate };
