app.component('input-wall', {
  template: /* html */ `
    <div class="input-box">
        <label class="labels" for="textInput">Type something here!</label>
        <textarea
            class="text-input"
            type="text"
            id="textInput"
            name="textInput"
            rows="10"
            cols="35"
            @input="handleChange($event.target.value)" />
    </div>`,
  methods: {
    handleChange(inputValue) {
      this.$emit('input-wall-value', inputValue);
    },
  },
});
