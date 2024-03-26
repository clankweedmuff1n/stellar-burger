import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';


function Main() {
    return (
        <div className={`custom-scroll`}>
            <DndProvider backend={HTML5Backend}>
                <section className="max-w-[1240px] m-auto flex gap-10">
                    <BurgerIngredients/>
                    <BurgerConstructor/>
                </section>
            </DndProvider>
        </div>


    );
}

export default Main;