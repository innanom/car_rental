import { useEffect, useState } from 'react';
import css from './CarCard.module.scss';
import  Modal  from "../Modal/Modal";


const CarCard = ({ data }) => {
    const { id, img, make, model, year, rentalPrice, address, rentalCompany, type, functionalities, mileage } = data;

    const [favorites, setFavorites] = useState([]);
    const [isLiked, setIsLiked] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const favCars = JSON.parse(localStorage.getItem("favorites"));
            if (favCars) {
            favCars.map(item => {
              if (item.id === data.id) {
                  setIsLiked(true);
                  setFavorites(prevFav => [...prevFav, ...favCars])
                }
            });
        }
    }, [data.id]);

    
    const toggleLike = () => {
        setIsLiked(!isLiked);

        if (!isLiked) {
            const favCars = JSON.parse(localStorage.getItem("favorites")) || [];
            const updatedFavorites = [...favCars, data]; 
            setFavorites(updatedFavorites);
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        } else {
            const favCars = JSON.parse(localStorage.getItem("favorites")) || [];
            const removeFavorites = favCars.filter((item) => item.id !== data.id);
            setFavorites(removeFavorites);
            localStorage.setItem('favorites', JSON.stringify(removeFavorites));
        }
    };

   
     const handleOpenModal = () => {
        setShowModal(true);
    };

  const handleModalClose = () => {
    setShowModal(false);
  };
       
    const newAdress = address.split(',');
    const city = newAdress[1];
    const country = newAdress[2];

   

    return (
        <div>
            <li className={css.item} key={id}>
                <img className={css.img} src={img} alt="car" />
                
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="18" height="18"
                    viewBox="0 0 18 18"
                    fill={isLiked ? '#3470FF' : 'none'}
                    stoke={isLiked ? '#3470FF' : 'white'}
                    onClick={toggleLike}
                    style={{ cursor: 'pointer' }}
                    className={css.heart}>
                    <path d="M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z" stroke="white" stroke-opacity="0.8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    
                </svg>
                
                <div className={css.car_name}>
                    <p>{make} <span className={css.car_model}>{model},</span> {year}</p>
                    <p>{rentalPrice}</p>
                </div>
                <div className={css.car_description}>
                    <p className={css.car_info}>{city} | {country} | {rentalCompany}</p>
                    <p className={css.car_info}>{type} | {make} | {id} | {functionalities[0]}</p>
                </div>
                <button className={css.btn} onClick={handleOpenModal}>Learn more</button>
            </li>
            
                {showModal && <Modal data={data} onClose={handleModalClose} />}
        </div>
    )
};

export default CarCard;
 
   
    
