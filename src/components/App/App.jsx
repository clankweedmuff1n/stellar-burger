import styles from "./App.module.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import AppHeader from "../AppHeader/AppHeader";
import React from "react";
import getIngredientsApi from "../../utils/api";

function App() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        getIngredientsApi()
            .then((data) => {
                setData(data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    return (
        <div className={styles.app}>
            <AppHeader/>
            <main className={styles.app__content}>
                <BurgerIngredients data={data}/>
                <BurgerConstructor constructorIngredients={data}/>
            </main>
        </div>
    );
}

export default App;
