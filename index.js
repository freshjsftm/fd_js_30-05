"use strict";

const site = {
  title:'green site',
  headers:['Header 1','Header 2','Header 3'],
  showHeaders(){
    console.log(this)
    this.headers.forEach(function(header){
      //console.log(this)
      console.log(`${header} | ${this.title}`)
    }, this);
  }
}

site.showHeaders();

/*
1 - arrow function
2 - const self = this;
3 - argument for function
*/