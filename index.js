"use strict";


const site = {
  title:'green site',
  headers:['Header 1','Header 2','Header 3'],
  showHeaders(){
    this.headers.forEach((header)=>{
      console.log(`${header} | ${this.title}`)
    });
  }
}

site.showHeaders();

/*
1 - arrow function
2 - const self = this;
3 - argument for function
4 - function.bind(this)
*/