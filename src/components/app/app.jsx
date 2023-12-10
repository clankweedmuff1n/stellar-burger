import styles from "./app.module.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import AppHeader from "../AppHeader/AppHeader";

function App() {
    return (
        <div className={styles.app}>
            <AppHeader/>
            <main className={styles.app__content}>
                <BurgerIngredients/>
                <BurgerConstructor/>
            </main>
        </div>
    );
}

export default App;
