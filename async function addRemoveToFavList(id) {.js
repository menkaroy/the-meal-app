// async function addRemoveToFavList(id) {
//   let arr = JSON.parse(localStorage.getItem("favouritesList"));
//   let contain = arr.includes(id);

//   if (contain) {
//     arr = arr.filter((mealId) => mealId !== id);
//     alert("Your meal removed from your favorites list");
//   } else {
//     arr.push(id);
//     alert("Your meal added to your favorites list");
//   }

//   localStorage.setItem("favouritesList", JSON.stringify(arr));
//   showFavMealList(); // Update the favorites list in the UI immediately
// }
