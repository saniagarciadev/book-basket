export function setupBasket(element: HTMLButtonElement) {
    // type BookID = "1" | "2" | "3" | "4" | "5";
    type BookID = 1 | 2 | 3 | 4 | 5;

    type Amount = Number;
 type BookOrder = Record<BookID, Amount>;

 let basket: BookOrder;
 
  const addToBasket = (order: BookID) => {
 
    console.log("TEST order", order)
  }
  const buttons = document.querySelectorAll("button");
  buttons.forEach(btn => {
    
    btn.addEventListener('click', event => addToBasket(event.target.id))
    
  });
}
