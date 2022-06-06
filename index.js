//debugger
for(let i=1; i<=MAX_TRY; i++){
  const PIN = prompt('enter pin');
  if(PIN === PIN_SECRET){
    console.log('thanks');
    break;
  }
  if(MAX_TRY === i ){
    console.log('try end');
    break;
  }
  console.log('try = ', i );
}



