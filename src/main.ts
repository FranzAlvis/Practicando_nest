// import { getTodo } from './bases/array'
import './style.css'
import { Pokemon } from './bases/classes';

// const id = 4;

// getTodo(id).then((res) => {
//   document.querySelector<HTMLDivElement>('#app')!.textContent = res;
// }).catch((err) => {
//   document.querySelector<HTMLDivElement>('#app')!.textContent = err;
//   console.log(err);
// });


const pokemon = new Pokemon();
pokemon.getPokemo().then((res) => {
  document.querySelector<HTMLDivElement>('#app')!.textContent = res;

}).catch((err) => {
  document.querySelector<HTMLDivElement>('#app')!.textContent = err;
});



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>
    </h1>
  </div>
    `

