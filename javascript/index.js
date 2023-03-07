const med = window.matchMedia('(max-width: 768px)')
if (med.matches) {
  let typed = new Typed('.terminal', {
    stringsElement: '#data-m',
    typeSpeed: 1,
    showCursor: false,
    onComplete: (self) => {
      restfuncs();
    }
  });
} else {
  let typed = new Typed('.terminal', {
    stringsElement: '#data',
    typeSpeed: 1,
    showCursor: false,
    onComplete: (self) => {
      restfuncs();
    }
  });
}

function restfuncs() {
  let events = document.getElementById('events');
  events.addEventListener('click', function handleclick() {

    console.log("test");
    
    $('#home').css('display','none');
    $('#form').css('display','block')
  });
  let back = document.getElementById('back');
  back.addEventListener('click', function () {
    $('#home').css('display','flex');
    $('#form').css('display','none')
  });

}
  