export default function enoughAirtime(airtimeUsage, airtimeAvailable){
    var call = 1;
    var data =1;
    var sms = 10.00;
    let airtimeUsed = 0;
    var airtimeUsage=airtimeUsage.split(',');
    console.log(airtimeUsage);
  
    for(var i=0; i<airtimeUsage.length; i++){
      if(!airtimeUsage){
        return "please enter string"
      }
      else if(airtimeUsage[i].startsWith('call')){
         airtimeUsed += call;
      }else if(airtimeUsage[i].startsWith('sms')){
        airtimeUsed += sms;
      }else if(airtimeUsage[i].startsWith('data')){
        airtimeUsed += data;
      }
      }
     
    const sum =(airtimeUsed>airtimeAvailable) ? 0 : airtimeAvailable - airtimeUsed;
    console.log('R' + airtimeUsed.toFixed(2));
    return 'R' + sum.toFixed(2);
  }
  console.log(enoughAirtime('call,call,call,data,sms,sms,call,data', 50));