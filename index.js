function Kettle(maxVolume){
  this.maxVolume = maxVolume;
  this.volume = 0;

  this.addWater = function(value){
    if(this.volume+value <= this.maxVolume){
      this.volume += value;
    }else{
      console.log('rest wather:', value - (this.maxVolume-this.volume));
      this.volume = this.maxVolume;
    }
    return this.volume;
  }
  
  this.drainWater = function(value){
    this.volume -= value;   
    return this.volume;
  }

}

const pot = new Kettle(200);
console.log(pot.addWater(15))
console.log(pot.drainWater(100))





