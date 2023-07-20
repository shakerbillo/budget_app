import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
	const { budget, currency } = useContext(AppContext);
	

	
	

	return (
		<div className="alert alert-secondary">
			<span>
				Budget: {currency}
				<input
					type="number"
					value={budget}
					
				
				/>
			</span>
		</div>
	);
};
export default Budget;
