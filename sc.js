const inp=document.getElementById("inpid");
const list=document.getElementById("liid");
function add()
{
          if(inp.value==='')
        {
           alert("Type Something");
        }
        else
        {
            let li=document.createElement("li")
            li.innerHTML=inp.value;
            list.appendChild(li);
            let s=document.createElement("span")
            s.innerHTML="\u00d7"
            li.appendChild(s);
        }
        sd();
        inp.value=''
}
list.addEventListener("click",function(e)
{
            if(e.target.tagName==="LI")
              {
                e.target.classList.toggle("done");
                sd();
              }
            else if(e.target.tagName==="SPAN")
              {
                e.target.parentElement.remove();
                sd();
              }
},false);

function sd()
{
  localStorage.setItem("info",list.innerHTML)
}
function gd()
{
  list.innerHTML=localStorage.getItem("info")
}
gd();