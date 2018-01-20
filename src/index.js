import React from 'react';
import neo4j from "neo4j-driver/lib/browser/neo4j-web";
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// const neo4j = require('neo4j');

console.log(neo4j)

const driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "neo4j"));

const Root = () => (
  <App driver={driver}/>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
