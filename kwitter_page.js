//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("send_message").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("send_message").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data)

name = message_data['name'];
like = message_data['like'];
message = message_data['message'];

name_with_tag = "<h4> "+name+" <img class='user_tick' src='tick.png'> </h4>";
message_with_tag = "<h4 class='message_h4'> "+message+"</h4>";
like_with_tag = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> like: "+like+"</span></button> <hr>";

row = name_with_tag+message_with_tag+like_with_tag+span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";     
     }