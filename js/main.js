var siteNameInput = document.getElementById('siteName');
var siteUrlInput = document.getElementById('siteUrl') ;
var siteContainer ;
if(localStorage.getItem('websites')== null)
{
    siteContainer = [];
}
else
{
    siteContainer=JSON.parse(localStorage.getItem ('websites'));
    displaySites();
}

function validate ()
    {
      
        var Regex = /^(https|http)/g
        if (Regex.test(siteUrlInput.value) == true)
        {
            return true;
        }
        else{

            return false;
        }
    }

function addSite()
{
    if (validate()== true){
        var Site = 
        {
            Name:siteNameInput.value,
            url:siteUrlInput.value     
        }
        siteContainer.push(Site);
        localStorage.setItem('websites',JSON.stringify( siteContainer));
        displaySites();
        clearForm();
    }   
  else {
       alert("Invalid Url")
   }
    
}
function    clearForm()
{
    siteNameInput.value = '';
    siteUrlInput.value = '';
}

function displaySites()
{
   
    var box = ``;
    for(var i =0; i < siteContainer.length; i++)
    {
        box += `
        <div class="site">
                <h4>${siteContainer[i].Name}</h4>
                <button class="btn btn-outline-primary" onclick="vistSite('${siteContainer[i].url}')">visit</button>
                <button class="btn btn-outline-danger" onclick=" deleteSite(${i})">delete</button>
            </div>
        `;

    }
    document.getElementById('site').innerHTML = box;
}
function deleteSite(siteIndex)
{
    siteContainer.splice(siteIndex,1);
    displaySites();
}

function vistSite (x)
{
window.open(x)
}
