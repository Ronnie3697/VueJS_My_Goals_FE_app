const app = Vue.createApp({
  data() {
    return {
      goals: [],
      userInput: '',
      showGoals: true,
    };
  },

  methods: {
    toggleBtn() {
      this.showGoals = !this.showGoals;
    },
    addGoal() {
      if (this.goals.includes(this.userInput || this.userInput != '')) {
        alert('This goal has been already added!');
      } else if (this.userInput != '') {
        this.goals.push(this.userInput);
        this.userInput = '';
      }
    },
    removeGoal(i) {
      this.goals.splice(i, 1);
    },
  },
});

app.mount('#vue-app');
