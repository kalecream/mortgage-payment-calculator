import React from 'react';

const localeOptions = {
	style:'currency',
	currency:'JMD',
	minimumFractionDigits: 0,
    maximumFractionDigits: 0
}

export const CalculatorControls = props => {
	return(
		<div className="grid__container">			
			<div className="grid__item">
				<span className="grid__item--header">{parseInt(props.purchasingHousePrice).toLocaleString('en-JM', localeOptions)}</span>
				<input 
					name="HousePrice"
					type="number"
					className="grid__item--range-input"
					id="purchasingHousePrice"  
					min="0" 
					max="999999999" 
					value={props.purchasingHousePrice} 
					onChange={(event) => 
						props.setPurchasingHousePrice(event.target.value)
					} />
				<label className="grid__item--label" htmlFor="purchasingHousePrice">Purchasing House Price</label>
			</div>
			<div className="grid__item">
				<span className="grid__item--header">{parseInt(props.depositAmount).toLocaleString('en-JM', localeOptions)}</span>
				<input 
					type="number"
					className="grid__item--range-input"
					name = "depositAmount"
					id="depositAmount" 
					min="1000" 
					max="150000" 
					value={props.depositAmount}
         			onChange={(event) =>
						props.setDepositAmount(event.target.value)
         			} />
				<label className="grid__item--label" htmlFor="points">Deposit</label>
			</div>
			<div className="grid__item">
				<span className="grid__item--header">{props.mortgageTerm} Years</span>
				<input 
					type="number"
					className="grid__item--range-input"
					id="mortgageTerm"  
					min="5" 
					max="40" 
					value={props.mortgageTerm} 
					onChange={(event) => 
						props.setMortgageTerm(event.target.value)
					} />
				<label className="grid__item--label" htmlFor="mortgageTerm">Mortgage Term</label>
			</div>
			<div className="grid__item">
				<span className="grid__item--header">{props.interestRate}%</span>
				<input 
					type="number"
					className="grid__item--range-input"
					id="interestRate"  
					min="0.1" 
					max="20" 
					step="0.1" 
					value={props.interestRate} 
					onChange={(event) => 
						props.setInterestRate(event.target.value)
					} />
				<label className="grid__item--label" htmlFor="interestRate">Interest Rate</label>
			</div>
		</div>
	);
}
