import React from 'react'
import Formulario from '../components/Formulario'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditarCliente = () => {
	const [cliente, setCliente] = useState({});
	const [cargando, setCargando] = useState(true);

	const { id } = useParams();

	useEffect(() => {
		const obtenerClienteAPI = async () => {
			try {
				const url = `http://localhost:4000/clientes/${id}`;
				const respuesta = await fetch(url);
				const resultado = await respuesta.json();

				setCliente(resultado);

			} catch (error) {
				console.log(error);
			}
			//Time out para visualizar el Spinner simulando una carga
			setTimeout(() => {
				setCargando(!cargando);
			}, 1000);
		}

		obtenerClienteAPI();
	}, [])

	return (
		<>
			<h1 className='font-black text-4xl text-blue-900 '>Editar Cliente</h1>
			<p className='mt-3'>Utiliza este formulario para editar datos de un Cliente</p>

			{cliente?.nombre ? (
				<Formulario 
				cliente={cliente}
				cargando={cargando}
				/>
			) : <p className='mt-4 font-black text-xl'>Cliente ID no encontrado</p> }
		</>
	)
}

export default EditarCliente