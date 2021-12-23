app.component('red-line', {
  props: {
    time: {
      type: String,
      require: true,
    },
  },
  template: /* html */ `
    <div class="red-line" :style="{ width: linePixels }"></div>`,

  computed: {
    linePixels() {
      const seconds = parseInt(this.time.slice(-2));

      const pixels = seconds * 5 + 8;

      return pixels + 'px';
    },
  },
});
