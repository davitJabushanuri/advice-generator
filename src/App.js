import React, { useState } from 'react'

import './scss/main.scss'
import Card from './components/Card'

function App() {
	const [advice, setAdvice] = useState(
		'Try buying a coffee for the creator of a free public API, now and then.'
	)
	const [adviceNumber, setAdviceNumber] = useState('219')
	const [loading, setLoading] = useState(false)

	const adviceUrl = 'https://api.adviceslip.com/advice'

	const asyncTimeout = ms => {
		return new Promise(resolve => {
			setTimeout(resolve, ms)
		})
	}

	const getAdvice = async () => {
		try {
			setLoading(true)
			await asyncTimeout(500)
			const data = await fetch(adviceUrl)
			const advice = await data.json()
			setLoading(false)
			setAdvice(advice.slip.advice)
			setAdviceNumber(advice.slip.id)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='App'>
			<main>
				<Card
					advice={advice}
					adviceNumber={adviceNumber}
					getAdvice={getAdvice}
					loading={loading}
				/>
			</main>
		</div>
	)
}

export default App
