//simple get request to get a joke from the internet
request=require("request");

url="https://api.chucknorris.io/jokes/random";
joke=""
//get json from the url
request(url,function(response,json){
    // console.log("response",response);
    data=JSON.parse(json.body);
    console.log(data.value);
    joke=data.value;
})

console.log('completed');

