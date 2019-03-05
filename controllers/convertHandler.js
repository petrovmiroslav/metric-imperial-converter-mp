/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    var match = /[A-Za-z]/.exec(input);
    
    if(match){
      result = input.slice(0, match.index).replace(/[^-\d/*+.]/g, '');
    } else {
        result = input.replace(/[^-\d/*+.]/g, '');
      }
    if(result === "") {
       result = "1";
    }
    if(result.match(/\//g)) {
      if(result.match(/\//g).length > 1) {
        return "invalid number";
      }
    }
    try{
      return eval(result);
    } catch (err) {
        return "invalid number";
      }
  };
  
  this.getUnit = function(input) {
    var result = input.slice(/[A-Za-z]/.exec(input).index);
    if(['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'].indexOf(result) === -1) {
      result = "invalid unit";
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    if(initUnit === "lbs" || initUnit === "LBS") {
        result = "kg";
    }
    if(initUnit === "kg" || initUnit === "KG") {
        result = "lbs";
    }
    if(initUnit === "mi" || initUnit === "MI") {
        result = "km";
    }
    if(initUnit === "km" || initUnit === "KM") {
        result = "mi";
    }
    if(initUnit === "gal" || initUnit === "GAL") {
        result = "L";
    }
    if(initUnit === "L" || initUnit === "l") {
        result = "gal";
    }
    if(initUnit === "invalid unit") {
      result = "invalid unit";
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    if(initUnit === "lbs" || initUnit === "LBS") {
      //result = (initNum*lbsToKg).toFixed(5);
      result = Math.round(initNum*lbsToKg * 100000) / 100000 ;
    }
    if(initUnit === "kg" || initUnit === "KG") {
      result = Math.round(initNum/lbsToKg * 100000) / 100000 ;
    }
    if(initUnit === "mi" || initUnit === "MI") {
      result = Math.round(initNum*miToKm * 100000) / 100000 ;
    }
    if(initUnit === "km" || initUnit === "KM") {
      result = Math.round(initNum/miToKm * 100000) / 100000 ;
    }
    if(initUnit === "gal" || initUnit === "GAL") {
      result = Math.round(initNum*galToL * 100000) / 100000 ;
    }
    if(initUnit === "L" || initUnit === "l") {
      result = Math.round(initNum/galToL * 100000) / 100000 ;
    }
    if(initUnit === "invalid unit") {
      return initNum;
    }
    if(initNum === "invalid number") {
      return "invalid number";
    }
    return result.toString();
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    if(initUnit === "lbs" || initUnit === "LBS") {
        result = initNum+" pounds converts to "+returnNum+" kilograms";
    }
    if(initUnit === "kg" || initUnit === "KG") {
        result = initNum+" kilograms converts to "+returnNum+" pounds";
    }
    if(initUnit === "mi" || initUnit === "MI") {
        result = initNum+" miles converts to "+returnNum+" kilometers";
    }
    if(initUnit === "km" || initUnit === "KM") {
        result = initNum+" kilometers converts to "+returnNum+" miles";
    }
    if(initUnit === "gal" || initUnit === "GAL") {
        result = initNum+" gallons converts to "+returnNum+" liters";
    }
    if(initUnit === "L" || initUnit === "l") {
        result = initNum+" liters converts to "+returnNum+" gallons";
    }
    if(initNum === "invalid number" && initUnit === "invalid unit") {
      return "invalid number and unit";
    }
    if(initUnit === "invalid unit") {
      return "invalid unit";
    }
    if(initNum === "invalid number") {
      return "invalid number";
    }
    return result;
  };
  
}

module.exports = ConvertHandler;
