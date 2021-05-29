import { useState } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import { Calculator } from './Calculator';
import {PaymentGraph} from './PaymentGraph';
import {PaymentTable} from './PaymentTable';
import './App.css';


    <div className="container">
        <button class="tablink" onclick="openPage('Graph', this)">Amortization Graph</button>
        <button class="tablink" onclick="openPage('Table', this)" id="defaultOpen">Amortization Table</button>
        <div id="Graph" class="tabcontent">
          <h3>Graph</h3>
          <PaymentGraph/>
        </div>

        <div id="Table" class="tabcontent">
          <h3>Table</h3>
          <PaymentTable/>
        </div>
    </div>
}
