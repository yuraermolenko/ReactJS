import React from 'react';
import ReactDOM from 'react-dom';

import Comp1 from './comp1.jsx'
import Comp2 from './comp2.jsx'

ReactDOM.render(<Comp1><Comp2 /></Comp1>, document.getElementById('example'));