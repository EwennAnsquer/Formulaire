let savoirs=[];
var childNumb=0;
if (localStorage.lengh!=0) {
    for (let i = 0; i < localStorage.length; i++) {
        childNumb=i;
        savoirs.push(JSON.parse(localStorage.getItem("savoir"+i)));
        var ol=document.getElementById('contentList');
        var li=document.createElement('li');
        li.innerHTML="<h1>"+savoirs[childNumb].nom+"</h1></br><p>par "+savoirs[childNumb].auteur+" le "+savoirs[childNumb].date+"</p> <button onclick='supContent("+childNumb+")'>Suprimer</button>";
        ol.appendChild(li);
        ol.lastChild.setAttribute('id','li'+childNumb);
        childNumb=childNumb+1;
    }
}

var flag=false;

function addContent(){
    if(flag==false){
        flag=true;
        var savoir=document.getElementById('savoirInput').value;
        var auteur=document.getElementById('auteurInput').value;
        var date=document.getElementById('dateInput').value;
        savoirs.push({
            nom:savoir,
            auteur:auteur,
            date:date
        })
        localStorage.setItem("savoir"+childNumb,JSON.stringify(savoirs[childNumb]));
        console.log("savoir"+childNumb,JSON.parse(localStorage.getItem("savoir0")));
        console.log(savoirs);
        if(savoir!="" && auteur!="" && date!=""){
            var ol=document.getElementById('contentList');
            var li=document.createElement('li');
            li.innerHTML="<h1>"+savoirs[childNumb].nom+"</h1></br><p>par "+savoirs[childNumb].auteur+" le "+savoirs[childNumb].date+"</p> <button onclick='supContent("+childNumb+")'>Suprimer</button>";
            ol.appendChild(li);
            ol.lastChild.setAttribute('id','li'+childNumb);
            childNumb=childNumb+1;
            document.getElementById('savoirInput').value="";
            document.getElementById('auteurInput').value="";
            document.getElementById('dateInput').value="";
        }else{
            var text="";
            var pluriel="";
            if (savoir=="") {
                text=text+"savoir";
            }
            if (auteur=="") {
                if (text.length>0) {
                    text=text+", ";
                    pluriel="s";
                }
                text=text+"autheur";
            }
            if (date=="") {
                if (text.length>0) {
                    text=text+", ";
                    pluriel="s";
                }
                text=text+"date";
            }
            document.getElementById('alert').innerHTML="<p>Vous devez remplir tous les champs!</p></br><p>Vous n'avez pas rempli le"+pluriel+" champ"+pluriel+" "+text+".</p>";
            // alert("Vous n'avez pas rempli le"+pluriel+" champ"+pluriel+" "+text+".");
            document.getElementById('alert').style.transform='translateY(10%)';
            setTimeout(() => {
                document.getElementById('alert').style.transform='translateY(-100%)';
            }, 6000);
        }
        flag=false;
    }
}

function supContent(id){
    document.getElementById('li'+id).remove();
    localStorage.removeItem("savoir"+id);
    savoirs.splice(id,1);
    console.log(savoirs)
}