import PopularPlants from "../plant-popular/PopularPlants";
import IndexAbout from "./index-about/IndexAbout";
import IndexFunctionalities from "./index-functionalities/IndexFunctionalities";
import IndexHero from "./index-hero/IndexHero";

export default function Home() {
    return (
        <>
            <IndexHero /> 
            <IndexFunctionalities />
            <PopularPlants />
            <IndexAbout />
        </>
    );
}