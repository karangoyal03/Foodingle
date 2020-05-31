$(function(){

    let name=$('#name')
    let email=$('#email')
    let recipeimage=$('#recipeimage')
    let phone=$('#phone')
    let recipe=$('#recipe')


    $('#submit').click(()=>{
        console.log(name.val())
        console.log(email.val())
        console.log(recipeimage.val())
        console.log(phone.val())
        console.log(recipe.val())

        addpostrecipe(name.val(),email.val(),recipeimage.val(),phone.val(),recipe.val(),function(bookedseat){
            window.alert('Successfully posted recipe of'+bookedseat.name+' in our database');
        })
    })

})