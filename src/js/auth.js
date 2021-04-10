new Vue({
    el: '.form-logic',

    data: {
        email: '',
        password: '',
        authUser: null
    },

    methods: {
        register() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(() => (window.location = '/dashboard'))
                .catch(error => alert(error.message));
        },

        signOut() {
            firebase.auth().signOut();
        },

        signIn() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(() => (window.location = '/dashboard'))
                .catch(error => alert(error.message));
        },

        resetPassword() {
            firebase
                .auth()
                .sendPasswordResetEmail(this.email)
                .then(() => (window.location = '/login'))
                .catch(error => alert(error.message));
        },

        signInWithGoogle() {
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase
                .auth()
                .signInWithPopup(provider)
                .catch(error => alert(error.message))
                .then(() => (window.location = '/dashboard'))
                .then(data => console.log(data.user, data.credentials.accessToken));
        }
    },

    created() {
        firebase.auth().onAuthStateChanged(user => {
            this.authUser = user;
        });
    }
});

new Vue({
    el: '.share-form-logic',
    data: {
        your_name: '',
        yourEmail: 'test@aol.com',
        friend_email: '',
        newsletterName: 'A Return To Normal',
        newsletterUrl: 'https://walsky.com/img/newsletters/spring-2021-newsletter.pdf',
        addToList: false,
    },
    methods: {
        addToMailingList() {
            if (this.addToList) {
                console.log(this.yourEmail);
            }
        }
    }
});
