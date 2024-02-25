import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch} from "react-redux";
import {DELETE_INGREDIENT} from "../../services/actions/burgerConstructorAction";
import {Reorder} from 'framer-motion';
import PropTypes from "prop-types";

const FillingItem = ({filling}) => {
    const dispatch = useDispatch();

    return (
        <Reorder.Item whileDrag={{scale: 0.8}} value={filling} className="flex items-center gap-[11px]">
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
    filling: PropTypes.object.isRequired,
}

export default FillingItem;
