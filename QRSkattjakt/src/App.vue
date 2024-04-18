

<template>
  <div>
    <div>
      <img :src="imageUrl" alt="Image" />
    </div>
    <div>
      <button @click="downloadImage">Download Image</button>
    </div>
  </div>
</template>

<script>
import image from './assets/shocked-surprised.gif';
export default {
  data() {
    return {
      imageUrl: image 
    };
  },
  methods: {
    downloadImage() {
      // Create a new anchor element
      const link = document.createElement('a');
      // Set the href attribute to the image source
      link.href = this.imageUrl;
      // Set the download attribute to specify the file name
      link.download = 'image.jpg'; // Change 'image.jpg' to your desired file name
      // Simulate a click on the anchor element
      link.click();
    }
  }
};
</script>
