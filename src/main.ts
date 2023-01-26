import './style.css'
import { setupBasket } from './basket'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>	
    &#128218;</h1>
    <h1>Book basket</h1>
    <div class="card">
      <button id="1" type="button">1</button>
      <button id="2" type="button">2</button>
      <button id="3" type="button">3</button>
      <button id="4" type="button">4</button>
      <button id="5" type="button">5</button>
      </div>
      <p id="order" type="button">Order:</p>
      <p id="total" type="button">Total:</p>
  </div>
`

setupBasket(document.querySelector<HTMLButtonElement>('#counter')!)
