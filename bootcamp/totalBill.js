export default function totalPhoneBill(myBill){
    var totalCost = 0;
    var cost = myBill.split (', ');
   for (var i =0; i < cost.length; i++) {
     
     if(cost[i].startsWith ('call')){
       totalCost+=2.75
     } else { totalCost+=0.65};
     
   }
     return 'R' +totalCost.toFixed(2);}
   
   //console.log(totalPhoneBill('call, sms, call, sms, sms'));
