import { useState } from 'react';
import {PaymentGraph} from './PaymentGraph';
import {PaymentTable} from './PaymentTable';
import './App.css';

function Tabs() {

    const[toggleState, setToggleState ] = useState(1);

        const toggletab = (index) => {
            setToggleState(index);
        }

        return (

        <div className="container">
            <div className="bloc-tabs">
                <button
                    className="tabs active-tabs"
                    onClick={() => toggleTab(1)}>
                    Amortization Chart</button>
                <button 
                    className="tabs"
                    onClick={() => toggleTab(2)}>
                    Amortization Table</button>
            </div>

                <div 
                className={ toggleState===1 ? "content active-content" : "content" }
                onClick={() => toggleTab(1)}>
                    <div 
                    className="content active-content">
                        <PaymentGraph
                            mortgageTerm={mortgageTerm}
                            yearlyPayments={yearlyPayments}
                        />
                    </div>
                    <div 
                    className={ toggleState===2 ? " content active-content" : "content"}
                    onClick={() => toggleTab(2)} >
                        <PaymentTable
                        amountToBorrow={amountToBorrow}
                        yearlyPayments={yearlyPayments}
                    />
                </div>
            </div>
        </div>
    );
}

export default Tabs;