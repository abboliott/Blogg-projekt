<template>
  
      <!-- Your main content goes here -->
      <router-view /> <!-- This will render the component for the current route -->
      
</template>

<script>
import ImageDownload from './assets/shocked-surprised.gif'; // Import the ImageDownload component

export default {
  components: {
    ImageDownload, // Register the ImageDownload component
  },
};
</script>

<style>
/* Your global styles go here */
</style>
