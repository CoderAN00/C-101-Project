// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}

var firebaseConfig = {
    apiKey: "AIzaSyBuF17f8JzaLiILtczQu8I3pr5-asY1BEA",
    authDomain: "c-100-project.firebaseapp.com",
    projectId: "c-100-project",
    storageBucket: "c-100-project.appspot.com",
    messagingSenderId: "840506482342",
    appId: "1:840506482342:web:d1a57bd9753cd5f6b9de67"
  };



