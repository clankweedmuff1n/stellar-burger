import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './FillingItem.module.css';
import {useDispatch} from "react-redux";
import {DELETE_INGREDIENT} from "../../services/actions/burgerConstructorAction";
import {Reorder} from 'framer-motion';
import PropTypes from "prop-types";

const FillingItem = ({filling}) => {
    const dispatch = useDispatch();

    return (
        <Reorder.Item whileDrag={{scale: 0.8}} value={filling} className={style.filling__item}>
            <DragIcon/>
            <ConstructorElement
                text={filling.name}
                price={filling.price}
                thumbnail={filling.image}
                handleClose={() =>
                    dispatch({type: DELETE_INGREDIENT, payload: filling})
                }
            />
        </Reorder.Item>
    )
}

FillingItem.propTypes = {
    filling: PropTypes.element.isRequired,
}

export default FillingItem;
