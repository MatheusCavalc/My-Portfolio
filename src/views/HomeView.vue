<script setup>
import MainLayout from '../layouts/MainLayout.vue';
import ContactLinks from '../components/ContactLinks.vue'
import AboutMe from '../components/AboutMe.vue';
import MyProjects from '../components/MyProjects.vue';
import OtherProjects from '../components/OtherProjects.vue';
import LastLinks from '../components/LastLinks.vue';
import MyTechnologies from '../components/MyTechnologies.vue';
import WelcomeSection from '../components/WelcomeSection.vue';
</script>

<template>
  <MainLayout>

    <WelcomeSection />

    <AboutMe />

    <MyTechnologies />

    <MyProjects />

    <OtherProjects />

    <LastLinks />

  </MainLayout>
</template>
