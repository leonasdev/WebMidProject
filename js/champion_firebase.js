var firebaseConfig = {
    apiKey: "AIzaSyBJJXFyP4AI6nHfcEu4dOpKh4vNvL6VMSs",
    authDomain: "html-d6e77.firebaseapp.com",
    databaseURL: "https://html-d6e77.firebaseio.com",
    projectId: "html-d6e77",
    storageBucket: "html-d6e77.appspot.com",
    messagingSenderId: "854363698741",
    appId: "1:854363698741:web:37724a3745eda6b401637c",
    measurementId: "G-14W2QQJ3BV"
};
firebase.initializeApp(firebaseConfig);
var db=firebase.firestore();
$(document).ready(async function(){
    var i;
    for (i = 0; i < 30; i++) {
        var champion=db.collection("Champions").doc(String(i));
        await getdata(champion);
    }
});
function getdata(champion){
    return new Promise(resolve => {
        var div=document.createElement("div");
        var a1=document.createElement("a");
        var a2=document.createElement("a");
        var img=document.createElement("img");
        var h3=document.createElement("h3");
        
        a1.href="Combos.html";
        a1.className="col-6 col-sm-4 col-md-3 col-lg-2 pb-3 pt-3 ";
        a1.style="text-decoration:none;";
        a2.className="d-flex flex-column align-items-center";
        a2.style="text-decoration:none;";
        img.alt="";
        img.className="shadow";
        h3.className="text_Center pt-2";
        champion.get().then(doc=>{
            img.src=`${doc.data().champion_pic}`;
            h3.innerHTML=`${doc.data().name}`;
            resolve();
        });
        a2.appendChild(img);
        a2.appendChild(h3);
        div.appendChild(a2);
        a1.appendChild(div)
        document.getElementById("Champions").appendChild(a1);
    });
}