(function(){
  var d=document, rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var words=d.querySelectorAll('[data-words]');
  words.forEach(function(el){
    var t=el.textContent.trim().split(/\s+/);
    el.setAttribute('aria-label',el.textContent.trim());
    el.innerHTML=t.map(function(w){return '<span class="w" aria-hidden="true">'+w+'</span>'}).join(' ');
  });
  d.querySelectorAll('[data-strips] .strip-i').forEach(function(a,i,all){
    a.addEventListener('click',function(e){
      if(matchMedia('(hover:hover)').matches) return;
      if(!a.classList.contains('on')){e.preventDefault();all.forEach(function(x){x.classList.remove('on')});a.classList.add('on')}
    });
  });
  var s=d.querySelectorAll('[data-strips]');
  if(s.length&&!matchMedia('(hover:hover)').matches){var f=s[0].querySelector('.strip-i');if(f)f.classList.add('on')}
  if(rm) return;
  var hero=d.querySelector('[data-hero]'), pin=d.querySelector('[data-pin]'), pw=[].slice.call(d.querySelectorAll('.w'));
  var vh=innerHeight, ticking=false;
  function frame(){
    ticking=false; var y=scrollY, vh=innerHeight;
    if(hero){var p=Math.min(1,Math.max(0,y/(vh*.9)));hero.style.setProperty('--hp',p.toFixed(3));}
    if(pin){var r=pin.getBoundingClientRect(),q=-r.top/(r.height-vh);q=Math.min(1,Math.max(0,q));q=q*q*(3-2*q);pin.style.setProperty('--p',q.toFixed(3));}
    for(var i=0;i<words.length;i++){
      var rr=words[i].getBoundingClientRect();
      var prog=(vh*.88-rr.top)/(vh*.55); var ws=words[i].querySelectorAll('.w');
      for(var k=0;k<ws.length;k++){ws[k].classList.toggle('on',prog*ws.length>k+.5)}
    }
  }
  function onS(){if(!ticking){ticking=true;requestAnimationFrame(frame)}}
  addEventListener('scroll',onS,{passive:true});addEventListener('resize',onS);frame();
})();
