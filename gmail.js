function logKey(e) {
    if(e.keyCode === 61){
        emailList = localStorage.getItem('emails')
        
    };
    document.getElementById("gs_lc50").firstChild.value=localStorage.getItem('emails') 
    document.getElementById("aso_search_form_anchor")[5].click()
  }



function addRowHandlers() {
//have to do this because google changes the id with obfucation 
    var table = document.getElementById(document.childNodes[1].childNodes[1].childNodes[19].childNodes[2].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[7].childNodes[0].childNodes[0].childNodes[2].childNodes[0].childNodes[0].id );
    var rows = table.getElementsByTagName("tr");
    for (i = 0; i < rows.length; i++) {
      var currentRow = table.rows[i];
      var createClickHandler = function(row) {
        return function() {
          var id = row.childNodes[3].childNodes[1].childNodes[0].childNodes[0].attributes.email.nodeValue;
          alert("id:" + id);
          clickedEmails(id)
        };
      };
      currentRow.onclick = createClickHandler(currentRow);
    }
  }

function clickedEmails(newEmail){
    localStorage.setItem('emails', localStorage.getItem('emails') + " || " + newEmail)
}

localStorage.setItem('emails', "placeholder")
document.addEventListener('keydown', logKey);
addRowHandlers();