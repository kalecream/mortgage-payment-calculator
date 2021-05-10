import React from 'react';

const localeOptions = {
	style:'currency',
	currency:'JMD',
	minimumFractionDigits: 0,
    maximumFractionDigits: 0
}

export const HeaderFigures = props => {
	return(
		<div className="grid__container">
			<div className="grid__item">
				<span className="grid__item--header">
					{parseInt(props.amountToBorrow).toLocaleString('en-JM', localeOptions)}
				</span>
				<div className="grid__item--label">Amount To Borrow</div>
			</div>
			<div className="grid__item">
				<span className="grid__item--header">
					{(props.depositAmount / props.purchasingHousePrice * 100).toFixed(1)}%
				</span>
				<div className="grid__item--label">Deposit</div>
			</div>
		</div>
	)
}