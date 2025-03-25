function speed(speed){
    let speedLimit=70;
    let maximumPoints=12;
    let speedPoints=5;
    let demiritPoints=Math.floor((speed-speedLimit)/speedPoints);
     if (speed <70) {
        return "ok";
        
     } else if(demiritPoints>maximumPoints) {
        return 'licence suspended';
     }
     else  {
        return `${demiritPoints}`;
     } 
    
}
console.log (speed(190))