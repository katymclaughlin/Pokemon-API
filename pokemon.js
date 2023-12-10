/*let pokemonMoves = document.querySelector("ul");

fetch("https://pokeapi.co/api/v2/move/")
    .then(function (response) {
        //console.log(response);
        return response.json();
    })
    .then(function(json) {
        //console.log(json);
        let moves = json.results;

        for (const m of moves) {
            //console.log(p);
            let listItem = document.createElement('li'); 
            listItem.innerText = m.name;
            pokemonMoves.appendChild(listItem);
        }

    })
*/

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
