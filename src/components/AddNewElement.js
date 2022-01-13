import React from 'react';

const AddNewElement = ({ onSubmitValues }) => {
	let ordem = React.createRef();
	let id = React.createRef();

	return (
		<div>
			<h3>Adicione um novo elemento:</h3>
			<div>
				<label>Ordem: </label>
				<input ref={ordem} />
			</div>
			<div>
				<label>Id: </label>
				<input ref={id} />
			</div>
			<button onClick={() => onSubmitValues(ordem, id)}>Salvar</button>
		</div>
	);
};

export default AddNewElement;
