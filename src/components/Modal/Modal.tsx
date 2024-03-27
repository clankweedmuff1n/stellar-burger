import React, {FC, MouseEvent} from 'react';
import ReactDOM from 'react-dom';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

interface IModal {
    children: React.ReactNode;
    onCloseModal: (e: MouseEvent<HTMLElement> | KeyboardEvent) => void;
}

const Modal: FC<IModal> = ({children, onCloseModal}) => {

    React.useEffect(() => {
        const handleEscClose = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onCloseModal(e);
            }
        }

        document.addEventListener('keydown', handleEscClose);

        return () => {
            document.removeEventListener('keydown', handleEscClose);
        };
    }, []);


    const [domReady, setDomReady] = React.useState(false)

    React.useEffect(() => {
        setDomReady(true)
    }, [])

    return domReady
        ? ReactDOM.createPortal((
            <>
                <div
                    style={{transform: "translate(-50%, -50%)"}}
                    className="w-[720px] bg-dark-bg shadow-shadow-modal flex flex-col rounded-modal box-border border-2 border-purple-dark z-20 items-center fixed top-[50%] left-[50%]" onClick={(e) => e.stopPropagation()}>
                    <button type='button' className="top-[60px] right-[40px] border-none absolute m-0 cursor-pointer p-0 bg-transparent" onClick={(e) => onCloseModal(e)}>
                        <CloseIcon type="primary"/>
                    </button>
                    {children}
                </div>
                <ModalOverlay onCloseModal={onCloseModal}/>
            </>
        ), document.getElementById('modals')!)
        : null;
}

export default Modal;

