import React from 'react';
import reactDOM from 'react-dom';
import Hello from './components/component';
require('bootstrap/dist/css/bootstrap.css');
main();

function main() {
    reactDOM.render(<Hello />, document.getElementById('app'));
}
