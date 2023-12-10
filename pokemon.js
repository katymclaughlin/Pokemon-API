fetch("https://pokeapi.co/api/v2/move/")
.then ((data1)=>{
    //console.log(data1);
    return data1.json();
    }) .then(function(json) {
        let pokemonMoves = json.results;
        console.log(pokemonMoves);
        let tableData="";
        pokemonMoves.map((values)=>{
            tableData+=`<tr>
            <td>${values.name}</td>
          </tr>`;
        });
        document.getElementById("table_body").innerHTML=tableData;
    })

fetch ("https://pokeapi.co/api/v2/pokemon-color/")
    .then ((data)=>{
       // console.log(data); //json format
        return data.json(); //converted to object
    }) .then(function(json){
    let moves = json.results;
    console.log(moves);
       let tableData1="";
        moves.map((values)=>{
            tableData1+=`<tr>
            <td>${values.name}</td>
          </tr>`;
        });
        document.getElementById("table_body1").innerHTML=tableData1;
    }) .catch((errMessage)=>{
        console.log(errMessage)
    })


fetch ("https://pokeapi.co/api/v2/pokemon-habitat/")
   .then ((data2)=>{
      // console.log(data); //json format
       return data2.json(); //converted to object
   }) .then(function(json){
   let habitat = json.results;
   console.log(habitat);
      let tableData2="";
       habitat.map((values)=>{
           tableData2+=`<tr>
           <td>${values.name}</td>
         </tr>`;
       });
       document.getElementById("table_body2").innerHTML=tableData2;
   }) .catch((errMessage)=>{
       console.log(errMessage)
   })

fetch ("https://pokeapi.co/api/v2/pokemon-shape/")
   .then ((data3)=>{
      // console.log(data); //json format
       return data3.json(); //converted to object
   }) .then(function(json){
   let shape = json.results;
   console.log(shape);
      let tableData3="";
       shape.map((values)=>{
           tableData3+=`<tr>
           <td>${values.name}</td>
         </tr>`;
       });
       document.getElementById("table_body3").innerHTML=tableData3;
   }) .catch((errMessage)=>{
       console.log(errMessage)
   })

fetch ("https://pokeapi.co/api/v2/egg-group/")
   .then ((data4)=>{
      // console.log(data); //json format
       return data4.json(); //converted to object
   }) .then(function(json){
   let egg = json.results;
   console.log(egg);
      let tableData4="";
       egg.map((values)=>{
           tableData4+=`<tr>
           <td>${values.name}</td>
         </tr>`;
       });
       document.getElementById("table_body4").innerHTML=tableData4;
   }) .catch((errMessage)=>{
       console.log(errMessage)
   })

fetch ("https://pokeapi.co/api/v2/berry-flavor/")
   .then ((data5)=>{
      // console.log(data); //json format
       return data5.json(); //converted to object
   }) .then(function(json){
   let berry = json.results;
   console.log(berry);
      let tableData5="";
       berry.map((values)=>{
           tableData5+=`<tr>
           <td>${values.name}</td>
         </tr>`;
       });
       document.getElementById("table_body5").innerHTML=tableData5;
   }) .catch((errMessage)=>{
       console.log(errMessage)
   })

fetch ("https://pokeapi.co/api/v2/generation/")
   .then ((data6)=>{
      // console.log(data); //json format
       return data6.json(); //converted to object
   }) .then(function(json){
   let games = json.results;
   console.log(games);
      let tableData6="";
       games.map((values)=>{
           tableData6+=`<tr>
           <td>${values.name}</td>
         </tr>`;
       });
       document.getElementById("table_body6").innerHTML=tableData6;
   }) .catch((errMessage)=>{
       console.log(errMessage)
   })   