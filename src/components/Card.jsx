import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <div className='top'>
            <div className='image'><img src={props.user.logo} alt="logo" /></div>
            <button>Save <i className="fa-regular fa-bookmark"></i></button>
        </div>
        <div className='center'>
            <h3>{props.user.company} <span>{props.user.postedAgo}</span></h3>
            <h2>{props.user.title}</h2>
            <div className='tags'>
                <h4>{props.user.tags[0]}</h4>
                <h4>{props.user.tags[1]}</h4>
            </div>
        </div>
        <div className='divide'></div>
        <div className='bottom'>
            <div>
                <h3>{props.user.salary}</h3>
                <p>{props.user.location}</p>
            </div>
            <button>Apply Now</button>
        </div>
    </div>
  )
}

export default Card
