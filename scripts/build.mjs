// Static page generator: node scripts/build.mjs  -> writes *.html, sitemap.xml at repo root.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const SITE='https://hamta.in';
const NAME='The Hamta Homestay, Manali';
const LIVE=process.env.HAMTA_LIVE==='1'; // default build is a noindex PREVIEW; set HAMTA_LIVE=1 only after owner approval
const MAPS='https://www.google.com/maps/place/The+Hamta+Homestay+Manali/@32.1440721,77.1609703,17z/data=!3m1!4b1!4m9!3m8!1s0x39048b7177420655:0x760c7d2431095132!5m2!4m1!1i2!8m2!3d32.1440721!4d77.1609703!16s%2Fg%2F11z5d9dnh1';
const IG=''; // Instagram URL: empty until owner confirms the account


const img=(n,alt,{cls='',eager=false,sizes='(max-width:860px) 92vw, 50vw'}={})=>
  `<img class="${cls}" src="/assets/img/${n}.webp" srcset="/assets/img/${n}-sm.webp 800w, /assets/img/${n}.webp 1600w" sizes="${sizes}" alt="${alt}" ${eager?'fetchpriority="high"':'loading="lazy"'} decoding="async">`;

const NAV=[['stay','Stay'],['monthly-stay','Monthly'],['groups','Groups'],['experiences','Around'],['menu','Menu'],['gallery','Gallery'],['handbook','Handbook']];
const logoSvg=`<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><circle class="sun" cx="37" cy="11" r="3.8" fill="#d4b676"/><path d="M3 36 18 9l9 15 5-8 13 20z" fill="currentColor"/><path class="cap" d="M18 9l-4.6 8 3.2-1.6 2 3 2.5-3 2.6 2z" fill="#cfe3f0"/><path class="rv2" d="M3 42q7-3.5 14 0t14 0 14 0" stroke="#7fb0cf" stroke-width="2.2" stroke-linecap="round"/></svg>`;

