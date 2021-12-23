app.component('clock', {
  props: {
    time: {
      type: String,
      required: true,
    },
  },
  template: /* html */ `
        <div class="clock-container">
            <p class="clock-text">{{ time }}</p>
        </div>`,
});
