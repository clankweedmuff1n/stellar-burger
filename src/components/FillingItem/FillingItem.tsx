import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch} from "react-redux";
import {Reorder} from 'framer-motion';
import {DELETE_INGREDIENT} from "../../services/constants";
import {IIngredient} from "../../services/types/Ingredient.type";
import {FC} from "react";

interface IFillingItem {
    filling: IIngredient;
}

const FillingItem: FC<IFillingItem> = ({filling}) => {
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

export default FillingItem;
