import { PropsWithChildren, useCallback, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChildrenToken } from "./ChildrenToken";
import { K, U, V } from "./Token";
import "animate.css";
import { ElementToken } from "./ElementToken";
import { NoPrint } from "./NoPrint";
import { Printable } from "./Printable";
import { animate } from "../utils/animate";
import { FiPrinter, FiX } from "react-icons/fi";

export type Props = PropsWithChildren<{
  type: string;
  inline?: boolean;
  show?: boolean;
  onHide?: VoidFunction;
}>;

const ANIMATE_IN = "backInDown";
const ANIMATE_OUT = "backOutDown";

const Modal = (props: Props) => {
  const [show, setShow] = useState(props.show);
  const actualShow = props.onHide ? props.show : show;
  const containerRef =
    useRef<HTMLDivElement>() as React.RefObject<HTMLDivElement>;
  const onClose = useCallback(() => {
    const hide = () => {
      if (props.onHide) {
        props.onHide();
      } else {
        setShow(false);
      }
    };

    containerRef.current?.classList.remove(...animate(ANIMATE_IN).split(" "));
    containerRef.current?.classList.add(...animate(ANIMATE_OUT).split(" "));
    setTimeout(hide, 400);
  }, [props.onHide, setShow]);
  const onPrint = useCallback(() => window.print(), []);

  const content = actualShow ? (
    <NoPrint>
      <div
        ref={containerRef}
        className={`modal ${animate(ANIMATE_IN)}`}
        style={{ placeItems: props.inline ? "center" : "start" }}
      >
        <div
          className="modal-inner"
          style={{ maxWidth: props.inline ? "" : 800 }}
        >
          <div className="modal-body">
            {K("const ")} {V(props.type)} {U("= () => {")}
            <ChildrenToken>
              <NoPrint>
                <div className="toolbar">
                  <span className="icon clickable" onClick={onPrint}>
                    <FiPrinter />
                  </span>
                  {!props.inline && (
                    <span className="icon clickable" onClick={onClose}>
                      <FiX />
                    </span>
                  )}
                </div>
              </NoPrint>

              {K("return ")}
              {U("(")}
              <ChildrenToken>
                <ElementToken type="">{props.children}</ElementToken>
              </ChildrenToken>
              {U(");")}
            </ChildrenToken>
            {U("};")}
            <br />
            {K("export default ")}
            {V(props.type)}
            {U(";")}
          </div>
        </div>
      </div>
    </NoPrint>
  ) : null;

  return (
    <>
      <Printable>
        <ElementToken type={props.type}>{props.children}</ElementToken>
      </Printable>
      {props.inline ? content : createPortal(content, document.body)}
    </>
  );
};

export { Modal };
