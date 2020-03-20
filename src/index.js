function toggleNav() {
    var body = document.body;
    var ham = document.getElementById('js-ham');
    var blackBg = document.getElementById('js-black-bg');
  
    ham.addEventListener('click', function() {
      body.classList.toggle('nav-open');
    });
    blackBg.addEventListener('click', function() {
      body.classList.remove('nav-open');
    });
  }
  toggleNav();