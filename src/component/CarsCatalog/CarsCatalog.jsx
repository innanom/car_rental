import { useEffect, useState } from "react";
import css from './CarsCatalog.module.scss'
import { getCars } from "../shared/api/instance";
import CarCard from "../CarCard/CarCard";



const CarsCatalog = () => {
    const [cars, setCars] = useState([]);
    
    console.log(getCars(1));

    useEffect( () => {
         getCars(1).then(res => setCars(res));
    }, [])


    return (
        <ul className={css.list}>
            {cars.map((car) => <CarCard key={car.id} data={car} />)}
        </ul>
    )
};

export default CarsCatalog;