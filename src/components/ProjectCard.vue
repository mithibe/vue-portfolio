<template>
  <div class="project-card">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <a :href="link" target="_blank">View Project</a>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    title: String,
    description: String,
    link: String
  }
}
</script>

<style scoped></style>
