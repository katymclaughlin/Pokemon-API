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
    fetch ("https://pokeapi.co/api/v2/pokemon-color/")
    .then ((data)=>{
       // console.log(data); //json format
        return data.json(); //converted to object
    }) .then(function(json){
    let moves = json.results;
    console.log(moves);
       let tableData="";
        moves.map((values)=>{
            tableData+=`<tr>
            <td>${values.name}</td>
            <td>${values.url}</td>
          </tr>`;
        });
        document.getElementById("table_body").innerHTML=tableData;
    }) .catch((errMessage)=>{
        console.log(errMessage)
    })
  