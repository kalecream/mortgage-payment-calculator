import { useState } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import { Calculator } from './Calculator';
import {PaymentGraph} from './PaymentGraph';
import {PaymentTable} from './PaymentTable';
import './App.css';


class Tabs extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props.children[0].props.label,
        };
    }

    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab});
    }

    render() {
        const {
            onClickTabItem,
            props: { 
                children, 
            },
            state: {
                activeTab,
            }
        } = this;

        return ( 
            <div className="tabs">
                <ol className="tab-list">
                    {children.map((child) => {
                        const { label } = child.props;

                        return (
                            <Tab 
                                activeTab = {activeTab}
                                key = {label}
                                label = {label}
                                onClick={onClickTabItem}
                            />
                        );
                    })}
                </ol>
                <div className="tab-content">
                    {children.map((child) => {
                        if (child.props.label !== activeTab) return undefined;
                        return child.pros.children;
                    })}
                </div>
            </div>
        )
    }
}


export const Tabs = () => {

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