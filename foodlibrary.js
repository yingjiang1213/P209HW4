let Food = function (pName,pCalories){
    this.name=pName;
    this.calories=parseInt(pCalories);
};

Food.prototype.calculateCalories= function(){
    totalCalories+= this.calories;
    return this.calories;
};

Food.prototype.isValid = function(){
    if(this.name == "" || isNaN (this.calories)){
        return false;
    }else if (this.calories <= 0){
        return false;
    }else{
        return true;
    }
};

Food.prototype.toString= function(){
    let totalCalories= this.calculateCalories().toFixed(1);
    console.log(this.name + ": Calories -" +this.calories + "; Total calories - " + totalCalories);
    return totalCalories;
}