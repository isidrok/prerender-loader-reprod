import './static.css';

const root = document.getElementById('root');
const h3 = document.createElement('h3');
h3.textContent = 'static';
// Happens twice but that's just normal.
root.appendChild(h3);
