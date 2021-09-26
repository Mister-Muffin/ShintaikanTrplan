<template>
  <div v-if="time" v-bind:style="{ color: color }" class="hello">
    <span>{{ time }} - {{ end }}</span>
    <span>{{ selected }}</span>
  </div>
</template>

<script>
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "@firebase/app";

initializeApp({
  apiKey: "AIzaSyAd5SQiFe5RRm954rTLRnEPPGEYznSMSBo",
  authDomain: "shintaikan-6b670.firebaseapp.com",
  databaseURL: "https://shintaikan-6b670.firebaseio.com",
  projectId: "shintaikan-6b670",
  storageBucket: "shintaikan-6b670.appspot.com",
  messagingSenderId: "929946590509",
  appId: "1:929946590509:web:7107bf53389ab56dc507a4",
});

getFirestore();

export default {
  name: "HelloWorld",
  props: {
    day: Number,
    session: Number,
    data: Object,
  },
  data() {
    return {
      selected: this.data.group,
      time: this.data.start,
      end: this.data.end,
      customText: this.data.customText,
      color: this.data.color,
    };
  },
};
//console.log(this.data);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin-bottom: 3vh;
}
.hello {
  display: grid;
}
* {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 30px;
}

body {
  text-align: center;
}

table {
  width: 100%;
  height: 100%;
}

.header {
  color: #ffffff;
}

td {
  border: 2px solid silver;
  width: 20%;
  height: 16, 6%;
}
</style>
