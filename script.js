// small helpers: nav toggle, year, fake form submit
document.addEventListener('DOMContentLoaded',function(){
  var navToggle=document.getElementById('nav-toggle');
  var nav=document.getElementById('nav');
  navToggle&&navToggle.addEventListener('click',function(){
    if(nav.style.display==='flex'){nav.style.display='none'}else{nav.style.display='flex'}
  });
  var y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();

  var form=document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit',function(ev){
      ev.preventDefault();
      var msg=document.getElementById('form-msg');
      msg.textContent='Sending...';
      setTimeout(function(){
        msg.textContent='Thanks — message received (demo).';
        form.reset();
      },700);
    });
  }
});
