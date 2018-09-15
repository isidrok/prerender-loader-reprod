import './dynamic.css';
export default () => {
  const root = document.getElementById('root');
  const h2 = document.createElement('h2');
  h2.textContent = 'dynamic';
  root.appendChild(h2);
};
