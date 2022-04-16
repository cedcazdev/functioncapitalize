function capitalize(first_name, last_name){
  // I use object's charAt(index) method for selected the first letter 
  // and use toUpperCase() method for converted to uppercase. 
  const first = first_name.charAt(0).toUpperCase();
  const last = last_name.charAt(0).toUpperCase();
  // I use object's substring() method for selected the rested letters
  // and use toLowerCase() method for converted to lowercase. 
  const rest_First = first_name.substring(1).toLowerCase();
  const rest_Last = last_name.substring(1).toLowerCase();
  // concatenate all result for combinate the words.
  return first + rest_First + " " + last + rest_Last;
}
// callback the function with 2 parameters.
console.log(capitalize("céDriC", "cAzAl"));
