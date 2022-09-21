

<template>

  <v-card class="mx-auto" max-width="544" color="">
    <v-container fluid>
    <v-text-field label="First Input" v-model.number="f_number"></v-text-field>
    <v-text-field label="Second Input" v-model.number="s_number"></v-text-field>

    <v-btn @click="doSum">Result</v-btn> <br><br>

    Sum: {{ sum }} <br>
    Difference: {{ difference }} <br>
    Product: {{ product }} <br>
    Quotient: {{ quotient }} <br>
    Average: {{ average }} <br>
    </v-container>
  </v-card>

</template>

<script setup>
import { ref } from 'vue'

const f_number = ref()
const s_number = ref()
const sum = ref(0)
const difference = ref(0)
const product = ref(0)
const quotient = ref(0)
const average = ref(0)

function doSum() {
  sum.value = f_number.value + s_number.value
  difference.value = f_number.value - s_number.value
  product.value = f_number.value * s_number.value
  quotient.value = f_number.value / s_number.value
  average.value = (f_number.value + s_number.value) / 2
  return sum.value, difference.value, product.value, quotient.value, average.value
}
</script>


