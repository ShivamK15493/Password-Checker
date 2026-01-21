
let incorr;
let erro;
let matched;
let header;
let behave;
let pasword;
let change = true;

function mode()
{
    behave = document.getElementById("switch");
    pasword = document.getElementById("pass");
    header = document.getElementById("head");
    if(change===true)
    {
         behave.innerHTML=`<div class="lite">
        <img src="light.png" alt="">
      </div>`;
         behave.style.backgroundColor="black";
         behave.style.borderColor="white";
         pasword.style.color="white";
         header.style.backgroundColor="black";
         document.body.style.backgroundColor="black";
         change=false;
    }
    else
    {
        behave.innerHTML=`<div class="dark">
        <img src="night.png" alt="">
      </div>`;
        behave.style.backgroundColor="white";
        behave.style.borderColor="black";
        pasword.style.color="black";
        header.style.backgroundColor="white";
        document.body.style.backgroundColor="white";
        change=true;
    }
}

let area = document.getElementById("btn");

area.addEventListener("click", function()
{
   
    let passw1 = document.getElementById("inp1").value;
    let passw2 = document.getElementById("inp2").value;
    matched = document.getElementById("pas");
    incorr = document.getElementById("rs");
    erro = document.getElementById("err");
   
    try
    {
        if(passw1!==passw2 && passw1!=="")
        {
            throw "Incorrect Password";
        }
        else if(passw1===passw2 && passw1!=="")
          {
         
           matched.innerText="Password Matched";
           incorr.innerText="";
           erro.innerText="";
          }
        else
        {
            incorr.innerText="Please enter the password";
            erro.innerText="";
            matched.innerText="";
        }
    }
    catch(error)
    {
        erro.innerText=error;
        incorr.innerText="";
        matched.innerText="";
    }
})

let reset = document.getElementById("re");
reset.addEventListener("click", () =>{
    location.reload();
})