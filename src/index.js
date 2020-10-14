import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {Neo4jProvider} from 'use-neo4j';

const Root = () => (
  <Neo4jProvider>
  <App/>
  </Neo4jProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
