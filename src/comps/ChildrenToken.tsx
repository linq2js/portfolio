import { PropsWithChildren } from "react";
import { useStyle } from "../contexts/PortfolioContext";

export type Props = PropsWithChildren<unknown>;

const ChildrenToken = (props: Props) => {
  const style = useStyle("children");

  return (
    <span
      className={typeof style === "string" ? style : ""}
      style={typeof style !== "string" ? style : undefined}
    >
      {props.children}
    </span>
  );
};

export { ChildrenToken };
