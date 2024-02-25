import PropTypes from "prop-types";

const ModalOverlay = ({onCloseModal}) => {
    return (
        <div className="w-full h-full absolute z-10 left-0 top-0 bg-overlay-bg" onClick={onCloseModal}></div>
    )
}

ModalOverlay.propTypes = {
    onCloseModal: PropTypes.func.isRequired,
}

export default ModalOverlay;