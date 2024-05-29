import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-5 shadow-md  rounded-md">
            {children}
            <form method='dialog' className="text-right">
                <button className="bg-stone-800 text-stone-400 rounded-md py-2 px-3 text-sm hover:bg-stone-400 hover:text-stone-100">{buttonCaption}</button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    );
});

export default Modal;