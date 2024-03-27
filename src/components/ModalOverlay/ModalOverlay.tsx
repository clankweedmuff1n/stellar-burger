import React, {FC, MouseEvent} from "react";

interface IModalOverlay {
    onCloseModal: (e: MouseEvent<HTMLElement> | KeyboardEvent) => void;
}

const ModalOverlay: FC<IModalOverlay> = ({onCloseModal}) => {
    return (
        <div className="w-full h-full absolute z-10 left-0 top-0 bg-overlay-bg" onClick={(e) => onCloseModal(e)}></div>
    )
}

export default ModalOverlay;