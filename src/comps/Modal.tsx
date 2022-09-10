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

const Modal = ({ show, onHide, type, children, inline }: Props) => {
  const [uncontrolledShow, setUncontrolledShow] = useState(show);
  const actualShow = onHide ? show : uncontrolledShow;
  const containerRef =
    useRef<HTMLDivElement>() as React.RefObject<HTMLDivElement>;
  const onClose = useCallback(() => {
    if (inline) return;

    const hide = () => {
      if (onHide) {
        onHide();
      } else {
        setUncontrolledShow(false);
      }
    };

    containerRef.current?.classList.remove(...animate(ANIMATE_IN).split(" "));
    containerRef.current?.classList.add(...animate(ANIMATE_OUT).split(" "));
    setTimeout(hide, 400);
  }, [onHide, inline, setUncontrolledShow]);
  const onPrint = useCallback(() => window.print(), []);

  const content = actualShow ? (
    <NoPrint>
      <div
        ref={containerRef}
        className={`modal ${animate(ANIMATE_IN)}`}
        style={{ placeItems: inline ? "center" : "start" }}
      >
        <div className="modal-inner" style={{ maxWidth: inline ? "" : 800 }}>
          <div className="modal-body">
            {K("const ")} {V(type)} {U("= () => {")}
            <ChildrenToken>
              <NoPrint>
                <div className="toolbar">
                  <span className="icon clickable" onClick={onPrint}>
                    <FiPrinter />
                  </span>
                  {!inline && (
                    <span className="icon clickable" onClick={onClose}>
                      <FiX />
                    </span>
                  )}
                </div>
              </NoPrint>

              {K("return ")}
              {U("(")}
              <ChildrenToken>
                <ElementToken type="">{children}</ElementToken>
              </ChildrenToken>
              {U(");")}
            </ChildrenToken>
            {U("};")}
            <br />
            {K("export default ")}
            {V(type)}
            {U(";")}
          </div>
        </div>
      </div>
    </NoPrint>
  ) : null;

  return (
    <>
      <Printable>
        <ElementToken type={type}>{children}</ElementToken>
      </Printable>
      {inline ? content : createPortal(content, document.body)}
    </>
  );
};

export { Modal };
