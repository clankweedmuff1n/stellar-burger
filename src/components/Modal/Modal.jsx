import  React  from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import stylesModal from './Modal.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import PropTypes from 'prop-types';


function Modal({children, onCloseModal}) {
    React.useEffect(() => {
        function handleEscClose(e) {
            if (e.key  === 'Escape') {
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
                <div className={stylesModal.modal__container} onClick={(e) => e.stopPropagation()}>
                    <button type='button' className={stylesModal.modal__button} onClick={onCloseModal}>
                        <CloseIcon />
                    </button>
                    {children}
                </div>
                <ModalOverlay onCloseModal={onCloseModal}/>
            </>
        ), document.getElementById('modals'))
        : null;
}

export default Modal;

Modal.propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
}