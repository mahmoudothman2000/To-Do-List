let submitBtn = document.getElementById( "submitBtn" );
let inputForm = document.getElementById( "inputForm" );
let section = document.getElementById( "section" );
let showBtn = document.getElementById( "showBtn" );
let newArray = [];

let showContainer = document.createElement( "div" );
let showPara = document.createElement( "p" );
let showButton = document.createElement( "button" );
let showIcon = document.createElement( "i" );




// submitBtn.addEventListener( "click", function ()
// {
  // let valueInput = document.createTextNode(inputForm.value)
  // showPara.className = "show-p";
  // showPara.appendChild(valueInput);

  // showIcon.className = "fa-solid fa-trash-can";
  // showButton.appendChild( showIcon )
  // showButton.className = "show-btn";



  // showContainer.className = "show";
  // showContainer.appendChild( showPara );
  // showContainer.appendChild( showButton );


  // section.appendChild( showContainer );

  // newArray.push( section )
  // newArray.push( inputForm.value )
  

  // document.body.appendChild( section );
  

  // console.log(inputForm.value);
  // console.log(newArray);
// })


submitBtn.addEventListener( "click", function ()
{
  newArray.push( inputForm.value )
  display( newArray )
  clear ()
  console.log(newArray);
})


function display (Array)
{
  let container = "";
  for ( let i = 0; i < Array.length; i++)
  {
    container += `
    <div class="show " id="showContainer">
      <p class="show-p">${Array[i]}</p>
      <button  onclick="deleteBtn(${i})"  class=" show-btn " id="showBtn"><i class="fa-solid fa-trash-can"></i></button>
    </div>
    `
  }
  document.getElementById("section").innerHTML = container
}




function clear ()
{
  inputForm.value = "";
}


function deleteBtn (index)
{
  newArray.splice( index, 1 );
  display( newArray );
  
}