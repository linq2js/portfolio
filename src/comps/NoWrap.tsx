import { HTMLAttributes } from "react";

export type Props = HTMLAttributes<HTMLSpanElement>;

const NoWrap = (props: Props) => (
  <span {...props} style={{ ...props.style, whiteSpace: "nowrap" }} />
);

export { NoWrap };
