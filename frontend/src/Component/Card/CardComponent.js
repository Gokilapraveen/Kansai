import './CardComponent.css'
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import Popup from './popup/popup';

import ReactModal from 'react-modal';

const Card = ({ images }) => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="container">
            <div className="row g-3">
                <h2 align="center">Categories</h2>
                {images && images?.map((image, index) => {
                    return (
                        <div class="col-md-4 col-6">
                            <div className="card" key={image.id} >
                                <img className="card-img-top img-fit" src={image.image} alt="card" />
                                <div class="card-body">
                                    <h2 className="card-title">{image.title}</h2>
                                    <p className="card-text">{image.subtitle}</p>
                                    <div class="text-end">
                                      
                                        <input
                                            type="button"
                                            value="View Details"
                                            onClick={togglePopup}
                                        />
                                        {isOpen && <Popup
                                            content={<>
                                                <img src={image.image}></img>
                                            </>}
                                            handleClose={togglePopup}
                                        />}
                                        <div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    );
                })}
            </div>  </div>
    );
};
export default Card;
