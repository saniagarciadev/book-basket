import './style.css'
import { setupBasket } from './basket'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>	
    &#128218;</h1>
    <h1>Book basket</h1>
    <div id="basket" class="card">
      <button id="1" class="book" type="button">Book 1</button>
      <button id="2" class="book" type="button">Book 2</button>
      <button id="3" class="book" type="button">Book 3</button>
      <button id="4" class="book" type="button">Book 4</button>
      <button id="5" class="book" type="button">Book 5</button>
      </div>
      <button id="total" type="button">Calculate total</button>
  </div>
`

setupBasket()
