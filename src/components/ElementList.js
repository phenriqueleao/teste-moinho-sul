import React from 'react';
import ElementItem from './ElementItem';
import AddNewElement from './AddNewElement';

const data = require('../data');

const ElementList = () => {
	const [ elements, setElements ] = React.useState(data.array);

	const onSubmitValues = (ordem, id) => {
		const newElement = {
			ordem: ordem.current.value,
			id: id.current.value
		};

		const reorderElements = elements;

		for (let i = 0; i < reorderElements.length; i++) {
			if (reorderElements[i].ordem >= newElement.ordem) {
				reorderElements[i].ordem++;
			}
		}

		setElements([ ...reorderElements, newElement ]);

		const newElements = reorderElements.concat(newElement);
		const orderedElements = newElements.sort((a, b) => a.ordem - b.ordem);

		setElements(orderedElements);
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
