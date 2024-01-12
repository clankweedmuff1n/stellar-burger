import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './FillingList.module.css';
import {useDispatch} from "react-redux";
import {DELETE_INGREDIENT} from "../../services/actions/burgerConstructorAction";
import {Reorder} from 'framer-motion';

const FillingList = ({filling}) => {
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

export default FillingList;
