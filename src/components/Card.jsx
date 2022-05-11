import React from 'react'
import Divider from '../images/pattern-divider-mobile.svg'
import Dice from '../images/icon-dice.svg'

const card = () => {
	let adviceNumber = 13

	return (
		<div className='card'>
			<h4 className='card__adviceNumber'>ADVICE #{adviceNumber}</h4>
			<h2 className='card__advice'>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, nemo.
			</h2>
			<div className='card__divider'>
				<img src={Divider} alt='fsdfsd' />
			</div>
			<button className='card__diceButton'>
				<img src={Dice} alt='' />
			</button>
		</div>
	)
}

export default card
