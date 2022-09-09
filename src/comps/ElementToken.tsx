import { Fragment, PropsWithChildren, ReactNode } from "react";
import { useStyle } from "../contexts/PortfolioContext";
import { ChildrenToken } from "./ChildrenToken";
import { NoWrap } from "./NoWrap";
import { I, P, U } from "./Token";

export type Props = PropsWithChildren<{
  type: string;
  props?: Record<string, ReactNode>;
  onClick?: VoidFunction;
  onPropClick?: (name: string, value: ReactNode) => void;
}>;

const ElementToken = (props: Props) => {
  const style = useStyle("element");
  const hasChildren = !!props.children;

  return (
    <>
      <NoWrap
        className={typeof style === "string" ? style : ""}
        style={{
          ...(typeof style !== "string" ? style : undefined),
          cursor: props.onClick ? "pointer" : undefined,
          userSelect: props.onClick ? "none" : undefined,
          display: hasChildren ? "block" : "inline",
        }}
        onClick={props.onClick}
      >
        {U("<")}
        {I(props.type)}
        {Object.entries(props.props ?? {}).map(([name, value]) => (
          <Fragment key={name}> {P(`${name}=${value}`)}</Fragment>
        ))}
        {U(hasChildren ? ">" : " />")}
      </NoWrap>
      {hasChildren && <ChildrenToken>{props.children}</ChildrenToken>}
      {hasChildren && (
        <>
          {U("</")}
          {I(props.type)}
          {U(">")}
        </>
      )}
    </>
  );
};

export { ElementToken };
