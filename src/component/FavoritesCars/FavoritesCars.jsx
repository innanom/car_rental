import css from "./FavoritesCars.module.scss";
import CarCard from "../CarCard/CarCard";
import { useEffect, useState } from "react";

const FavoritesCars = () => {
    const [favoritesCars, setFavoritesCars] = useState([]);

    useEffect(() => {
        const favCars = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavoritesCars(favCars);
    }, [favoritesCars])
    
   
    return (
        <div className={css.container}>
            {favoritesCars.length > 0 ? (
                <ul className={css.list}>
                {favoritesCars.map((car) => <CarCard data={car}  key={car.id} />)}
                </ul>) :
                (<p className={css.text}>Сhoose your favorite cars!</p>)
            }

                   
        </div>
    )
};

export default FavoritesCars;