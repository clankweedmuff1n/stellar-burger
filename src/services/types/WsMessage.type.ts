import {IOrder} from "./Order.type";

export interface IWsMessage {
    readonly orders: Array<IOrder>;
    readonly total: number;
    readonly totalToday: number;
}