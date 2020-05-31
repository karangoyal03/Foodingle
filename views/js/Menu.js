$(function(){
    let breakfast = $("#breakfast");
    let lunch = $("#lunch");
    let dinner =$('#dinner');
    let Desserts = $("#Desserts");
    let Wine=$('#Wine');
    let Drinks = $("#Drinks");
    fetchmenubystartend(0,5,function(products){
        breakfast.empty();
        for(let breakfastitem of products){
            breakfast.append(createmenuitem(breakfastitem));
        }
    })
    fetchmenubystartend(5, 10, function (products) {
      lunch.empty();
      for (let lunchitem of products) {
        lunch.append(createmenuitem(lunchitem));
      }
    });

    fetchmenubystartend(10, 15, function (products) {
      dinner.empty();
      for (let dinneritem of products) {
        dinner.append(createmenuitem(dinneritem));
      }
    });



    fetchmenubystartend(15, 20, function (products) {
      Desserts.empty();
      for (let Dessertsitem of products) {
        Desserts.append(createmenuitem(Dessertsitem));
      }
    });


    fetchmenubystartend(20, 25, function (products) {
      Wine.empty();
      for (let Wineitem of products) {
        Wine.append(createmenuitem(Wineitem));
      }
    });
    fetchmenubystartend(25, 30, function (products) {
      Drinks.empty();
      for (let Drinksitem of products) {
        Drinks.append(createmenuitem(Drinksitem));
      }
    });
    
})