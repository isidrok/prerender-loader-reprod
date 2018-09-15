import './static';
import './index.css';

const root = document.getElementById('root');
const h1 = document.createElement('h1');
h1.textContent = 'index';
// Happens twice but that's just normal.
root.appendChild(h1);

import( /* webpackChunkName: 'dynamic' */ './dynamic').then((m) => m.default());
