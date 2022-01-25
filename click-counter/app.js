Vue.component("click-counter", {
  template: "#click-counter-template",
  data() {
    return {
      count: 0,
    };
  },
});

const template = document.getElementById("click-counter-template");

new Vue({
  el: "#app",
});
