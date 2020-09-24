let button = document.getElementById("submit")
let message = document.getElementById("message")
let messageArea = document.getElementById("messageArea")

var firebaseConfig = {
  apiKey: "AIzaSyDeFFlWX4QlzOlRJhZ5tA1jUQWXkKEL9dA",
  authDomain: "message-board-83445.firebaseapp.com",
  databaseURL: "https://message-board-83445.firebaseio.com",
  projectId: "message-board-83445",
  storageBucket: "message-board-83445.appspot.com",
  messagingSenderId: "648366606309",
  appId: "1:648366606309:web:90bffb4350bf45d930510c",
  measurementId: "G-VTSK3RJ4CL"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

const messagesRef = db.collection('messages');
//.doc('Q0zheC7Yuozd8Zfw5nbV')

button.addEventListener("click", () => {
  sendMessage();
});

async function sendMessage() {
  if (message.value == "") {
    return;
  }
  //let messages = await messagesRef.get();
  const data = {
    message: message.value,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  }

  await messagesRef.add(data);

  message.value = ""
}

async function getMessages() {
  let messages = await messagesRef.get();

  console.log(messages.data())
}

messagesRef.orderBy("timestamp", "desc").limit(5).onSnapshot((querySnapshot)=>{
  let messages=[]
  querySnapshot.forEach(doc=>{
    messages.push(doc.data().message)
  })

  let html = ""
  //update messages
  for (let message of messages) {
    html += `<p>${message}</p>`;
  }

  messageArea.innerHTML = html;
})

message.addEventListener('keyup', function onEvent(e) {
  if (e.key == "Enter") {
      sendMessage()
  }
});