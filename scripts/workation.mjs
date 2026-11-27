// /workation: separate landing page for companies, organisations, teams, universities and remote workers.
// A pinned-wall photo story with its own enquiry form. Not in nav or sitemap until the owner approves it.
// Every claim below comes from the owner's own statements already used on the site. No package price or itinerary is stated.
const pin=`<svg class="pin" viewBox="0 0 40 54" aria-hidden="true"><use href="#wk-pin"/></svg>`;
const card=({n,alt,cap,cls='',ar='4/3',r='0deg',dy='0px',pinned=true,tape=false})=>`<figure class="pc ${cls}${tape?' tape':''}" style="--r:${r};--dy:${dy};--ar:${ar}" data-pc>${pinned&&!tape?pin:''}<div class="ph"><img src="/assets/img/${n}-sm.webp" srcset="/assets/img/${n}-sm.webp 800w, /assets/img/${n}.webp 1600w" sizes="(max-width:760px) 46vw, 32vw" alt="${alt}" loading="lazy" decoding="async"></div><figcaption>${cap}</figcaption></figure>`;
const note=({t,cls='',r='0deg',dy='0px',icon=''})=>`<aside class="sn ${cls}" style="--r:${r};--dy:${dy}" data-pc>${pin}${icon?`<svg class="ic" aria-hidden="true"><use href="#ic-${icon}"/></svg>`:''}<p>${t}</p></aside>`;
const ic=(id,t,d)=>`<li class="idx" data-pc>${pin}<svg class="ic" aria-hidden="true"><use href="#ic-${id}"/></svg><h3>${t}</h3><p>${d}</p></li>`;
const step=(n,t,d)=>`<li class="stp" data-pc><span class="num">${n}</span><h3>${t}</h3><p>${d}</p></li>`;
// Extra perks the owner confirms (e.g. the AI agent subscription once product and terms are confirmed). Empty = nothing shown.
const PERKS=[['One-year AI agent','A complimentary one-year subscription to one of the most powerful personal AI agents, worth ₹40,000, for every workation guest in every package.']]; // each item: ['Title','Description']
const perkCards=()=>PERKS.map(([t,d])=>`<li data-pc>${pin}<svg class="ic" aria-hidden="true"><use href="#ic-sun"/></svg><h3>${t}</h3><p>${d}</p></li>`).join('');
const SHOW_PRICES=true; // user-supplied tiers from their workation slides; unit (per person or per group) still to be confirmed by the owner
const day=(n,wd,t,items,cls='')=>`<article class="dy ${cls}" data-pc>${pin}<p class="dn">Day ${n}<span>${wd}</span></p><h3>${t}</h3><ul>${items.map(i=>`<li>${i}</li>`).join('')}</ul></article>`;
const FAQ=[
['What is a workation at The Hamta Homestay?','A workation is a 7 day, 7 night stay in Manali where you keep doing your work and reset how you live around it. It combines morning yoga and movement, structured deep work windows, guided treks to Bijli Mahadev, Sissu, nearby spots and waterfalls, complimentary river rafting, a complimentary one-year subscription to one of the most powerful personal AI agents, worth ₹40,000, evening unwind experiences and a closing clarity session, in a quiet mountain home.'],
['Where does the workation take place?','At The Hamta Homestay, 15th Mile, Hallan-i, Manali, Himachal Pradesh 175136, India.'],
['Who is the workation for?','Companies, organisations, teams, universities, remote professionals, founders, creators, freelancers and anyone who is building something and feeling stretched.'],
['What is included?','A 7 day, 7 night mountain stay on single sharing (one guest per room; two guests travelling together can share), vegetarian and non-vegetarian meals throughout the stay, daily morning movement sessions, structured deep work windows, guided treks to Bijli Mahadev, Sissu, nearby spots and waterfalls, complimentary river rafting and a complimentary one-year subscription to one of the most powerful personal AI agents, worth ₹40,000, included in every package, curated evening unwind experiences and a final reset and clarity session.'],
['Is there Wi-Fi and a place to work?','Yes. The homestay has Wi-Fi, constant electricity and a shared lounge with work tables.'],
['How is workation pricing different from a normal stay?','Workation pricing is separate from standard nightly and monthly rates. Use the workation enquiry form and we reply with a plan and a price for your group.'],
['How much does the workation cost?','The first week (7 days and 7 nights) is ₹14,999 per person for the Full reset experience or ₹12,999 per person for the Essential reset. If you continue for another week the next week is ₹10,999 or ₹9,499 per person. For a month or more after the first week it is ₹36,000 or ₹31,000 a month per person. Workation pricing is separate from our standard nightly and monthly rates, and we confirm the plan and price for your group.'],
['Can we stay longer than a week?','Yes. You can continue for another week, or stay a month or more after your first week, at the extension prices listed on this page.'],
['What happens on Saturday?','Day 7 is a free day with no plans. Guests explore on their own: nearby treks, waterfalls, lakes and places, camping and adventure, a bike ride to Sissu, local food and conversations with local people.'],
['How do I enquire or book?','Send the workation enquiry form on this page or message us on WhatsApp. Nothing is booked or charged when you send an enquiry. Payment is made in advance once we confirm your dates.'],
['What should I bring?','Two things: intentional work, such as a project or a goal, and openness to reset, meaning you are ready to slow down.'],
];
export default function workation(){
 const symbols=`<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>
<radialGradient id="wk-g" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#f1dca4"/><stop offset=".55" stop-color="#c79c52"/><stop offset="1" stop-color="#8a6a2f"/></radialGradient>
<symbol id="wk-pin" viewBox="0 0 40 54"><ellipse cx="22" cy="49" rx="9" ry="3" fill="#000" opacity=".18"/><path d="M20 28v21" stroke="#9aa0a3" stroke-width="2.4" stroke-linecap="round"/><circle cx="20" cy="16" r="13" fill="url(#wk-g)"/><circle cx="15.5" cy="11" r="4.2" fill="#fff" opacity=".6"/></symbol>
<symbol id="ic-laptop" viewBox="0 0 48 48"><rect x="9" y="11" width="30" height="20" rx="2.5"/><path d="M4 37h40l-3 3H7z"/></symbol>
<symbol id="ic-wifi" viewBox="0 0 48 48"><path d="M6 18a26 26 0 0 1 36 0M12 25a17 17 0 0 1 24 0M18 32a8 8 0 0 1 12 0"/><circle cx="24" cy="38" r="1.6" fill="currentColor"/></symbol>
<symbol id="ic-bed" viewBox="0 0 48 48"><path d="M5 38V14M5 28h38v10M43 28v-6a5 5 0 0 0-5-5H21v11"/><circle cx="13" cy="22" r="4"/></symbol>
<symbol id="ic-bowl" viewBox="0 0 48 48"><path d="M7 25h34a17 17 0 0 1-34 0zM18 8c-3 3 3 5 0 9M25 8c-3 3 3 5 0 9M32 8c-3 3 3 5 0 9"/></symbol>
<symbol id="ic-peak" viewBox="0 0 48 48"><path d="M3 39 18 14l8 13 5-7 14 19z"/><path d="m14 21 4-7 4 7"/></symbol>
<symbol id="ic-sun" viewBox="0 0 48 48"><circle cx="24" cy="24" r="8"/><path d="M24 5v6M24 37v6M5 24h6M37 24h6M10.5 10.5l4 4M33.5 33.5l4 4M10.5 37.5l4-4M33.5 14.5l4-4"/></symbol>
<symbol id="ic-people" viewBox="0 0 48 48"><circle cx="17" cy="18" r="6"/><circle cx="33" cy="20" r="5"/><path d="M5 40c0-8 5-12 12-12s12 4 12 12M30 29c7-1 13 3 13 11"/></symbol>
<symbol id="ic-pen" viewBox="0 0 48 48"><path d="M8 40l3-10L33 8l7 7-22 22zM29 12l7 7"/></symbol>
</defs></svg>`;
 const wall=[
  card({n:'lounge',alt:'Long wooden lounge with large windows and shared tables at The Hamta Homestay',cap:'The shared lounge',cls:'w1',ar:'4/3',r:'-2.2deg'}),
  card({n:'window-view-2',alt:'View from a Hamta homestay window over cedar trees, hills and clouds',cap:'From a homestay window',cls:'w2',ar:'4/3',r:'2.4deg',dy:'46px'}),
  note({t:'Wi-Fi and constant electricity',cls:'w3',r:'4deg',dy:'10px',icon:'wifi'}),
  card({n:'room-1',alt:'Wood-lined bedroom with a double bed and arched headboard',cap:'Eight wood-lined rooms',cls:'w4',ar:'3/4',r:'3deg'}),
  card({n:'view-2',alt:'Snow-capped peaks above a valley with autumn trees and a pond, a nearby view',cap:'Nearby mountain views',cls:'w5',ar:'3/4',r:'-3deg',dy:'28px'}),
  note({t:'Work tables in the shared lounge',cls:'w6',r:'-4deg',dy:'0px',icon:'laptop'}),
  card({n:'act-1',alt:'A paraglider above snow-dusted mountains and pine forest, an activity guests go to',cap:'Places and activities guests go to',cls:'w7',ar:'4/3',r:'2deg'}),
  card({n:'night',alt:'The Hamta Homestay building lit up at night',cap:'Evenings at the house',cls:'w8',ar:'3/4',r:'-2.4deg',dy:'34px'}),
  note({t:'Home cooking from our own chef',cls:'w9',r:'3deg',icon:'bowl'}),
  card({n:'view-3',alt:'A river running below snow-dusted mountains, nearby',cap:'The river, close by',cls:'w10',ar:'4/3',r:'2.6deg'}),
  card({n:'room-5',alt:'Wood-lined bedroom at The Hamta Homestay',cap:'A room at the house',cls:'w11',ar:'8/7',r:'-2deg',dy:'20px'}),
  note({t:'Yoga and meditation in-house',cls:'w12',r:'-3deg',icon:'sun'}),
  card({n:'room-8',alt:'Wood-lined bedroom at The Hamta Homestay',cap:'Rest after the work',cls:'w13',ar:'3/4',r:'2.2deg',dy:'12px'}),
 ].join('\n');
 const heroCards=[
  card({n:'window-view',alt:'View from a Hamta homestay window over pine trees, rooftops and the valley',cap:'The view from a window',cls:'h1c',ar:'4/3',r:'-3deg'}),
  card({n:'view-1',alt:'A snow range and sun, a nearby mountain view',cap:'Nearby',cls:'h2c',ar:'3/4',r:'4deg'}),
  card({n:'room-2',alt:'Bedroom with a wooden bed, patterned curtains and a window',cap:'A room to rest in',cls:'h3c',ar:'4/3',r:'-1.5deg'}),
 ].join('\n');
  const WAMSG='Hello, I would like to plan a workation at The Hamta Homestay.';
 const SCHEMA=`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://workation.hamta.in/","url":"https://workation.hamta.in/","name":"Workation in Manali at The Hamta Homestay","inLanguage":"en","about":"A 7 day, 7 night workation in Manali: deep work, morning yoga, guided treks and a closing clarity session","breadcrumb":{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.hamta.in/"},{"@type":"ListItem","position":2,"name":"Workation","item":"https://workation.hamta.in/"}]}},{"@type":"Service","name":"Workation at The Hamta Homestay, Manali","serviceType":"Workation stay","areaServed":"Manali, Himachal Pradesh, India","provider":{"@type":"LodgingBusiness","name":"The Hamta Homestay","url":"https://www.hamta.in"},"audience":{"@type":"Audience","audienceType":"Companies, organisations, teams, universities, remote professionals, founders, creators and freelancers"}},{"@type":"FAQPage","mainEntity":FAQ.map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))}]})}</script>`;
 return {title:'Workation in Manali: Work, Reset and Grow in Stillness | The Hamta Homestay',
 desc:'A 7 day, 7 night workation in Manali for teams, organisations, universities and remote workers. Slow down, work with intent and find peace in stillness.',
 light:true,schema:SCHEMA,ogimg:'og',
 body:`<link rel="stylesheet" href="/assets/css/workation.css">
${symbols}
<div class="wk">
<section class="wk-hero" data-wk-hero>
 <div class="wrap wk-hero-in">
  <div class="wk-copy">
   <p class="eyebrow">Workation · Manali</p>
   <h1 class="wk-title"><span class="l1">Work</span><span class="l2">where the</span><span class="l3">mountains stay.</span></h1>
   <p class="wk-sub">A 7 day, 7 night workation in Manali. Slow down, do your best work with a Himalayan view, and find peace and growth in stillness. Same job, better life.</p>
   <div class="wk-cta"><a class="btn btn-gold" href="#enquire">Plan a workation</a><a class="btn btn-line" data-wa="${WAMSG}" href="#" hidden target="_blank" rel="noopener">Message us on WhatsApp</a></div>
  </div>
  <div class="wk-cluster">${heroCards}</div>
 </div>
 <p class="wk-scroll" aria-hidden="true">Scroll the wall</p>
</section>

<section class="wk-statement"><div class="wrap narrow"><p class="wk-big" data-wk-words>Peace is not found by escaping work. It grows in stillness, with beauty outside the window and a clear goal on the table. Experience life at a slower speed.</p></div></section>

<section class="wk-wallsec" aria-labelledby="wall-h"><div class="wrap">
 <div class="wk-head"><p class="eyebrow">Our wall</p><h2 id="wall-h">Pinned up from the house</h2><p class="lead">Real photos from The Hamta Homestay and the mountains around it. Rooms, the lounge, the window views and what guests get out to see.</p></div>
 <div class="wk-wall" data-wk-wall>
  <svg class="wk-strings" aria-hidden="true"><path class="wk-thread"/></svg>
${wall}
 </div>
</div></section>

<section class="wk-mission"><div class="wrap narrow">
 <p class="mx" data-pc>${pin}<span>Same job</span><svg class="ar" viewBox="0 0 48 16" aria-hidden="true"><path d="M2 8h40M34 2l8 6-8 6"/></svg><span>Better life</span></p>
 <p class="mt">Workation exists to help ambitious people build a life where work fits in, not takes over.</p>
</div></section>

<section class="wk-inc"><div class="wrap">
 <div class="wk-head"><p class="eyebrow">What is included</p><h2>Your reset includes</h2></div>
 <ul class="wk-incl">
  <li data-pc>${pin}<svg class="ic" aria-hidden="true"><use href="#ic-bed"/></svg><h3>7 days, 7 nights</h3><p>Mountain stay on single sharing. Two guests travelling together can share a room.</p></li>
  <li data-pc>${pin}<svg class="ic" aria-hidden="true"><use href="#ic-bowl"/></svg><h3>Vegetarian and non-vegetarian meals</h3><p>Vegetarian and non-vegetarian meals throughout the stay.</p></li>
  <li data-pc>${pin}<svg class="ic" aria-hidden="true"><use href="#ic-sun"/></svg><h3>Morning movement</h3><p>Daily morning movement sessions with mountain views.</p></li>
  <li data-pc>${pin}<svg class="ic" aria-hidden="true"><use href="#ic-laptop"/></svg><h3>Deep work windows</h3><p>Structured deep work windows for focused, undistracted execution.</p></li>
  <li data-pc>${pin}<svg class="ic" aria-hidden="true"><use href="#ic-peak"/></svg><h3>Guided treks</h3><p>Guided treks to Bijli Mahadev, Sissu, nearby spots and waterfalls.</p></li>
  <li data-pc>${pin}<svg class="ic" aria-hidden="true"><use href="#ic-sun"/></svg><h3>River rafting</h3><p>Complimentary river rafting, included in every package.</p></li>
  <li data-pc>${pin}<svg class="ic" aria-hidden="true"><use href="#ic-pen"/></svg><h3>Evenings and closing</h3><p>Curated evening unwind experiences and a final reset and clarity session.</p></li>
  ${perkCards()}
 </ul>
 <p class="wk-fine wk-quote">This is not a vacation. It is a structured upgrade to how you live and work.</p>
</div></section>

<section class="wk-5r"><div class="wrap narrow">
 <div class="wk-head"><p class="eyebrow">The 5R reset journey</p><h2>Over seven days you will not just work remotely</h2></div>
 <ol class="wk-r">
  <li data-pc>${pin}<h3>Reset</h3><p>Step out of noise. Slow your system down.</p></li>
  <li data-pc>${pin}<h3>Rebuild</h3><p>Reclaim deep focus through structured work blocks.</p></li>
  <li data-pc>${pin}<h3>Reimagine</h3><p>Think beyond your daily tasks. Gain perspective.</p></li>
  <li data-pc>${pin}<h3>Reinforce</h3><p>Create a 30-day clarity plan you will actually follow.</p></li>
  <li data-pc>${pin}<h3>Return</h3><p>Go back with rhythm, momentum and renewed energy.</p></li>
 </ol>
</div></section>

<section class="wk-prog" id="programme"><div class="wrap">
 <div class="wk-head"><p class="eyebrow">The week</p><h2>Day by day</h2><p class="lead">From arrival to clarity, with deep work and mountain mornings in between.</p></div>
 <div class="wk-days">
${day(1,'Sunday','Arrival in Manali',['Check in, settle in, slow down','Light acclimatisation work','Easy work block to align your focus and set your intentions for the week','Evening trek','Sunset walk through the mountains. Ground yourself in the landscape'])}
${day(2,'Monday','Find your rhythm',['Morning yoga with mountain views','Breathwork, mobility, intentional start','Scenic working hours','Deep focus sessions in curated workspaces with a Himalayan backdrop','Local Manali walk','Slow exploration of the village. Conversations, culture and community'])}
${day(3,'Tuesday','Midweek momentum',['Morning yoga with mountain views','Breathwork, stretch, reset','Scenic working hours','Structured deep work blocks. Focus without distraction','Movie night','Community screening. Unwind, laugh, connect'])}
${day(4,'Wednesday','Deep in the flow',['Morning yoga with mountain views','Breathwork, stability, energy','Scenic working hours','Long focus blocks. Progress you can feel','Bonfire and jamming session','Music, stories, shared moments. Community under the stars'])}
${day(5,'Thursday','Expand your edge',['Morning yoga with mountain views','Breathwork, balance, grounding','Scenic working hours','Deep focus sessions. Execution without distraction','Surprise activity','A curated experience designed to shift your perspective'])}
${day(6,'Friday','Close with clarity',['Yoga and wrap up session','Reflect, integrate, share takeaways','Morning work slot','Final deep work block. Tie up loose ends'])}
<article class="dy free" data-pc>${pin}<p class="dn">Day 7<span>Saturday</span></p><h3>A free day</h3><ul><li>No plans. The day is yours</li><li>Explore on your own: nearby treks, waterfalls, lakes and places</li><li>Try adventure and camping, or ride to Sissu</li><li>Eat local food and talk to local people</li></ul></article>
 </div>
</div></section>

<section class="wk-what"><div class="wrap">
 <div class="wk-head"><p class="eyebrow">The setting</p><h2>A place to work, eat and rest</h2></div>
 <ul class="wk-idx">
${ic('laptop','Work','Wi-Fi, constant electricity and a shared lounge with work tables.')}
${ic('bed','Stay','Eight wood-lined rooms with a double bed, a balcony, a private washroom with geyser, a kettle and a table and chair. A third guest can use an extra mattress.')}
${ic('bowl','Eat','Home cooking from our own chef. Meals are included in every workation package.')}
${ic('peak','Reset','A garden, riverside and mountain views, and yoga and meditation in-house.')}
 </ul>
</div></section>

<section class="wk-who"><div class="wrap">
 <div class="wk-head"><p class="eyebrow">Who it is for</p><h2>Built around your group</h2><p class="lead">We host groups of 15 to 20 across eight rooms.</p></div>
 <ul class="wk-tags">
  <li data-pc>${pin}<svg class="ic" aria-hidden="true"><use href="#ic-people"/></svg>Companies</li>
  <li data-pc>${pin}<svg class="ic" aria-hidden="true"><use href="#ic-people"/></svg>Organisations</li>
  <li data-pc>${pin}<svg class="ic" aria-hidden="true"><use href="#ic-people"/></svg>Teams seeking perspective</li>
  <li data-pc>${pin}<svg class="ic" aria-hidden="true"><use href="#ic-people"/></svg>Universities</li>
  <li data-pc>${pin}<svg class="ic" aria-hidden="true"><use href="#ic-laptop"/></svg>Remote professionals</li>
  <li data-pc>${pin}<svg class="ic" aria-hidden="true"><use href="#ic-pen"/></svg>Founders and creators</li>
  <li data-pc>${pin}<svg class="ic" aria-hidden="true"><use href="#ic-laptop"/></svg>Freelancers</li>
 </ul>
 <p class="wk-quote wk-fine">If you are ambitious but exhausted, focused but distracted, building but craving clarity, you belong here.</p>
 <div class="wk-bring"><p class="eyebrow">Your part is simple. Bring two things.</p>
  <div class="two"><div data-pc>${pin}<span class="nn">01</span><h3>Intentional work</h3><p>A project. A goal.</p></div><div data-pc>${pin}<span class="nn">02</span><h3>Openness to reset</h3><p>Be ready to slow down.</p></div></div></div>
</div></section>

<section class="wk-price" id="pricing"><div class="wrap">
 <div class="wk-head"><p class="eyebrow">Pricing</p><h2>Workation pricing</h2><p class="lead">Workation pricing is per person and separate from our standard nightly and monthly rates.</p></div>
${SHOW_PRICES?`<div class="wk-tiers">
  <div class="tier" data-pc>${pin}<p class="tn">Full reset experience</p><p class="tp">₹14,999</p><p class="tu">First week, 7 days and 7 nights, per person</p><p>Includes stay, all meals, guided activities, complimentary river rafting, a complimentary one-year subscription to one of the most powerful personal AI agents, worth ₹40,000 and the structured reset framework. For those who want the complete workation immersion.</p><ul class="ext"><li><span>Continue for another week, per person</span><b>₹10,999</b></li><li><span>Stay a month or more after your first week, per person</span><b>₹36,000 a month</b></li></ul></div>
  <div class="tier" data-pc>${pin}<p class="tn">Essential reset</p><p class="tp">₹12,999</p><p class="tu">First week, 7 days and 7 nights, per person</p><p>Includes mountain stay, meals, a curated work setup, complimentary river rafting and a complimentary one-year subscription to one of the most powerful personal AI agents, worth ₹40,000. For those who prefer a lighter structure.</p><ul class="ext"><li><span>Continue for another week, per person</span><b>₹9,499</b></li><li><span>Stay a month or more after your first week, per person</span><b>₹31,000 a month</b></li></ul></div>
 </div>
 <div class="tier trav" data-pc>${pin}<p class="tn">Travel support (optional)</p><p>Volvo bus coordination from Delhi to Himachal. Tickets are booked at actual cost. Group travel assistance is available for smoother planning.</p></div>
 <p class="wk-fine">Tell us your group size and dates in the form below and we confirm the plan and price for your group.</p>`:`<p class="wk-fine">We quote workation pricing for your group. Use the form below.</p>`}
</div></section>

<section class="wk-faq"><div class="wrap narrow">
 <div class="wk-head"><p class="eyebrow">Questions</p><h2>Workation, answered</h2></div>
 <div class="wk-qa">${FAQ.map(([q,a])=>`<details data-pc><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>
</div></section>

<section class="wk-enq" id="enquire"><div class="wrap">
 <div class="wk-head"><p class="eyebrow">If this feels aligned, trust that instinct</p><h2>Plan your workation</h2><p class="lead">This form is only for workation enquiries. Nothing is booked or charged when you send it. We reply with a plan and a price for your group.</p></div>
 <div class="wk-formwrap">${pin}
 <form id="workform" class="wk-form" novalidate>
  <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;opacity:0;height:0;width:0">
  <fieldset><legend>About you</legend>
   <div class="g2"><label>Your name<input name="name" required autocomplete="name"></label>
   <label>Who are you?<select name="group_type" required><option value="">Choose one</option><option>Company</option><option>Organisation</option><option>Team</option><option>University</option><option>Remote worker</option><option>Something else</option></select></label></div>
   <label>Company, organisation or university <em>(optional)</em><input name="organisation" autocomplete="organization"></label>
   <div class="g2"><label>Email<input name="email" type="email" required autocomplete="email"></label>
   <label>WhatsApp number<input name="phone" type="tel" required autocomplete="tel"></label></div>
  </fieldset>
  <fieldset><legend>Your workation</legend>
   <div class="g2"><label>How many people?<input name="people" type="number" min="1" max="40" inputmode="numeric" required></label>
   <label>Rooms you expect to need <em>(optional)</em><input name="rooms" type="number" min="1" max="8" inputmode="numeric"></label></div>
   <div class="g2"><label>Preferred dates or month<input name="dates" placeholder="For example, 10 to 17 March" required></label>
   <label>Length of stay<input name="length" placeholder="For example, 7 nights" required></label></div>
   <label>Package you are interested in<select name="package"><option>Not sure yet</option><option>Full reset experience</option><option>Essential reset</option></select></label>
   <label>Travel support from Delhi (Volvo bus coordination)<select name="travel_support"><option>Not needed</option><option>Yes, please share details</option></select></label>
   <label>What do you want from the workation?<textarea name="goals" rows="4" placeholder="Team offsite, deep work, a study retreat, a long remote-work stay, anything else we should know"></textarea></label>
  </fieldset>
  <label class="chk"><input type="checkbox" name="consent" required> I am happy for Hamta to contact me about this enquiry by WhatsApp or email.</label>
  <div id="wk-msg" class="msg" role="status" aria-live="polite" hidden></div>
  <button class="btn btn-gold" type="submit">Send workation enquiry</button>
  <p class="wk-fine">Prefer to talk? <a data-wa="${WAMSG}" href="#" hidden target="_blank" rel="noopener" style="text-decoration:underline">Message us on WhatsApp</a> <a data-email href="#" hidden style="text-decoration:underline"></a></p>
 </form></div>
</div></section>
</div>
<script src="/assets/js/workation.js" defer></script>`};
}
