"use strict";

const site = {
  title:'green site',
  headers:['Header 1','Header 2','Header 3'],
  showHeaders(){
    console.log(this)
    const self = this;
    this.headers.forEach(function(header){
      //console.log(this)
      console.log(`${header} | ${self.title}`)
    });
  }
}

site.showHeaders();

/*
1 - arrow function
2 - const self = this;
*/