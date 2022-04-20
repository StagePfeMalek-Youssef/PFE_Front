import React from 'react'

function Bservice(props){
    return(
        <div className='s-box'>
            <img src={props.image} alt='service' />
            <h4> {props.name} </h4>
            <a href='#' className=''></a>
            <a href='#' className='s-btn'>Déclarer</a>

        </div>
    )
}

export default Bservice;