function layout({file,title,desc,body,light=false,schema='',ogimg='ext-day',noindex=false}){
  const fabHtml=(file==='book'||file==='contact'||file==='404')?'':`<div class="fab off"><a class="btn btn-gold" href="/book">Request a stay</a><a class="btn btn-dark" data-wa="Hello, I would like to stay at The Hamta Homestay." href="#" hidden target="_blank" rel="noopener">WhatsApp</a></div>`;
  const url=`${SITE}/${file==='index'?'':file}`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<link rel="canonical" href="${url}">
${(noindex||!LIVE)?'<meta name="robots" content="noindex,nofollow">':'<meta name="robots" content="index,follow,max-image-preview:large">'}
<meta name="theme-color" content="#1f3d33">
<meta property="og:type" content="website"><meta property="og:site_name" content="${NAME}">
<meta property="og:title" content="${title}"><meta property="og:description" content="${desc}">
<meta property="og:url" content="${url}"><meta property="og:image" content="${SITE}/assets/img/${ogimg}.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@400;500;600&display=swap">
<link rel="stylesheet" href="/assets/css/site.css">
${schema}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
${LIVE?'':'<div class="preview-tag">PREVIEW BUILD · not published</div>'}
<header class="hdr${light?' light':''}">
  <div class="in">
    <a class="logo" href="/" aria-label="The Hamta Homestay, home">${logoSvg}<span>Hamta<small>Homestay · Manali</small></span></a>
    <nav class="nav" aria-label="Main">
      ${NAV.map(([f,l])=>`<a href="/${f}"${file===f?' aria-current="page"':''}>${l}</a>`).join('')}
      <a class="btn btn-gold" href="/book">Book your stay</a>
    </nav>
    <button class="burger" aria-label="Menu" aria-expanded="false"><span></span></button>
  </div>
</header>
<div class="sheet" aria-label="Menu">
  ${NAV.map(([f,l])=>`<a href="/${f}">${l}</a>`).join('')}<a href="/book" style="color:var(--gold-2)">Book your stay</a>
</div>
<main id="main">
${body}
</main>
${fabHtml}
<div class="ridge" aria-hidden="true"></div>
<footer class="ftr">
  <div class="wrap">
    <div class="g">
      <div><div class="big">Hamta</div><p style="margin-top:14px;max-width:34ch;opacity:.8">A mountain homestay in Manali for a night, a month, or a whole team. Warm hosts, home cooking, quiet views.</p></div>
      <div><h4>Stay</h4><a href="/stay">Rooms &amp; rates</a><a href="/monthly-stay">Monthly stays</a><a href="/groups">Groups</a><a href="/book">Request a booking</a></div>
      <div><h4>Guests</h4><a href="/menu">Menu</a><a href="/handbook">Handbook</a><a href="/experiences">Around Hamta</a><a href="/gallery">Gallery</a></div>
      <div><h4>Say hello</h4><a href="/contact">Contact</a>${IG?`<a href="${IG}" rel="noopener" target="_blank">Instagram</a>`:''}<a data-email href="#" hidden></a><a data-support href="#" hidden></a><a data-phone href="#" hidden></a></div>
    </div>
    <div class="bot"><span>© <span data-year>2026</span> The Hamta Homestay, 15th Mile, Hallan-i, Manali, Himachal Pradesh 175136</span><span><a style="display:inline" href="/terms">Terms</a> · <a style="display:inline" href="/cancellation-refund">Cancellation</a> · <a style="display:inline" href="/house-rules">House rules</a> · <a style="display:inline" href="/privacy">Privacy</a></span></div>
  </div>
</footer>
<script src="/assets/js/config.js" defer></script>
<script src="/assets/js/site.js" defer></script>
</body>
</html>`;
}

const pageHero=(h,sub,image,alt)=>`<section class="page-hero">${img(image,alt,{eager:true,sizes:'100vw'})}<div class="wrap"><p class="eyebrow" style="color:var(--gold-2)">${sub}</p><h1>${h}</h1></div></section>`;

const lodging=`<script type="application/ld+json">${JSON.stringify({
  "@context":"https://schema.org","@type":"LodgingBusiness","name":"The Hamta Homestay",
  "description":"Mountain homestay in Manali, Himachal Pradesh with daily and monthly stays, home-cooked meals on request, Wi-Fi, and Himalayan views.",
  "url":SITE,"telephone":"+916239815892","email":"hello@hamta.in","geo":{"@type":"GeoCoordinates","latitude":32.1440721,"longitude":77.1609703},"hasMap":MAPS,"checkinTime":"12:00","checkoutTime":"11:00","petsAllowed":true,"numberOfRooms":8,"image":[`${SITE}/assets/img/ext-day.jpg`,`${SITE}/assets/img/hero-poster.jpg`],
  "address":{"@type":"PostalAddress","streetAddress":"15th Mile, Hallan-i","addressLocality":"Manali","addressRegion":"Himachal Pradesh","postalCode":"175136","addressCountry":"IN"},
  "priceRange":"INR 2000-3000 per night, INR 15000-30000 per month",
  
  "amenityFeature":["Free Wi-Fi","Constant electricity","Private bathroom","Free private parking on site","Free laundry","Washing machine","Electric kettle in every room","Balcony","Pet friendly","Child friendly","Road access","Garden","Shared kitchen","Shared lounge with TV area","Games room","Board games and puzzles","Non-smoking throughout","Soundproof rooms","Hiking","Pets allowed","Home-cooked meals on request","Dedicated cook and cleaner","Garden","Yoga and meditation sessions","Remote work space","Mountain views","Games"].map(n=>({"@type":"LocationFeatureSpecification","name":n,"value":true})),
  "currenciesAccepted":"INR"})}</script>`;
const faq=(items)=>`<script type="application/ld+json">${JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":items.map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))})}</script>`;

const pages={};

/* HOME */
pages.index={title:'The Hamta Homestay, Manali | Mountain stays by the night or month',
desc:'A premium mountain homestay in Manali. Stay a night, a month or bring your team. Home-cooked meals, fast Wi-Fi, constant power and Himalayan views. Request your stay.',
schema:lodging+faq([
 ['How much is a night at The Hamta Homestay in Manali?','Rooms start at INR 2,000 per room per night without meals, for up to two guests. With meals it is INR 2,500 for one guest and INR 3,000 for two. Peak dates around Christmas and New Year can cost more and are confirmed in writing.'],
 ['Can I stay for a month?','Yes. Monthly stays are INR 15,000 for one guest and INR 20,000 for two without meals, and INR 24,000 or INR 30,000 with meals. A cook and a cleaner are available.'],
 ['Is it good for remote work?','Yes. We have Wi-Fi, constant electricity, a shared lounge with work tables and a quiet mountain setting.'],
 ['Do you host groups?','Yes. We welcome travel groups, corporate teams, students, nonprofits and travel agencies. Tell us your dates and group size.'],['What are the check-in and check-out times?','Check-in is from 12 PM and check-out is at 11 AM the next day. Guests are welcome to arrive at any time, with no extra charge.'],['Is there a weekly discount?','Yes. Stays of 7 nights or more get 15% off the full room and meals bill. All taxes are included.'],['What is the cancellation policy?','Full refund 10 days before arrival, 60% at 7 days, 30% at 3 days, no refund at 24 hours. If we cannot provide your room or food, you get a 100% refund.'],['Are pets and children welcome?','Yes. Pets, children and unmarried couples are welcome with no limit. Smoking is not allowed. Alcohol is accepted.']]),
body:`
<section class="hero">
  <img class="poster" src="/assets/img/hero-poster.webp" alt="Aerial view of The Hamta Homestay with its teal roof among pine forest in Manali" fetchpriority="high">
  <video muted loop playsinline preload="none" poster="/assets/img/hero-poster.webp" aria-hidden="true" data-src="/assets/video/hero.mp4"></video>
  <div class="wrap in">
    <p class="eyebrow" style="color:var(--gold-2);margin-bottom:18px">Manali · Himachal Pradesh</p>
    <h1><span class="ln"><span>Stay where the</span></span><span class="ln"><span>mountains stay.</span></span></h1>
    <p class="sub">A quiet, warm homestay above the valley. By the night, by the month, or for your whole group.</p>
    <div class="cta"><a class="btn btn-gold" href="/book">Request your stay</a><a class="btn btn-ghost" href="/monthly-stay">Monthly stays</a></div>
  </div>
  <div class="scroll">Scroll</div>
</section>

<section class="strip" aria-label="At a glance">
  <div><b>₹2,000</b><span>per room, per night</span></div>
  <div><b>₹15,000</b><span>per month, one guest</span></div>
  <div><b>Home food</b><span>chef cooks on request</span></div>
  <div><b>Wi-Fi + power</b><span>steady, for remote work</span></div>
</section>

<section>
  <div class="wrap split">
    <div class="frame reveal-img">${img('ext-day','The Hamta Homestay building in blue and white against the hillside')}</div>
    <div class="rv">
      <p class="eyebrow">Welcome</p>
      <h2 style="margin:14px 0 20px">Slow mornings. Big views. Hot food.</h2>
      <p class="lead">Hamta is a new homestay in Manali built for people who want to rest, work, or meet themselves. Wood-lined rooms, a sunlit lounge, a garden, dogs on site, and a chef who cooks on request.</p>
      <ul class="ticks"><li>Constant electricity and free Wi-Fi</li><li>Cook and cleaner available in every plan</li><li>In-house yoga and meditation sessions</li><li>Language help if you do not speak Hindi or English</li></ul>
      <div style="margin-top:32px"><a class="btn btn-dark" href="/stay">See rooms &amp; rates</a></div>
    </div>
  </div>
</section>

<div class="marquee" aria-hidden="true"><div><span>Himalayan views</span><i>✦</i><span>Daily stays</span><i>✦</i><span>Monthly stays</span><i>✦</i><span>Home-cooked meals</span><i>✦</i><span>Remote work</span><i>✦</i><span>Yoga &amp; meditation</span><i>✦</i><span>Groups welcome</span><i>✦</i><span>Himalayan views</span><i>✦</i><span>Daily stays</span><i>✦</i><span>Monthly stays</span><i>✦</i><span>Home-cooked meals</span><i>✦</i><span>Remote work</span><i>✦</i><span>Yoga &amp; meditation</span><i>✦</i><span>Groups welcome</span><i>✦</i></div></div>

<section>
  <div class="wrap sec-head"><p class="eyebrow">Rooms</p><h2>Rooms made of pine and light</h2></div>
  <div class="hscroll" tabindex="0" aria-label="Room photos">
    <a class="card" href="/stay"><div class="ph">${img('room-a1','Double room with wooden headboard and warm lights',{sizes:'420px'})}</div><div class="tx"><h3>Rooms</h3><p>Wood-lined rooms for up to two guests.</p><span class="price-tag">₹2,000 <small>per room, per night</small></span></div></a>
    <a class="card" href="/stay"><div class="ph">${img('room-b1','Wooden double bed with warm blanket and rug',{sizes:'420px'})}</div><div class="tx"><h3>Rest well</h3><p>Warm blankets and bright windows for slow mornings.</p><span class="price-tag">₹2,000 <small>per room, per night</small></span></div></a>
    <a class="card" href="/stay"><div class="ph">${img('room-c1','Spacious room with wooden ceiling and floor',{sizes:'420px'})}</div><div class="tx"><h3>Space to stay</h3><p>High wooden ceilings and room for longer stays.</p><span class="price-tag">₹2,000 <small>per room, per night</small></span></div></a>
    <a class="card" href="/monthly-stay"><div class="ph">${img('lounge-2','Sunlit common lounge with wooden tables and cushioned seating',{sizes:'420px'})}</div><div class="tx"><h3>The lounge</h3><p>A shared, sunlit room with tables to work at.</p><span class="price-tag" style="font-size:22px">Shared by guests</span></div></a>
  </div>
</section>

<section class="band">
  <div class="wrap">
    <div class="sec-head"><p class="eyebrow">Choose your pace</p><h2>One night or one season</h2></div>
    <div class="cols3">
      <div class="pillar rv"><h3>A night or a week</h3><p>From ₹2,000 per room per night, for up to two guests.</p><p style="margin-top:14px"><a href="/stay" style="text-decoration:underline">Daily rates</a></p></div>
      <div class="pillar rv d1"><h3>A month or more</h3><p>From ₹15,000 a month. Add meals if you like. A cook and a cleaner are available.</p><p style="margin-top:14px"><a href="/monthly-stay" style="text-decoration:underline">Monthly plans</a></p></div>
      <div class="pillar rv d2"><h3>Your whole group</h3><p>Teams, classes, travel agencies and nonprofits. Food, stay and calm for everyone.</p><p style="margin-top:14px"><a href="/groups" style="text-decoration:underline">Group stays</a></p></div>
    </div>
  </div>
</section>

<section>
  <div class="wrap split rev">
    <div class="rv"><p class="eyebrow">The view</p><h2 style="margin:14px 0 20px">Wake up to the Himalaya.</h2><p class="lead">Pine ridges, drifting cloud and evening light that turns the whole valley gold. Bring a book, a laptop or nothing at all.</p><div style="margin-top:28px"><a class="btn btn-line" href="/gallery">Open the gallery</a></div></div>
    <div class="frame wide reveal-img">${img('view-sunset','Orange sunset sky over forested Himalayan ridges seen from Hamta Homestay')}</div>
  </div>
</section>

<section style="background:var(--mist)">
  <div class="wrap">
    <div class="sec-head center"><p class="eyebrow">Everything in place</p><h2>Simple things done well</h2></div>
    <div class="cols3 light-cols">
      <div class="pillar rv"><h3>Food from our kitchen</h3><p>Our chef cooks on request, from meals to sweets. Food is an affordable add-on.</p></div>
      <div class="pillar rv d1"><h3>Work-friendly</h3><p>Wi-Fi, constant electricity and a shared lounge with tables. Quiet enough to think.</p></div>
      <div class="pillar rv d2"><h3>Mind and body</h3><p>Yoga and meditation sessions in-house, a games room, a garden, and dogs on site.</p></div>
    </div>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="box" style="display:grid;gap:18px;text-align:center;justify-items:center;background:var(--sky);border:0">
      <h2>Tell us your dates.</h2><p class="lead">We reply with availability and a clear quote.</p>
      <a class="btn btn-dark" href="/book">Request your stay</a>
    </div>
  </div>
</section>`};

/* STAY */
pages.stay={title:'Rooms & Rates | The Hamta Homestay, Manali',desc:'Daily and monthly rates at The Hamta Homestay in Manali. Rooms from INR 2,000 per night for two guests. Meals optional. Stay 7 nights or more and get 15% off. All taxes included.',
schema:faq([['What are the daily rates?','INR 2,000 per room per night without meals. With meals INR 2,500 for one guest and INR 3,000 for two guests sharing a room.']]),
body:`${pageHero('Rooms &amp; rates','Stay',  'view-balcony','Balcony at Hamta Homestay overlooking pine forest and mountains')}
<section><div class="wrap">
  <div class="sec-head"><p class="eyebrow">Rates in rupees</p><h2>Simple, honest pricing</h2><p class="lead">Eight rooms, each with a double bed. Every room hosts two guests, and a third fits comfortably on an extra mattress. A cook and a cleaner are available. Food is optional and affordable.</p></div>
  <div class="tabs" role="tablist"><button role="tab" id="t1" aria-selected="true" aria-controls="p-daily">Daily</button><button role="tab" id="t2" aria-selected="false" aria-controls="p-monthly">Monthly</button></div>
  <div class="panel" id="p-daily" role="tabpanel" aria-labelledby="t1">
    <table class="ptable"><tbody>
      <tr><th>Room only<small>Up to 2 guests</small></th><td class="n">₹2,000<small>per night</small></td></tr>
      <tr><th>Room + meals, one guest<small>Breakfast, lunch, dinner on request</small></th><td class="n">₹2,500<small>per night</small></td></tr>
      <tr><th>Room + meals, two guests<small>Same room</small></th><td class="n">₹3,000<small>per night</small></td></tr>
      <tr><th>Stay 7 nights or more<small>15% off the full room and meals bill. A week, room only, one room: ₹14,000 becomes ₹11,900</small></th><td class="n">15% off</td></tr>
      <tr><th>Heater electricity<small>Only if you use a heater</small></th><td class="n">₹1,000<small>per day</small></td></tr>
    </tbody></table>
    <p class="note">All taxes are included. Peak dates cost more: national holidays, busy weekends (Saturday and Sunday, or a holiday joined to a weekend), the last week of December, the first week of January and the first two weeks of February. From December to mid-February, room-only rates range from ₹2,000 to ₹3,000 per night. We confirm the exact amount for your dates before you pay.</p>
  </div>
  <div class="panel" id="p-monthly" role="tabpanel" aria-labelledby="t2" hidden>
    <table class="ptable"><tbody>
      <tr><th>Room only, one guest<small>Cook and cleaner available</small></th><td class="n">₹15,000<small>per month</small></td></tr>
      <tr><th>Room only, two guests<small>Same room</small></th><td class="n">₹20,000<small>per month</small></td></tr>
      <tr><th>With meals, one guest<small>Three meals a day by your cook</small></th><td class="n">₹24,000<small>per month</small></td></tr>
      <tr><th>With meals, two guests<small>Same room</small></th><td class="n">₹30,000<small>per month</small></td></tr>
      <tr><th>Heater electricity<small>Only if you use a heater</small></th><td class="n">₹3,000<small>per month</small></td></tr>
    </tbody></table>
    <p class="note">All taxes are included. The same prices apply to every guest, whether you come from India or abroad. A month is the calendar month (first to last date) or 30 days.</p>
  </div>
  <div style="margin-top:34px"><a class="btn btn-gold" href="/book">Request your stay</a></div>
</div></section>
<section style="background:var(--mist)"><div class="wrap">
  <div class="sec-head"><p class="eyebrow">The rooms</p><h2>Inside the rooms</h2></div>
  <div class="cols3" style="gap:18px">
    ${['room-a1|Double room with wooden arched headboard','room-a2|Room with patterned curtains and seating','room-b1|Wooden bed with warm blanket and rug','room-b3|Bedroom with striped throw and window','room-c1|Room with high wooden ceiling','room-a3|Double bed with cushions and bedside lamps'].map((x,i)=>{const [n,a]=x.split('|');return `<div class="frame wide reveal-img rv d${i%3}" style="aspect-ratio:4/3">${img(n,a,{sizes:'(max-width:860px) 92vw, 33vw'})}</div>`}).join('')}
  </div>
  <p class="note">Photos of the rooms and bathrooms.</p>
</div></section>
<section style="background:var(--mist)"><div class="wrap"><div class="sec-head"><p class="eyebrow">Facilities</p><h2>What you can use</h2></div>
  <div class="cols3 light-cols" style="margin-top:8px">
    <div class="pillar"><h3>In your room</h3><ul class="ticks"><li>Double bed, extra mattress on request</li><li>Spacious balcony and private washroom</li><li>Geyser and mirror in the washroom</li><li>Table, chairs, mirror and dustbin</li><li>Wooden closet and drawers</li><li>Electric kettle</li><li>Warm and white lighting</li><li>Full glass windows with curtains in most rooms</li><li>Soundproof rooms</li></ul></div>
    <div class="pillar"><h3>Around the house</h3><ul class="ticks"><li>Free Wi-Fi</li><li>Garden</li><li>Shared lounge with TV area</li><li>Shared kitchen</li><li>Washing machine and free laundry</li><li>Free private parking on site</li><li>Road access and accessibility</li><li>Non-smoking. Pets, children and alcohol welcome</li></ul></div>
    <div class="pillar"><h3>Things to do</h3><ul class="ticks"><li>Hiking and walking tours</li><li>Bike tours</li><li>Games room, board games and puzzles</li><li>Movie nights</li><li>Live music and evening entertainment</li></ul></div>
  </div>
  <p class="note">Ask us if you need something specific.</p></div></section>
<section><div class="wrap split">
  <div class="frame wide reveal-img">${img('bath-2','Clean tiled bathroom with water heater')}</div>
  <div class="rv"><p class="eyebrow">Also here</p><h2 style="margin:14px 0 20px">What is available</h2>
  <ul class="ticks"><li>Constant electricity and Wi-Fi</li><li>Free laundry</li><li>Cleaner available</li><li>Cook available for meals on request</li><li>Garden, lounge, games, dogs on site</li><li>Yoga and meditation sessions, not included in the room price</li></ul></div>
</div></section>`};

/* MONTHLY */
pages['monthly-stay']={title:'Monthly Stay in Manali for Remote Work | The Hamta Homestay',desc:'Live in the mountains for a month or more. Monthly stays in Manali from INR 15,000 with Wi-Fi, constant electricity, a cook and a cleaner. Ideal for remote work and slow living.',
schema:faq([['What does a monthly stay cost?','INR 15,000 for one guest and INR 20,000 for two guests without meals. INR 24,000 or INR 30,000 with meals.'],['Is there a cook?','Yes. A cook is available for meals on request, and a cleaner is available.']]),
body:`${pageHero('Live here for a month','Monthly stays','lounge-1','Sunlit lounge with wooden tables at Hamta Homestay')}
<section><div class="wrap split">
  <div class="rv"><p class="eyebrow">For remote work &amp; slow living</p><h2 style="margin:14px 0 20px">Your office has a Himalaya outside.</h2><p class="lead">Constant electricity, Wi-Fi, a shared lounge with work tables and nobody rushing you. When you close the laptop there are mountains, yoga and home food.</p>
  <ul class="ticks"><li>Cook available for all three meals on request</li><li>Cleaner available</li><li>Free laundry and a washing machine</li><li>Three rooms are kept for monthly stays</li><li>Yoga and meditation sessions in-house, not included in the price</li><li>Same price for guests from India and abroad</li><li>Language help if you do not speak Hindi or English</li></ul></div>
  <div class="frame reveal-img">${img('workspace','Laptop on a wooden table in the lounge')}</div>
</div></section>
<section class="band"><div class="wrap">
  <div class="sec-head"><p class="eyebrow">Monthly plans</p><h2>Pick how you live</h2></div>
  <div class="cols3">
    <div class="pillar"><h3>Room only</h3><p style="font-family:var(--serif);font-size:40px;opacity:1">₹15,000</p><p>one guest / month</p><p style="margin-top:12px">₹20,000 for two sharing</p></div>
    <div class="pillar"><h3>With meals</h3><p style="font-family:var(--serif);font-size:40px;opacity:1">₹24,000</p><p>one guest / month</p><p style="margin-top:12px">₹30,000 for two sharing</p></div>
    <div class="pillar"><h3>Heater</h3><p style="font-family:var(--serif);font-size:40px;opacity:1">₹3,000</p><p>per month, only if you use a heater</p></div>
  </div>
  <div style="margin-top:36px"><a class="btn btn-gold" href="/book?type=monthly">Request a monthly stay</a></div>
</div></section>
<section><div class="wrap"><div class="sec-head"><p class="eyebrow">The lounge</p><h2>A shared room to work and rest</h2></div>
<div class="cols3" style="gap:18px">${['lounge-2|Lounge with wooden tables and cushions','lounge-3|Long lounge with large windows','lounge-4|Corner of the lounge'].map((x,i)=>{const [n,a]=x.split('|');return `<div class="frame wide reveal-img rv d${i}" style="aspect-ratio:4/3">${img(n,a,{sizes:'(max-width:860px) 92vw, 33vw'})}</div>`}).join('')}</div></div></section>`};

/* GROUPS */
pages.groups={title:'Group Stays in Manali: Teams, Students & Travel Agencies | Hamta Homestay',desc:'Bring your group to The Hamta Homestay in Manali. Corporate teams, school and college groups, nonprofits and travel agencies. Stay, food and calm under one roof.',
body:`${pageHero('Bring your people','Groups','ext-close','The Hamta Homestay building seen from below')}
<section><div class="wrap">
  <div class="sec-head"><p class="eyebrow">Who we host</p><h2>One home, many kinds of groups</h2><p class="lead">We host groups of 15 to 20 guests across 8 rooms. Tell us your dates and group size and we reply with a plan.</p></div>
  <div class="cols3 light-cols">
    <div class="pillar rv"><h3>Teams &amp; offsites</h3><p>Corporate retreats, remote teams and founders who need quiet focus time.</p></div>
    <div class="pillar rv d1"><h3>Students</h3><p>School, college and university groups, study tours and workshops.</p></div>
    <div class="pillar rv d2"><h3>Organisations</h3><p>Nonprofits, wellness groups, travel agencies and tour operators.</p></div>
  </div>
  <div class="split" style="margin-top:80px"><div class="frame wide reveal-img">${img('lounge-3','Shared lounge with wooden tables')}</div>
  <div class="rv"><h2>Meals, together</h2><p class="lead" style="margin-top:16px">Our chef cooks on request. Share dietary needs and group size in advance.</p><ul class="ticks"><li>Shared lounge for sessions and meals</li><li>Yoga and meditation on request</li><li>Games and a garden for downtime</li></ul><div style="margin-top:28px"><a class="btn btn-dark" href="/book?type=group">Request a group quote</a></div></div></div>
</div></section>`};

/* EXPERIENCES */
pages.experiences={title:'Around Hamta: Treks, River & Himalayan Views near Manali',desc:'Forest trails, a river nearby, mountain views and quiet. What to do around The Hamta Homestay in Manali, Himachal Pradesh.',
body:`${pageHero('Around Hamta','Experiences','view-valley','Green valley with pine trees and cloud over Himalayan peaks')}
<section><div class="wrap">
  <div class="sec-head"><p class="eyebrow">The setting</p><h2>Forest, river, peaks</h2><p class="lead">Forest, a river nearby, trekking and mountain views that change by the hour.</p></div>
  <div class="cols3" style="gap:18px">
    <div class="frame reveal-img rv">${img('forest-trail','Forest trail through tall pines','')}</div>
    <div class="frame reveal-img rv d1">${img('view-sunset-tall','Sunset over layered ridges','')}</div>
    <div class="frame reveal-img rv d2">${img('view-clouds','Clouds around mountain peaks')}</div>
  </div>
</div></section>
<section style="background:var(--mist)"><div class="wrap">
  <div class="cols3 light-cols">
    <div class="pillar rv"><h3>Trek &amp; walk</h3><p>There are good trekking spots nearby. Ask us what suits your fitness and the season.</p></div>
    <div class="pillar rv d1"><h3>River &amp; forest</h3><p>A river and forest are close by. Good for evening walks and longer days out.</p></div>
    <div class="pillar rv d2"><h3>Stillness</h3><p>Yoga, meditation and quiet. A peaceful place to meet yourself or get remote work done.</p></div>
  </div>
  <p class="note" style="margin-top:30px">Distances and drive times (for example Hadimba Devi Temple is about 50 minutes by road per Google) vary by traffic and season. Ask us before you plan the day.</p>
</div></section>
<section><div class="wrap split"><div class="frame wide reveal-img">${img('rooftop','View over rooftops to the mountains')}</div><div class="rv"><h2>Come for the view. Stay for the food.</h2><p class="lead" style="margin:16px 0 28px">Our chef cooks on request, from meals to sweets.</p><a class="btn btn-dark" href="/menu">See the menu</a></div></div></section>`};

/* MENU */
pages.menu={title:'Food | The Hamta Homestay, Manali',desc:'Home cooking at The Hamta Homestay in Manali. Our in-house chef cooks meals and sweets on request. Food is an affordable add-on.',
body:`${pageHero('Food','Eat well','lounge-5','Wooden table in the lounge at Hamta Homestay')}
<section><div class="wrap hb" style="max-width:860px">
  <p class="lead">We have an in-house chef who cooks what you ask for, from everyday meals to sweets. Food costs extra and is kept affordable.</p>
  <div class="callout"><b>With meals:</b> ₹2,500 per night for one guest, ₹3,000 for two sharing a room. Monthly with meals: ₹24,000 for one, ₹30,000 for two.</div>
  <h2 style="margin-top:36px">Our menu</h2>
  <p>The full guest menu is being prepared and will be published on this page. Until then, tell us what you like when you book and we will plan around it, including any dietary needs.</p>
  <div style="margin-top:30px"><a class="btn btn-gold" href="/book">Request your stay with meals</a></div>
</div></section>`};

/* HANDBOOK */
pages.handbook={title:'Guest Handbook | The Hamta Homestay, Manali',desc:'Everything to know for your stay at The Hamta Homestay, Manali: arrival, rooms, meals, Wi-Fi, mountain tips and house notes.',
body:`${pageHero('Guest handbook','Before and during your stay','corridor-view','Corridor with view of pines and mountains')}
<section><div class="wrap hb" style="max-width:860px">
  <p class="lead">A short guide for your stay. Specific details are shared by your host when your booking is confirmed.</p>
  <div class="toc"><a href="#arrive">Arrival</a><a href="#room">Your stay</a><a href="#food">Food</a><a href="#work">Work &amp; Wi-Fi</a><a href="#mountain">Mountain tips</a><a href="#help">Help</a></div>
  <h2 id="arrive">Arrival</h2><p>We are at 15th Mile, Hallan-i, Manali, Himachal Pradesh 175136. Share your arrival time and we guide you in. Check-in is from 12 PM and check-out is at 11 AM the next day. You are welcome to arrive at any time of day, with no extra charge. Mountain roads and weather can slow you down, so plan some buffer.</p>
  <h2 id="room">Your stay</h2><ul><li>Each room has a double bed and hosts two guests. A third guest fits on an extra mattress, ask us.</li><li>A cleaner and a cook are available. Tell us what you need.</li><li>Dogs live on site. Guest pets, children and unmarried couples are welcome, with no limit. Alcohol is accepted.</li><li>Free laundry with our washing machine.</li><li>Every room has a kettle, a geyser in the washroom and mirrors.</li><li>The property is non-smoking throughout.</li><li>Free parking on site. There is road access and the house is accessible.</li><li>Facilities include a garden, shared kitchen, shared lounge with TV area and a games room.</li><li>Heater electricity is ₹1,000 per day, or ₹3,000 per month for monthly guests, only if you use one.</li><li>Yoga and meditation sessions are not included in the room price.</li></ul>
  <h2 id="food">Food</h2><p>Our cook prepares meals on request. See <a href="/menu" style="text-decoration:underline">food</a>. Tell us what you like and any dietary needs. Food is extra unless your plan includes meals.</p>
  <h2 id="work">Work &amp; Wi-Fi</h2><p>Wi-Fi and constant electricity are available. The shared lounge has work tables. Hill internet can dip in bad weather, so keep a backup plan for critical calls.</p>
  <h2 id="mountain">Mountain tips</h2><ul><li>Layers beat one big jacket. Evenings are cold even after a warm day.</li><li>Altitude: drink water, go slow on the first day.</li><li>Check weather and road status before trekking. Use licensed local guides for long routes.</li></ul>
  <h2 id="help">Help</h2><p>Message or call your host Kabir on WhatsApp at +91 62398 15892. See also <a href="/house-rules" style="text-decoration:underline">house rules</a>.</p>
</div></section>`};

/* GALLERY */
const G=[
 ['ext-day','Exterior','The Hamta Homestay building in blue and white'],['ext-night','Exterior','Hamta Homestay lit up at night among flowers'],['ext-close','Exterior','Close view of the homestay balconies'],['ext-green','Exterior','Homestay teal roof surrounded by green hills'],
 ['room-a1','Rooms','Room photo'],['room-a2','Rooms','Room with seating'],['room-a3','Rooms','Bed with cushions and lamps'],['room-a4','Rooms','Bedroom with warm lamps'],['room-b1','Rooms','Bedroom with rug'],['room-b2','Rooms','Bed with red blanket'],['room-b3','Rooms','Bedroom with striped throw'],['room-b4','Rooms','Room with rug and curtains'],['room-c1','Rooms','Room with high wooden ceiling'],['room-c3','Rooms','Room with patterned curtains'],['bath-1','Rooms','Clean bathroom with wooden door'],['bath-2','Rooms','Bathroom'],
 ['lounge-1','Lounge','Lounge with wooden tables'],['lounge-2','Lounge','Lounge from the other end'],['lounge-3','Lounge','Lounge with large windows'],['lounge-4','Lounge','Corner of the lounge'],['workspace','Lounge','Laptop on a lounge table'],['desks','Lounge','Work desks in the lounge'],['balcony-seat','Lounge','Balcony seating'],['food-omelette','Lounge','Home-cooked food'],
 ['view-balcony','Views','Balcony view over pines'],['view-sunset','Views','Sunset over the ridges'],['view-sunset-tall','Views','Evening light over the valley'],['view-valley','Views','Green valley and cloud'],['view-clouds','Views','Clouds on the peaks'],['corridor-view','Views','Corridor view'],['rooftop','Views','Rooftops and mountains'],['forest-trail','Views','Forest trail nearby']];
pages.gallery={title:'Photo Gallery | The Hamta Homestay, Manali',desc:'Photos of The Hamta Homestay in Manali: rooms, lounge, building and Himalayan views.',
body:`${pageHero('Gallery','See the place','view-sunset','Orange sunset over the Himalayan ridge')}
<section><div class="wrap">
  <div class="chips" role="group" aria-label="Filter"><button class="chip" data-f="all" aria-pressed="true">All</button><button class="chip" data-f="Rooms" aria-pressed="false">Rooms</button><button class="chip" data-f="Lounge" aria-pressed="false">Lounge &amp; food</button><button class="chip" data-f="Exterior" aria-pressed="false">Building</button><button class="chip" data-f="Views" aria-pressed="false">Views</button></div>
  <div class="mosaic">${G.map(([n,c,a])=>`<button data-c="${c==='Lounge'?'Lounge':c}" data-full="/assets/img/${n}.webp" aria-label="Open photo: ${a}"><img src="/assets/img/${n}-sm.webp" alt="${a}" loading="lazy" decoding="async"></button>`).join('')}</div>
  <p class="note">All photos are of the homestay and its surroundings.</p>
</div></section>
<div class="lb" role="dialog" aria-modal="true" aria-label="Photo viewer"><button class="x" aria-label="Close">×</button><button class="p" aria-label="Previous">‹</button><img alt=""><button class="n" aria-label="Next">›</button></div>`};

/* BOOK */
pages.book={title:'Request a Stay | The Hamta Homestay, Manali',desc:'Request a daily, monthly or group stay at The Hamta Homestay in Manali. We reply with availability and a final quote.',light:true,
body:`<section style="padding-top:130px"><div class="wrap">
  <div class="sec-head"><p class="eyebrow">Booking request</p><h1 style="font-size:clamp(40px,6vw,76px)">Request your stay</h1><p class="lead">Tell us when and how long. We check availability and reply with a clear quote.</p></div>
  <div class="split" style="align-items:start">
    <form class="form box" id="bookform">
      <input class="hp" type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true">
      <div class="row"><label>Name<input name="name" required autocomplete="name"></label><label>Email<input type="email" name="email" required autocomplete="email"></label></div>
      <div class="row"><label>Phone / WhatsApp<input type="tel" name="phone" required autocomplete="tel"></label><label>Where are you from?<input name="country" autocomplete="country-name" placeholder="City or country"></label></div>
      <div class="row"><label>Stay type<select name="stay_type"><option value="daily">Daily (up to a few weeks)</option><option value="monthly">Monthly (one month or more)</option><option value="group">Group</option></select></label><label>Rooms<input type="number" name="rooms" min="1" max="8" value="1"></label></div>
      <div class="row"><label>Check-in<input type="date" name="check_in" required></label><label class="only-daily">Check-out<input type="date" name="check_out"></label><label class="only-monthly" hidden>Months<input type="number" name="months" min="1" max="12" value="1"></label></div>
      <div class="row"><label>Guests per room<select name="guests"><option value="1">1</option><option value="2">2</option></select></label><label>Meals<select name="meals"><option value="no">Room only</option><option value="yes">With meals</option></select></label></div>
      <label style="display:flex;gap:10px;align-items:center;font-weight:500"><input type="checkbox" name="heater" style="width:20px;min-height:20px"> I will use a room heater (₹1,000 a day, ₹3,000 a month)</label>
      <label>Anything we should know?<textarea name="notes" placeholder="Group size, dietary needs, remote work, yoga, arrival time"></textarea></label>
      <div class="est" aria-live="polite"><small>Indicative total</small><b id="est-out">Pick your dates</b><small id="est-note"></small></div>
      <button class="btn btn-gold" type="submit" style="width:100%">Send booking request</button>
      <div id="form-msg" class="msg" hidden role="status"></div>
      <p class="note" style="margin-top:0">This is a request, not a confirmed booking. We confirm availability and the final price, then you pay in full in advance. Your details are sent to Hamta by email through FormSubmit, a third-party form service, and used only to reply to you. See <a href="/privacy" style="text-decoration:underline">privacy</a>.</p>
    </form>
    <div class="rv"><div class="frame wide reveal-img" style="margin-bottom:24px">${img('room-a3','Double room ready for guests')}</div>
      <h3>What happens next</h3><ul class="ticks"><li>We check availability for your dates</li><li>You get a clear quote, including any peak-date change</li><li>You pay in full in advance to confirm the booking</li><li>Check-in is from 12 PM, and you can arrive at any time</li></ul>
      <p style="margin-top:22px"><a class="btn btn-dark" data-wa="Hello, I would like to book at The Hamta Homestay." href="#" hidden target="_blank" rel="noopener">Chat on WhatsApp</a></p></div>
  </div>
</div></section>`};

/* CONTACT */
pages.contact={title:'Contact | The Hamta Homestay, Manali',desc:'Contact The Hamta Homestay at 15th Mile, Hallan-i, Manali, Himachal Pradesh 175136.',light:true,
body:`<section style="padding-top:130px"><div class="wrap">
  <div class="sec-head"><p class="eyebrow">Get in touch</p><h1 style="font-size:clamp(40px,6vw,76px)">Say hello</h1></div>
  <div class="split" style="align-items:start">
    <form class="form box" id="contactform"><input class="hp" type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true">
      <label>Name<input name="name" required autocomplete="name"></label><label>Email<input type="email" name="email" required autocomplete="email"></label>
      <label>Message<textarea name="message" required></textarea></label>
      <p class="note" style="margin:0">Your message goes to Hamta by email through FormSubmit, a third-party form service. See <a href="/privacy" style="text-decoration:underline">privacy</a>.</p><button class="btn btn-dark" type="submit">Send message</button><div id="form-msg" class="msg" hidden role="status"></div></form>
    <div class="rv"><h3>Find us</h3><p style="margin:12px 0 4px;color:var(--ink-2)">The Hamta Homestay<br>15th Mile, Hallan-i, Manali<br>Himachal Pradesh 175136, India<br>Plus code 45V6+J9 Hallan-i</p><p style="margin:6px 0;color:var(--ink-2);font-size:14px">Bookings and questions: hello@hamta.in. Help with an existing stay: support@hamta.in.</p><p style="margin:10px 0;color:var(--ink-2)">Your host: Kabir</p>
      <p style="margin:14px 0"><a data-email href="#" hidden style="text-decoration:underline"></a><br><a data-support href="#" hidden style="text-decoration:underline"></a><br><a data-phone href="#" hidden style="text-decoration:underline"></a></p>
      <p>${IG?`<a class="btn btn-line" href="${IG}" target="_blank" rel="noopener">Instagram</a> `:''}<a class="btn btn-line" href="${MAPS}" target="_blank" rel="noopener">Open in Google Maps</a></p>
      <div class="frame wide reveal-img" style="margin-top:28px">${img('ext-day','Hamta Homestay from the road')}</div></div>
  </div>
</div></section>`};

/* POLICIES */
const draftNote='';
const prose=(t,d,b)=>({title:`${t} | The Hamta Homestay, Manali`,desc:d,light:true,body:`<section style="padding-top:140px"><div class="wrap prose"><p class="eyebrow">Policy</p><h1 style="font-size:clamp(38px,5vw,64px);margin:12px 0 26px">${t}</h1>${draftNote}${b}</div></section>`});
pages.terms=prose('Terms &amp; conditions','Booking terms for The Hamta Homestay in Manali.',`
<h2>Booking requests</h2><p>A request on this website is not a booking. A booking exists when Hamta confirms availability and price to you and you pay the advance.</p>
<h2>Rates and payment</h2><p>Rates are in Indian rupees, per room, for up to two guests, and are the same for all guests. All taxes are included. Payment is made in full in advance, after we confirm availability and the price. Peak-date rates apply on national holidays, busy weekends, the last week of December, the first week of January and the first two weeks of February, and are confirmed before you pay.</p>
<h2>Check-in and check-out</h2><p>Check-in is from 12 PM. Check-out is at 11 AM the next day. You are welcome to arrive at any time of day, with no extra charge.</p>
<h2>Monthly stays</h2><p>A month is the calendar month, first to last date, or 30 days. Three rooms are kept for monthly stays.</p>
<h2>Guests</h2><p>Each room has a double bed for two guests. A third guest can be added on an extra mattress. Pets, children and unmarried couples are welcome with no limit. Smoking is not allowed. Alcohol is accepted. Guests may be asked for valid photo identification at check-in.</p>
<h2>If we cannot host you</h2><p>If we are unable to provide your room or food, your payment is refunded in full, with no charge and no questions asked. See <a href="/cancellation-refund" style="text-decoration:underline">cancellation and refunds</a>.</p>
<h2>Contact</h2><p>Questions: email hello@hamta.in or support@hamta.in, or use the <a href="/contact" style="text-decoration:underline">contact page</a> or WhatsApp +91 62398 15892.</p>`);
pages['cancellation-refund']=prose('Cancellation &amp; refunds','Cancellation and refund policy for The Hamta Homestay in Manali.',`
<h2>If you cancel</h2><table class="ptable"><tbody>
<tr><th>10 days before arrival</th><td class="n" style="font-size:22px">Full refund</td></tr>
<tr><th>7 days before arrival</th><td class="n" style="font-size:22px">60% refund</td></tr>
<tr><th>3 days before arrival</th><td class="n" style="font-size:22px">30% refund</td></tr>
<tr><th>24 hours before arrival</th><td class="n" style="font-size:22px">No refund</td></tr></tbody></table>
<h2>If we cannot host you</h2><p>If we are unable to provide your room or food, or anything promised is not provided, your payment is refunded 100% with no charges and no questions asked.</p>
<h2>How to cancel</h2><p>Message us on WhatsApp at +91 62398 15892 or use the <a href="/contact" style="text-decoration:underline">contact page</a>.</p>`);
pages['house-rules']=prose('House rules','House rules at The Hamta Homestay in Manali.',`
<h2>Welcome</h2><ul><li>Pets are welcome, with no limit.</li><li>Children are welcome, with no limit.</li><li>Unmarried couples are welcome.</li><li>Alcohol is accepted.</li></ul>
<h2>Not allowed</h2><ul><li>Smoking. The property is non-smoking throughout.</li></ul>
<h2>Good to know</h2><ul><li>Check-in from 12 PM, check-out at 11 AM. Arrive at any time.</li><li>Free parking on site. Road access and accessibility are available.</li><li>Free laundry with our washing machine.</li><li>Yoga and meditation sessions are not included in the room price.</li></ul>
<h2>Our home</h2><p>This is a quiet mountain home. Please keep noise low and treat the space with care.</p>`);
pages.privacy=prose('Privacy','How The Hamta Homestay handles guest details sent through this website.',`
<h2>What we collect</h2><p>Only what you type into the booking or contact form: name, email, phone, travel dates, guest numbers and notes.</p>
<h2>How it is handled</h2><p>Form messages are delivered to Hamta by email through FormSubmit (formsubmit.co), a third-party form service. We use your details to reply to you and to host you. When online payment is added, payments are handled by the payment provider. We do not sell them.</p>
<h2>Fonts</h2><p>This site loads fonts from Google Fonts, which may receive your IP address.</p>
<h2>Your choices</h2><p>To correct or delete your details, use the <a href="/contact" style="text-decoration:underline">contact page</a>.</p>`);

/* 404 */
pages['404']={title:'Page not found | The Hamta Homestay',desc:'Page not found.',light:true,noindex:true,body:`<section style="padding-top:180px;text-align:center"><div class="wrap sec-head center"><h1>Lost in the hills?</h1><p class="lead">That page is not here. Let's get you back.</p><a class="btn btn-dark" href="/">Back home</a></div></section>`};

const urls=[];
for(const [file,p] of Object.entries(pages)){
  fs.writeFileSync(path.join(root,file+'.html'),layout({file,...p}));
  if(!p.noindex) urls.push(file==='index'?'':file);
}
fs.writeFileSync(path.join(root,'robots.txt'),LIVE?'User-agent: *\nAllow: /\nSitemap: https://hamta.in/sitemap.xml\n':'User-agent: *\nDisallow: /\n');
fs.writeFileSync(path.join(root,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u=>`  <url><loc>${SITE}/${u}</loc></url>`).join('\n')}\n</urlset>\n`);
console.log('built',Object.keys(pages).length,'pages');
