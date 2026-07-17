/**
 * heyianc.net — Embed Config
 * Hosted at: heyianc.github.io/embed-config/embed-config.js
 *
 * HOW TO UPDATE:
 * 1. Find the destination key you want to change (TW, HK, SG, JP, VN)
 * 2. Replace the empty string with your embed code
 * 3. Save and push to GitHub — all articles update automatically
 *
 * GHOST HTML CARD — set data-slot to the key you want:
 * data-slot="TW"  → Taiwan articles
 * data-slot="HK"  → Hong Kong articles
 * data-slot="SG"  → Singapore articles
 * data-slot="JP"  → Japan articles
 * data-slot="VN"  → Vietnam articles
 */

window.HEYIANC_EMBEDS = {

  // ── TW — Taiwan ──────────────────────────────────────
  TW: `<style>
.hic-block *, .hic-block *::before, .hic-block *::after { box-sizing: border-box; margin: 0; padding: 0; text-decoration: none; }
.hic-block { font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif; width: 100%; margin-bottom: 48px; }
.hic-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 14px; width: 100%; }
.hic-grid.cols-2 { grid-template-columns: repeat(2, 1fr); }
.hic-grid.cols-3 { grid-template-columns: repeat(3, 1fr); }
.hic-grid.cols-4 { grid-template-columns: repeat(4, 1fr); }
.hic-carousel { display: none; }
.hic-card { text-decoration: none !important; color: inherit; display: flex; flex-direction: column; border: 1px solid #ebebeb; border-radius: 12px; overflow: hidden; background: #fff; transition: border-color .2s, transform .2s; width: 100%; }
.hic-card:hover { border-color: #ccc; transform: translateY(-2px); }
.hic-card-img { width: 100%; object-fit: cover; display: block; background: #f5f5f5; flex-shrink: 0; }
.hic-card-img.ratio-square { aspect-ratio: 1 / 1; }
.hic-card-img.ratio-wide   { aspect-ratio: 16 / 9; }
.hic-card-img.ratio-32     { aspect-ratio: 3 / 2; }
.hic-card-img.ratio-23     { aspect-ratio: 2 / 3; }
.hic-card-img-placeholder { width: 100%; background: #f5f5f5; display: none; align-items: center; justify-content: center; color: #ccc; font-size: 12px; font-family: inherit; flex-shrink: 0; }
.hic-card-img-placeholder.ratio-square { aspect-ratio: 1 / 1; }
.hic-card-img-placeholder.ratio-wide   { aspect-ratio: 16 / 9; }
.hic-card-img-placeholder.ratio-32     { aspect-ratio: 3 / 2; }
.hic-card-img-placeholder.ratio-23     { aspect-ratio: 2 / 3; }
.hic-card-body { padding: 11px 13px 10px; flex: 1; display: flex; flex-direction: column; }
.hic-card-title { font-size: 14px; font-weight: 600; line-height: 1.4; color: #1a1a1a; margin-bottom: 3px; }
.hic-card-sub { font-size: 11px; color: #999; line-height: 1.6; margin-bottom: 8px; }
.hic-card-sub p { margin: 0; }
.hic-badge { display: inline-block; font-size: 10px; font-weight: 700; padding: 3px 8px; border-radius: 4px; }
.hic-badge-agoda    { background: #f3e8f3; color: #914b91; }
.hic-badge-klook    { background: #fdf0eb; color: #e5632b; }
.hic-badge-fullguide { background: #e6eef9; color: #004AAD; }
.hic-card-footer { display: flex; align-items: center; justify-content: space-between; margin-top: auto; padding-top: 10px; min-height: 24px; }
.hic-cta { display: inline-flex; align-items: center; gap: 4px; font-size: 12px; font-weight: 700; color: #fff; padding: 5px 12px; border-radius: 20px; white-space: nowrap; flex-shrink: 0; pointer-events: none; }
@media (max-width: 640px) {
  .hic-grid, .hic-grid.cols-2, .hic-grid.cols-3, .hic-grid.cols-4 { display: none; }
  .hic-carousel {
    display: flex; gap: 12px; align-items: stretch;
    overflow-x: auto; -webkit-overflow-scrolling: touch; scroll-snap-type: x mandatory;
    padding-left: 20px; padding-right: 20px; padding-bottom: 12px;
    scrollbar-width: none;
  }
  .hic-carousel::-webkit-scrollbar { display: none; }
  .hic-carousel .hic-card { flex: 0 0 72vw; max-width: 260px; scroll-snap-align: start; }
  .hic-carousel.wide .hic-card { flex: 0 0 82vw; max-width: 300px; }
  .hic-card:hover { transform: none; }
}
</style>

<div class="hic-block">

  <!-- DESKTOP GRID -->
  <div class="hic-grid cols-3">

  <a href="https://www.heyianc.net/taiwan-first-timer-guide-what-to-know/" class="hic-card" target="_blank" rel="noopener">
    <img src="https://storage.ghost.io/c/de/6c/de6c1401-a70a-4ffd-b503-b92f5fecfc7f/content/images/size/w2000/2026/04/Blog-Thumbnails-2-4.jpg" alt="Taiwan First Timer Guide: Everything You Need to Know Before You Go" class="hic-card-img ratio-wide"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="hic-card-img-placeholder ratio-wide">No image</div>
    <div class="hic-card-body">
      <div class="hic-card-title">Taiwan First Timer Guide: Everything You Need to Know Before You Go</div>
      <div class="hic-card-sub"><p>First time sa Taiwan? I got you!</p></div>
      <div class="hic-card-footer"><span class="hic-badge" style="color:#228b22;background:#e4f1e4">Travel Tips</span><span class="hic-cta" style="background:#228b22">→</span></div>
    </div>
  </a>

  <a href="https://www.heyianc.net/taiwan-travel-budget-hacks-first-timer/" class="hic-card" target="_blank" rel="noopener">
    <img src="https://storage.ghost.io/c/de/6c/de6c1401-a70a-4ffd-b503-b92f5fecfc7f/content/images/size/w2000/2026/04/YT_Thumbnail_Taiwan-Travel-By-udget-Hacks-for-First-Timers-2.jpg" alt="8 Taiwan Travel Budget Hacks Every First Timer Should Know" class="hic-card-img ratio-wide"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="hic-card-img-placeholder ratio-wide">No image</div>
    <div class="hic-card-body">
      <div class="hic-card-title">8 Taiwan Travel Budget Hacks Every First Timer Should Know</div>
      <div class="hic-card-sub"><p>Tipid nga ba o hindi?</p></div>
      <div class="hic-card-footer"><span class="hic-badge" style="color:#228b22;background:#e4f1e4">Travel Tips</span><span class="hic-cta" style="background:#228b22">→</span></div>
    </div>
  </a>

  <a href="https://www.heyianc.net/9-mistakes-every-first-timer-makes-in-taiwan-and-how-to-avoid-them/" class="hic-card" target="_blank" rel="noopener">
    <img src="https://storage.ghost.io/c/de/6c/de6c1401-a70a-4ffd-b503-b92f5fecfc7f/content/images/size/w2000/2026/04/Blog-Thumbnails.jpg" alt="9 Mistakes Every First-Timer Makes in Taiwan (And How to Avoid Them)" class="hic-card-img ratio-wide"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="hic-card-img-placeholder ratio-wide">No image</div>
    <div class="hic-card-body">
      <div class="hic-card-title">9 Mistakes Every First-Timer Makes in Taiwan (And How to Avoid Them)</div>
      <div class="hic-card-sub"><p>Read this before your Taiwan visit!</p></div>
      <div class="hic-card-footer"><span class="hic-badge" style="color:#228b22;background:#e4f1e4">Travel Tips</span><span class="hic-cta" style="background:#228b22">→</span></div>
    </div>
  </a>

  <a href="https://www.heyianc.net/best-time-to-visit-taipei-taiwan-weather-guide/" class="hic-card" target="_blank" rel="noopener">
    <img src="https://images.unsplash.com/photo-1581876245647-e8f792eebc38?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDR8fHRhaXdhbiUyMHJhaW58ZW58MHx8fHwxNzc2NzUyMTYxfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=2000" alt="Best Time to Visit Taipei, Taiwan: A Month-by-Month Weather Guide" class="hic-card-img ratio-wide"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="hic-card-img-placeholder ratio-wide">No image</div>
    <div class="hic-card-body">
      <div class="hic-card-title">Best Time to Visit Taipei, Taiwan: A Month-by-Month Weather Guide</div>
      <div class="hic-card-sub"><p>Are you really ready for the weather!</p></div>
      <div class="hic-card-footer"><span class="hic-badge" style="color:#228b22;background:#e4f1e4">Travel Tips</span><span class="hic-cta" style="background:#228b22">→</span></div>
    </div>
  </a>

  <a href="https://www.heyianc.net/best-apps-taiwan-travel-guide/" class="hic-card" target="_blank" rel="noopener">
    <img src="https://images.unsplash.com/photo-1609147110688-83b5fd1288e8?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRhaXdhbnxlbnwwfHwwfHx8MA%3D%3D" alt="Best Apps to Use When Traveling in Taiwan" class="hic-card-img ratio-wide"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="hic-card-img-placeholder ratio-wide">No image</div>
    <div class="hic-card-body">
      <div class="hic-card-title">Best Apps to Use When Traveling in Taiwan</div>
      <div class="hic-card-sub"><p>And no it's not as complex as you think!</p></div>
      <div class="hic-card-footer"><span class="hic-badge" style="color:#228B22;background:#e4f1e4">Travel Tips</span><span class="hic-cta" style="background:#228B22">→</span></div>
    </div>
  </a>

  <a href="https://www.heyianc.net/taiwan-arrival-card-twac-scam-warning-official-website/" class="hic-card" target="_blank" rel="noopener">
    <img src="https://storage.ghost.io/c/de/6c/de6c1401-a70a-4ffd-b503-b92f5fecfc7f/content/images/size/w2000/2026/04/Blog-Thumbnails-7.jpg" alt="Fake Taiwan Arrival Card Websites Are Scamming Travelers in 2026" class="hic-card-img ratio-wide"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="hic-card-img-placeholder ratio-wide">No image</div>
    <div class="hic-card-body">
      <div class="hic-card-title">Fake Taiwan Arrival Card Websites Are Scamming Travelers in 2026</div>
      <div class="hic-card-sub"><p>Here's What to Know</p></div>
      <div class="hic-card-footer"><span class="hic-badge" style="color:#228b22;background:#e4f1e4">Travel Tips</span><span class="hic-cta" style="background:#228b22">→</span></div>
    </div>
  </a>

  </div>

  <!-- MOBILE CAROUSEL -->
  <div class="hic-carousel">

  <a href="https://www.heyianc.net/taiwan-first-timer-guide-what-to-know/" class="hic-card" target="_blank" rel="noopener">
    <img src="https://storage.ghost.io/c/de/6c/de6c1401-a70a-4ffd-b503-b92f5fecfc7f/content/images/size/w2000/2026/04/Blog-Thumbnails-2-4.jpg" alt="Taiwan First Timer Guide: Everything You Need to Know Before You Go" class="hic-card-img ratio-wide"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="hic-card-img-placeholder ratio-wide">No image</div>
    <div class="hic-card-body">
      <div class="hic-card-title">Taiwan First Timer Guide: Everything You Need to Know Before You Go</div>
      <div class="hic-card-sub"><p>First time sa Taiwan? I got you!</p></div>
      <div class="hic-card-footer"><span class="hic-badge" style="color:#228b22;background:#e4f1e4">Travel Tips</span><span class="hic-cta" style="background:#228b22">→</span></div>
    </div>
  </a>

  <a href="https://www.heyianc.net/taiwan-travel-budget-hacks-first-timer/" class="hic-card" target="_blank" rel="noopener">
    <img src="https://storage.ghost.io/c/de/6c/de6c1401-a70a-4ffd-b503-b92f5fecfc7f/content/images/size/w2000/2026/04/YT_Thumbnail_Taiwan-Travel-By-udget-Hacks-for-First-Timers-2.jpg" alt="8 Taiwan Travel Budget Hacks Every First Timer Should Know" class="hic-card-img ratio-wide"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="hic-card-img-placeholder ratio-wide">No image</div>
    <div class="hic-card-body">
      <div class="hic-card-title">8 Taiwan Travel Budget Hacks Every First Timer Should Know</div>
      <div class="hic-card-sub"><p>Tipid nga ba o hindi?</p></div>
      <div class="hic-card-footer"><span class="hic-badge" style="color:#228b22;background:#e4f1e4">Travel Tips</span><span class="hic-cta" style="background:#228b22">→</span></div>
    </div>
  </a>

  <a href="https://www.heyianc.net/9-mistakes-every-first-timer-makes-in-taiwan-and-how-to-avoid-them/" class="hic-card" target="_blank" rel="noopener">
    <img src="https://storage.ghost.io/c/de/6c/de6c1401-a70a-4ffd-b503-b92f5fecfc7f/content/images/size/w2000/2026/04/Blog-Thumbnails.jpg" alt="9 Mistakes Every First-Timer Makes in Taiwan (And How to Avoid Them)" class="hic-card-img ratio-wide"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="hic-card-img-placeholder ratio-wide">No image</div>
    <div class="hic-card-body">
      <div class="hic-card-title">9 Mistakes Every First-Timer Makes in Taiwan (And How to Avoid Them)</div>
      <div class="hic-card-sub"><p>Read this before your Taiwan visit!</p></div>
      <div class="hic-card-footer"><span class="hic-badge" style="color:#228b22;background:#e4f1e4">Travel Tips</span><span class="hic-cta" style="background:#228b22">→</span></div>
    </div>
  </a>

  <a href="https://www.heyianc.net/best-time-to-visit-taipei-taiwan-weather-guide/" class="hic-card" target="_blank" rel="noopener">
    <img src="https://images.unsplash.com/photo-1581876245647-e8f792eebc38?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wxMTc3M3wwfDF8c2VhcmNofDR8fHRhaXdhbiUyMHJhaW58ZW58MHx8fHwxNzc2NzUyMTYxfDA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=2000" alt="Best Time to Visit Taipei, Taiwan: A Month-by-Month Weather Guide" class="hic-card-img ratio-wide"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="hic-card-img-placeholder ratio-wide">No image</div>
    <div class="hic-card-body">
      <div class="hic-card-title">Best Time to Visit Taipei, Taiwan: A Month-by-Month Weather Guide</div>
      <div class="hic-card-sub"><p>Are you really ready for the weather!</p></div>
      <div class="hic-card-footer"><span class="hic-badge" style="color:#228b22;background:#e4f1e4">Travel Tips</span><span class="hic-cta" style="background:#228b22">→</span></div>
    </div>
  </a>

  <a href="https://www.heyianc.net/best-apps-taiwan-travel-guide/" class="hic-card" target="_blank" rel="noopener">
    <img src="https://images.unsplash.com/photo-1609147110688-83b5fd1288e8?w=900&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRhaXdhbnxlbnwwfHwwfHx8MA%3D%3D" alt="Best Apps to Use When Traveling in Taiwan" class="hic-card-img ratio-wide"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="hic-card-img-placeholder ratio-wide">No image</div>
    <div class="hic-card-body">
      <div class="hic-card-title">Best Apps to Use When Traveling in Taiwan</div>
      <div class="hic-card-sub"><p>And no it's not as complex as you think!</p></div>
      <div class="hic-card-footer"><span class="hic-badge" style="color:#228B22;background:#e4f1e4">Travel Tips</span><span class="hic-cta" style="background:#228B22">→</span></div>
    </div>
  </a>

  <a href="https://www.heyianc.net/taiwan-arrival-card-twac-scam-warning-official-website/" class="hic-card" target="_blank" rel="noopener">
    <img src="https://storage.ghost.io/c/de/6c/de6c1401-a70a-4ffd-b503-b92f5fecfc7f/content/images/size/w2000/2026/04/Blog-Thumbnails-7.jpg" alt="Fake Taiwan Arrival Card Websites Are Scamming Travelers in 2026" class="hic-card-img ratio-wide"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <div class="hic-card-img-placeholder ratio-wide">No image</div>
    <div class="hic-card-body">
      <div class="hic-card-title">Fake Taiwan Arrival Card Websites Are Scamming Travelers in 2026</div>
      <div class="hic-card-sub"><p>Here's What to Know</p></div>
      <div class="hic-card-footer"><span class="hic-badge" style="color:#228b22;background:#e4f1e4">Travel Tips</span><span class="hic-cta" style="background:#228b22">→</span></div>
    </div>
  </a>

  </div>

</div>


`,

  // ── HK — Hong Kong ───────────────────────────────────
  HK: `<ins class="klk-aff-widget"  data-adid="1280125" data-lang="en-US" data-currency="PHP" data-cardH="126" data-padding="92" data-lgH="470" data-edgeValue="655" data-cid="2" data-tid="" data-amount="6" data-prod="hotel_dynamic_widget"><a href="//www.klook.com/">Klook.com</a></ins>
<script type="text/javascript">
  (function (d, sc, u) {
    var s = d.createElement(sc),
      p = d.getElementsByTagName(sc)[0];
    s.type = "text/javascript";
    s.async = true;
    s.src = u;
    p.parentNode.insertBefore(s, p);
  })(
    document,
    "script",
    "https://affiliate.klook.com/widget/fetch-iframe-init.js"
  );
</script>

`,

  // ── SG — Singapore ───────────────────────────────────
  SG: `<ins class="klk-aff-widget"  data-adid="1280128" data-lang="en-US" data-currency="PHP" data-cardH="126" data-padding="92" data-lgH="470" data-edgeValue="655" data-cid="6" data-tid="" data-amount="6" data-prod="hotel_dynamic_widget"><a href="//www.klook.com/">Klook.com</a></ins>
<script type="text/javascript">
  (function (d, sc, u) {
    var s = d.createElement(sc),
      p = d.getElementsByTagName(sc)[0];
    s.type = "text/javascript";
    s.async = true;
    s.src = u;
    p.parentNode.insertBefore(s, p);
  })(
    document,
    "script",
    "https://affiliate.klook.com/widget/fetch-iframe-init.js"
  );
</script>

`,

  // ── JP — Japan ───────────────────────────────────────
  JP: ``,

  // ── VN — Vietnam ─────────────────────────────────────
  VN: ``

};
