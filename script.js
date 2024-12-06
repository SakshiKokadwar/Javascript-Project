
   function openModal() {
   const overlayElement = document.getElementById("overlay");
   overlayElement.style.display ='flex';
}

   function closeModal() {
      const overlayElement = document.getElementById("overlay");
      overlayElement.style.display = 'none';
   }

   const images = ["1.jpeg", "2.jpeg", "3.webp", "4.jpg", "5.jpg"];
   
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
