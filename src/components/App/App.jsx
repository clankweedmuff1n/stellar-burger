import {useEffect} from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import {useDispatch} from 'react-redux';
import {getIngredient} from '../../services/actions/burgerIngredientsAction';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredient());
    }, [dispatch])

    return (
        <div className={`${styles.app} custom-scroll`}>
            <AppHeader/>
            <DndProvider backend={HTML5Backend}>
                <main className={styles.app__content}>
                    <BurgerIngredients/>
                    <BurgerConstructor/>
                </main>
            </DndProvider>
        </div>
    );
}

export default App;

