import React from 'react';

const localeOptions = {
	style:'currency',
	currency:'JMD',
	minimumFractionDigits: 0,
    maximumFractionDigits: 0
}


function isInt(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10));
}

function val(value,min, max, fun) {
    if (isInt(value)) {
        if (value < min)
            return
        if (value > max)
            return
        console.log("calling")
        fun(value)
    }
}

function valFloat(value,min, max, fun) {
    if (value == "")
        return
    if (Number.isFinite(value))
        return
    if (value < min)
        return
    if (value > max)
        return
    console.log("calling")
    fun(value)
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
						val(event.target.value, 0, 999999999,props.setPurchasingHousePrice)
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
						val(event.target.value, 0, 150000,props.setDepositAmount)
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
						val(event.target.value, 0, 40,props.setMortgageTerm)
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
						valFloat(event.target.value, 0, 99.9,props.setInterestRate)
					} />
				<label className="grid__item--label" htmlFor="interestRate">Interest Rate</label>
			</div>
		</div>
	);
}
