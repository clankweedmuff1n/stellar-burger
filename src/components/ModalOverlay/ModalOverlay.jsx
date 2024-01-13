import styles from './ModalOverlay.module.css';
import PropTypes from "prop-types";

const ModalOverlay = ({onCloseModal}) => {
    return (
        <div className={styles.modal__overlay} onClick={onCloseModal}></div>
    )
}

ModalOverlay.propTypes = {
    onCloseModal: PropTypes.func.isRequired,
}

export default ModalOverlay;