import stylesOverlay from './ModalOverlay.module.css';

function ModalOverlay({ onCloseModal }) {
    return (
        <div className={stylesOverlay.modal__overlay} onClick={onCloseModal}></div>
    )
}

export default ModalOverlay;