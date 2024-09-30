<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'About',
  components: { Header, Footer }
}
</script>

<template>
  <div>
    <Header />
    <h1>About Me</h1>
    <p>Write a brief introduction about yourself here.</p>
    <Footer />
  </div>
</template>

<style scoped>
div {
  background: rgba(255, 255, 255, 0.125);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
