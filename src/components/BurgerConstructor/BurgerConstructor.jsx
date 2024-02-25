import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import {useMemo} from 'react';
import {useDrop} from 'react-dnd';
import FillingItem from '../FillingItem/FillingItem';
import {useSelector, useDispatch} from 'react-redux';
import OrderConstructor from '../OrderConstructor/OrderConstructor';
import {ADD_INGREDIENT, SORT_INGREDIENT} from '../../services/actions/burgerConstructorAction';
import loader from '../../images/loader.svg';
import {Reorder} from "framer-motion";
import {v4} from 'uuid';

const BurgerConstructor = () => {
    const dispatch = useDispatch();

    const {bun, fillingList} = useSelector((store) => ({
        bun: store.burgerConstructorReducer.constructorBunElement,
        fillingList: store.burgerConstructorReducer.constructorFillingList,
    }))


    function dropHandler(ingredient) {
        dispatch({type: ADD_INGREDIENT, constructorItemId: v4(), payload: ingredient});
    }

    const [{isHover}, dropTarget] = useDrop({
        accept: 'ingredients',
        drop(ingredient) {
            dropHandler(ingredient);
        },
        collect: (monitor) => ({
            isHover: monitor.isOver(),
        }),
    });

    const bunPrice = useMemo(() => {
        return bun === undefined ? 0 : bun.price;
    }, [bun]);

    const fillingPrice = useMemo(() => {
        return fillingList.reduce((sum, item) => sum + item.price, 0);
    }, [fillingList]);

    const totalPrice = useMemo(() => {
        return bun === undefined ? fillingPrice : bunPrice + fillingPrice;
    }, [bunPrice, bun, fillingPrice])


    return (
        <section className="max-w-[600px] w-full ml-10 mt-20">
            <ul
                ref={dropTarget}
                className={isHover ? "flex flex-col gap-4 m-0 p-0 shadow-modal-shadow" : "flex flex-col gap-4 m-0 p-0"}
            >
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={bun === undefined ? "Выберите булку" : `${bun.name} (верх)`}
                    price={bun === undefined ? 0 : bun.price}
                    extraClass="ml-8"
                    thumbnail={bun === undefined ? loader : bun.image}
                />
                <Reorder.Group
                    axis="y"
                    values={fillingList}
                    className="flex flex-col gap-[10px] items-center"
                    onReorder={(sortFillingList) =>
                        dispatch({type: SORT_INGREDIENT, payload: sortFillingList})
                    }
                >
                    {fillingList.map((item) => {
                        return (
                            <FillingItem
                                key={item.constructorItemId}
                                filling={item}
                            />
                        );
                    })}
                </Reorder.Group>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={bun === undefined ? "Выберите булку" : `${bun.name} (низ)`}
                    price={bun === undefined ? 0 : bun.price}
                    extraClass="ml-8"
                    thumbnail={bun === undefined ? loader : bun.image}
                />
            </ul>
            <OrderConstructor price={totalPrice}/>
        </section>
    )
}

export default BurgerConstructor;