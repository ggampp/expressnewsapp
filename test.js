var obj = {"source": "news", "country": "br"};

console.log( Object.keys(obj) );

for(var i = 0; i < Object.keys(obj).length; i++){
    var fieldName = Object.keys(obj)[i]; 
    console.log(fieldName + "=" + obj[fieldName] );
}