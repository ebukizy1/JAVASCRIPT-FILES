const square = function(x) {
    return x * x
}
console.log(square(12))
const hummus = function(factor) {
    const ingredient = function(amount, unit, name){
    let ingredientAmount = amount * factor;
    if(ingredientAmount > 1){
        unit += "s";
 }
 console.log(`${ingredientAmount} ${unit} ${name}`);
    }
    ingredient(1, "can", "chickpeas");
ingredient(0.25, "cup", "tahini");
ingredient(0.25, "cup", "lemon juice");
ingredient(1, "clove", "garlic");
ingredient(2, "tablespoon", "olive oil");
ingredient(0.5, "teaspoon", "cumin");

}
hummus(50,true, "segun")
function wrapValue(n) {
    let local = n;
    return () => local;
    }

    let wrap1 = wrapValue(1)
    let wrap2 = wrapValue(2)
    console.log(wrap2())
    function findSolution(target) {
        function find(current, history) {
        if (current == target) {
        return history;
        } else if (current > target) {
        return null;
        } else {
        return find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`);
        }
        }
        return find(1, "1");
        }
        console.log(findSolution(24))
        (((1 * 3) + 5) * 3)
