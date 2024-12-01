import { defineStore } from "pinia"
export const useAuthStore = defineStore('authStore', {
  state: () => {
    return {
      user: null,
      errors: {},
    };
  },
  actions: {
    //get the current user and update the state
    async getUser() {
      if (localStorage.getItem('token')) {
        const res = await fetch('api/user', {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          },
        });
        const data = await res.json();
        if (res.ok) {
          this.user = data;
          this.errors = {};
        }
        console.log(data);
      }
    },
    // register a new user
    async authenticate(apiRoute, formData) {
      const res = await fetch(`/api/${apiRoute}`, {
        method: "post",
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.errors) {
        this.errors = data.errors;
      }
      else {
        this.errors = {};
        localStorage.setItem('token', data.token);
        this.user = data.user;
        // redirect to the home page
        this.router.push({ name: "home" })
      }
    },
    // logout
    async logout() {
      const res = await fetch('/api/logout', {
        method: "post",
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        },
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        //reset the data
        this.user = null;
        this.errors = {};
        localStorage.removeItem('token');
        //redirect to login
        this.router.push({ name: "login" });
      }
    },
  },
});