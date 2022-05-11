import React from 'react'
import Divider from '../images/pattern-divider-mobile.svg'
import Dice from '../images/icon-dice.svg'
import Loading from '../images/loading-animation.svg'

const Card = ({ advice, adviceNumber, getAdvice, loading }) => {
	return (
		<div className='card'>
			<h4 className='card__adviceNumber'>ADVICE #{adviceNumber}</h4>
			<h2 className='card__advice'>"{advice}"</h2>
			<div className='card__divider'>
				<img src={Divider} alt='' />
			</div>
			<button onClick={getAdvice} className='card__diceButton'>
				<img src={loading ? Loading : Dice} alt='' />
			</button>
		</div>
	)
}

export default Card
