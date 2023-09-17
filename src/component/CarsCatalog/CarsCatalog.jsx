import { useEffect, useState } from "react";
import css from './CarsCatalog.module.scss'
import { getCars } from "../shared/api/instance";
import CarCard from "../CarCard/CarCard";



const CarsCatalog = () => {
    const [cars, setCars] = useState([]);
    const [page, setPage] = useState(1);
    
    console.log(cars.length);

    useEffect( () => {
        getCars(page).then(res =>
            setCars(prevCars => 
                [...prevCars, ...res]
            ));
    }, [page])

    const handleLoadMore = () => {
    setPage(prevPage => prevPage += 1);
    };

    const totalPage = Math.ceil(23 / 8);
    

    return (
        <div className={css.container}>
            <ul className={css.list}>
                {cars.map((car) => <CarCard data={car}  key={car.id} />)}
            </ul>
            {totalPage > page && <button className={css.btn} onClick={handleLoadMore}>Load more</button>}
            
        </div>
    )
};

export default CarsCatalog;