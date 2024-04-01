//How to compare two JSON have the same properties without order
let obj1 = {
  name: "person1",
  age: 5,
};
let b = JSON.stringify(obj1,Object.keys(obj1).sort());
console.log(b);
let obj2 = {
    age: 5,
    name: "person1",
    };
  let b1 = JSON.stringify(obj2,Object.keys(obj2).sort());
  console.log(b1);
  console.log(obj1!=obj2);

  //! use the same rest countries and print all country name,region,subregion,populations
  var request=new XMLHttpRequest();
  request.open("GET","https://restcountries.com/v3.1/all",true)
  request.send();
  request.onload=function()
  {
    var data=request.response;
    var result=JSON.parse(data);
    for (var i=0;i<result.length;i++)
    {
      console.log("countryname:"+" "+result[i].name.common,"region:"+" "+result[i].region,"subregion:"+" "+result[i].subregion,"population:"+" "+result[i].population)
    
    }
  }
////! use the rest countries 'API URL->http://restcountries.com/v3.1 /all and display all the country flags in the console

  var request1=new XMLHttpRequest();
  request1.open("GET","https://restcountries.com/v3.1/all",true)
  request1.send();
  request1.onload=function()
  {
    var data1=request1.response;
    var result1=JSON.parse(data1);
    for (var i=0;i<result1.length;i++)
    {
      console.log(result1[i].flags.svg)
    }
  }