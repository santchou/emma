
var valid = document.getElementById("submit");
valid.onclick = function(e) {
  var nameValue = document.getElementById("field").value;

  if(isNaN(nameValue)){
    alert("Please enter a number");
    document.getElementById("field").value = "";
    e.preventDefault();
  } else if(Number(nameValue) === 0) {
           alert("Please enter a number greater than zero");
           document.getElementById("field").value = "";
           e.preventDefault();
         } else{
            var romanVal = convertToRoman(Number(nameValue));
            document.getElementById("field").value = romanVal;
            e.preventDefault();
          } 
}
function convertToRoman(num) {
     
  let rs = [[1, "I"], [2, "II"], [3, "III"], [4, "IV"],
  [5, "V"], [6, "VI"], [7, "VII"], [8, "VIII"],[9, "IX"]]
       
  let rs2D = [[10, "X"], [20, "XX"], [30, "XXX"], [40, "XL"],[50, "L"], [60, "LX"], [70, "LXX"], [80, "LXXX"],[90, "XC"]]
       
  let rs3D = [[100, "C"], [200, "CC"], [300, "CCC"], [400, "CD"],[500, "D"], [600, "DC"], [700, "DCC"], [800, "DCCC"],[900, "CM"], ]
       
  let rs4D = [[1000, "M"]];
       
  function oneDigit(digit) {
    if (digit == 0) {
      return "";
    } else {
        for (let i = 0; i < rs.length; i++) {
          if (rs[i][0] == digit) {
            return rs[i][1];
          }
        }
      }
  }
function twoDigit(towdigit) {
  for (let i = 0; i < rs2D.length; i++) {
    if (rs2D[i][0] == towdigit) {
      return rs2D[i][1];
    }
  }
}
function treeDigit(treedigit) {
  for (let i = 0; i < rs3D.length; i++) {
    if (rs3D[i][0] == treedigit) {
      return rs3D[i][1];
    }
  }
}
function lengthTwo(numv) {
  numv.toString().charAt(1);
  if (numv.toString().charAt(1) == "0") {
    return twoDigit(numv);
  }else {
    let nbTem1 = Number(numv.toString().charAt(0) + "0");
    let nbUnit1 = Number(numv.toString().charAt(1));
    return twoDigit(nbTem1) + oneDigit(nbUnit1);
  }
}
function lengthTree(numv){
  if (numv.toString().charAt(1) == "0" && numv.toString().charAt(2) == "0") {
    return treeDigit(numv);
  } else {
      if (numv.toString().charAt(1) != "0" && numv.toString().charAt(2) != "0") {
        let nbsen = Number(numv.toString().charAt(0) + "00");
        let nbTem2 = Number(numv.toString().charAt(1) + "0");
        let nbUnit2 = Number(numv.toString().charAt(2));
        return treeDigit(nbsen) + twoDigit(nbTem2) + oneDigit(nbUnit2);
      } else if (numv.toString().charAt(1) == "0" && numv.toString().charAt(2) != "0") {
               let nbsen = Number(numv.toString().charAt(0) + "00");
               let nbUnit2 = Number(numv.toString().charAt(2));
               return treeDigit(nbsen) + oneDigit(nbUnit2);
              } else {
                  let nbsen = Number(numv.toString().charAt(0) + "00");
                  let nbTem2 = Number(numv.toString().charAt(1) + "0");
                  return treeDigit(nbsen) + twoDigit(nbTem2);
                }
              }
}
function grOrEqFoDigit() {
  return rs4D[0][1];
}
       
  if (num.toString().length == 1) {
    return oneDigit(num);
  } else if (num.toString().length == 2) {
          return lengthTwo(num);
         } else if (num.toString().length == 3) {
                  return lengthTree(num);
         } else {
           console.log(num)
           let numStr = num.toString();
           console.log(typeof numStr)
           let l = numStr.length;
           console.log(l);
           let numArr = numStr.split("");
           console.log(numArr);
           let newNumArr = numArr.map(item => {
               for (let i = 0; i < l-1; i++) {
                   item += "0"
               }
               l--;
               return Number(item);
           });
           console.log(newNumArr);
           
           let romanArr = newNumArr.map(item => {
               let r = "";
               if (item.toString().length == 1) {
                   return  oneDigit(item);
               } else if (item.toString().length == 2) {
                  return lengthTwo(item);
               } else if (item.toString().length == 3) {
                  return lengthTree(item);
               }else {
                  for (let i = 1000; i <= item; i += 1000) {
                     r += "M"
                  }
                  return r;
               }});
           return romanArr.join("");
         }
       }
  