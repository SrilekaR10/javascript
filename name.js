function toTitleCase(str) {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}


var inputString = "my name is bala";
var titleCaseString = toTitleCase(inputString);
console.log("Converted to title case:", titleCaseString); 