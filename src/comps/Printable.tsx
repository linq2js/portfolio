import { PropsWithChildren } from "react";

const Printable = (props: PropsWithChildren) => (
  <span className="printable">{props.children}</span>
);

export { Printable };
