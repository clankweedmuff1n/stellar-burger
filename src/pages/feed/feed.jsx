import OrderFeedList from "../../components/OrderFeedList/OrderFeedList";
import {wsConnectionStart} from "../../services/actions/socketAction";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useMemo} from "react";
import OrderCounters from "../../components/OrderCounters/OrderCounters";
import {WS_URL_ALL} from "../../utils/variables";

export default function FeedPage() {

    const dispatch = useDispatch();
    const {orders, total, totalToday} = useSelector(
        (store) => store.socketReducer
    ) || {orders: [], total: 0, totalToday: 0};

    const {doneList, workList} = useMemo(() => {
        if (!orders.length) {
            return {doneList: [], workList: []};
        }
        return orders.reduce(
            (count, item) => {
                // eslint-disable-next-line default-case
                switch (item.status) {
                    case "done":
                        count.doneList.push(item.number);
                        break;
                    case "pending":
                        count.workList.push(item.number);
                        break;
                }
                return count;
            },
            {doneList: [], workList: []}
        );
    }, [orders]);


    useEffect(() => {
        dispatch(wsConnectionStart(WS_URL_ALL));
        return () => {

        };
    }, [dispatch]);

    return (
        orders && (
            <div className="max-w-[1280px] mt-[40px] mx-auto mb-0">
                <h1 className="text text_type_main-large pt-10 pb-5">Лента заказов</h1>
                <div className="flex justify-around">
                    <OrderFeedList orders={orders} isFeedList={false}/>
                    <OrderCounters doneList={doneList} workList={workList} total={total} totalToday={totalToday}/>
                </div>
            </div>
        )
    );
}