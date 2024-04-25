<template>
    <div class="background"><img :src="imageUrl" class="skib">
      <div class="catbild">
        <div class="alien">
          <!-- <img :src="imageUrl" alt="Image" /> -->
        </div>
        <div class="warningheader">
            Oops Something Went Wrong!
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
  .skib {
    position: absolute;
    width:100%;
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
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100vh;
    width: 100%;
    position: relative;
    
  }
  
  <!-- .alien img {
    width: full; /* Set the width to 50% of its container */
    height: auto; /* Let the height adjust proportionally */
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3); /* Add shadow to the image */
} -->
    .warningheader {
      background-color:rgba(5, 5, 5, 0.716);
      color: white;
      font-size: 60px;
      margin-bottom: 20px;
      top: 10px;
      font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      position: absolute;
      border-style:solid;
      border-radius: 15px;
      border-width:thick;
      border-color:rgba(5, 5, 5, 0.716);
    }
  </style>
  