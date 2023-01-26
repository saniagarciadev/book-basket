type BookID = 1 | 2 | 3 | 4 | 5;
type Amount = Number;
type Basket = Record<BookID, Amount>;

let basket: Basket;

export function setupBasket() {
   const addToBasket = (book: BookID) => {
    basket = {...basket}
    let amount = basket[book] ? basket[book] + 1 : 1;

    basket = {...basket, [book]: amount}
    console.log("TEST basket", basket)
    return basket;
}

  const bookButtons = document.querySelectorAll<HTMLButtonElement>('.book');
  
  bookButtons.forEach(btn => {
    btn.addEventListener('click', event => {
      const target = event.target as HTMLButtonElement;
      addToBasket(target.id)
    })
 })

 const calculateButton = document.querySelector<HTMLButtonElement>('#total');

 calculateButton.addEventListener('click', () => {
  console.table(basket)   
})
  
  
  };


