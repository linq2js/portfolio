import classNames from "classnames";
import { ReactNode } from "react";
import { NoPrint } from "./NoPrint";
import { Printable } from "./Printable";
import { Tooltip } from "./Tooltip";

export type Props = { type: string; icon: ReactNode };

const StackIcon = (props: Props) => (
  <span
    className={classNames(
      "stack-icon",
      typeof props.icon === "string" && "stack-name"
    )}
  >
    <NoPrint>
      <Tooltip content={props.type}>
        <a style={{ display: "inline-block" }}>{props.icon}</a>
      </Tooltip>
    </NoPrint>
    <Printable>{props.type}</Printable>
  </span>
);

export { StackIcon };
