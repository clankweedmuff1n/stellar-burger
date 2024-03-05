import cn from 'classnames';

export default function OrderIngredientsItem({
                                                 ingredient,
                                                 index,
                                                 length,
                                                 className,
                                                 showCounter
                                             }) {
    return (
        <li className={cn("ml-[-15px] w-16 h-16 bg-[#131316] overflow-hidden rounded-[50%] relative box-border border-2 border-item-border first:m-0", className)}
            style={{zIndex: 15 - index}}>
            <img
                style={{transform: "translate(-50%, -50%)"}}
                className="w-[122px] h-[56px] absolute inset-1/2 object-contain z-[1]"
                src={ingredient.image_mobile}
                alt={ingredient.name}
            />
            {showCounter && (
                <p style={{transform: "translate(-50%, -50%)"}}
                   className="text text_type_main-default absolute inset-1/2 m-0 z-[15]">{`+${
                    length - 6
                }`}</p>
            )}
        </li>
    )
}