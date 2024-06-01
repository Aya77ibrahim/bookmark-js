var siteName= document.getElementById('bookmarkName');
var urlName= document.getElementById('bookmarkURL');
var boxModal = document.querySelector(".box-info");

 

var webcontainer=[]


if(localStorage.getItem('userWebsite')){
    webcontainer=JSON.parse(localStorage.getItem('userWebsite'))
    displayWeb(webcontainer)
  }

function addWebsite() {
    var website= {
        siteName:siteName.value,
        urlName: urlName.value
    }
    if(siteName.classList.contains('is-valid')&&urlName.classList.contains('is-valid')){

           
  webcontainer.push(website);
  console.log(webcontainer)
  localStorage.setItem('userWebsite',JSON.stringify(webcontainer))
  clearForm()
  displayWeb(webcontainer)
  siteName.classList.remove("is-valid");
  urlName.classList.remove("is-valid");

    } else{
        boxModal.classList.remove("d-none");
    }
 
    
}


function clearForm(){
    siteName.value=null;
    urlName.value=null;
    
  }

  function displayWeb(arr) {
    var box= '';
    for (var i =0; i < webcontainer.length; i++) {
        box+=`
        <tr><td >${i+1}</td>
              <td > ${webcontainer[i].siteName}</td>
              <td ><button class="btn btn-success">
              <i class="fa-solid fa-eye pe-2"></i>

              <a href="${webcontainer[i].urlName}" target="_blank" style="color: white; text-decoration: none;">visit</a>
          </button>
              </td>
              <td > <button class="btn btn-danger" onclick="deleteWeb(${i})">
              <i class="fa-solid fa-trash-can"></i>

              delete</button>
              </td>
            </tr>
        
        
        
        `
    
        
    }
    document.getElementById("tableContent").innerHTML=box;
    
  }


 



  function deleteWeb(index){
    webcontainer.splice(index,1);
    localStorage.setItem('userWebsite',JSON.stringify(webcontainer));
    displayWeb(webcontainer)
  }




  var nameRegex = /^\w{3,}(\s+\w+)*$/;
var urlRegex =   /^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;


siteName.addEventListener("input", function () {
    validate(siteName, nameRegex);
  });
  
  urlName.addEventListener("input", function () {
    validate(urlName, urlRegex);
  });
  
  function validate(element, regex) {
    var testRegex = regex;
    if (testRegex.test(element.value)) {
      element.classList.add("is-valid");
      element.classList.remove("is-invalid");
    } else {
      element.classList.add("is-invalid");
      element.classList.remove("is-valid");
    }
  }





  function closeModal() {
    boxModal.classList.add("d-none");
  }