import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';

const myVM = (() => {
    // Instantiate a new Vue instance
    let vue_vm = new Vue({
        data: {
            message: "Hello from Vue!",
            
            collection: [
                { name: "Trevvy", role: "Unknown" },
                { name: "Joe", role: "Picking Up The Slack" },
                { name: "Justin", role: "Giving Brisk 0s" }
            ]
        },

        methods: {
            logClicked() {
                console.log('Clicked on an element!');
            }
        }
    }).$mount("#app");
})();