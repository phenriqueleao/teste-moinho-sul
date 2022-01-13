import React from 'react';
import ElementItem from './ElementItem';
import AddNewElement from './AddNewElement';

const data = require('../data');

const ElementList = () => {
	const [ elements, setElements ] = React.useState(data.array);

	const onSubmitValues = (ordem, id) => {
		const newElement = {
			ordem: parseInt(ordem.current.value),
			id: parseInt(id.current.value)
		};

		console.log(newElement);

		const reorderElements = elements;

		let i = reorderElements.findIndex((el) => el.ordem >= newElement.ordem);
		console.log(i);
		if (i >= 0) {
			console.log(reorderElements);
			reorderElements.splice(i, 0, newElement);
			console.log(reorderElements);
			i++;
			for (; i < reorderElements.length; i++) {
				if (reorderElements[i].ordem == reorderElements[i - 1].ordem) {
					reorderElements[i].ordem += 1;
				} else {
					break;
				}
			}
		} else {
			reorderElements.push(newElement);
		}
		console.log(reorderElements);
		setElements(reorderElements);
	};

	const renderedList = elements.map((item) => {
		return <ElementItem key={item.ordem} item={item} />;
	});

	return (
		<div>
			{renderedList}
			<AddNewElement onSubmitValues={onSubmitValues} />
		</div>
	);
};

export default ElementList;
