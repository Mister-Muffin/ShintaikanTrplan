<template>
  <span>Hinweis: A = Anfängerkarate | F = Fortgeschritten</span>
  <table>
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
        <td>
          <p><em> Samstag </em></p>
        </td>
        <td>
          <p><em> Sonntag </em></p>
        </td>
      </tr>
      <tr v-for="i in 5" :key="i">
        <td v-for="j in 7" :key="j">
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
import { db } from "./firebase.js";
import HelloWorld from "./components/HelloWorld.vue";
import { collection, getDocs } from "firebase/firestore";

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
    });
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
}
</style>

<style scoped>
table {
  table-layout: fixed;
  width: 100%;
  min-width: 800px;
}

td {
  border: 1px solid black;
}
</style>
