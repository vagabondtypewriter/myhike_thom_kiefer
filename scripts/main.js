function read_display_Quote() {
  db.collection("quotes").doc("Tuesday")                                                      //name of the collection and documents should matach excatly with what you have in Firestore
    .onSnapshot(tuesdayDoc => {                                                               //arrow notation
         console.log("current document data: " + tuesdayDoc.data()); 
         document.getElementById("quote-goes-here").innerHTML=tuesdayDoc.data().quote;                       //.data() returns data object
         
         //Here are other ways to access key:value data fields
         //$('#quote-goes-here').text(c.data().quote);                                       //using jquery object dot notation
         //$("#quote-goes-here").text(c.data()["quote"]);                                    //using json object indexing
    })
}
read_display_Quote()        //calling the function

function insertName(){
  firebase.auth().onAuthStateChanged(user =>{
    if (user){
      console.log(user.uid); // lets know who is the user logged in from uid
      currentUser = db.collection("users").doc(user.uid); // goes to firestore and retrieves user doc
      currentUser.get().then(userDoc=>{
        // get user name
        var user_Name = userDoc.data().name;
        $("#name-goes-here").text(user_Name);
        console.log(user_Name);
      })
    }

  })
}

insertName();