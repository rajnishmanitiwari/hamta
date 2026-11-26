(function(){
  var H=window.HAMTA||{}, d=document, de=d.documentElement;
  de.classList.add('js');
  // header: solid on scroll, hide on scroll down
  var hdr=d.querySelector('.hdr'), last=0, fab=d.querySelector('.fab');
  function onScroll(){
    var y=window.scrollY;
    if(hdr){
      if(!hdr.classList.contains('light')) hdr.classList.toggle('solid',y>60);
      hdr.classList.toggle('hide',y>last && y>400 && !d.body.classList.contains('menu-open'));
    }
    if(fab) fab.classList.toggle('off',y<500);
    last=y;
  }
  window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
  // mobile menu
  var burger=d.querySelector('.burger');
  if(burger){burger.addEventListener('click',function(){
    var o=d.body.classList.toggle('menu-open'); burger.setAttribute('aria-expanded',o);
  });
  d.querySelectorAll('.sheet a').forEach(function(a){a.addEventListener('click',function(){d.body.classList.remove('menu-open')})});}
  // reveal on scroll
  var io='IntersectionObserver' in window? new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'}):null;
  d.querySelectorAll('.rv,.reveal-img').forEach(function(el){io?io.observe(el):el.classList.add('in')});
  // subtle parallax for [data-par]
  var pars=[].slice.call(d.querySelectorAll('[data-par]'));
  if(pars.length && !matchMedia('(prefers-reduced-motion:reduce)').matches){
    window.addEventListener('scroll',function(){pars.forEach(function(p){var r=p.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;p.style.transform='translate3d(0,'+(r.top*-.08)+'px,0) scale(1.12)'})},{passive:true});
  }
  // hero video: only play when allowed
  var hv=d.querySelector('.hero video');
  if(hv){ var cn=navigator.connection||{}; if(matchMedia('(prefers-reduced-motion:reduce)').matches||cn.saveData||/(^|-)(2g|3g)$/.test(cn.effectiveType||'')||innerWidth<700||(navigator.deviceMemory&&navigator.deviceMemory<2)){hv.remove()} else {hv.src=hv.getAttribute('data-src');hv.play&&hv.play().catch(function(){})} }
  // contact buttons from config
  d.querySelectorAll('[data-wa]').forEach(function(a){
    if(H.whatsapp){a.href='https://wa.me/'+H.whatsapp+'?text='+encodeURIComponent(a.getAttribute('data-wa')||'Hello, I would like to stay at The Hamta Homestay.');a.hidden=false}
  });
  d.querySelectorAll('[data-phone]').forEach(function(a){if(H.phone){a.href='tel:'+H.phone;a.textContent=H.phone;a.hidden=false}});
  d.querySelectorAll('[data-support]').forEach(function(a){if(H.supportEmail){a.href='mailto:'+H.supportEmail;a.textContent=H.supportEmail;a.hidden=false}});
  d.querySelectorAll('[data-email]').forEach(function(a){if(H.email){a.href='mailto:'+H.email;a.textContent=H.email;a.hidden=false}});
  // tabs
  d.querySelectorAll('[role=tablist]').forEach(function(tl){
    var tabs=tl.querySelectorAll('[role=tab]');
    tabs.forEach(function(t){t.addEventListener('click',function(){
      tabs.forEach(function(x){x.setAttribute('aria-selected',x===t)});
      d.querySelectorAll('.panel').forEach(function(p){p.hidden=p.id!==t.getAttribute('aria-controls')});
      if(t.dataset.mode){var m=d.querySelector('[name=stay_type]');if(m){m.value=t.dataset.mode;m.dispatchEvent(new Event('change'))}}
    })});
  });
  // gallery filter + lightbox
  var chips=d.querySelectorAll('.chip'), items=[].slice.call(d.querySelectorAll('.mosaic button'));
  chips.forEach(function(c){c.addEventListener('click',function(){
    chips.forEach(function(x){x.setAttribute('aria-pressed',x===c)});
    var f=c.dataset.f; items.forEach(function(b){b.hidden=!(f==='all'||b.dataset.c===f)});
  })});
  var lb=d.querySelector('.lb'),li=0;
  function vis(){return items.filter(function(b){return !b.hidden})}
  function show(i){var v=vis();if(!v.length)return;li=(i+v.length)%v.length;var im=lb.querySelector('img');im.src=v[li].dataset.full;im.alt=v[li].querySelector('img').alt;lb.classList.add('on')}
  if(lb){
    items.forEach(function(b){b.addEventListener('click',function(){show(vis().indexOf(b))})});
    lb.querySelector('.x').onclick=function(){lb.classList.remove('on')};
    lb.querySelector('.p').onclick=function(){show(li-1)};
    lb.querySelector('.n').onclick=function(){show(li+1)};
    lb.addEventListener('click',function(e){if(e.target===lb)lb.classList.remove('on')});
    d.addEventListener('keydown',function(e){if(!lb.classList.contains('on'))return;if(e.key==='Escape')lb.classList.remove('on');if(e.key==='ArrowLeft')show(li-1);if(e.key==='ArrowRight')show(li+1)});
  }
  // booking form + estimator
  var f=d.querySelector('#bookform');
  var fmt=function(n){return '\u20B9'+Math.round(n).toLocaleString('en-IN')};
  if(f){
    var R=H.rates, q=function(n){return f.elements[n]};
    var inEl=q('check_in'), outEl=q('check_out'), today=new Date().toISOString().slice(0,10);
    inEl.min=today; outEl.min=today;
    var estimate=function(){
      var type=q('stay_type').value, guests=+q('guests').value||1, meals=q('meals').value==='yes', heater=q('heater')&&q('heater').checked;
      var rooms=Math.max(1,+q('rooms').value||1), out=d.getElementById('est-out'), note=d.getElementById('est-note');
      var total=0, txt='';
      if(type==='monthly'){
        var months=Math.max(1,+q('months').value||1), duo=guests>=2;
        var per=meals?(duo?R.monthly.duoMeals:R.monthly.soloMeals):(duo?R.monthly.duo:R.monthly.solo);
        total=per*months*rooms+(heater?R.monthly.heater*months*rooms:0);
        txt=fmt(total); note.textContent=rooms+' room'+(rooms>1?'s':'')+' x '+months+' month'+(months>1?'s':'')+(heater?', heater included':'')+'. Estimate only, not a final total. Peak dates are not priced here and cost more. An extra mattress for a third guest is quoted separately. We confirm the final amount before you pay.';
      } else {
        if(!inEl.value||!outEl.value){out.textContent='Pick your dates';note.textContent='Nightly rate from '+fmt(R.nightly.room)+' per room.';return}
        var n=Math.round((new Date(outEl.value)-new Date(inEl.value))/864e5);
        if(n<1){out.textContent='Check-out must be after check-in';note.textContent='';return}
        var perN=meals?(guests>=2?R.nightly.meal2:R.nightly.meal1):R.nightly.room;
        total=perN*n*rooms; var disc=0;
        if(n>=7){disc=total*R.weeklyDiscount; total-=disc}
        if(heater) total+=R.nightly.heater*n*rooms;
        txt=fmt(total); note.textContent=n+' night'+(n>1?'s':'')+' x '+rooms+' room'+(rooms>1?'s':'')+(disc?', 15% weekly discount applied':'')+(heater?', heater included':'')+'. Estimate only, not a final total. Peak dates are not priced here and cost more. An extra mattress for a third guest is quoted separately. We confirm the final amount before you pay.';
      }
      out.textContent=txt;
    };
    var sync=function(){
      var m=q('stay_type').value==='monthly';
      d.querySelectorAll('.only-daily').forEach(function(e){e.hidden=m});
      d.querySelectorAll('.only-monthly').forEach(function(e){e.hidden=!m});
      inEl.required=true; outEl.required=!m; estimate();
    };
    f.addEventListener('input',estimate); f.addEventListener('change',sync);
    var qs=new URLSearchParams(location.search); if(qs.get('type')==='monthly'){q('stay_type').value='monthly'}
    sync();
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var msg=d.getElementById('form-msg'), btn=f.querySelector('button[type=submit]');
      if(f.elements['_gotcha'].value) return;
      var data={}; new FormData(f).forEach(function(v,k){if(k!=='_gotcha')data[k]=v});
      data._subject='NEW BOOKING REQUEST (payment pending) from the website, Hamta Homestay: '+(data.name||'guest')+', '+(data.check_in||''); data._template='table'; data._captcha='false';
      data.estimate_payment_status='PAYMENT PENDING, nothing paid online'; data.estimate='Estimated total '+d.getElementById('est-out').textContent+' | '+d.getElementById('est-note').textContent;
      btn.disabled=true; btn.textContent='Sending...';
      var done=function(){f.reset();sync();msg.className='msg ok';msg.hidden=false;msg.textContent='Thank you. Your request is with us. We will reply with availability and a final quote, usually within a few hours.';btn.disabled=false;btn.textContent='Send booking request'};
      var fail=function(m){msg.className='msg err';msg.hidden=false;msg.textContent=m||('We could not send that. Nothing was sent. Please try again'+(H.email?' or email '+H.email:'')+'.');btn.disabled=false;btn.textContent='Send booking request'};
      if(!H.formLive||!H.formEndpoint){fail('Booking requests are not open yet. Nothing was sent. Please check back soon.');return}
      fetch(H.formEndpoint,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(data)})
        .then(function(r){return r.json().catch(function(){return {}}).then(function(j){if(r.ok&&String(j.success)==='true'&&!/activat/i.test(j.message||''))done();else fail()})}).catch(function(){fail()});
    });
  }
  var cf=d.querySelector('#contactform');
  if(cf){cf.addEventListener('submit',function(e){
    e.preventDefault(); var msg=d.getElementById('form-msg'), btn=cf.querySelector('button[type=submit]');
    if(cf.elements['_gotcha'].value) return;
    var data={}; new FormData(cf).forEach(function(v,k){if(k!=='_gotcha')data[k]=v});
    data._subject='NEW MESSAGE from the website, Hamta Homestay: '+(data.name||'guest'); data._template='table'; data._captcha='false';
    btn.disabled=true; btn.textContent='Sending...';
    if(!H.formLive||!H.contactEndpoint){msg.className='msg err';msg.hidden=false;msg.textContent='Messages are not open yet. Nothing was sent. Please check back soon.';btn.disabled=false;btn.textContent='Send message';return}
    fetch(H.contactEndpoint,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(data)})
      .then(function(r){if(!r.ok)throw 0;return r.json()}).then(function(j){if(String(j.success)!=='true'||/activat/i.test(j.message||''))throw 0;cf.reset();msg.className='msg ok';msg.hidden=false;msg.textContent='Thank you. We will reply soon.';})
      .catch(function(){msg.className='msg err';msg.hidden=false;msg.textContent='Could not send. Nothing was sent. Please try again.'})
      .finally(function(){btn.disabled=false;btn.textContent='Send message'});
  })}
  d.querySelectorAll('[data-year]').forEach(function(e){e.textContent=new Date().getFullYear()});
})();
