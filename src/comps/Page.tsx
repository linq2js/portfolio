import { PropsWithChildren, ReactNode, useCallback, useState } from "react";
import { ElementToken } from "./ElementToken";
import { Modal } from "./Modal";
import { NoPrint } from "./NoPrint";

export type Props = PropsWithChildren<{
  type: string;
}>;

const Page = (props: Props) => {
  const [show, setShow] = useState(false);
  const onHide = useCallback(() => setShow(false), [setShow]);
  const onShow = useCallback(() => setShow(true), [setShow]);

  return (
    <>
      <NoPrint>
        <ElementToken type={props.type} onClick={onShow} />
      </NoPrint>
      <Modal type={props.type} show={show} onHide={onHide}>
        {props.children}
      </Modal>
    </>
  );
};

export { Page };
