
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyA_XZy6dQJMF7IKSA6QNuOWvybdl2zjBEY",
      authDomain: "kwitter-ffc66.firebaseapp.com",
      databaseURL: "https://kwitter-ffc66-default-rtdb.firebaseio.com",
      projectId: "kwitter-ffc66",
      storageBucket: "kwitter-ffc66.appspot.com",
      messagingSenderId: "955125260499",
      appId: "1:955125260499:web:5ccd9b1607568ed1fab426",
      measurementId: "G-8W4JW65PXH"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+user_name+" !";

    function addRoom()
    {

      room_name =document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location="kwitter_page.html";
    }

    function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); }

getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      windowlocation="kwitter_page.html";

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}