new Vue({
    el: '#newsletter-redirect',

    data: {
        email: '',
        password: '',
        authUser: null
    },

    created() {
        firebase.auth().onAuthStateChanged(user => {
            this.authUser = user;
        });
    }
});
