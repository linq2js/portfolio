import { PropsWithChildren } from "react";

const NoPrint = (props: PropsWithChildren) => (
  <span className="no-print">{props.children}</span>
);

export { NoPrint };
