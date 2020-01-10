function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
     return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
// console.log("RGB ("+ r + ", "+ g + ", " + b +")");
console.log(rgbToHex(0, 51, 255)); // #0033ff


function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

console.log(hexToRgb("#ffffff")); // "51";