function getAge(date) { 
    var diff = Date.now() - date.getTime();
    console.log(diff);
    var age = new Date(diff); 
    console.log(age);
    return Math.abs(age.getUTCFullYear() - 1970);
}