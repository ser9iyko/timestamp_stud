var express      = require('express')
var cookieParser = require('cookie-parser')
var moment = require('moment');
var app = express();

app.use(cookieParser())

app.get('/',function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/:data', function(req, res) {
        var data=req.params.data;
        var myDate;
            if(/^\d{8,}$/.test(data)) {
                myDate = moment(data, "X");
            } else {
            myDate = moment(data, "MMMM D, YYYY");
            
            }
             if(myDate.isValid()) {
                res.json({
                        unix: myDate.format("X"),
                        natural: myDate.format("MMMM D, YYYY")
                        });
                                    } else {
                                            res.json({
                                                unix: null,
                                            natural: null
                                    });
}
    
});



app.listen(process.env.PORT, process.env.IP,
function () {
    console.log('server running on:'+process.env.PORT+"ip:"+process.env.IP);
});

