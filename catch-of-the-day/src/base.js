import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB8rV5oqW9pimkAuL60v_IBgYJAy4oNgbU",
    authDomain: "catch-of-the-day-826e1.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-826e1.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base