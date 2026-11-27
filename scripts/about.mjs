// /about: customer-facing one-page overview. Not in nav, footer or sitemap. Shared with guests directly.
const MAPS='https://www.google.com/maps/place/The+Hamta+Homestay+Manali/@32.1440721,77.1609703,17z/data=!3m1!4b1!4m9!3m8!1s0x39048b7177420655:0x760c7d2431095132!5m2!4m1!1i2!8m2!3d32.1440721!4d77.1609703!16s%2Fg%2F11z5d9dnh1?entry=ttu&g_ep=EgoyMDI2MTEyMy4wIKXMDSoASAFQAw%3D%3D';
const ROUTE='https://www.google.com/maps/dir/?api=1&origin=New+Delhi&destination=32.1440721,77.1609703&travelmode=driving';
const row=(a,b,c)=>`<tr><th>${a}${c?`<small>${c}</small>`:''}</th><td class="n">${b}</td></tr>`;
export default function about({img,pageHero,PH}){
 const li=a=>a.map(x=>`<li>${x}</li>`).join('');
 return {title:'About The Hamta Homestay, Manali | Rooms, Rates and How to Reach Us',desc:"Your mountain home in Manali. Welcoming rooms, home-cooked meals and a slower pace, whether you're staying for a few nights or settling in for a month.",nosite:true,
 body:`${pageHero('The Hamta Homestay','Manali, Himachal Pradesh',PH.hero,PH.heroAlt)}
<section class="s-intro"><div class="wrap narrow"><p class="big-words" data-words>Eight wood-lined rooms, home cooking and good electricity in a quiet mountain home. Stay for a few nights or settle in for a month.</p></div></section>
<section><div class="wrap ab-grid">${PH.strip.map(([n,a])=>`<figure class="rv">${img(n,a,{sizes:'(max-width:860px) 46vw, 30vw'})}</figure>`).join('')}</div></section>
<section class="facil"><div class="wrap">
 <p class="kicker">The view</p>
 <div class="ab-full"><figure class="rv">${img('abt-window-1','HAMTA Homestay lettering over pine forest and mountains seen from a homestay window',{sizes:'(max-width:860px) 92vw, 760px'})}</figure><figure class="rv">${img('abt-window-2','HAMTA Homestay lettering over cedar trees, hills and clouds seen from a homestay window',{sizes:'(max-width:860px) 92vw, 760px'})}</figure></div>
 <p class="note">Views from the homestay windows.</p>
 <p class="kicker" style="margin-top:36px">Nearby views</p>
 <div class="ab-full"><figure class="rv ab-tall">${img('abt-view-2','HAMTA Homestay lettering over snow-capped peaks and a valley with autumn trees, a nearby view',{sizes:'(max-width:860px) 92vw, 520px'})}</figure><figure class="rv">${img('abt-view-3','HAMTA Homestay lettering over a river below snowy mountains, a nearby view',{sizes:'(max-width:860px) 92vw, 760px'})}</figure></div>
 <p class="note">Mountain views close to the homestay.</p>
 <p class="kicker" style="margin-top:36px">Places and activities guests go to</p>
 <div class="ab-views"><figure class="rv">${img('act-1','A paraglider above snow-dusted mountains and pine forest',{sizes:'(max-width:860px) 92vw, 46vw'})}</figure><figure class="rv d1">${img('act-2','A rider on a motorcycle outside a glass-fronted building with prayer flags, snow peaks behind',{sizes:'(max-width:860px) 92vw, 46vw'})}</figure></div>
 <div class="ab-full"><figure class="rv ab-tall">${img('night-nearby','Night view nearby, a lit venue beside a river',{sizes:'(max-width:860px) 92vw, 520px'})}</figure></div>
 <p class="note">A night view nearby.</p>
</div></section>
<section class="rates"><div class="wrap">
 <p class="kicker">Rooms and rates</p>
 <p class="lead">Eight rooms, each with a double bed. Two guests per room, a third on an extra mattress on request. Breakfast is included with daily stays. Prices are in rupees, taxes included, the same for guests from India and abroad.</p>
 <table class="ptable"><tbody>
  ${row('Stay with breakfast','₹2,000<small>per night</small>','Up to 2 guests, per room')}
  ${row('Full meal package, one guest','₹2,500<small>per night</small>','Meals cooked by our chef, breakfast included')}
  ${row('Full meal package, two guests','₹3,000<small>per night</small>','Same room')}
  ${row('Seven nights or more','15% off','15% off the room and meals bill')}
  ${row('Stay, one guest','₹15,000<small>per month</small>','Monthly. Cook and cleaner available')}
  ${row('Stay, two guests','₹20,000<small>per month</small>','Same room')}
  ${row('Full meal package, one guest','₹24,000<small>per month</small>','Meals cooked by our chef')}
  ${row('Full meal package, two guests','₹30,000<small>per month</small>','Same room')}
  ${row('Heater','₹1,000<small>per day</small>','Only if you use one. ₹3,000 per month for monthly stays')}
 </tbody></table>
 <p class="note">Peak dates cost more: national holidays, busy weekends (Saturday and Sunday, or a holiday joined to a weekend), the last week of December, the first week of January and the first two weeks of February. From December to mid-February, rates with breakfast range from ₹2,000 to ₹3,000 a night. We confirm the exact amount for your dates before you pay. A month is the calendar month or 30 days.</p>
</div></section>
<section class="facil"><div class="wrap">
 <p class="kicker">What is on the property</p>
 <p class="lead">Electricity here is good. We have an optional power backup, and on most days you will not need it.</p>
 <div class="ab-two"><div><h3>In every room</h3><ul class="plain">${li(['Double bed, mattress and pillows','Cupboard and wooden drawers','Table and chair','Private washroom with geyser','Balcony access','Electric kettle','Lights, fan and exhaust','Heater (electricity charged only if you use it)'])}</ul></div>
 <div><h3>Shared and around the house</h3><ul class="plain">${li(['Free Wi-Fi','Washing machine and free laundry','Electric induction and gas cylinder','Fridge','Shared kitchen','Common lounge with work tables, TV area and games room','Gym accessories','Garden','Free parking on site','Riverside and mountain side views'])}</ul></div></div>
</div></section>
<section><div class="wrap narrow ab-rules">
 <p class="kicker">House rules</p>
 <ul class="plain"><li>Pets, children and unmarried couples are welcome, with no limit. Alcohol is accepted. Dogs live on the property.</li><li>Smoking is not allowed. The property is non-smoking throughout.</li><li>Check-in is from 12 PM, check-out at 11 AM. Arrive at any time, at no extra charge.</li><li>This is a quiet mountain home. Please keep noise low and treat the space with care.</li><li>There is road access to the property. Wheelchair and step-free access are not confirmed, so please ask us before you book.</li><li>Yoga and meditation sessions are in-house and are not included in the room price.</li></ul>
 <p class="kicker" style="margin-top:44px">Booking and cancellation</p>
 <p>Message us your dates. We confirm availability and a final quote, and you pay in advance to confirm the stay. A request is not a booking until we confirm it.</p>
 <table class="ptable"><tbody>${row('10 days before arrival','Full refund')}${row('7 days before arrival','60% refund')}${row('3 days before arrival','30% refund')}${row('24 hours before arrival','No refund')}</tbody></table>
 <p class="note">If we cannot provide your room or food, or anything we promised, your payment is refunded 100%, with no charges and no questions asked.</p>
</div></section>
<section class="facil"><div class="wrap narrow">
 <p class="kicker">How to reach us</p>
 <p class="lead">The Hamta Homestay, 15th Mile, Hallan-i, Manali, Himachal Pradesh 175136. Plus code 45V6+J9 Hallan-i. Follow the exact Google Maps pin.</p>
 <div class="ab-cta"><a class="btn btn-dark" href="${MAPS}" rel="noopener" target="_blank">Open in Google Maps</a><a class="btn btn-ghost-d" href="${ROUTE}" rel="noopener" target="_blank">Driving route from Delhi</a></div>
 <ul class="plain" style="margin-top:28px"><li><b>By road.</b> Delhi to Manali is about 530 to 540 km, 12 to 14 hours by car or bus.</li><li><b>By bus.</b> Overnight buses run from Delhi to Manali. Confirm your drop-off point with Kabir before you board, and do not assume Manali town is the right stop.</li><li><b>By train.</b> Manali has no railway station. Take a train to Chandigarh, about 300 km from Manali, then a bus or cab of roughly 7 to 9 hours.</li><li><b>By air.</b> Fly to Kullu-Manali Airport at Bhuntar, about 50 km from Manali town. Taxis and buses are available.</li></ul>
 <p class="note">Distances and times are for Delhi to Manali, not to the homestay, and are typical rather than guaranteed. Send Kabir your arrival time on WhatsApp and share your live location when you are close. Mountain roads and weather can slow you down, so plan some buffer.</p>
 <div class="ab-cta" style="margin-top:34px"><a class="btn btn-dark" href="/book">Request your stay</a><a class="btn btn-ghost-d" href="https://wa.me/916239815892" rel="noopener" target="_blank">Message Kabir on WhatsApp</a></div>
 <p class="note">WhatsApp and call +91 62398 15892. hello@hamta.in</p>
</div></section>`};
}
