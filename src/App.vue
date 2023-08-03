<template>
  <table style="width: 100%">
    <tbody v-if="response">
      <tr>
        <td>
          <p><em> Montag </em></p>
        </td>
        <td>
          <p><em> Dienstag </em></p>
        </td>
        <td>
          <p><em> Mittwoch </em></p>
        </td>
        <td>
          <p><em> Donnerstag </em></p>
        </td>
        <td>
          <p><em> Freitag </em></p>
        </td>
      </tr>
      <tr v-for="i in 5" :key="i">
        <td v-for="j in 5" :key="j">
          <HelloWorld
            v-if="response[`${j}` + `${i}`]"
            :db="db"
            :day="j"
            :session="i"
            :data="response[`${j}` + `${i}`]"
          />
          <HelloWorld v-else :db="db" :day="j" :session="i" :data="{}" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd5SQiFe5RRm954rTLRnEPPGEYznSMSBo",
  authDomain: "shintaikan-6b670.firebaseapp.com",
  databaseURL: "https://shintaikan-6b670.firebaseio.com",
  projectId: "shintaikan-6b670",
  storageBucket: "shintaikan-6b670.appspot.com",
  messagingSenderId: "929946590509",
  appId: "1:929946590509:web:7107bf53389ab56dc507a4",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
initializeApp(firebaseConfig);
let i = 1;
let j = 1;
const db = getFirestore();
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      docdata: null,
      response: {},
      user: "",
    };
  },
  async mounted() {
    const querySnapshot = await getDocs(collection(db, "times"));
    querySnapshot.forEach((doc) => {
      this.response[`${doc.id}`] = doc.data();
      console.log(`${doc.id} => ${doc.data()}`);
    });
    console.log(JSON.parse(JSON.stringify(this.$data.response)));
    console.log(
      JSON.parse(JSON.stringify(this.$data.response[`${i}` + `${j}`]))
    );
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 5vh;
}

td {
  border: 1px solid black;
  width: 20%;
}
</style>
