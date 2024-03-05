import OrderPageItem from "../OrderPageItem/OrderPageItem";

export default function OrderPageList({ ingredients }) {
    function counter(ingredient) {
        let counter = 0;
        ingredients.forEach((item) => {
            if (item._id === ingredient._id) {
                counter += 1;
            }
        });
        return counter;
    }

    const filteredList = Array.from(new Set(ingredients));

    return (
        <div className="mt-[60px]">
            <p className="text text_type_main-medium mb-6">Состав:</p>
            <ul className="m-0 p-0 pr-[24px] flex flex-col gap-4 list-none overflow-y-scroll max-h-[316px]">
                {filteredList.map((item, index) => {
                    return (
                        <OrderPageItem
                            key={index}
                            counter={counter(item)}
                            ingredient={item}
                        />
                    );
                })}
            </ul>
        </div>
    );
}