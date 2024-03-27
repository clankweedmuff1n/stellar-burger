import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {IIngredient} from "../../services/types/Ingredient.type";
import {FC} from "react";

interface IOrderPageItem {
    ingredient: IIngredient;
    counter: number;
}

const OrderPageItem: FC<IOrderPageItem> = ({ingredient, counter}) => {
    return (
        <li className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div
                    className="w-[64px] h-[64px] bg-[#131316] overflow-hidden rounded-modal relative box-border border-item-border border-2 ">
                    <img
                        style={{transform: "translate(-50%, -50%)"}}
                        className="w-[112px] h-[56px] absolute inset-1/2 object-contain"
                        src={ingredient.image_mobile}
                        alt={ingredient.name}
                    />
                </div>
                <p className="text text_type_main-default max-w-[320px]">
                    {ingredient.name}
                </p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text text_type_digits-default">{`${counter} x ${ingredient.price}`}</p>
                <CurrencyIcon type="primary"/>
            </div>
        </li>
    );
}

export default OrderPageItem;