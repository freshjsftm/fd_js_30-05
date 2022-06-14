"use strict";

function logHeader(header){
  //console.log(this)
  console.log(`${header} | ${this.title}`)
}
const site = {
  title:'green site',
  headers:['Header 1','Header 2','Header 3'],
  showHeaders(){
    console.log(this)
    this.headers.forEach(logHeader.bind(this));
  }
}

site.showHeaders();

/*
1 - arrow function
2 - const self = this;
3 - argument for function
4 - function.bind(this)
*/