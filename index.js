"use strict";

const check = new Boolean(false);

//console.log(check.valueOf())

if (check) {
  console.log("yes");
  if(check.valueOf()){
    console.log("true");
  }else{
    console.log("false");
  }
} else {
  console.log("no");
}
