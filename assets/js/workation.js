(function(){
var d=document;
d.documentElement.classList.add('js');
var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
/* reveal */
var els=[].slice.call(d.querySelectorAll('[data-pc]'));
var title=d.querySelector('.wk-title');
if('IntersectionObserver' in window&&!rm){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var t=e.target;var sib=t.parentNode?[].indexOf.call(t.parentNode.children,t):0;setTimeout(function(){t.classList.add('in')},(sib%3)*110);io.unobserve(t)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  els.forEach(function(e){io.observe(e)});
  if(title){setTimeout(function(){title.classList.add('in')},80)}
}else{els.forEach(function(e){e.classList.add('in')});if(title)title.classList.add('in')}
/* statement words light up on scroll */
var big=d.querySelector('[data-wk-words]');
if(big){var words=big.textContent.trim().split(/\s+/);big.setAttribute('aria-label',big.textContent.trim());big.innerHTML=words.map(function(w){return '<span class="w" aria-hidden="true">'+w+'</span>'}).join(' ');
  var ws=[].slice.call(big.querySelectorAll('.w'));
  var upd=function(){var r=big.getBoundingClientRect(),vh=innerHeight;var p=Math.min(1,Math.max(0,(vh*.85-r.top)/(r.height+vh*.35)));var n=Math.round(p*ws.length);ws.forEach(function(w,i){if(i<n||rm)w.classList.add('on')})};
  addEventListener('scroll',upd,{passive:true});addEventListener('resize',upd);upd()}
/* string drawn through the wall on scroll (desktop) */
var wall=d.querySelector('[data-wk-wall]'),path=wall&&wall.querySelector('.wk-thread');
function layoutString(){
  if(!path)return;var W=wall.clientWidth,Hh=wall.clientHeight;var cards=[].slice.call(wall.querySelectorAll('.pc,.sn'));
  if(innerWidth<=760||!cards.length)return;var wr=wall.getBoundingClientRect();
  var pts=cards.map(function(c){var r=c.getBoundingClientRect();return [r.left-wr.left+r.width/2,r.top-wr.top-4]});
  var dstr='M'+pts[0][0]+' '+pts[0][1];
  for(var i=1;i<pts.length;i++){var a=pts[i-1],b=pts[i];var my=Math.max(a[1],b[1])+40;dstr+=' Q'+((a[0]+b[0])/2)+' '+my+' '+b[0]+' '+b[1]}
  path.setAttribute('d',dstr);var L=path.getTotalLength();path.style.setProperty('--len',L);path.style.setProperty('--off',rm?0:L);path.style.strokeDashoffset=rm?0:L;path._L=L;drawString()}
function drawString(){
  if(!path||!path._L||rm)return;var r=wall.getBoundingClientRect(),vh=innerHeight;var p=Math.min(1,Math.max(0,(vh*.75-r.top)/(r.height+vh*.1)));path.style.strokeDashoffset=path._L*(1-p)}
if(wall){addEventListener('scroll',drawString,{passive:true});addEventListener('resize',layoutString);addEventListener('load',layoutString);setTimeout(layoutString,400);setTimeout(layoutString,1500)}
/* light parallax on hero cluster */
var cl=d.querySelector('.wk-cluster');
if(cl&&!rm&&matchMedia('(hover:hover)').matches){var kids=[].slice.call(cl.children);addEventListener('scroll',function(){var y=Math.min(scrollY,700);kids.forEach(function(k,i){k.style.translate='0 '+(-y*(.03+i*.03))+'px'})},{passive:true})}
/* form */
var f=d.getElementById('workform');
if(f){f.addEventListener('submit',function(e){
  e.preventDefault();var H=window.HAMTA||{};var msg=d.getElementById('wk-msg'),btn=f.querySelector('button[type=submit]');
  if(f.elements['_gotcha'].value)return;
  var bad=[];[].forEach.call(f.querySelectorAll('[required]'),function(el){var ok=el.type==='checkbox'?el.checked:String(el.value).trim()!=='';if(el.type==='email'&&ok)ok=/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value);el.classList.toggle('bad',!ok);if(!ok)bad.push(el)});
  var show=function(c,t){msg.className='msg '+c;msg.hidden=false;msg.textContent=t};
  if(bad.length){show('err','Please fill the highlighted fields. Nothing was sent.');bad[0].focus();return}
  var data={};new FormData(f).forEach(function(v,k){if(k!=='_gotcha')data[k]=v});
  data.consent=data.consent?'yes':'no';
  data._subject='NEW WORKATION ENQUIRY (separate workation pricing): '+(data.organisation||data.name||'guest')+', '+(data.people||'?')+' people';
  data._template='table';data._captcha='false';data._replyto=data.email;data.enquiry_type='Workation (separate pricing, not a standard booking)';
  btn.disabled=true;btn.textContent='Sending...';
  var reset=function(){btn.disabled=false;btn.textContent='Send workation enquiry'};
  if(!H.formLive||!H.contactEndpoint){show('err','Enquiries are not open yet. Nothing was sent. Please check back soon.');reset();return}
  fetch(H.contactEndpoint,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(data)})
   .then(function(r){if(!r.ok)throw 0;return r.json()})
   .then(function(j){if(String(j.success)!=='true'||/activat/i.test(j.message||''))throw 0;f.querySelectorAll('fieldset,.chk,button[type=submit]').forEach(function(x){x.hidden=true});show('ok','Thank you. We have your workation enquiry and will reply soon. Nothing is booked or charged yet.')})
   .catch(function(){show('err','We could not confirm that your enquiry was sent. Your details are still in the form. Please try again, or message us on WhatsApp'+(H.email?' or email '+H.email:'')+' so we do not miss it.');reset()});
})}
})();
