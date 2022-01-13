import React from 'react';

const ElementItem = ({ item }) => {
	return (
		<div>
			Ordem: {item.ordem} - Id: {item.id}
		</div>
	);
};

export default ElementItem;
