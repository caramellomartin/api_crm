import React from 'react'

const Alerta = ({ children }) => {
	return (
		<div className='text-center my-4 p-3 uppercase bg-red-700 text-white rounded-sm font-bold'>
			{children}
		</div>
	)
}

export default Alerta
