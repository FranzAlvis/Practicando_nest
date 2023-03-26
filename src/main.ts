import { getTodo } from './bases/array'
import './style.css'

const id = 4;

getTodo(id).then((res) => {
  document.querySelector<HTMLDivElement>('#app')!.textContent = res;
}).catch((err) => {
  document.querySelector<HTMLDivElement>('#app')!.textContent = err;
  console.log(err);
});


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>
    </h1>
  </div>
    `

