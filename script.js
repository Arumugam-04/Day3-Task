
var request1= new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload = function() {
    var data1 = request1.response;
    var result1 = JSON.parse(data1)
    for(var i=0;i<result1.length;i++){
                console.log("countryname:"+" "+result1[i].name.common ,"Region:"+" "+result1[i].region,"subregion:"+" "+result1[i].subregion,"population:"+" "+result1[i])

    }
    }

var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function() {
    var data = request.response;
    var result = JSON.parse(data)
    for(var i=0;i<result.length;i++){
        console.log(result[i].flags.png)
    }
}


