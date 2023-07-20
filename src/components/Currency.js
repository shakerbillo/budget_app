import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './Currency.css';

const Currency = () => {
	const { dispatch } = useContext(AppContext);
	const changeCurrency = (val) => {
		dispatch({
			type: 'CHG_CURRENCY',
			payload: val,
		});
	};

	return (
		<div className="alert alert-success">
			Currency{' '}
			{
				<select
					// className="alert alert-success"
					className="select-green"
					name="Currency"
					id="Currency"
					onChange={(event) => changeCurrency(event.target.value)}
				>
					<option value="$">$ Dollar</option>
					<option value="£">£ Pound</option>
					<option value="€">€ Euro</option>
					<option value="₹">₹ Rupee</option>
				</select>
			}
		</div>
	);
};

export default Currency;
