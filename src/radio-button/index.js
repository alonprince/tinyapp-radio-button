const noop = function () {};

Component({
  data: {
    current: '',
  },
  props: {
    btns: [],
    onChange: noop,
    choice: '',
  },
  // update的时候修改current
  didUpdate() {
    this.setData({
      current: this.props.choice,
    });
  },
  didMount() {
    if (this.props.choice) {
      this.setData({
        current: this.props.choice,
      });
    }
  },
  methods: {
    onBtnTap(ev) {
      const { name } = ev.currentTarget.dataset;
      this.props.onChange(name);
    },
  },
});
