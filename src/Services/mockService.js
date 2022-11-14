
import products from "../data/data";

function getItems(company) { 
  return new Promise((resolve) => {
  if (company === undefined) {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  } else {
    setTimeout(() => {
      let itemsRequested = products.filter(
        (item) => item.company === company
      );
      resolve(itemsRequested);
    }, 2000);
  }
});
}

export function getSingleItem(id) {
  return new Promise((resolve, reject) => {
    let itemRequested = products.find((item) => item.id == id);

    if (itemRequested === undefined) reject("Item no encontrado");

    setTimeout(() => {
      resolve(itemRequested);
    }, 1000);
  });
}

export default getItems;
