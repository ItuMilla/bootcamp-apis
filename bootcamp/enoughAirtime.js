export default function enoughAirtime(projectedUsage, airtimeAvailable){
    var call = 1;
    var data =1;
    var sms = 10.00;
    let airtimeUsed = 0;
    var projectedAirtimeUsage=projectedUsage.split(',');
    console.log(projectedAirtimeUsage);
  
    for(var i=0; i<projectedAirtimeUsage.length; i++){
      if(!projectedUsage){
        return "please enter string"
      }
      else if(projectedAirtimeUsage[i].startsWith('call')){
         airtimeUsed += call;
      }else if(projectedAirtimeUsage[i].startsWith('sms')){
        airtimeUsed += sms;
      }else if(projectedAirtimeUsage[i].startsWith('data')){
        airtimeUsed += data;
      }
      }
     
    const sum =(airtimeUsed>airtimeAvailable) ? 0 : airtimeAvailable - airtimeUsed;
    console.log('R' + airtimeUsed.toFixed(2));
    return 'R' + sum.toFixed(2);
  }
  console.log(enoughAirtime('call,call,call,data,sms,sms,call,data', 50));