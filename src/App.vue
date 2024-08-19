<script setup>
import { ref } from 'vue'

const boxColor = ref('blue')

const changeColor = () => {
  boxColor.value = boxColor.value === 'blue' ? 'red' : 'blue'
}

const selectedColor1 = ref('')
const selectedColor2 = ref('')
const favoriteColor = ref('')
const determineFavoriteColor = () => {
  if (selectedColor1.value === 'Leon' || selectedColor2.value === 'Amarillo') {
    favoriteColor.value = 'Rojo'
  } else if (selectedColor1.value === 'Agula' || selectedColor2.value === 'Naranja') {
    favoriteColor.value = 'Verde'
  } else if (selectedColor1.value === 'Cocodrilo' || selectedColor2.value === 'Rosa') {
    favoriteColor.value = 'Azul'
  } else {
    favoriteColor.value = 'Responde a las preguntas'
  }
}
</script>

<template>
  <div class="app">
    <header>
      <div class="wrapper">
        <div
          class="box"
          :style="{ backgroundColor: boxColor, width: '200px', height: '200px' }"
        ></div>
        <button @click="changeColor">Cambiar Color</button>
      </div>

      <div class="question">
        <p>¿Cuál es tu animal favorito?</p>
        <label>
          <input type="radio" value="Leon" v-model="selectedColor1" />
          León
        </label>
        <label>
          <input type="radio" value="Aguila" v-model="selectedColor1" />
          Águila
        </label>
        <label>
          <input type="radio" value="Cocodrilo" v-model="selectedColor1" />
          Cocodrilo
        </label>
      </div>

      <div class="question">
        <p>¿Cuál es tu color secundario favorito?</p>
        <label>
          <input type="radio" value="Amarillo" v-model="selectedColor2" />
          Amarillo
        </label>
        <label>
          <input type="radio" value="Naranja" v-model="selectedColor2" />
          Naranja
        </label>
        <label>
          <input type="radio" value="Rosa" v-model="selectedColor2" />
          Rosa
        </label>
      </div>

      <button @click="determineFavoriteColor">¿Cuál es mi color favorito?</button>

      <div v-if="favoriteColor">
        <p>
          Tu color favorito es: <strong>{{ favoriteColor }}</strong>
        </p>
      </div>
    </header>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.container {
  padding: 20px;
}

.question {
  margin-bottom: 20px;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

p {
  font-size: 18px;
}
</style>
