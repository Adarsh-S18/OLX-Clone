  import firebase from "firebase";
  import 'firebase/auth';
  import 'firebase/firestore'
  import 'firebase/storage'

  const firebaseConfig = {
      apiKey: "AIzaSyDCHXlOucEvD0JfF6UtMjwiMOoLFbaui_A",
      authDomain: "olx-clone-66c02.firebaseapp.com",
      projectId: "olx-clone-66c02",
      storageBucket: "olx-clone-66c02.appspot.com",
      messagingSenderId: "486399761308",
      appId: "1:486399761308:web:057f0c3c61fff8bc74c659",
      measurementId: "G-CDMVRMD4PG"
    };

  export default firebase.initializeApp(firebaseConfig)