import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";

const IngredientsPage = () => {
    console.log("TEST")
    return <section className="mt-[120px] flex justify-center">
        <div className="max-w-[640px] flex flex-col items-center">
            <IngredientDetails/>
        </div>
    </section>

}

export default IngredientsPage;