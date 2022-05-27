import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import Spinner from "../components/Spinner";

const VerCliente = () => {

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
		cargando ? <Spinner /> : Object.keys(cliente).length === 0 ? <p className='font-black text-4xl text-blue-900 '>No hay Resultados</p> : (
			<div>
				<h1 className='font-black text-4xl text-blue-900 '>Ver Cliente: {cliente.nombre}</h1>
				<p className='mt-3'>Información del cliente</p>
				
				{cliente.nombre && (
					<p className='text-gray-700 text-2xl mt-10'>
						<span className='text-gray-800 uppercase font-bold'>Nombre: </span>
						{cliente.nombre}
					</p>
				)}
				{cliente.email && (
					<p className='text-gray-700 text-2xl mt-4'>
						<span className='text-gray-800 uppercase font-bold'>Email: </span>
						{cliente.email}
					</p>
				)}			
				{cliente.telefono && (
					<p className='text-gray-700 text-2xl mt-4'>
						<span className='text-gray-800 uppercase font-bold'>Teléfono: </span>
						{cliente.telefono}
					</p>
				)}			
				{cliente.empresa && (
					<p className='text-gray-700 text-2xl mt-4'>
						<span className='text-gray-800 uppercase font-bold'>Empresa: </span>
						{cliente.empresa}
					</p>
				)}
				{cliente.notas && (
					<p className='text-gray-700 text-2xl mt-4'>
						<span className='text-gray-800 uppercase font-bold'>Notas: </span>
						{cliente.notas}
					</p>
				)}
			</div>
		)
	)
}

export default VerCliente