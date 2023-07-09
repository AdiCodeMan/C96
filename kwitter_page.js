var firebaseConfig = {
    apiKey: "AIzaSyCXMbDIiWoNpw95jpQqMCPbsPuOBcgKWNo",
    authDomain: "kwitter-fe5c6.firebaseapp.com",
    databaseURL: "https://kwitter-fe5c6-default-rtdb.firebaseio.com",
    projectId: "kwitter-fe5c6",
    storageBucket: "kwitter-fe5c6.appspot.com",
    messagingSenderId: "91215990572",
    appId: "1:91215990572:web:6405d98fac194e888f2689"
  };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  


function send()
{
      msg= document.getElementById("msg").value ;
      firebase.database().ref(room_name).push ({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}


function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location ="index.html"
}