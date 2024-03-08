export default function OrderCounters({
                                          total,
                                          totalToday,
                                          doneList,
                                          workList,
                                      }) {
    return (
        <div className="max-w-[580px] flex flex-col gap-[60px]">
            <div className="flex justify-between gap-[36px]">
                <div className="w-[272px] flex flex-col gap-[24px]">
                    <p className="text text_type_main-medium">Готовы:</p>
                    <ul className="
                    {/*[&::-webkit-scrollbar]:[width:0]*/}
                    [&::-webkit-scrollbar-thumb]:border-2
                    [&::-webkit-scrollbar-thumb]:border-[#8585ad]
                    [&::-webkit-scrollbar-track]:bg-[#2f2f37]
                    [&::-webkit-scrollbar-thumb]:bg-[#8585ad]
                    m-0 p-0 h-[300px] list-none flex flex-col gap-y-[25px] gap-x-[8px] overflow-y-scroll">
                        {doneList.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className="text text_type_digits-default text-[#00cccc]"
                                >
                                    {item}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="w-[272px] flex flex-col gap-[24px]">
                    <p className="text text_type_main-medium">В работе:</p>
                    <ul className="m-0 p-0 h-[300px] list-none flex flex-col gap-y-[25px] gap-x-[8px] overflow-y-scroll">
                        {workList.map((item, index) => {
                            return (
                                <li key={index} className={`text text_type_digits-default`}>
                                    {item}
                                </li>
                            );
                        })}

                    </ul>
                </div>
            </div>
            <div className="flex flex-col">
                <p className="text text_type_main-medium">Выполнено за все время:</p>
                <p className="text text_type_digits-large [text-shadow:0px_0px_16px_rgba(51,51,255,0.25),_0px_0px_8px_rgba(51,51,255,0.25),_0px_4px_32px_rgba(51,51,255,0.5)]">{total}</p>
            </div>
            <div className="flex flex-col">
                <p className="text text_type_main-medium">Выполнено за сегодня:</p>
                <p className="text text_type_digits-large [text-shadow:0px_0px_16px_rgba(51,51,255,0.25),_0px_0px_8px_rgba(51,51,255,0.25),_0px_4px_32px_rgba(51,51,255,0.5)]">
                    {totalToday}
                </p>
            </div>
        </div>
    );
}