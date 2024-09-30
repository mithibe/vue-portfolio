<template>
  <div>
    <Header />
    <h1>My Projects ({{ projectCount }})</h1>
    <div class="projects-list">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :link="project.link"
      />
    </div>
  </div>
</template>

<script>
import { useProjectStore } from '../stores/projectStore'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ProjectCard from '../components/ProjectCard.vue'

export default {
  name: 'Projects',
  components: { Header, Footer, ProjectCard },
  setup() {
    const projectStore = useProjectStore() // Access the project store
    return {
      projects: projectStore.projects,
      projectCount: projectStore.projectCount
    }
  }
}
</script>

<style scoped>
.projects-list {
  display: flex;
  flex-wrap: wrap;
}

div {
  background: rgba(255, 255, 255, 0.125);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
