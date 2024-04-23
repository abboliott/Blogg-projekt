<template>
    <div class="background">
      <div class="catbild">'
        <div class="warningheader">
            Oops Something Went Wrong!
        </div>
        <div class="alien">
          <img :src="imageUrl" alt="Image" />
        </div>
        <!-- <div class="download">
          <button @click="downloadImage">Download Image</button>
        </div> -->
      </div>
    </div>
  </template>
  
  <script>
  import image from '../assets/ezgif.com-animated-gif-maker.gif';
  
  export default {
    data() {
      return {
        imageUrl: image
      };
    },
    methods: {
      downloadImage() {
        const link = document.createElement('a');
        link.href = this.imageUrl;
        link.download = 'image.jpg';
        link.click();
      }
    }
  };
  </script>
  
  <style>
  body {
    margin:0;
  }
  .catbild {
    display: flex;
    justify-content: center;
    align-items: center;
    border-width: 5px;
    height: 100%;
    flex-direction: column;
  }
  
  .background {
    
    height: 100vh;
  }
  
  .alien {
    display: flex;
    justify-content: center;
    
  }
  
  .alien img {
    width: 50%; /* Set the width to 50% of its container */
    height: auto; /* Let the height adjust proportionally */
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3); /* Add shadow to the image */
}
    .warningheader {
        font-size: 60px;
        margin-bottom: 20px;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
    }
  </style>
  