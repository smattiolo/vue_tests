const app = Vue.createApp({
  data() {
    console.log('test');

    return {
      time: '',
      outputText: '',
    };
  },

  methods: {
    writeText(inputValue) {
      this.outputText = inputValue;
    },
  },

  computed: {
    getCurrentTime() {
      setInterval(() => {
        const dateTime = new Date();
        const hours = dateTime.getHours().toString();
        const minutes = dateTime.getMinutes().toString();
        const seconds = dateTime.getSeconds().toString();

        this.time =
          (hours.length === 1 ? '0' + hours : hours) +
          ':' +
          (minutes.length === 1 ? '0' + minutes : minutes) +
          ':' +
          (seconds.length === 1 ? '0' + seconds : seconds);
      }, 1000);
    },
  },
});
