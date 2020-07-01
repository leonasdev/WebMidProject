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
        var a=document.createElement("a");
        var img=document.createElement("img");
        var h3=document.createElement("h3");
        div.className="col-12 col-sm-4 col-md-3 col-lg-2 mb-2";
        a.className="d-flex flex-column align-items-center";
        a.style="text-decoration:none;";
        img.alt="";
        h3.className="text_Center mt-1";
        champion.get().then(doc=>{
            img.src=`${doc.data().champion_pic}`;
            h3.innerHTML=`${doc.data().name}`;
            resolve();
        });
        a.appendChild(img);
        a.appendChild(h3);
        div.appendChild(a);
        document.getElementById("Champions").appendChild(div);
    });
}