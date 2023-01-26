type BookID = string;
type Amount = number;
type Basket = Record<BookID, Amount>;

let basket: Basket;
let total: number;

export function setupBasket() {
   const addToBasket = (book: BookID) => {
    basket = {...basket}
    let amount = basket[book] ? basket[book] + 1 : 1;

    basket = {...basket, [book]: amount}
    return basket;
}

const getTotal = () => { 
  if (!basket) return;
  total = Object.values(basket).reduce(function(a, b){
    return a + b * 8;
}, 0);
 }

  const bookButtons = document.querySelectorAll<HTMLButtonElement>('.book');
  
  bookButtons.forEach(btn => {
    btn.addEventListener('click', event => {
      const target = event.target as HTMLButtonElement;
      addToBasket(target.id)
    })
 })

 const calculateButton = document.querySelector<HTMLButtonElement>('#total');

 calculateButton && calculateButton.addEventListener('click', getTotal)
};

export {basket, total}