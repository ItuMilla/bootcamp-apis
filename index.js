import express from 'express';

import longestWord from './bootcamp/longestWord.js'
import shortestWord from './bootcamp/shortestWord.js'
import wordLengths from './bootcamp/wordLengths.js'

import totalPhoneBill from './bootcamp/totalPhoneBill.js'
import enoughAirtime from './bootcamp/enoughAirtime.js'


const app = express();
// app.use(cors());
app.use(express.static('public'));

app.get('/api/word_game', function(req, res){

    const sentence = req.query.sentence;
//  console.log(sentence)
    if (!sentence) {
        res.json({
            error : 'Please send in a sentence to analyze'
        })
    }
    res.json({
        "longestWord" : longestWord(sentence),
        "shortestWord" : shortestWord(sentence),
        "sum" : wordLengths(sentence)

    });

});

//enable body parser as moddleware to the express 'app' instance
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

app.get("/api/phonebill/total", function(req, res){

    const string = req.query.myBill;

    res.json({
    //   call : 2.75,
    //   sms : 0.65
      "bill": totalPhoneBill(myBill)

    })
})

      //Get the bill object from API
      app.get('/api/phonebill/price', (req, res) => {
    //     // res.json({
    //     //     'total' :totalPhoneBill(myBill)
    //     // })
      });

     let available = 0
     app.post('/api/enoughAirtime', (req, res) => {
        const airtimeUsage = req.body.airtimeUsage
        const available = req.body.available
       // console.log(reg.body)
       console.log(enoughAirtime(airtimeUsage, available))
       res.json({
        result : enoughAirtime(airtimeUsage, available)
       });
     });
    
    const PORT = process.env.PORT|| 6007;
    // app.listen(PORT, () => console.log(`listen on PORT ${PORT}...`));
    app.listen(PORT, function(){
      console.log('api started on port', PORT)
    });
