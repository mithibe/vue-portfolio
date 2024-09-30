<template>
  <div>
    <Header />
    <h1>Welcome to My Portfolio</h1>
    <p>Here you can find my projects and more about me.</p>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: { Header, Footer }
}
</script>

<style scoped>
div {
  background: rgba(255, 255, 255, 0.125);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
