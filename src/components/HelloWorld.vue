<template>
  <div v-if="time" v-bind:style="{ color: color }" class="hello">
    <span>{{ time }} - {{ end }}</span>
    <span v-if="selected != 'Benutzerdefiniert'">{{ selected }}</span>
    <span v-else>{{ customText }}</span>
  </div>
</template>

<script>
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin-top: 1.5vh;
  margin-bottom: 1.5vh;
  font-weight: 500;
  font-size: 1.12em;
}

.hello {
  display: grid;
}
</style>
