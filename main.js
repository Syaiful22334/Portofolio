const burger = document.querySelector('.burger')
const sidebar = document.querySelector('.sidebar')
const bgSidebar = document.querySelector('.bg-sidebar')
// const bgGrey =  document.querySelector('.blur')

burger.addEventListener('click', function() {
   this.classList.toggle('change')
   sidebar.classList.toggle('change')
   bgSidebar.classList.toggle('change')
   // bgGrey.classList.toggle('blur')
   
})

bgSidebar.addEventListener('click', function() {
   this.classList.remove('change')
   sidebar.classList.remove('change')
   burger.classList.remove('change')
      // bgGrey.classList.toggle('blur')

})

//progres
