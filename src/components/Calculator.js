import React, {useState} from 'react';
import {HeaderFigures} from './HeaderFigures';
import {CalculatorControls} from './CalculatorControls';
import {PaymentGraph} from './PaymentGraph';
import {PaymentTable} from './PaymentTable';
import { handleMortgageDataChange } from './utils';
import { Tabs } from './Tabs';



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

    function openPage(pageName, elmnt=1) {
          var i, tabcontent, tablinks;
          tabcontent = document.getElementsByClassName("tabcontent");
          for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
          }
          document.getElementById(pageName).style.display = "block";
    }

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

        <div className="center">
        <button className="tablink" onClick={ () => {openPage('Graph')}}>Amortization Graph</button>
        <button className="tablink" onClick={() => {openPage('Table2')}} id="defaultOpen">Amortization Table</button>
        <div id="Graph" className="tabcontent activeTab">
			<PaymentGraph
				mortgageTerm={mortgageTerm}
				yearlyPayments={yearlyPayments}
			/>
        </div>
        <div id="Table2" className="tabcontent">
			<PaymentTable
				amountToBorrow={amountToBorrow}
				yearlyPayments={yearlyPayments}
			/>
        </div>
        </div>
		</>
	);

}
