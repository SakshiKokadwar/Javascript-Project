
   function openModal() {
   const overlayElement = document.getElementById("overlay");
   overlayElement.style.display ='flex';
}

   function closeModal() {
      const overlayElement = document.getElementById("overlay");
      overlayElement.style.display = 'none';
   }

   const images = ["s1.avif", "s2.jpg", "s3.jpg", "4.jpg", "s5.jpg"];
   
   let index = 0;
   const slide = document.getElementById("slide");

      function next () {
         if(index < images.length-1){
             index++;
         }
         else{
            index=0;
         }
         slide.src = images[index];
   }

   function prev() {
      if(index > 0){
         index--;
     }
     else{
        index= images.length-1;
     }
     slide.src = images[index];
   }

   setInterval(next, 2000);

   function lightMode() {
      const lightElement = document.getElementById("headerchange");
      const lightElement2 = document.getElementById("bodychange");
      lightElement.style.background= 'pink';
      lightElement2.style.backgroundColor='white';
   }
   function darkMode() {
      const darkElement = document.getElementById("headerchange");
      const darkElement2 = document.getElementById("bodychange");
      darkElement.style.background = 'grey';
      darkElement2.style.backgroundColor='grey';
   }
