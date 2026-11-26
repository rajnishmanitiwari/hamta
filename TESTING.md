# Test record, v3.1 release candidate (27 Nov 2026)

Pass 1, visual: all 15 pages at 1280 and 390 px, scrolled fully so every reveal animation fires. Images in the review bundle.
Pass 2, code: internal links and asset paths (0 broken), 0 JS errors, 0 horizontal overflow, 0 unrevealed elements, every form field labelled, 0 images without alt, one h1 per page, skip link first in tab order, structured data audited against confirmed facts.
Pass 3, function (headless Chrome, `st.mjs` and `f.mjs` equivalents): estimator maths (7 nights room only = 11,900; 7 nights with meals = 17,850; 2 months solo + heater = 36,000), checkout-before-checkin message, native validation blocks empty submit, formLive=false shows "Nothing was sent", mocked responses (activated = success; "needs activation", HTTP 500 and network failure = error), contact form posts to the hello@ endpoint, booking to the bookings@ endpoint, tabs, gallery filter, lightbox, mobile menu.
Motion and slow devices: prefers-reduced-motion removes the hero video, the headline animation and the drifting layers; the hero video is not loaded with saveData, 3g, or under 700 px wide; no blocking intro.
Not run: Lighthouse, real devices, live form delivery from the published page.
