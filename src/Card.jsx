import React from 'react';
const Card = (props) => {

    return (
        <div className='col-md-4 col-10 mx-auto '>

            <div className="card" >
                <img src={props.imgsrc}class="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">{props.title}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;