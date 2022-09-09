import { SocialLinkItem } from "../types";
import { NoPrint } from "./NoPrint";
import { Printable } from "./Printable";

export type Props = SocialLinkItem & { type: string };

const SocialLink = (props: Props) => {
  return (
    <>
      <Printable>
        <strong>
          {props.type}: {props.url}
        </strong>
      </Printable>
      <NoPrint>
        <a
          className="social-link"
          href={props.url}
          target="_blank"
          title={props.type}
        >
          {props.icon ?? props.type}
        </a>
      </NoPrint>
    </>
  );
};

export { SocialLink };
