var firebaseConfig = {
      apiKey: "AIzaSyCbSDSSJgtGxPSOH2Y8ZxaGNRY1dHpCBtw",
      authDomain: "kwitter-90f45.firebaseapp.com",
      databaseURL: "https://kwitter-90f45-default-rtdb.firebaseio.com",
      projectId: "kwitter-90f45",
      storageBucket: "kwitter-90f45.appspot.com",
      messagingSenderId: "508799839539",
      appId: "1:508799839539:web:98eb31e92e3b38b9362246",
      measurementId: "G-HJ54FPFMP1"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("welcome").innerHTML = "Welcome " + user_name;

function add_room() {
     room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});
     localStorage.setItem("room_name", room_name);
     window.location = "kwitter_page.html";
}







function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div> <hr>";
       document.getElementById("output").innerHTML += row;
     
      });});}
getData();
function redirect(name) {
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html"
}
function logout() {
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location = "index.html";     
}