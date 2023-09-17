import css from "./FavoritesCars.module.scss";
import CarCard from "../CarCard/CarCard";
import { useEffect, useState } from "react";

const FavoritesCars = () => {
    const [favoritesCars, setFavoritesCars] = useState([]);

    useEffect(() => {
        const favCars = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavoritesCars(favCars);
        console.log(favCars);
    }, [])

   
    return (
        <div className={css.container}>
            <ul className={css.list}>
                {favoritesCars.map((car) => <CarCard data={car}  key={car.id} />)}
            </ul>
                   
        </div>
    )
};

export default FavoritesCars;