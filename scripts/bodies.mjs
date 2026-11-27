// Editorial page bodies (v4 design). Copy is deliberately short; rates live on /stay and /monthly-stay only.
export default function(img,{pageHero}){
const strip=(href,n,alt,t,s)=>`<a class="strip-i" href="${href}">${img(n,alt,{sizes:'(max-width:860px) 100vw, 40vw'})}<span class="cap"><i>${s}</i><b>${t}</b></span></a>`;
const index=`
<section class="hero2" data-hero>
  <div class="hero2-img">${img('view-2','Snow-covered mountain range above an autumn valley with a pond, nearby',{eager:true,sizes:'100vw'})}</div>
  <p class="h-cap h-cap-l">Manali, Himachal Pradesh</p>
  <h1 class="h-title" aria-label="Hamta">HAMTA</h1>
  <p class="h-cap h-cap-r">Stay where the mountains stay.</p>
  <a class="h-cta" href="/book">Request a stay</a>
  <span class="h-scroll" aria-hidden="true">Scroll</span>
</section>

<section class="intro">
  <div class="wrap">
    <p class="kicker">01 / The house</p>
    <p class="big-words" data-words>A homestay in the pines above the Manali valley. Wood-lined rooms, home cooking and the Himalaya at the window.</p><p style="text-align:center;margin-top:26px;font-size:16px"><a href="/workation" style="text-decoration:underline;text-underline-offset:4px">Planning a team workation? Slow down and work with intent in Manali.</a></p>
    <p class="aside">By the night, by the month, or for your whole group.</p>
  </div>
</section>

<section class="pin" data-pin>
  <div class="pin-in">
    <div class="pin-img">${img('window-view','View from a Hamta homestay window over pine trees, rooftops and the valley',{sizes:'100vw'})}</div>
    <h2 class="pin-t"><span>THE</span> <span>VIEW</span></h2>
    <p class="pin-c">The view from a homestay window.</p>
  </div>
</section>

<section class="strips-sec">
  <div class="wrap"><p class="kicker">02 / Ways to stay</p></div>
  <div class="strips" data-strips>
    ${strip('/stay','room-3','Double bed with an arched wooden headboard and warm bedside lamps','Rooms','Eight rooms')}
    ${strip('/monthly-stay','lounge','Long wooden lounge with large windows and shared tables','Monthly','Live here a while')}
    ${strip('/groups','night','The Hamta Homestay lit up at night among flowers','Groups','15 to 20 guests')}
    ${strip('/experiences','room-8','Sunlit room with a wooden double bed and a patterned bed runner','Around','Forest, river, peaks')}
  </div>
</section>

<section class="duo">
  <div class="wrap duo-g">
    <figure class="duo-a rv">${img('night','The Hamta Homestay lit up at night among flowers',{sizes:'(max-width:860px) 80vw, 34vw'})}</figure>
    <div class="duo-t rv"><p class="kicker">03 / Evenings</p><h2>THE HOUSE<br>AT NIGHT</h2><p class="serif-i">Bring a book, a laptop or nothing at all.</p></div>
    <figure class="duo-b rv d1">${img('night','Hamta Homestay lit up at night among flowers',{sizes:'(max-width:860px) 70vw, 26vw'})}</figure>
  </div>
</section>

<section class="rates-line"><div class="wrap"><p>From <b>₹2,000</b> a night, breakfast included. <b>₹15,000</b> a month. <a href="/stay">See rates</a></p></div></section>

<section class="closer">
  <div class="closer-img">${img('view-1','Snow-capped mountains above an autumn valley and a sunlit slope, nearby',{sizes:'100vw'})}</div>
  <div class="wrap"><h2>COME AND<br>STAY A WHILE</h2><a class="btn btn-gold" href="/book">Request your stay</a></div>
</section>`;

const stay=`${pageHero('Stay','Rooms and rates','room-2','Bedroom with a wooden bed, patterned curtains and a window')}
<section class="s-intro"><div class="wrap narrow"><p class="big-words" data-words>Eight rooms, each with a double bed. Two guests per room, a third on an extra mattress. Breakfast is included with every stay.</p></div></section>
<section class="rooms-ed"><div class="wrap">
  <figure class="re-a rv">${img('room-3','Double bed with an arched wooden headboard and warm bedside lamps',{sizes:'(max-width:860px) 92vw, 56vw'})}</figure>
  <figure class="re-b rv d1">${img('room-2','Bedroom with a wooden bed, patterned curtains and a window',{sizes:'(max-width:860px) 60vw, 26vw'})}</figure>
  <figure class="re-c rv">${img('room-4','Room with a double bed, chairs, a table and patterned curtains',{sizes:'(max-width:860px) 92vw, 40vw'})}</figure>
</div></section>
<section class="rates"><div class="wrap">
  <p class="kicker">Rates in rupees, taxes included</p>
  <div class="tabs" role="tablist"><button role="tab" id="t1" aria-selected="true" aria-controls="p-daily">Daily</button><button role="tab" id="t2" aria-selected="false" aria-controls="p-monthly">Monthly</button></div>
  <div class="panel" id="p-daily" role="tabpanel" aria-labelledby="t1">
    <table class="ptable"><tbody>
      <tr><th>Stay with breakfast<small>Up to 2 guests</small></th><td class="n">₹2,000<small>per night</small></td></tr>
      <tr><th>Full meal package, one guest<small>Meals cooked by our chef, breakfast included</small></th><td class="n">₹2,500<small>per night</small></td></tr>
      <tr><th>Full meal package, two guests<small>Same room</small></th><td class="n">₹3,000<small>per night</small></td></tr>
      <tr><th>Seven nights or more<small>15% off the room and meals bill</small></th><td class="n">15% off</td></tr>
      <tr><th>Heater<small>Only if you use one</small></th><td class="n">₹1,000<small>per day</small></td></tr>
    </tbody></table>
    <p class="note">Peak dates cost more: national holidays, busy weekends (Saturday and Sunday, or a holiday joined to a weekend), the last week of December, the first week of January and the first two weeks of February. From December to mid-February, rates with breakfast range from ₹2,000 to ₹3,000 a night. We confirm the exact amount for your dates before you pay.</p>
  </div>
  <div class="panel" id="p-monthly" role="tabpanel" aria-labelledby="t2" hidden>
    <table class="ptable"><tbody>
      <tr><th>Stay with breakfast, one guest<small>Cook and cleaner available</small></th><td class="n">₹15,000<small>per month</small></td></tr>
      <tr><th>Stay with breakfast, two guests<small>Same room</small></th><td class="n">₹20,000<small>per month</small></td></tr>
      <tr><th>Full meal package, one guest<small>Meals cooked by our chef</small></th><td class="n">₹24,000<small>per month</small></td></tr>
      <tr><th>Full meal package, two guests<small>Same room</small></th><td class="n">₹30,000<small>per month</small></td></tr>
      <tr><th>Heater<small>Only if you use one</small></th><td class="n">₹3,000<small>per month</small></td></tr>
    </tbody></table>
    <p class="note">The same prices apply to guests from India and abroad. A month is the calendar month or 30 days.</p>
  </div>
  <div style="margin-top:36px"><a class="btn btn-dark" href="/book">Request your stay</a></div>
</div></section>
<section class="facil"><div class="wrap"><p class="kicker">Included</p>
  <ul class="plain-cols">
    <li>Private washroom with geyser</li><li>Spacious balcony</li><li>Free Wi-Fi</li><li>Free private parking</li><li>Garden</li><li>Shared lounge and kitchen</li><li>Free laundry</li><li>Electric kettle</li><li>Soundproof rooms</li>
  </ul>
  <p class="note">Pets, children and alcohol are welcome. The property is non-smoking.</p>
</div></section>`;

const monthly=`${pageHero('Live here for a month','Monthly stays','lounge','Long wooden lounge with large windows at The Hamta Homestay')}
<section class="s-intro"><div class="wrap narrow"><p class="big-words" data-words>Your office has a Himalaya outside. Constant electricity, Wi-Fi, a shared lounge with work tables, and nobody rushing you.</p><p style="text-align:center;margin-top:26px;font-size:16px"><a href="/workation" style="text-decoration:underline;text-underline-offset:4px">Want structure around the stay? See our 6 day workation in Manali.</a></p></div></section>
<section class="rooms-ed"><div class="wrap">
  <figure class="re-a rv">${img('lounge','Long wooden lounge with large windows and shared tables',{sizes:'(max-width:860px) 92vw, 56vw'})}</figure>
  <figure class="re-b rv d1">${img('lounge','Long wooden lounge with large windows and shared tables',{sizes:'(max-width:860px) 60vw, 26vw'})}</figure>
</div></section>
<section class="rates"><div class="wrap">
  <p class="kicker">Monthly plans, taxes included</p>
  <table class="ptable"><tbody>
    <tr><th>Stay with breakfast<small>one guest. ₹20,000 for two sharing</small></th><td class="n">₹15,000<small>per month</small></td></tr>
    <tr><th>Full meal package<small>one guest. ₹30,000 for two sharing</small></th><td class="n">₹24,000<small>per month</small></td></tr>
    <tr><th>Heater<small>Only if you use one</small></th><td class="n">₹3,000<small>per month</small></td></tr>
  </tbody></table>
  <p class="note">Three rooms are kept for monthly stays. A cook and a cleaner are available. Same price for guests from India and abroad. Yoga and meditation sessions are in-house and not included in the price.</p>
  <div style="margin-top:36px"><a class="btn btn-dark" href="/book?type=monthly">Request a monthly stay</a></div>
</div></section>`;

const groups=`${pageHero('Bring your people','Groups','night','Hamta Homestay lit up at night among flowers')}
<section class="s-intro"><div class="wrap narrow"><p class="big-words" data-words>Groups of 15 to 20 across eight rooms. Teams, students, nonprofits and travel agencies. One house, one table, a lot of quiet.</p><p style="text-align:center;margin-top:26px;font-size:16px"><a href="/workation" style="text-decoration:underline;text-underline-offset:4px">Teams, universities and organisations: see our workation in Manali.</a></p></div></section>
<section class="rooms-ed"><div class="wrap">
  <figure class="re-a rv">${img('night','Hamta Homestay lit up at night among flowers',{sizes:'(max-width:860px) 70vw, 34vw'})}</figure>
  <figure class="re-c rv d1">${img('lounge','Long wooden lounge with large windows and shared tables',{sizes:'(max-width:860px) 92vw, 44vw'})}</figure>
</div></section>
<section class="rates"><div class="wrap narrow"><p class="lead">Tell us your dates and group size and we reply with a plan. Breakfast is included with every stay. Our chef cooks more on request, so share dietary needs in advance.</p><div style="margin-top:32px"><a class="btn btn-dark" href="/book?type=group">Plan a group stay</a></div></div></section>`;

const exp=`${pageHero('Around Hamta','Forest, river, peaks','view-1','Snow-capped mountains above an autumn valley and a sunlit slope, nearby')}
<section class="s-intro"><div class="wrap narrow"><p class="big-words" data-words>Forest trails, a river nearby and trekking. Ask us what suits the season.</p></div></section>
<section class="rooms-ed"><div class="wrap">
  <figure class="re-a rv">${img('act-1','A paraglider above snow-dusted mountains and pine forest, an activity guests go to',{sizes:'(max-width:860px) 92vw, 56vw'})}</figure>
  <figure class="re-b rv d1">${img('act-2','A rider on a motorcycle outside a glass-fronted building with prayer flags and snow peaks behind, a place guests go to',{sizes:'(max-width:860px) 60vw, 26vw'})}</figure>
</div></section>
<section class="rates"><div class="wrap narrow"><p class="lead">Ask us what suits your fitness and the season. Yoga and meditation are in-house.</p><p class="note">Photos show places and activities guests go to.</p><p class="note">Drive times, for example about 50 minutes by road to Hadimba Devi Temple per Google, vary with traffic and season.</p></div></section>`;
return {index,stay,monthly,groups,exp};
}
