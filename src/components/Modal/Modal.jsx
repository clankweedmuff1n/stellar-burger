import React from 'react';
import ReactDOM from 'react-dom';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Modal.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import PropTypes from 'prop-types';

const Modal = ({children, onCloseModal}) => {
    const handleEscClose = (e) => {
        if (e.key === 'Escape') {
            onCloseModal(e);
        }
    }

    React.useEffect(() => {
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
                <div className={styles.modal__container} onClick={(e) => e.stopPropagation()}>
                    <button type='button' className={styles.modal__button} onClick={onCloseModal}>
                        <CloseIcon/>
                    </button>
                    {children}
                </div>
                <ModalOverlay onCloseModal={onCloseModal}/>

            </>
        ), document.getElementById('modals'))
        : null;
}

Modal.propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
}

export default Modal;

