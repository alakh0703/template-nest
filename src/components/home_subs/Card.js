import React from 'react';
import './Card.css';

function Card({ title, description, imgSrc }) {
    return (
        <div>
            <article class="card">
                <header class="card__thumb">
                    <a href="#"><img src={imgSrc} alt='image' className='hghghg' /></a>
                </header>

                <div class="card__body">
                    {/* <div class="card__category"><a href="#">pet</a></div> */}
                    <h2 class="card__title"><a href="#">{title}</a></h2>
                    <p class="card__description">{description}</p>
                </div>

            </article>
        </div>

    )
}

export default Card