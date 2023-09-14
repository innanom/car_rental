import css from './CarCard.module.scss'

const CarCard = ({ data }) => {
    const { id, img, make, model, year, rentalPrice, address, rentalCompany, type, functionalities, mileage } = data;
    const newAdress = address.split(',');
    const city = newAdress[1];
    const country = newAdress[2];
    

    return (
        <li className={css.item} key={id}>
            <img className={css.img} src={img} alt="car" />
            <div className={css.car_name}>
                <p>{make} <span className={css.car_model}>{model},</span> {year}</p>
                <p>{rentalPrice}</p>
            </div>
            <div className={css.car_description}>
                <p className={css.car_info}>{city} | {country} | {rentalCompany}</p>
                <p className={css.car_info}>{type} | {make} | {id} | {functionalities[0]}</p>
            </div>
            <button className={css.btn}>Learn more</button>
        </li>
    )
};

export default CarCard;
 

    
    
    