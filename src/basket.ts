export function setupBasket(element: HTMLButtonElement) {
  let basket = 0
  const setBasket = (count: number) => {
    basket = count
    element.innerHTML = `Number of books: ${basket}`
  }
  element.addEventListener('click', () => setBasket(basket + 1))
  setBasket(0)
}
