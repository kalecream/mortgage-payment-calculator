import React, {useState} from 'react';
import {HeaderFigures} from './HeaderFigures';
import {CalculatorControls} from './CalculatorControls';
import {PaymentGraph} from './PaymentGraph';
import {PaymentTable} from './PaymentTable';
import { handleMortgageDataChange } from './utils';


export const Calculator = () => {
	
	const [purchasingHousePrice, setPurchasingHousePrice] = useState(15000000);
	const [depositAmount, setDepositAmount] = useState(purchasingHousePrice * 0.1);
	const [mortgageTerm, setMortgageTerm] = useState(35);
	const [interestRate, setInterestRate] = useState(7.5);

	//Set initial values for the whole mortgage term
	const amountToBorrow = purchasingHousePrice - depositAmount;
	const monthlyPayment = ((interestRate / 100 / 12) * amountToBorrow) / (1 - (Math.pow((1 + (interestRate / 100 / 12)),((0 - mortgageTerm) * 12))));
	const totalRepaid = monthlyPayment * 12 * mortgageTerm;
	const totalInterestPaid = totalRepaid - amountToBorrow;

	const yearlyPayments = handleMortgageDataChange(amountToBorrow, mortgageTerm, interestRate, monthlyPayment);

	return(
		<>
			<HeaderFigures 
				amountToBorrow={amountToBorrow}
				monthlyPayment={monthlyPayment}
				depositAmount={depositAmount}
				purchasingHousePrice={purchasingHousePrice}
			/>
			<CalculatorControls 
				depositAmount={depositAmount}
				setDepositAmount={setDepositAmount}
				purchasingHousePrice={purchasingHousePrice}
				setPurchasingHousePrice={setPurchasingHousePrice}
				mortgageTerm={mortgageTerm}
				setMortgageTerm={setMortgageTerm}
				interestRate={interestRate}
				setInterestRate={setInterestRate}
			/>

			<PaymentGraph
				mortgageTerm={mortgageTerm}
				yearlyPayments={yearlyPayments}
			/>
			<PaymentTable
				amountToBorrow={amountToBorrow}
				yearlyPayments={yearlyPayments}
			/>
		</>
	);

}