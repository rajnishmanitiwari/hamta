/* Single place for details the owner can change. Empty values hide the related UI. */
window.HAMTA = {
  name: "The Hamta Homestay",
  place: "Manali, Himachal Pradesh",
  address: "15th Mile, Hallan-i, Manali, Himachal Pradesh 175136, India",
  // Guest-facing contact. PENDING owner answer: leave empty until confirmed.
  whatsapp: "916239815892",            // digits only with country code, e.g. "919XXXXXXXXX"
  phone: "+916239815892",
  email: "hello@hamta.in",
  supportEmail: "support@hamta.in",   // forwards to the owner via Cloudflare Email Routing
  instagram: "",           // PENDING: only set after the owner confirms the account
  googleMaps: "https://www.google.com/maps/place/The+Hamta+Homestay+Manali/@32.1440721,77.1609703,17z",
  // Form delivery. FormSubmit AJAX endpoint; activates on first submission via the email owner.
  formEndpoint: "https://formsubmit.co/ajax/bookings@hamta.in",        // booking requests
  contactEndpoint: "https://formsubmit.co/ajax/hello@hamta.in",        // contact messages
  // Keep false until the form delivery path is activated and a real test message has arrived.
  // While false the forms never claim to have sent anything.
  formLive: true,
  // INR. Per room per night, room hosts up to 2 guests.
  rates: {
    nightly: { room: 2000, meal1: 2500, meal2: 3000, heater: 500 },
    monthly: { solo: 15000, duo: 20000, soloMeals: 24000, duoMeals: 30000, heater: 3000 },
    weeklyDiscount: 0.15
  },
  // Confirmed by the owner on 27 Nov 2026 (daily heater changed to Rs 500 on 28 Nov): 15% off stays of 7+ nights (full room+meals bill), heater Rs 500/day or Rs 3,000/month, taxes included.
  confirmed: { weekly: true, heater: true }
};
