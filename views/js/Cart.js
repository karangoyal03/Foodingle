$(function () {
  let cardlist = $("#cart_list");

  fetchcartitems((carts) => {
    fetchCartDone(cardlist, carts);
  });
});
