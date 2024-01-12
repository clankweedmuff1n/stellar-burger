import styles from './ModalOverlay.module.css';

const ModalOverlay = ({onCloseModal}) => {
    return (
        <div className={styles.modal__overlay} onClick={onCloseModal}></div>
    )
}

export default ModalOverlay;