<template>

     <v-card class="mx-auto" max-width="544" color="">
          <v-card-title> String Manipulator </v-card-title>

          <v-text-field label="Enter a String" v-model="text"></v-text-field>

          <v-card-actions>
               <v-btn @click="doCompute">
                    Count Vowel
               </v-btn>
          </v-card-actions>
          <v-container>
               Vowels: {{ vowels }} <br>
               Numbers: {{ numbers }} <br>
               Consonants: {{ consonants }} <br>
               Modified: {{ converted }} <br>
          </v-container>
     </v-card>

</template>

<script setup>
import { ref } from 'vue'

const text = ref()
const vowels = ref(0)
const numbers = ref(0)
const consonants = ref(0)
const converted = ref()

function doCompute() {
     vowels.value = text.value.match(/[aeiou]/gi).length; // match to AEIOU
     numbers.value = text.value.match(/\d/g)?.length || 0; //match to digits otherwise 0
     consonants.value = text.value.match(/[bcdfghjklmnpqrstvwxyz]/gi).length; //match to consonant
     converted.value = text.value.replace(/[aeiou]/gi, '*');
     return vowels.value, numbers.value, consonants.value, converted.value
}

</script>
