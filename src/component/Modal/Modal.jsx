import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import close from "/public/close.svg";
import css from './Modal.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const modalRoot = document.getElementById('modal-root');

const Modal = ({ onClose, data }) => {
    
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => { window.removeEventListener('keydown', handleKeyDown); }
        
    }, [onClose]);

    const handleCloseClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    }

    const { id, img, model, make, rentalPrice, year, address,  functionalities, type, fuelConsumption, engineSize, description, accessories, rentalConditions, mileage } = data;
    
    const newAdress = address.split(',');
    const city = newAdress[1];
    const country = newAdress[2];

    const conditions = rentalConditions.split('\n');
    const minimumAge = conditions[0].split(":");
    const license = conditions[1];
    const deposit  = conditions[2];
    return createPortal(
        <div className={css.overlay} onClick={handleCloseClick}>
            <div class={css.modal}>
                <img src={close}
                    alt="close"
                    onClick={handleCloseClick}
                    className={css.close}
                />
                <img className={css.img} src={img} alt="car" />
                <div className={css.car_name}>
                    <p>{make} <span className={css.car_model}>{model},</span> {year}</p>
                </div>
                <div className={css.car_description}>
                    <div className={css.car_info}>
                        <p>{city} | {country} | Id: {id} | Year: {year} | Type: {type} | </p>
                        <p>Fuel Consumption: {fuelConsumption}| Engine size: {engineSize}</p>
                    </div>
                    <p className={css.description }>{description }</p>
                </div>
                <div className={css.accessories}>
                    <p className={css.accessories_title}>Accessories and functionalities:</p>
                    <div className={css.car_info}>
                        <p>{accessories[0]} | {accessories[1]} | {accessories[2]}</p>
                        <p>{functionalities[0]} | {functionalities[1]} | {functionalities[2]}</p>
                    </div>
                </div>
                <div className={css.rental}>
                    <p className={css.rental_title}>Rental Conditions</p>
                    <div className={css.conditions}>
                        <div className={css.item}>
                            <p className={css.conditions_age}>{minimumAge[0]}:<span className={css.item_span}>{minimumAge[1]}</span></p>
                            <p className={css.conditions_item}>{license}</p>
                        </div>
                        <div className={css.item}>
                            <p className={css.conditions_item}>{deposit}</p>
                            <p className={css.conditions_item}>Mileage: <span className={css.item_span}>{mileage}</span></p>
                            <p className={css.conditions_item}>Price: <span className={css.item_span}>{rentalPrice}</span></p>
                        </div>

                    </div>
                    <NavLink to="tel:+380730000000" className={css.button}>
                        Rental car
                    </NavLink>

                </div>

            </div>
        </div>,
        modalRoot,
    );
}

Modal.propTypes = {
    onClose: PropTypes.func,
    data: PropTypes.object
    
}

export default Modal;