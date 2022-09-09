import { Fragment, ReactNode } from "react";
import { useStyle } from "../contexts/PortfolioContext";
import { TokenType } from "../types";

export type Props = {
  type: TokenType;
  value: ReactNode;
  onClick?: VoidFunction;
};

const Token = (props: Props) => {
  const style = useStyle(props.type);

  return (
    <span
      className={typeof style === "string" ? style : ""}
      style={typeof style === "string" ? undefined : style}
      onClick={props.onClick}
    >
      {props.value}
    </span>
  );
};

const C = (value: string, jsx = false) => {
  const comment = <Token type="comment" value={`/* ${value} */`} />;
  if (jsx)
    return (
      <span className="no-print">
        {U("{")}
        {comment}
        {U("}")}
      </span>
    );
  return comment;
};

const K = (value: ReactNode, onClick?: VoidFunction) => (
  <Token type="keyword" value={value} onClick={onClick} />
);

const I = (value: ReactNode, onClick?: VoidFunction) => (
  <Token type="identifier" value={value} onClick={onClick} />
);

const U = (value: ReactNode, onClick?: VoidFunction) => (
  <Token type="unknown" value={value} onClick={onClick} />
);

const S = (value: ReactNode, onClick?: VoidFunction) => (
  <Token type="string" value={value} onClick={onClick} />
);

const V = (value: ReactNode, onClick?: VoidFunction) => (
  <Token type="variable" value={value} onClick={onClick} />
);

const P = (value: ReactNode, onClick?: VoidFunction) => (
  <Token type="property" value={value} onClick={onClick} />
);

const T = (strings: TemplateStringsArray, ...args: unknown[]) => {
  return (
    <>
      {strings.map((str, i) => {
        const factory = args[i - 1];

        return (
          <Fragment key={i}>
            {typeof factory === "function" ? (
              factory(str)
            ) : (
              <>
                {factory}
                {str}
              </>
            )}
          </Fragment>
        );
      })}
    </>
  );
};

export { Token, V, S, U, K, I, T, P, C };
