let fArray=[];

document.addEventListener("DOMContentLoaded",function (event){
    document.getElementById("submit").addEventListener("click", newFood);
});

let newFood = function(){
    let food= new Food(
        document.getElementById("name").value,
        document.getElementById("calories").value
    );

    if(!food.isValid()){
        alert("Please complete all fields.");
    }else{
        fArray.push(food);
        console.log(fArray);
        displayArray();
    }
    
};

let displayArray = function () {
    let name = "";
    let calories = 0;

    for (let i in fArray) {
        name += fArray[i].name + "\n";
        calories += fArray[i].calories;
    }
    document.getElementById("calories_list").value = calories;
    document.getElementById("name").select();
}

