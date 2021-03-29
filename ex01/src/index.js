let keys = document.querySelectorAll('.keyboard-wrapper .key .row button'),
  keyPad = document.querySelector('.keyboard-wrapper .key'),
  display = document.querySelector( '.keyboard-wrapper .display');
  if(keys && keyPad && display){
      let capsLockMode = false;
      let shiftMode = false;
      
    keys.forEach(key=>{
       key.addEventListener('click', function(){
           if(this.classList.contains('caps')){
              
               this.classList.toggle('active');
               keyPad.classList.toggle('uppercase');
               capsLockMode ? capsLockMode = false : capsLockMode = true;
               

           }else if(this.classList.contains('backspace')){
               let str = display.innerText;
               display.innerText = str.substring(0, str.length-1);
           }else if(this.classList.contains( 'shift')){
               this.classList.toggle('active');
               keyPad.classList.toggle('uppercase')
               shiftMode ? shiftMode = false : shiftMode = true;
               
           }
           else if(this.classList.contains('enter')){
           
            let str = display.innerText;
            display.innerText = str + '\n';
             
           }
              
             
           
             
               if(capsLockMode){
                   display.innerText += this.dataset.key.toUpperCase();
                   
               }
               else if(capsLockMode == false && shiftMode == false ){
                display.innerText += this.dataset.key.toLowerCase();

               }
               if(shiftMode == true && capsLockMode == false){
                   
                   display.innerText += this.dataset.key.toUpperCase();
                   
                   shiftMode = false;
               }
              
           

       });
    });
  }
