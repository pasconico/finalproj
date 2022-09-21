<template>
    <v-container fluid class="">
        <h1 class="text-center font-weight-bold text-h1 mt-16 mb-10 text-grey-darken-4">
            Sign In
        </h1>
        <v-card color="" class="border-rounded mx-auto" style="width: 600px">
            <v-container>
                <v-card-text class="text-body-1 font-weight-bold mb-5">
                    Log in your email and password to start using the app</v-card-text>
                <v-text-field type="text" placeholder="Email" v-model="email"></v-text-field>
                <v-text-field type="password" placeholder="Password" v-model="password"></v-text-field>
                <v-btn @click="signin" class="text-white me-3" color="grey-darken-4">Sign in</v-btn>
            </v-container>
        </v-card>
    </v-container>
</template>
<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, setDoc, doc } from "firebase/firestore";
import { useRouter } from "vue-router";
//import Swal from "sweetalert2";
const email = ref("");
const password = ref("");
const router = useRouter();
const db = getFirestore();
const userRef = collection(db, "users");
function signin() {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            // addDoc(userRef, { email: email.value, score: 0 });
            setDoc(doc(db, "users", email.value), { email: email.value, score: 0 });
            console.log(userRef.id);

            router.push("/axiosDemo");
        })
        .catch((error) => {

        });
}


</script>
<style scoped>

</style>