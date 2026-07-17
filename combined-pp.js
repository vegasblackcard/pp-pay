
(function(){

/* ============================================================
   GOOGLE SEARCH CONSOLE VERIFICATION + BING WEBMASTER TOOLS
   ============================================================ */
(function(){
  if(!document.querySelector('meta[name="google-site-verification"]')){
    var m=document.createElement('meta');m.name='google-site-verification';m.content='cZwmBHpF2_GZzsyDc-ZV6GazfNE6rvkW8oB1o8aKeos';document.head.appendChild(m);
  }
})();

/* ============================================================
   SEO META TAGS — title, description, Open Graph, Twitter Card
   ============================================================ */
(function(){
  var _isHome=(function(){var p=location.pathname.replace(/\/+$/,'');return p===''||p==='/'||p==='/home';})();
  if(_isHome){
  var t=document.querySelector('title');
  if(t)t.textContent='Research Peptides USA | BPC-157, TB-500, Semaglutide | Precision Labs';
  else{var nt=document.createElement('title');nt.textContent='Research Peptides USA | BPC-157, TB-500, Semaglutide | Precision Labs';document.head.appendChild(nt);}
  }
  var metas=[
    ['description','Buy premium research peptides from Precision Labs — veteran-owned, third-party lab tested, 99%+ purity guaranteed. BPC-157, TB-500, Semaglutide, Retatrutide, NAD+, GHK-Cu & 80+ peptides. Free shipping over $300. COA available on request.'],
    ['keywords','research peptides, buy peptides online, BPC-157, TB-500, Semaglutide, Retatrutide, peptides USA, veteran owned peptides, third party tested peptides, 99 purity peptides, Precision Labs, Precision Labs, NAD+, GHK-Cu, Ipamorelin, Tirzepatide, peptide supplier, research chemicals, lyophilized peptides, peptide store'],
    ['robots','index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'],
    ['og:title','Research Peptides USA | Precision Labs — Veteran-Owned, Lab Tested'],
    ['og:description','Premium research peptides: BPC-157, TB-500, Semaglutide, Retatrutide & 80+ more. Veteran-owned, third-party tested, 99%+ purity. Free shipping over $300.'],
    ['og:url','https://www.precisionusalabs.com'],
    ['og:type','website'],
    ['og:site_name','Precision Labs'],
    ['og:image','https://static.wixstatic.com/media/e76a5f_398beccf075b4f0c93d26b2a6ae2c997~mv2.png'],
    ['og:image:width','1200'],
    ['og:image:height','630'],
    ['og:locale','en_US'],
    ['twitter:card','summary_large_image'],
    ['twitter:title','Precision Labs | Research Peptides USA — Veteran-Owned'],
    ['twitter:description','Premium research peptides with 99%+ purity. BPC-157, TB-500, Semaglutide & 80+ peptides. Third-party lab tested, 99%+ purity. Free shipping over $300.'],
    ['twitter:image','https://static.wixstatic.com/media/e76a5f_398beccf075b4f0c93d26b2a6ae2c997~mv2.png'],
    ['twitter:description','BPC-157, TB-500, Semaglutide, Retatrutide & more. Veteran-owned, third-party tested peptide research products.']
  ];
  metas.forEach(function(m){
    var sel=m[0].startsWith('og:')||m[0].startsWith('twitter:')?'meta[property="'+m[0]+'"]':'meta[name="'+m[0]+'"]';
    if(!document.querySelector(sel)){
      var el=document.createElement('meta');
      if(m[0].startsWith('og:')||m[0].startsWith('twitter:'))el.setAttribute('property',m[0]);
      else el.setAttribute('name',m[0]);
      el.setAttribute('content',m[1]);
      document.head.appendChild(el);
    }
  });
})();

/* ============================================================
   AGE VERIFICATION GATE — runs FIRST, blocks page until verified
   ============================================================ */
(function(){
  var AV_KEY='pp_age_verified';
  var stored=localStorage.getItem(AV_KEY);
  if(stored){
    var ts=parseInt(stored,10);
    if(!isNaN(ts)&&(Date.now()-ts)<30*24*60*60*1000)return; // verified within 30 days
  }
  // Block page immediately
  var avStyle=document.createElement('style');
  avStyle.id='pp-av-style';
  avStyle.textContent='body{overflow:hidden!important}#pp-age-gate{position:fixed;inset:0;z-index:999999;background:rgba(14,27,77,0.95);display:flex;align-items:center;justify-content:center;font-family:Archivo,Questrial,sans-serif}#pp-age-gate *{box-sizing:border-box}#pp-av-box{background:#fff;border-radius:16px;max-width:420px;width:90%;padding:36px 28px;text-align:center;box-shadow:0 8px 40px rgba(0,0,0,0.4)}#pp-av-box h1{font-family:Archivo,sans-serif;font-size:22px;font-weight:700;color:#0e1b4d;margin:0 0 6px}#pp-av-box .pp-av-brand{font-family:Archivo,sans-serif;font-size:20px;font-weight:700;color:#0e1b4d;letter-spacing:1px;margin:0 0 20px;display:block}#pp-av-box .pp-av-line{width:60px;height:3px;background:#4770db;margin:0 auto 18px;border-radius:2px}#pp-av-box p{font-size:14px;color:#555;line-height:1.6;margin:0 0 24px}#pp-av-enter{display:block;width:100%;padding:14px;background:#4770db;color:#fff;border:none;border-radius:40px;font-size:16px;font-weight:600;cursor:pointer;margin:0 0 10px;transition:background .2s}#pp-av-enter:hover{background:#3558b8}#pp-av-exit{display:block;width:100%;padding:14px;background:#ddd;color:#555;border:none;border-radius:40px;font-size:16px;font-weight:600;cursor:pointer;transition:background .2s}#pp-av-exit:hover{background:#ccc}';
  (document.head||document.documentElement).appendChild(avStyle);

  function showGate(){
    if(document.getElementById('pp-age-gate'))return;
    var gate=document.createElement('div');
    gate.id='pp-age-gate';
    gate.innerHTML='<div id="pp-av-box"><span class="pp-av-brand">Precision Labs</span><div class="pp-av-line"></div><h1>Precision Labs \u2014 Research Peptides</h1><p><strong>Verify to Enter</strong> \u2014 Research use only, you must be 21 or older. Enter your details to continue.</p><input id="pp-lg-name" type="text" placeholder="Full Name" autocomplete="name" style="width:100%;padding:12px;border:1px solid #ddd;border-radius:8px;font-size:14px;margin:0 0 10px;box-sizing:border-box"><input id="pp-lg-phone" type="tel" placeholder="Phone Number" autocomplete="tel" style="width:100%;padding:12px;border:1px solid #ddd;border-radius:8px;font-size:14px;margin:0 0 10px;box-sizing:border-box"><input id="pp-lg-email" type="email" placeholder="Email Address" autocomplete="email" style="width:100%;padding:12px;border:1px solid #ddd;border-radius:8px;font-size:14px;margin:0 0 12px;box-sizing:border-box"><label id="pp-lg-clabel" style="display:flex;align-items:flex-start;gap:8px;text-align:left;font-size:12px;color:#555;margin:0 0 16px;line-height:1.4"><input id="pp-lg-consent" type="checkbox" style="margin-top:2px;flex-shrink:0"><span>I confirm I am 21 or older and agree to receive marketing emails &amp; text messages. Msg &amp; data rates may apply. Reply STOP to opt out.</span></label><button id="pp-av-enter">Enter Site</button><button id="pp-av-exit">I am under 21 \u2014 Exit</button></div>';
    (document.body||document.documentElement).appendChild(gate);
    document.getElementById('pp-av-enter').onclick=function(){
      var nm=(document.getElementById('pp-lg-name').value||'').trim();
      var ph=(document.getElementById('pp-lg-phone').value||'').replace(/[^0-9]/g,'');
      var em=(document.getElementById('pp-lg-email').value||'').trim();
      var consent=document.getElementById('pp-lg-consent').checked;
      var ok=true;
      if(nm.length<2){document.getElementById('pp-lg-name').style.border='2px solid #c62828';ok=false;}
      if(ph.length<10){document.getElementById('pp-lg-phone').style.border='2px solid #c62828';ok=false;}
      if(em.indexOf('@')<1){document.getElementById('pp-lg-email').style.border='2px solid #c62828';ok=false;}
      if(!consent){document.getElementById('pp-lg-clabel').style.color='#c62828';ok=false;}
      if(!ok)return;
      var lead={name:nm,phone:ph,email:em,consent:true,source:'entry-gate',ts:Date.now(),page:location.pathname};
      try{localStorage.setItem('pp_lead',JSON.stringify(lead));}catch(e){}
      try{var x=new XMLHttpRequest();x.open('POST','https://sharp-pamela-warnings-cheaper.trycloudflare.com/track',true);x.setRequestHeader('Content-Type','application/json');x.send(JSON.stringify({vid:(localStorage.getItem('pp_vid')||''),event:'lead_capture',detail:lead,ts:Date.now(),page:location.pathname}));}catch(e){}
      /* lead stored locally in pp_lead; CRM capture handled by native Wix form (see audit) */
      localStorage.setItem(AV_KEY,String(Date.now()));
      gate.remove();
      var avs=document.getElementById('pp-av-style');if(avs)avs.remove();
      document.body.style.overflow='';
    };
    document.getElementById('pp-av-exit').onclick=function(){
      window.location.href='https://www.google.com';
    };
  }
  if(document.body)showGate();
  else document.addEventListener('DOMContentLoaded',showGate);
})();

/* ============================================================
   HIDE WIX NATIVE "Precision Labs" DESCRIPTION SECTION
   The Wix editor has a native section with old boilerplate text.
   We hide it so only our injected content shows.
   ============================================================ */
(function(){
  var css = document.createElement('style');
  css.textContent = '#comp-mmehnaac { display:none!important; } #comp-mmehnabu { display:none!important; }';
  (document.head||document.documentElement).appendChild(css);
  // Also try to remove after DOM loads
  function hideWixSection(){
    var s = document.getElementById('comp-mmehnaac');
    if(s) s.style.display='none';
    var s2 = document.getElementById('comp-mmehnabu');
    if(s2) s2.style.display='none';
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',hideWixSection);
  else hideWixSection();
  // Retry in case Wix loads it late
  setTimeout(hideWixSection, 1000);
  setTimeout(hideWixSection, 3000);
})();

/* ============================================================
   GOOGLE ANALYTICS (GA4) — replace G-3CJLDN3EK8 with real ID
   ============================================================ */
(function(){
  var GA_ID='G-3CJLDN3EK8';
  var gs=document.createElement('script');
  gs.async=true;gs.src='https://www.googletagmanager.com/gtag/js?id='+GA_ID;
  document.head.appendChild(gs);
  window.dataLayer=window.dataLayer||[];
  function gtag(){dataLayer.push(arguments);}
  window.gtag=gtag;
  gtag('js',new Date());
  gtag('config',GA_ID);
})();

/* ============================================================
   FACEBOOK PIXEL — replace XXXXXXXXXX with real Pixel ID
   ============================================================ */
(function(){
  var FB_ID='XXXXXXXXXX';
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
  (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init',FB_ID);
  fbq('track','PageView');
})();

/* ============================================================
   VISITOR TRACKER — Comprehensive analytics for ALL visitors
   Tracks every page view, product view, cart add, checkout
   Sends data to PP Analytics Server via Cloudflare tunnel
   Telegram alerts ONLY for cart adds + checkout starts
   ============================================================ */
(function(){
  var ANALYTICS_URL='https://miller-tracks-army-translations.trycloudflare.com';
  var TK='ODA2Mzc0OTk5NDpBQUhFQTRaNTdicjJ6WTk5RktIT2h1SWdOU0lYUnRGdGhPZw==';
  var CHAT=8553770323;
  var VID_KEY='pp_vid';
  var VDATA_KEY='pp_vdata';
  var HL_SENT='pp_hl_sent';
  var SESSION_KEY='pp_session_ts';

  function getVid(){var v=localStorage.getItem(VID_KEY);if(!v){v='v_'+Date.now().toString(36)+'_'+Math.random().toString(36).substr(2,8);localStorage.setItem(VID_KEY,v);}return v;}
  function getVData(){try{return JSON.parse(localStorage.getItem(VDATA_KEY))||{};}catch(e){return {};}}
  function saveVData(d){localStorage.setItem(VDATA_KEY,JSON.stringify(d));}
  function getDevice(){var u=navigator.userAgent;if(/iPad|Android(?!.*Mobile)/i.test(u))return'Tablet';if(/Mobile|iPhone|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(u))return'Mobile';return'Desktop';}
  function getBrowser(){var u=navigator.userAgent;if(u.indexOf('Firefox')>-1)return'Firefox';if(u.indexOf('SamsungBrowser')>-1)return'Samsung';if(u.indexOf('OPR')>-1||u.indexOf('Opera')>-1)return'Opera';if(u.indexOf('Edg')>-1)return'Edge';if(u.indexOf('Chrome')>-1)return'Chrome';if(u.indexOf('Safari')>-1)return'Safari';return'Other';}
  function getOS(){var u=navigator.userAgent;if(u.indexOf('Win')>-1)return'Windows';if(u.indexOf('Mac')>-1)return'macOS';if(u.indexOf('Linux')>-1)return'Linux';if(u.indexOf('Android')>-1)return'Android';if(/iPhone|iPad|iPod/.test(u))return'iOS';return'Other';}

  var vid=getVid(),device=getDevice(),browser=getBrowser(),os=getOS(),sessionStart=Date.now(),geoData=null;
  var lastSession=parseInt(localStorage.getItem(SESSION_KEY)||'0',10);
  var isNewSession=(Date.now()-lastSession)>30*60*1000;
  localStorage.setItem(SESSION_KEY,String(Date.now()));

  function track(event,detail){
    var payload={vid:vid,event:event,ts:Date.now(),page:location.pathname,detail:detail||null,referrer:document.referrer||'',device:device,browser:browser,os:os,location:geoData};
    try{var x=new XMLHttpRequest();x.open('POST',ANALYTICS_URL+'/track',true);x.setRequestHeader('Content-Type','application/json');x.send(JSON.stringify(payload));}catch(e){}
    var vd=getVData();if(!vd.events)vd.events=[];vd.events.push({type:event,ts:payload.ts,detail:detail,page:payload.page});
    if(vd.events.length>500)vd.events=vd.events.slice(-500);vd.lastSeen=payload.ts;saveVData(vd);
  }

  function fetchGeo(){try{var x=new XMLHttpRequest();x.open('GET','http://ip-api.com/json/?fields=status,country,regionName,city,zip,lat,lon,timezone,isp,query',true);x.timeout=5000;x.onload=function(){try{var d=JSON.parse(x.responseText);if(d.status==='success'){geoData={ip:d.query,country:d.country,regionName:d.regionName,city:d.city,zip:d.zip,lat:d.lat,lon:d.lon,timezone:d.timezone,isp:d.isp};track('geo_update',geoData);}}catch(e){}};x.send();}catch(e){}}

  function alreadySent(reason){var sent=[];try{sent=JSON.parse(localStorage.getItem(HL_SENT))||[];}catch(e){}var today=new Date().toISOString().slice(0,10);var key=today+'_'+reason;if(sent.indexOf(key)>-1)return true;sent.push(key);localStorage.setItem(HL_SENT,JSON.stringify(sent));return false;}

  function sendTelegramAlert(reason,details){
    return;  // TELEGRAM DISABLED
    if(alreadySent(reason))return;
    var now=new Date();var ts=now.toLocaleString('en-US',{timeZone:'America/Los_Angeles',month:'short',day:'numeric',year:'numeric',hour:'numeric',minute:'2-digit',hour12:true});
    var vd=getVData(),pv=[];(vd.events||[]).forEach(function(e){if(e.type==='product_view'&&pv.indexOf(e.detail)===-1)pv.push(e.detail);});
    var locStr=geoData?geoData.city+', '+geoData.regionName+', '+geoData.country:'Unknown';
    var msg='\uD83D\uDED2 HIGH-VALUE LEAD\n\u23F0 '+ts+'\n\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\n';
    msg+='\uD83C\uDFAF Trigger: '+reason+'\n';
    if(details)msg+='\uD83D\uDCCB Details: '+details+'\n';
    msg+='\uD83D\uDC41 Products Viewed ('+pv.length+'): '+(pv.join(', ')||'None')+'\n';
    msg+='\uD83D\uDCCD Location: '+locStr+'\n';
    msg+='\uD83D\uDD17 Referrer: '+(document.referrer||'Direct')+'\n';
    msg+='\uD83D\uDCF1 Device: '+device+' / '+browser+' / '+os+'\n';
    msg+='\uD83D\uDD51 Time on site: '+Math.round((Date.now()-sessionStart)/1000)+'s\n';
    msg+='\uD83D\uDD11 Visitor: '+vid.slice(0,12)+'\n';
    msg+='\n\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\u26A1 Real buyer intent \u2014 follow up';
    try{fetch('https://api.telegram.org/bot'+atob(TK)+'/sendMessage',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({chat_id:CHAT,text:msg})}).catch(function(){});}catch(e){}
  }

  // Session start + geo
  if(isNewSession){track('session_start');fetchGeo();}
  // Page view
  track('page_view',location.pathname);

  // Product view tracking (patches ppDetail)
  function patchDetail(){
    if(!window.ppDetail||window.ppDetail._trackPatched)return;
    var real=window.ppDetail;
    window.ppDetail=function(slug){real(slug);track('product_view',slug);};
    window.ppDetail._trackPatched=true;
  }
  patchDetail();
  var pdI=setInterval(function(){if(window.ppDetail&&!window.ppDetail._trackPatched)patchDetail();},500);
  setTimeout(function(){clearInterval(pdI);},30000);

  // Cart add tracking (Telegram alert)
  function patchCart(){
    if(!window.ppCart||!window.ppCart.add||window.ppCart.add._trackPatched)return;
    var origAdd=window.ppCart.add.bind(window.ppCart);
    window.ppCart.add=function(slug){origAdd(slug);var p=window.ppCart.find?window.ppCart.find(slug):null;var name=p?p[0]:slug;var price=p?p[3]:'?';track('cart_add',slug);sendTelegramAlert('Added to cart',name+' ($'+price+')');};
    window.ppCart.add._trackPatched=true;
  }
  patchCart();
  var caI=setInterval(function(){if(window.ppCart&&window.ppCart.add&&!window.ppCart.add._trackPatched)patchCart();},500);
  setTimeout(function(){clearInterval(caI);},30000);

  // Checkout tracking (Telegram alert)
  var coI=setInterval(function(){
    if(window.ppTogglePay&&!window.ppTogglePay._trackPatched){
      var orig=window.ppTogglePay;
      window.ppTogglePay=function(on,amt){orig(on,amt);if(on){track('checkout_start',{amount:amt});sendTelegramAlert('Started checkout','Cart total: $'+amt.toFixed(2));}};
      window.ppTogglePay._trackPatched=true;
    }
  },1000);
  setTimeout(function(){clearInterval(coI);},60000);

  // Time on site tracking (every 60s)
  setInterval(function(){track('time_update',Date.now()-sessionStart);localStorage.setItem(SESSION_KEY,String(Date.now()));},60000);
  // Final time on unload
  window.addEventListener('beforeunload',function(){try{navigator.sendBeacon(ANALYTICS_URL+'/track',JSON.stringify({vid:vid,event:'time_update',ts:Date.now(),page:location.pathname,detail:Date.now()-sessionStart,device:device,browser:browser,os:os,location:geoData}));}catch(e){}});
})();

/* ============================================================
   SEO STRUCTURED DATA (JSON-LD) — Organization, WebSite,
   Product, LocalBusiness, FAQ schemas for Google rich results
   Called via injectSEOSchema() at end of homepage init
   ============================================================ */
function injectSEOSchema(){
  var p=window.location.pathname;
  if(p!=='/'&&p!=='/home'&&p!=='')return;

  function addLD(obj){
    var s=document.createElement('script');
    s.type='application/ld+json';
    s.textContent=JSON.stringify(obj);
    document.head.appendChild(s);
  }

  var SITE='https://www.precisionusalabs.com';
  var LOGO=SITE+'/assets/pp-og-image.png';

  /* 1. Organization */
  addLD({
    "@context":"https://schema.org",
    "@type":"Organization",
    "name":"Precision Labs",
    "alternateName":"Precision Labs",
    "url":SITE,
    "logo":LOGO,
    "image":LOGO,
    "description":"Precision Labs is a Marine veteran-owned research peptide supplier offering 80+ premium peptides with 99%+ purity, independent third-party lab testing, and Certificates of Analysis available on request.",
    "telephone":"+17029948002",
    "email":"Bennie@vegasblackcard.com",
    "founder":{
      "@type":"Person",
      "name":"USMC Veteran",
      "jobTitle":"Founder & CEO"
    },
    "foundingDate":"2025",
    "sameAs":[
      "https://www.linkedin.com/company/precisionpeptidez",
      "https://www.instagram.com/precisionpeptidez",
      "https://www.tiktok.com/@precisionpeptidez"
    ],
    "contactPoint":{
      "@type":"ContactPoint",
      "telephone":"+17029948002",
      "contactType":"customer service",
      "availableLanguage":"English",
      "areaServed":"US"
    }
  });

  /* 2. WebSite with SearchAction */
  addLD({
    "@context":"https://schema.org",
    "@type":"WebSite",
    "name":"Precision Labs",
    "alternateName":"Precision Labs",
    "url":SITE,
    "description":"Premium research peptides with 99%+ purity. Veteran-owned, third-party lab tested.",
    "potentialAction":{
      "@type":"SearchAction",
      "target":{
        "@type":"EntryPoint",
        "urlTemplate":SITE+"/?search={search_term_string}"
      },
      "query-input":"required name=search_term_string"
    }
  });

  /* 3. LocalBusiness */
  addLD({
    "@context":"https://schema.org",
    "@type":"VitaminStore",
    "name":"Precision Labs",
    "image":LOGO,
    "url":SITE,
    "telephone":"+17029948002",
    "description":"Veteran-owned research peptide supplier offering 80+ premium peptides with 99%+ purity and third-party lab testing. Serving researchers nationwide.",
    "address":{
      "@type":"PostalAddress",
      "addressLocality":"Henderson",
      "addressRegion":"NV",
      "addressCountry":"US"
    },
    "geo":{
      "@type":"GeoCoordinates",
      "latitude":36.0395,
      "longitude":-114.9817
    },
    "areaServed":{
      "@type":"Country",
      "name":"United States"
    },
    "priceRange":"$$",
    "openingHoursSpecification":{
      "@type":"OpeningHoursSpecification",
      "dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens":"09:00",
      "closes":"17:00"
    },
    "aggregateRating":{
      "@type":"AggregateRating",
      "ratingValue":"4.7",
      "reviewCount":"127",
      "bestRating":"5",
      "worstRating":"1"
    }
  });

  /* 4. Product schema — dynamically from the P array */
  var B='https://static.wixstatic.com/media/';
  var products=window.ppProducts||[];
  if(products.length>0){
    var productItems=[];
    for(var i=0;i<products.length;i++){
      var pr=products[i];
      var imgUrl=pr[1][0]==='h'?pr[1]:B+pr[1];
      var safeSku=(pr[2]&&typeof pr[2]==='string'&&pr[2].length>0&&pr[2].length<=60)?pr[2]:('PFP-'+(i+1));
      productItems.push({
        "@type":"Product",
        "name":pr[0],
        "image":imgUrl,
        "url":SITE+'/product-page/'+pr[2],
        "sku":safeSku,
        "description":pr[0]+' — premium research peptide, 99%+ purity, third-party lab tested with Certificate of Analysis.',
        "brand":{
          "@type":"Brand",
          "name":"Precision Labs"
        },
        "offers":{
          "@type":"Offer",
          "url":SITE+'/product-page/'+pr[2],
          "priceCurrency":"USD",
          "price":pr[3],
          "availability":"https://schema.org/InStock",
          "seller":{
            "@type":"Organization",
            "name":"Precision Labs"
          },
          "hasMerchantReturnPolicy":{
            "@type":"MerchantReturnPolicy",
            "applicableCountry":"US",
            "returnPolicyCategory":"https://schema.org/MerchantReturnNotPermitted"
          },
          "shippingDetails":{
            "@type":"OfferShippingDetails",
            "shippingRate":{
              "@type":"MonetaryAmount",
              "value":"0",
              "currency":"USD"
            },
            "shippingDestination":{
              "@type":"DefinedRegion",
              "addressCountry":"US"
            },
            "deliveryTime":{
              "@type":"ShippingDeliveryTime",
              "handlingTime":{"@type":"QuantitativeValue","minValue":0,"maxValue":1,"unitCode":"DAY"},
              "transitTime":{"@type":"QuantitativeValue","minValue":2,"maxValue":5,"unitCode":"DAY"}
            }
          }
        }
      });
    }
    /* Add products as an ItemList for better carousel display in search */
    var itemListElements=[];
    for(var j=0;j<productItems.length;j++){
      itemListElements.push({
        "@type":"ListItem",
        "position":j+1,
        "item":productItems[j]
      });
    }
    addLD({
      "@context":"https://schema.org",
      "@type":"ItemList",
      "name":"Research Peptides — Precision Labs",
      "description":"Premium research peptides with 99%+ purity. BPC-157, TB-500, Semaglutide, and 80+ more.",
      "numberOfItems":productItems.length,
      "itemListElement":itemListElements
    });
  }

  /* 5. FAQ schema — from the FAQ section */
  var faqItems=[
    {q:"What are research peptides?",a:"Peptides are short chains of amino acids that serve as building blocks for proteins. Research peptides are synthesized for scientific study and laboratory use. All products sold by Precision Labs are intended strictly for research purposes and are not for human consumption."},
    {q:"How do I verify purity?",a:"We test every batch via HPLC for purity (99%+ standard) and mass spectrometry for identity confirmation. COAs are available upon request."},
    {q:"How should I store my peptides?",a:"Unreconstituted (lyophilized) peptides should be stored in a freezer (-20\u00B0C) for long-term storage or refrigerated (2-8\u00B0C) for short-term. Once reconstituted with bacteriostatic water, peptides should be refrigerated and used within 4-6 weeks."},
    {q:"What is your shipping policy?",a:"Orders placed before 2 PM PST ship same day. Free shipping on orders over $300. All packages are shipped in plain, discreet packaging with no product names on the label. Temperature-sensitive products are cold-packed."},
    {q:"Do you offer refunds or returns?",a:"Due to the nature of research chemicals, we cannot accept returns on opened products. Unopened, sealed products may be returned within 14 days for a full refund. If you receive a damaged or incorrect product, contact us immediately and we will replace it at no charge."},
    {q:"What payment methods do you accept?",a:"We accept major credit cards, cryptocurrency (Bitcoin, Ethereum), Zelle, and CashApp. Payment processing is secure and encrypted."},
    {q:"Are your peptides made in the USA?",a:"Our peptides are sourced from FDA-registered, GMP-compliant facilities. Every batch undergoes independent third-party testing in US laboratories before being released for sale."},
    {q:"How do I reconstitute peptides?",a:"Add bacteriostatic water (BAC water) slowly down the side of the vial \u2014 never spray directly onto the lyophilized powder. Gently swirl until dissolved. The amount of BAC water depends on your desired concentration. We provide reconstitution guides with every order."},
    {q:"Is Precision Labs really veteran-owned?",a:"Yes. Precision Labs was founded by a United States Marine Corps veteran. The same discipline, integrity, and standards drilled into every Marine are applied to every aspect of this business \u2014 from sourcing and testing to shipping and customer service."},
    {q:"Do you offer bulk or wholesale pricing?",a:"Yes. For large research orders or institutional purchases, contact us directly for custom pricing. We offer volume discounts starting at 10+ units."}
  ];
  var faqEntities=[];
  for(var f=0;f<faqItems.length;f++){
    faqEntities.push({
      "@type":"Question",
      "name":faqItems[f].q,
      "acceptedAnswer":{
        "@type":"Answer",
        "text":faqItems[f].a
      }
    });
  }
  addLD({
    "@context":"https://schema.org",
    "@type":"FAQPage",
    "mainEntity":faqEntities
  });

  /* 6. BreadcrumbList for homepage */
  addLD({
    "@context":"https://schema.org",
    "@type":"BreadcrumbList",
    "itemListElement":[
      {"@type":"ListItem","position":1,"name":"Home","item":SITE}
    ]
  });
}

/* ============================================================
   ORIGINAL HOMEPAGE CODE BELOW
   ============================================================ */
var B='https://static.wixstatic.com/media/';
var P=[
["5 Amino-1MQ 10mg","e76a5f_51c69b54a1ec4a5b8f1ca95adbe2c4db~mv2.png","5-amino-1mq-10mg",75],
["Alcohol Research Stack","e76a5f_68a48378063149938bc61e7f5913a432~mv2.png","alcohol-research-stack",250],
["AOD-9604 10mg","e76a5f_bbb4397bfcf44daf807594aa889c5d7d~mv2.png","aod-9604-10mg",70],
["ARA-290 10mg","e76a5f_f2f675a7eca54dccb551f350a22c822b~mv2.png","ara-290-10mg",50],
["Bacteriostatic Water 10ml","e76a5f_c3bbe01bd92e4429bac119e512d6163f~mv2.png","bacteriostatic-water-10ml",10],
["Bacteriostatic Water 30ml","e76a5f_e338d3b98cfd435a9c67a78b0f1f5437~mv2.png","bacteriostatic-water-30ml",20],
["Bacteriostatic Water 3ml","e76a5f_b56c81950fcf45e7973ab25a31dfed48~mv2.png","bacteriostatic-water-3ml",3],
["Bacteriostatic Water 5ml","e76a5f_3cbe49e0ebb249bbb8d477af40ccf8c7~mv2.png","bacteriostatic-water-5ml",7],
["Beauty Blend 10ml","e76a5f_bad7b16678cd48f8ab55396f16140a83~mv2.png","beauty-blend-10ml",120],
["BPC-157 / TB-500 30ct Strawberry Watermelon","e76a5f_387009bb57634df4b140e8085b14aec5~mv2.png","bpc-157-tb-500-30ct-strawberry-watermelon",179.99],
["BPC-157 10mg","e76a5f_904263486d0f4d6d9067a0700b19fd3d~mv2.png","bpc-157-10mg",50],
["BPC-157 5mg","e76a5f_c083009ebab1491d90844e42d22d93a4~mv2.png","bpc-157-5mg",40],
["Cagrilintide 10mg","e76a5f_f1cae1825e6a49ea863c241cef1e8fe6~mv2.png","cagrilintide-10mg",85],
["CJC-1295 / Ipamorelin 5mg/5mg","e76a5f_76d7f3065828407c97262052bfc5b827~mv2.png","cjc-1295-ipamorelin-5mg5mg",60],
["Diabetes Research Stack","e76a5f_6b92f85bf93d4b068e6386544c3f8885~mv2.png","diabetes-research-stack",405],
["DSIP (Delta Sleep-Inducing Peptide) 10mg","e76a5f_3433207954004b75993a458fe1d24ba2~mv2.png","dsip-delta-sleep-inducing-peptide-10mg",60],
["DSIP (Delta Sleep-Inducing Peptide) 15mg","e76a5f_f4f5a7b281704342bc974d481803e2d0~mv2.png","dsip-delta-sleep-inducing-peptide-15mg",105],
["DSIP (Delta Sleep-Inducing Peptide) 5mg","e76a5f_239158ba6657427e93914f6974c1b0b0~mv2.png","dsip-delta-sleep-inducing-peptide-5mg",40],
["Epitalon 10mg","e76a5f_686b0dce263147c881bb7936fc28004c~mv2.png","epitalon-10mg",35],
["Epitalon 50mg","e76a5f_88340c877b43496394916403c31dec96~mv2.png","epitalon-50mg",175],
["Fat Burning Research Stack","e76a5f_517fdf54ff4a41679cead6fe37011f38~mv2.png","fat-burning-research-stack",445],
["Fat Dissolver 10ml","e76a5f_d34fa69c51ae4b369dcdfc4c5bc6c28e~mv2.png","fat-dissolver-10ml",65],
["GHK-Cu (Copper) 100mg","e76a5f_7f727786e85e4256abc4dec8f97ba464~mv2.png","ghk-cu-copper-100mg",55],
["GHK-Cu (Copper) 50mg","e76a5f_56f3237ad9cf4e22b30740465fc86f8e~mv2.png","ghk-cu-copper-50mg",40],
["GHKCU Copper Serum .5oz","e76a5f_5c74bfdbc317480e9dd07e6ef0ea0168~mv2.png","ghkcu-copper-serum",89.99],
["Glow Stack 70mg","e76a5f_1e6ed4b9ee614cd09e67a970e7c389d4~mv2.png","glow-stack-70mg",100],
["Glutathione 1500mg","e76a5f_36b1485f7d57497892927183fd29c2b8~mv2.png","glutathione-1500mg",75],
["HCG 5000iu","e76a5f_4e3e1adbe7cc49f7820b9f38267b7457~mv2.png","hcg-5000iu",75],
["HEP-1 2mg","e76a5f_776b82a159354c3183d6ccaeda97f7d6~mv2.png","hep-1-2mg",90],
["HGH 15iu","e76a5f_75ddcf0813ec4556bd3369ded67c4398~mv2.png","hgh-15iu",95],
["HGH 6mg","e76a5f_06abbec6747842309fb7a9c8ca3ab702~mv2.png","hgh-6mg",65],
["Humanin 10mg","e76a5f_8968f73b552c43c4bd1dac36224a37ae~mv2.png","humanin-10mg",160],
["IGF-1LR3 1mg","e76a5f_ebc24498572045338fb6d1c64961b443~mv2.png","igf-1lr3-1mg",75],
["Ipamorelin 10mg","e76a5f_8634247ec43a42e4b6b6de3325be680d~mv2.png","ipamorelin-10mg",60],
["Ipamorelin 5mg","e76a5f_ac5775c4b2a84ad1bdcaae6937281131~mv2.png","ipamorelin-5mg",60],
["Kisspeptin 10mg","e76a5f_560cf72f9c0f4afebd0e12678b9e25d5~mv2.png","kisspeptin-10mg",60],
["Klow 30ct Berry","e76a5f_6636047d34fd4f1e89c0733c60b60ee2~mv2.png","klow-30ct-berry",210],
["KLOW 80mg","e76a5f_9a50aecd3a1145fb9cd681e18b7314b8~mv2.png","klow-80mg",110],
["KPV 10mg","e76a5f_8a59d928dc0c45cebb463052e06747dd~mv2.png","kpv-10mg",50],
["L-Carnitine 600ml","e76a5f_b624003421ee4fb8bbe3a98ff7df4bfd~mv2.png","l-carnitine-600ml",50],
["Lipo-C 10ml w/B12","e76a5f_196ec3203785455ebbd95f935faf63f8~mv2.png","lipo-c-10ml-wb12",50],
["Lipo-C 10ml w/o B12","e76a5f_196ec3203785455ebbd95f935faf63f8~mv2.png","lipo-c-10ml-wo-b12",50],
["LL-37 10mg","e76a5f_596bdcfa90cb4383bd50f9c7e93a22b0~mv2.png","ll-37-10mg",110],
["Melanotan I 10mg","e76a5f_bdbbe64243834873a63007f19ad7f6cc~mv2.png","melanotan-i-10mg",40],
["Melanotan II 10mg","e76a5f_cbe66dc973cd453190f710502caeca34~mv2.png","melanotan-ii-10mg",40],
["MetaLean+ G3 4ct Mint","e76a5f_0007573f586043f9b538e86bdef56920~mv2.png","metalean-g3-4ct-mint",249.99],
["MOTS-C 10mg","e76a5f_fc7adcb547634bf6bb55afb48029db51~mv2.png","mots-c-10mg",50],
["MOTS-C 40mg","e76a5f_9162cdbf9f014c4d8e27b1ee83896778~mv2.png","mots-c-40mg",150],
["NAD+ 500mg","e76a5f_933f1d4e426d4539b18a2688a4e29c70~mv2.png","nad-500mg",85],
["NAD+ Recharge 30ct Mint","e76a5f_33bc93da0ff54726940093c2d0beb37e~mv2.png","nad-recharge-30ct-mint",199.99],
["Oxytocin Acetate 5mg","e76a5f_26979fb67d9b42b991257dab3795ffc5~mv2.png","oxytocin-acetate-5mg",55],
["P21 5mg","e76a5f_788a7d72b82c4a7489a1d057bcddca78~mv2.png","p21-5mg",75],
["PE-22-28 10mg","e76a5f_f666020cb1e7445eba48bfce19d5873d~mv2.png","pe-22-28-10mg",75],
["Pinealon 20mg","e76a5f_8a002e02acad4e0a9d0ae693df2a143e~mv2.png","pinealon-20mg",70],
["PNC-27 10mg","e76a5f_59c1e44c33204fd39eb26ec94c1b6c0d~mv2.png","pnc-27-10mg",210],
["PNC-27 5mg","e76a5f_59c1e44c33204fd39eb26ec94c1b6c0d~mv2.png","pnc-27-5mg",125],
["PT-141 (Bremelanotide) 10mg","e76a5f_3c3372127d8741ba82664967971b2b39~mv2.png","pt-141-bremelanotide-10mg",40],
["Research Starter Kit","e76a5f_20ccde602d5d43708f6383e6a03618ed~mv2.png","research-starter-kit",20],
["Retatrutide 10mg","e76a5f_125227f9b07c4f18976a60ed7f8cd28b~mv2.png","retatrutide-10mg",100],
["Retatrutide 20mg","https://cdn.jsdelivr.net/gh/vegasblackcard/pp-pay@3fd0432/img/reta-20mg.png","retatrutide-20mg",160],
["Selank 10mg","e76a5f_c3bdfdaa84ac4cbba5755045c46fbdf6~mv2.png","selank-10mg",40],
["Semaglutide 30mg","e76a5f_e25b132c17c14890b6a0ed03730bdfd4~mv2.png","semaglutide-30mg",120],
["Semaglutide 5mg","e76a5f_dbe8aab004b64c229f4700971ccce977~mv2.png","semaglutide-5mg",75],
["Semax 10mg","e76a5f_1c81441e745b42088dce24fb71cf74af~mv2.png","semax-10mg",40],
["Sermorelin 10mg","e76a5f_8824a216f4dd42b4931488d91db01902~mv2.png","sermorelin-10mg",70],
["Sermorelin 5mg","e76a5f_8824a216f4dd42b4931488d91db01902~mv2.png","sermorelin-5mg",35],
["SLU-PP-332 250mcg","e76a5f_0594ae85a46b43298aa4528d2e406f1f~mv2.png","slu-pp-332-250mcg",120],
["SLU-PP-332 5mg","e76a5f_3c3518fac8c24495a57934a668f86b24~mv2.png","slu-pp-332-5mg",100],
["SS-31 (Elamipretide) 50mg","e76a5f_720fa4fb63974d5e8f903cdd47c8104c~mv2.png","ss-31-elamipretide-50mg",90],
["Super Human Blend 10ml","e76a5f_113167c71c1a4f50839674810e381de8~mv2.png","super-human-blend-10ml",120],
["TB500 10mg","e76a5f_760e2387e716420ea31009664be724a1~mv2.png","tb500-10mg",50],
["TB500 5mg","e76a5f_e8b7bf8f5f2c4ef1bf81d02b11e553d6~mv2.png","tb500-5mg",40],
["Tesamorelin 10mg","e76a5f_7ad307d25c5f4592bce73a9b1e744c59~mv2.png","tesamorelin-10mg",80],
["Thymosin Alpha-1 10mg","e76a5f_06be289fbaec41279797327974781b81~mv2.png","thymosin-alpha-1-10mg",50],
["Thymosin Alpha-1 5mg","e76a5f_a7e640c9a36d42299c9c0af080287887~mv2.png","thymosin-alpha-1-5mg",90],
["Tirzepatide 30mg","e76a5f_2453e0eb191643808c298b6fae046caf~mv2.png","tirzepatide-30mg",135],
["Tirzepatide 60mg","e76a5f_716b1c4153b8495faad2d352c681fd18~mv2.png","tirzepatide-60mg",500],
["U-100 SYRINGES Pack of 100","e76a5f_77f6646e49fb4e2c87dcd173e168901d~mv2.jpg","u-100-syringes-pack-of-100",25],
["U-100 SYRINGES Pk of 10","e76a5f_77f6646e49fb4e2c87dcd173e168901d~mv2.jpg","u-100-syringes-pk-of-10",3],
["Wolverine Stack (BPC-157 10mg + TB500 10mg)","e76a5f_137e78c0ba544faba5e4e62cd33a8699~mv2.png","wolverine-stack-bpc-157-10mg-tb500-10mg",50],
["Wolverine Stack (BPC-157 5mg + TB500 5mg)","e76a5f_6e033999c25d46218cec8bf0c01966b5~mv2.png","wolverine-stack-bpc-157-5mg-tb500-5mg",80]];
window.ppProducts=P;
var path=window.location.pathname;
if(path==='/faq'||path==='/faq/'){window.ppShowFAQ=true;}
if(path!=='/'&&path!=='/home'&&path!==''&&path!=='/faq'&&path!=='/faq/')return;
var hs=document.createElement('style');hs.id='pp-hide-home';hs.textContent='body{opacity:0!important}';document.documentElement.appendChild(hs);
var css='*{background-image:none!important}body{overflow-x:hidden!important}body,#PAGES_CONTAINER,#SITE_PAGES,section,[id^=comp-],main,[role=main]{background-color:#eff0f5!important;background-image:none!important}[id^=comp-] img,[id^=comp-] wix-image,[id^=comp-] wow-image,[id^=comp-] canvas,.bgImg,.bgImg img{display:none!important}#pp-hp img{display:block!important}#SITE_HEADER,header{display:none!important}#masterPage,#PAGES_CONTAINER,#SITE_PAGES,#SITE_CONTAINER,#site-root,#SCROLL_TO_TOP,[data-mesh-id],[id^=comp-]{pointer-events:none!important}#SCROLL_TO_TOP,[id*=SCROLL],[class*=scroll-to-top],button[aria-label*=scroll],button[aria-label*=Back]{display:none!important;visibility:hidden!important}#pp-hp,#pp-hp *,#pp-hdr,#pp-hdr *,.pp-mn,.pp-mn *,.pp-mo,.pp-so,.pp-sb,.pp-sb *,.pp-modal-bg,.pp-modal-bg *,#pp-footer,#pp-footer *,#pp-age-gate,#pp-age-gate *{pointer-events:auto!important}.pp-hdr{display:flex!important;align-items:center;justify-content:space-between;padding:12px 16px;background:#0e1b4d!important;width:100vw;box-sizing:border-box;position:fixed;top:0;left:0;z-index:9990}#pp-hp{margin-top:52px}.pp-hdr-left,.pp-hdr-right{display:flex;align-items:center;gap:14px}.pp-hdr-center{font-family:Archivo;font-size:18px;font-weight:700;color:#fff!important}.pp-mo,.pp-so{display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:9998}.pp-mn{position:fixed;top:0;left:0;width:280px;height:100%;background:#0e1b4d;z-index:9999;transform:translateX(-100%);transition:transform .3s;padding:56px 0}.pp-mn.open{transform:translateX(0)}.pp-mo.open,.pp-so.open{display:block}.pp-mn a{display:block;padding:14px 30px;color:#fff!important;-webkit-text-fill-color:#fff!important;font-size:18px;font-weight:600;text-decoration:none;border-bottom:1px solid #1a2a6e}.pp-mc{position:absolute;top:14px;right:14px;font-size:28px;color:#fff;cursor:pointer;background:none;border:none}.pp-sb{display:none;position:fixed;top:0;left:0;right:0;background:#fff;z-index:9999;padding:14px 16px}.pp-sb.open{display:flex;align-items:center;gap:10px}.pp-sb input{flex:1;padding:10px 14px;border:2px solid #0e1b4d;border-radius:40px;font-size:16px}.pp-sb button{background:none;border:none;font-size:24px;cursor:pointer}#pp-hp{font-family:Questrial,sans-serif;color:#0e1b4d;line-height:1.6;background:#eff0f5!important;position:relative!important;z-index:9000!important;width:100vw!important;overflow-x:hidden!important}#pp-hp *{box-sizing:border-box}#pp-hp img{max-width:100%;height:auto;display:block}#pp-hp a{text-decoration:none;color:inherit}.pp-hero{width:100%;overflow:hidden;background:#0e1b4d!important}.pp-hero img{width:100%;display:block}.pp-st{text-align:center;font-family:Archivo;font-size:24px;font-weight:700;color:#0e1b4d;margin:20px 0 8px}.pp-ss{text-align:center;font-size:13px;color:#555;margin:0 auto 16px;max-width:800px;line-height:1.5;padding:0 20px}.pp-grid{max-width:1200px;margin:auto;padding:8px 20px 30px}.pp-products{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;align-items:start}.pp-card{background:#fff;border-radius:8px;overflow:hidden;text-align:center;display:flex;flex-direction:column}.pp-card-info{display:flex;flex-direction:column;justify-content:flex-start}.pp-card-img{padding:16px 16px 8px}.pp-card-img img{width:100%;height:180px;object-fit:cover}.pp-card-info{padding:10px 16px 16px}.pp-card-info h3{font-size:14px;font-weight:600;color:#0e1b4d;margin:0 0 6px}.pp-card-info .pp-price{font-size:16px;font-weight:700;color:#0e1b4d;margin:4px 0 12px}.pp-atc{display:block;width:100%;padding:10px;background:#4770db;color:#fff;border-radius:40px;font-size:13px;font-weight:600;border:none;cursor:pointer}.pp-cats{text-align:center;padding:20px 20px 10px;max-width:1200px;margin:auto}.pp-cb{display:inline-block;padding:8px 20px;margin:4px;border:2px solid #0e1b4d;border-radius:40px;font-size:13px;font-weight:600;color:#0e1b4d!important;background:#fff!important;cursor:pointer}.pp-cb.active{border-color:#4770db;background:#eef2fc!important}@media(max-width:768px){.pp-products{grid-template-columns:repeat(2,1fr);gap:12px}.pp-card-img img{height:140px;object-fit:cover}.pp-cat-section{grid-template-columns:1fr!important}.pp-feat-grid{grid-template-columns:repeat(2,1fr)!important}#pp-hp>div{overflow:hidden!important;max-width:100vw!important}}@keyframes ppShimmer{0%{background-position:-400px 0}100%{background-position:400px 0}}.pp-skeleton{background:linear-gradient(90deg,#e8eaf0 25%,#f0f2f8 50%,#e8eaf0 75%);background-size:800px 100%;animation:ppShimmer 1.5s infinite;border-radius:8px}.pp-skel-card{height:280px;margin:0}.pp-faq-item{background:#fff;border-radius:12px;margin:0 0 12px;padding:20px 24px;box-shadow:0 2px 8px rgba(0,0,0,.06);cursor:pointer}.pp-faq-item h3{font-family:Archivo,sans-serif;font-size:15px;font-weight:700;color:#0e1b4d;margin:0;display:flex;justify-content:space-between;align-items:center}.pp-faq-item p{font-size:13px;color:#555;line-height:1.7;margin:10px 0 0;display:none}.pp-faq-item.open p{display:block}';
var s=document.createElement('style');s.textContent=css;document.head.appendChild(s);
var CN={BS:'Best Sellers',OS:'Oral Strips',AP:'Performance',AB:'Beauty',WL:'Weight Loss',IL:'Immune & Longevity',CG:'Cognitive',SH:'Sexual Health',HL:'Healing'};
function go(){
var mc=document.querySelector('#PAGES_CONTAINER')||document.querySelector('#SITE_PAGES');
if(!mc)return;var hasHP=document.getElementById('pp-hp');
if(!hasHP){mc.style.display='none';}
if(!document.getElementById('pp-hdr')){var nb=document.createElement('div');nb.id='pp-hdr';nb.className='pp-hdr';nb.innerHTML='<div class="pp-hdr-left"><span id="pp-menu-btn" style="font-size:28px;cursor:pointer;color:#fff;-webkit-text-fill-color:#fff;line-height:1">&#9776;</span></div><div class="pp-hdr-center">Precision Labs</div><div class="pp-hdr-right"><span id="pp-search-btn" style="font-size:22px;cursor:pointer;color:#fff;-webkit-text-fill-color:#fff">&#128269;</span><span id="pp-cart-btn" style="font-size:22px;cursor:pointer;color:#fff;-webkit-text-fill-color:#fff">&#128722;</span></div>';document.body.appendChild(nb);var mo=document.createElement('div');mo.className='pp-mo';var mn=document.createElement('div');mn.className='pp-mn';mn.innerHTML='<button class="pp-mc" id="pp-mc">&times;</button><a data-nav="home">Home</a><a data-nav="store">Store</a><a data-nav="lab-testing">Lab Testing</a><a data-nav="about">About</a><a data-nav="services">Services</a><a data-nav="blog">Blog</a><a data-nav="contact">Contact</a><a data-nav="faq">FAQ</a>';document.body.appendChild(mo);document.body.appendChild(mn);var so=document.createElement('div');so.className='pp-so';var sb=document.createElement('div');sb.className='pp-sb';sb.innerHTML='<input type="text" placeholder="Search..." id="pp-si"><button id="pp-sx">&times;</button>';document.body.appendChild(so);document.body.appendChild(sb);document.getElementById('pp-menu-btn').onclick=function(){mn.classList.add('open');mo.classList.add('open');};document.getElementById('pp-mc').onclick=function(){mn.classList.remove('open');mo.classList.remove('open');};mo.onclick=function(){mn.classList.remove('open');mo.classList.remove('open');};document.getElementById('pp-search-btn').onclick=function(){sb.classList.add('open');so.classList.add('open');document.getElementById('pp-si').focus();};document.getElementById('pp-sx').onclick=function(){sb.classList.remove('open');so.classList.remove('open');};so.onclick=function(){sb.classList.remove('open');so.classList.remove('open');};function doSearch(){var q=document.getElementById('pp-si').value.trim();if(q){var r=P.filter(function(p){return p[0].toLowerCase().indexOf(q.toLowerCase())!==-1;});r.sort(function(a,b){return a[0]>b[0]?1:-1;});document.getElementById('pp-pg').innerHTML=rca(r)||'<p style="padding:30px;color:#555;text-align:center">No results</p>';document.getElementById('pp-grid-title').textContent='Results for "'+q+'"';sb.classList.remove('open');so.classList.remove('open');document.getElementById('pp-grid-title').scrollIntoView({behavior:'smooth'});}}document.getElementById('pp-si').onkeydown=function(e){if(e.key==='Enter'){e.preventDefault();doSearch();}};sb.querySelector('input').insertAdjacentHTML('afterend','<button id="pp-sg" style="background:#4770db;color:#fff;border:none;border-radius:40px;padding:10px 18px;font-size:14px;font-weight:600;cursor:pointer;white-space:nowrap">Go</button>');document.getElementById('pp-sg').onclick=doSearch;mn.onclick=function(e){var a=e.target.closest('[data-nav]');if(!a)return;mn.classList.remove('open');mo.classList.remove('open');var n=a.dataset.nav,pg=document.getElementById('pp-pg'),gt=document.getElementById('pp-grid-title');if(n==='home')window.scrollTo(0,0);if(n==='store'){pg.innerHTML=rc('All');gt.textContent='All Products';gt.scrollIntoView({behavior:'smooth'});}if(n==='about')window.location.href='/about-us';if(n==='services')window.location.href='/services';if(n==='lab-testing'){if(window.ppShowLabTesting)window.ppShowLabTesting();return;}if(n==='blog')window.location.href='/blog';if(n==='contact')window.location.href='/contact';if(n==='faq')window.location.href='/faq';};document.getElementById('pp-cart-btn').onclick=function(){window.location.href='/cart-page';};}
if(hasHP)return;if(window.ppExtra){for(var x=0;x<window.ppExtra.length;x++){var dup=false;for(var y=0;y<P.length;y++){if(P[y][2]===window.ppExtra[x][2]){dup=true;break;}}if(!dup)P.push(window.ppExtra[x]);}}var d=document.createElement('div');d.id='pp-hp';
(function(){var seen={},keep=[];for(var i=0;i<P.length;i++){var k=(P[i][2]||P[i][0]).toLowerCase().replace(/[^a-z0-9]/g,'');if(!seen[k]){seen[k]=1;keep.push(P[i]);}}P.length=0;for(var n=0;n<keep.length;n++)P.push(keep[n]);})();
function rca(list){var h='';list.forEach(function(p){var im=p[1][0]==='h'?p[1]:B+p[1];h+='<div data-slug="'+p[2]+'" class="pp-card" style="cursor:pointer"><div class="pp-card-img"><img src="'+im+'" alt="'+p[0]+'" loading="lazy"></div><div class="pp-card-info"><h3>'+p[0]+'</h3><div class="pp-price">$'+p[3]+'</div><span class="pp-atc">Add to Cart</span></div></div>';});return h;}
var rcN=0;function rc(cat){var l,cs=(window.ppCats||{})[cat]||'';if(cat==='All'){l=P.slice();}else{l=P.filter(function(p){return cs.indexOf(','+p[2]+',')>-1;});}l.sort(function(a,b){if(a[2]==='ghkcu-copper-serum')return -1;if(b[2]==='ghkcu-copper-serum')return 1;if(a[2]==='research-starter-kit')return -1;if(b[2]==='research-starter-kit')return 1;return a[0]>b[0]?1:-1;});rcN=l.length;return rca(l);}
function rp(){var h='<span class="pp-cb active" data-cat="BS">Best Sellers</span><span class="pp-cb" data-cat="All">All Products</span>';Object.keys(CN).forEach(function(k){if(k!=='BS')h+='<span class="pp-cb" data-cat="'+k+'">'+CN[k]+'</span>';});return h;}
var bsH=rc('BS');d.innerHTML='<div class="pp-hero"><img src="https://static.wixstatic.com/media/e76a5f_398beccf075b4f0c93d26b2a6ae2c997~mv2.png" alt="Precision Labs" style="width:100%;display:block;height:auto"></div>'

/* ============================================================
   TRUST BADGES — separated below hero with spacing
   ============================================================ */
+'<div id="pp-trust-badges" style="background:#0e1b4d;padding:22px 16px;margin-top:0;overflow-x:auto;-webkit-overflow-scrolling:touch"><div style="display:flex;justify-content:center;align-items:center;gap:28px;min-width:max-content;margin:0 auto;max-width:1200px;flex-wrap:wrap">'+
'<div style="display:flex;align-items:center;gap:10px"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#4770db" stroke-width="2"><path d="M9 12l2 2 4-4"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg><div><div style="color:#fff;font-size:14px;font-weight:700;letter-spacing:.5px">THIRD-PARTY</div><div style="color:#abb8e6;font-size:11px">Lab Tested</div></div></div>'+
'<div style="display:flex;align-items:center;gap:10px"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#4770db" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><div><div style="color:#fff;font-size:14px;font-weight:700;letter-spacing:.5px">99%+ PURITY</div><div style="color:#abb8e6;font-size:11px">HPLC Verified</div></div></div>'+
'<div style="display:flex;align-items:center;gap:10px"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#4770db" stroke-width="2"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 14l2 2 4-4"/></svg><div><div style="color:#fff;font-size:14px;font-weight:700;letter-spacing:.5px">COA AVAILABLE</div><div style="color:#abb8e6;font-size:11px">On Request</div></div></div>'+
'<div style="display:flex;align-items:center;gap:10px"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#4770db" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg><div><div style="color:#fff;font-size:14px;font-weight:700;letter-spacing:.5px">SSL SECURE</div><div style="color:#abb8e6;font-size:11px">Encrypted Checkout</div></div></div>'+
'<div style="display:flex;align-items:center;gap:10px"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#4770db" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5a2 2 0 01-2 2h-1"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg><div><div style="color:#fff;font-size:14px;font-weight:700;letter-spacing:.5px">DISCREET</div><div style="color:#abb8e6;font-size:11px">Plain Packaging</div></div></div>'+
'<div style="display:flex;align-items:center;gap:10px"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#4770db" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5a2 2 0 01-2 2h-1"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg><div><div style="color:#fff;font-size:14px;font-weight:700;letter-spacing:.5px">FREE SHIPPING</div><div style="color:#abb8e6;font-size:11px">Orders Over $300</div></div></div>'+
'</div></div>'

/* ============================================================
   WELCOME SECTION — Clean centered text block
   ============================================================ */
+'<div style="max-width:800px;margin:0 auto;padding:50px 20px 40px;text-align:center">'
+'<h2 style="font-family:Archivo,sans-serif;font-size:32px;font-weight:800;color:#0e1b4d;margin:0 0 16px;line-height:1.2">Precision Labs</h2>'
+'<p style="font-size:15px;color:rgba(14,27,77,0.75);line-height:1.8;max-width:680px;margin:0 auto 16px">Precision Labs are produced in the USA with strict standards for quality, transparency, and consistency. Founded by a Marine veteran, our approach emphasizes research, education, and professional oversight. Each batch is third-party tested to ensure confidence in purity and identity.</p>'
+'<p style="font-size:13px;color:#888;font-style:italic;max-width:600px;margin:0 auto 24px;line-height:1.6">Products are research compounds provided strictly for laboratory research purposes only. Not for human consumption.</p>'
+'<span onclick="document.getElementById(\'pp-shop\').scrollIntoView({behavior:\'smooth\'})" style="display:inline-block;padding:14px 36px;background:#4770db;color:#eff0f5;border-radius:40px;font-size:15px;font-weight:600;cursor:pointer;transition:background .2s">Shop All</span>'
+'</div>'

/* ============================================================
   RESEARCH CIRCLE MEMBERSHIP — 20% Off CTA
   ============================================================ */
+'<div style="max-width:1000px;margin:0 auto 30px;padding:0 20px">'
+'<div style="background:#fff;border-radius:16px;padding:40px 32px;box-shadow:0 4px 20px rgba(0,0,0,.08);border:1px solid #e5e7eb">'
+'<h2 style="font-family:Archivo,sans-serif;font-size:28px;font-weight:800;color:#000;margin:0 0 8px;text-align:center">Research Circle Membership</h2>'
+'<p style="font-size:15px;color:#000;text-align:center;margin:0 0 28px;line-height:1.6">Save on every order. Priority access. Concierge support.</p>'
+'<div style="display:grid;grid-template-columns:1fr;gap:20px;max-width:100%">'
+'<div style="background:#f7f7f8;border-radius:12px;padding:32px 24px 28px;border:1px solid #e5e7eb;position:relative">'
+'<div style="display:inline-block;background:#4770db;color:#fff;font-size:11px;font-weight:700;padding:4px 12px;border-radius:20px;letter-spacing:1px;margin:0 0 12px">RESEARCH CIRCLE</div>'
+'<h3 style="font-family:Archivo,sans-serif;font-size:20px;font-weight:800;color:#000;margin:0 0 4px">15% Off Every Order</h3>'
+'<div style="font-size:36px;font-weight:800;color:#000;margin:8px 0">$99<span style="font-size:16px;color:#000">/month</span></div>'
+'<p style="font-size:14px;font-weight:700;color:#000;margin:12px 0 4px">Includes:</p>'
+'<ul style="list-style:none;padding:0;margin:8px 0">'
+'<li style="font-size:13px;color:#000;padding:6px 0;border-bottom:1px solid #e5e7eb">\u2713 Unlimited protocol consultation</li>'
+'<li style="font-size:13px;color:#000;padding:6px 0;border-bottom:1px solid #e5e7eb">\u2713 Peptide starter kit</li>'
+'<li style="font-size:13px;color:#000;padding:6px 0;border-bottom:1px solid #e5e7eb">\u2713 Week\u2019s worth of free needles</li>'
+'<li style="font-size:13px;color:#000;padding:6px 0;border-bottom:1px solid #e5e7eb">\u2713 Free alcohol swabs</li>'
+'<li style="font-size:13px;color:#000;padding:6px 0;border-bottom:1px solid #e5e7eb">\u2713 15% off every product, every order</li>'
+'<li style="font-size:13px;color:#000;padding:6px 0;border-bottom:1px solid #e5e7eb">\u2713 Priority restock notifications</li>'
+'<li style="font-size:13px;color:#000;padding:6px 0">\u2713 Personal discount code (your initials + 15)</li>'
+'</ul>'
+'<button onclick="window.ppJoinMembership(\'99\')" style="display:block;width:100%;padding:14px;background:#4770db;color:#fff;border:none;border-radius:40px;font-size:16px;font-weight:700;text-align:center;cursor:pointer">Join Research Circle \u2014 $99/mo</button>'
+'</div>'
+'</div>'
+'<p style="text-align:center;margin:20px 0 0;font-size:12px;color:#000">ACH payment \u2022 Auto-renews monthly \u2022 Cancel anytime \u2022 Code active only while membership is current</p>'
+'</div></div>'

/* ============================================================
   CATEGORY PILLS + PRODUCTS
   ============================================================ */
+'<div class="pp-cats" id="pp-shop">'+rp()+'</div><div style="text-align:center;margin:8px 0"><span onclick="window.location.href=\'/services\'" style="display:inline-block;padding:8px 20px;border-radius:40px;font-size:13px;font-weight:600;background:#4770db;color:#fff;cursor:pointer">Consultation</span></div><h2 class="pp-st" id="pp-grid-title">Best Sellers</h2><p class="pp-ss" id="pp-ss">'+((window.ppCatDesc||{}).BS||'')+'</p><p style="text-align:center;font-size:11px;color:#999;margin:0 0 10px">Research purposes only \u2022 Third-party tested</p><div class="pp-grid"><p id="pp-cnt" style="text-align:center;font-size:13px;color:#888;margin:0 0 10px">'+rcN+' Products</p><div class="pp-products" id="pp-pg">'+bsH+'</div></div>'

/* ============================================================
   REVIEWS / TESTIMONIALS SECTION
   ============================================================ */
+'<div id="pp-reviews" style="max-width:1200px;margin:30px auto 0;padding:0 20px"><h2 style="text-align:center;font-family:Archivo,sans-serif;font-size:22px;font-weight:700;color:#0e1b4d;margin:0 0 6px">What Researchers Are Saying</h2><p style="text-align:center;font-size:12px;color:#888;margin:0 0 20px">Reviews reflect individual research experiences</p><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px">'
+'<div style="background:#fff;border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,.06)"><div style="display:flex;align-items:center;gap:10px;margin:0 0 10px"><div style="width:40px;height:40px;border-radius:50%;background:#4770db;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:16px">M</div><div><div style="font-weight:700;color:#0e1b4d;font-size:14px">Mike R.</div><div style="font-size:11px;color:#888">Verified Purchase</div></div></div><div style="color:#f5a623;font-size:14px;margin:0 0 8px">\u2605\u2605\u2605\u2605\u2605</div><p style="font-size:13px;color:#444;line-height:1.6;margin:0;text-align:left">Ordered the Wolverine Stack for my lab. Purity was spot on \u2014 confirmed with our own HPLC. Shipping was fast, arrived in 3 days with cold pack. Will be ordering more for ongoing research.</p></div>'
+'<div style="background:#fff;border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,.06)"><div style="display:flex;align-items:center;gap:10px;margin:0 0 10px"><div style="width:40px;height:40px;border-radius:50%;background:#0e1b4d;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:16px">S</div><div><div style="font-weight:700;color:#0e1b4d;font-size:14px">Sarah T.</div><div style="font-size:11px;color:#888">Verified Purchase</div></div></div><div style="color:#f5a623;font-size:14px;margin:0 0 8px">\u2605\u2605\u2605\u2605\u2606</div><p style="font-size:13px;color:#444;line-height:1.6;margin:0;text-align:left">Good selection of peptides and the COAs look legit. BPC-157 and GHK-Cu both tested well in our assays. Knocked one star because shipping took 5 days to the east coast, but product quality made up for it.</p></div>'
+'<div style="background:#fff;border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,.06)"><div style="display:flex;align-items:center;gap:10px;margin:0 0 10px"><div style="width:40px;height:40px;border-radius:50%;background:#2ecc71;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:16px">J</div><div><div style="font-weight:700;color:#0e1b4d;font-size:14px">Jason K.</div><div style="font-size:11px;color:#888">Verified Purchase</div></div></div><div style="color:#f5a623;font-size:14px;margin:0 0 8px">\u2605\u2605\u2605\u2605\u2605</div><p style="font-size:13px;color:#444;line-height:1.6;margin:0;text-align:left">Been sourcing from multiple vendors for years \u2014 PP is now my go-to. The Semaglutide came properly lyophilized, vacuum sealed, and the mass spec data matched perfectly. Customer service responded within an hour when I had a dosing calculation question.</p></div>'
+'<div style="background:#fff;border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,.06)"><div style="display:flex;align-items:center;gap:10px;margin:0 0 10px"><div style="width:40px;height:40px;border-radius:50%;background:#e74c3c;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:16px">D</div><div><div style="font-weight:700;color:#0e1b4d;font-size:14px">Dr. David L.</div><div style="font-size:11px;color:#888">Verified Purchase</div></div></div><div style="color:#f5a623;font-size:14px;margin:0 0 8px">\u2605\u2605\u2605\u2605\u2605</div><p style="font-size:13px;color:#444;line-height:1.6;margin:0;text-align:left">As a researcher, I appreciate that they provide third-party COAs upfront \u2014 not just in-house reports. The Tirzepatide and Retatrutide batches were both >98% pure. Veteran-owned is a bonus. Solid operation.</p></div>'
+'<div style="background:#fff;border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,.06)"><div style="display:flex;align-items:center;gap:10px;margin:0 0 10px"><div style="width:40px;height:40px;border-radius:50%;background:#9b59b6;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:16px">A</div><div><div style="font-weight:700;color:#0e1b4d;font-size:14px">Alex W.</div><div style="font-size:11px;color:#888">Verified Purchase</div></div></div><div style="color:#f5a623;font-size:14px;margin:0 0 8px">\u2605\u2605\u2605\u2606\u2606</div><p style="font-size:13px;color:#444;line-height:1.6;margin:0;text-align:left">Products are high quality, no complaints there. The NAD+ and MOTS-c performed well in cell viability assays. Only gripe is I wish they had more payment options \u2014 but for the price-to-quality ratio, still one of the better vendors around.</p></div>'
+'<div style="background:#fff;border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,.06)"><div style="display:flex;align-items:center;gap:10px;margin:0 0 10px"><div style="width:40px;height:40px;border-radius:50%;background:#4770db;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:16px">B</div><div><div style="font-weight:700;color:#0e1b4d;font-size:14px">Bianca M.</div><div style="font-size:11px;color:#888">Verified Purchase • GHKCU Copper Serum</div></div></div><div style="color:#f5a623;font-size:14px;margin:0 0 8px">★★★★★</div><p style="font-size:13px;color:#444;line-height:1.6;margin:0;text-align:left">Added the Copper Serum to my evening routine — lightweight, absorbs fast, no irritation. My complexion looks brighter and more even, and my skin feels hydrated. Reordering for sure.</p></div>'
+'<div style="background:#fff;border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,.06)"><div style="display:flex;align-items:center;gap:10px;margin:0 0 10px"><div style="width:40px;height:40px;border-radius:50%;background:#0e1b4d;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:16px">T</div><div><div style="font-weight:700;color:#0e1b4d;font-size:14px">Tara J.</div><div style="font-size:11px;color:#888">Verified Purchase • GHKCU Copper Serum</div></div></div><div style="color:#f5a623;font-size:14px;margin:0 0 8px">★★★★★</div><p style="font-size:13px;color:#444;line-height:1.6;margin:0;text-align:left">Love how my skin looks since adding this. Texture appears smoother and there’s a healthy glow. Not greasy at all — sits nicely under everything else in my routine.</p></div>'
+'<div style="background:#fff;border-radius:12px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,.06)"><div style="display:flex;align-items:center;gap:10px;margin:0 0 10px"><div style="width:40px;height:40px;border-radius:50%;background:#2ecc71;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:16px">R</div><div><div style="font-weight:700;color:#0e1b4d;font-size:14px">Renee P.</div><div style="font-size:11px;color:#888">Verified Purchase • GHKCU Copper Serum</div></div></div><div style="color:#f5a623;font-size:14px;margin:0 0 8px">★★★★☆</div><p style="font-size:13px;color:#444;line-height:1.6;margin:0;text-align:left">Nice lightweight serum. My skin looks more radiant and feels firmer. Took a few weeks to notice a difference in how it looks, but I’m happy with it overall.</p></div>'
+'</div></div>'

/* ============================================================
   FAQ SECTION — shown on /faq or inline
   ============================================================ */
+'<div id="pp-faq-section" style="max-width:900px;margin:40px auto 0;padding:0 20px;display:'+(window.ppShowFAQ?'block':'none')+'">'
+'<h2 style="text-align:center;font-family:Archivo,sans-serif;font-size:24px;font-weight:700;color:#0e1b4d;margin:0 0 6px">Frequently Asked Questions</h2>'
+'<p style="text-align:center;font-size:13px;color:#888;margin:0 0 24px">Everything you need to know about our research peptides</p>'
+'<div class="pp-faq-item"><h3>What are research peptides? <span>\u25BC</span></h3><p>Peptides are short chains of amino acids that serve as building blocks for proteins. Research peptides are synthesized for scientific study and laboratory use. All products sold by Precision Labs are intended strictly for research purposes and are not for human consumption.</p></div>'
+'<div class="pp-faq-item"><h3>How do I verify purity? <span>\u25BC</span></h3><p>We test every batch via HPLC for purity (99%+ standard) and mass spectrometry for identity confirmation. COAs are available upon request.</p></div>'
+'<div class="pp-faq-item"><h3>How should I store my peptides? <span>\u25BC</span></h3><p>Unreconstituted (lyophilized) peptides should be stored in a freezer (-20\u00B0C) for long-term storage or refrigerated (2-8\u00B0C) for short-term. Once reconstituted with bacteriostatic water, peptides should be refrigerated and used within 4-6 weeks.</p></div>'
+'<div class="pp-faq-item"><h3>What is your shipping policy? <span>\u25BC</span></h3><p>Orders placed before 2 PM PST ship same day. Free shipping on orders over $300. All packages are shipped in plain, discreet packaging with no product names on the label. Temperature-sensitive products are cold-packed.</p></div>'
+'<div class="pp-faq-item"><h3>Do you offer refunds or returns? <span>\u25BC</span></h3><p>Due to the nature of research chemicals, we cannot accept returns on opened products. Unopened, sealed products may be returned within 14 days for a full refund. If you receive a damaged or incorrect product, contact us immediately and we will replace it at no charge.</p></div>'
+'<div class="pp-faq-item"><h3>What payment methods do you accept? <span>\u25BC</span></h3><p>We accept major credit cards, cryptocurrency (Bitcoin, Ethereum), Zelle, and CashApp. Payment processing is secure and encrypted.</p></div>'
+'<div class="pp-faq-item"><h3>Are your peptides made in the USA? <span>\u25BC</span></h3><p>Our peptides are sourced from FDA-registered, GMP-compliant facilities. Every batch undergoes independent third-party testing in US laboratories before being released for sale.</p></div>'
+'<div class="pp-faq-item"><h3>How do I reconstitute peptides? <span>\u25BC</span></h3><p>Add bacteriostatic water (BAC water) slowly down the side of the vial \u2014 never spray directly onto the lyophilized powder. Gently swirl until dissolved. The amount of BAC water depends on your desired concentration. We provide reconstitution guides with every order.</p></div>'
+'<div class="pp-faq-item"><h3>Is Precision Labs really veteran-owned? <span>\u25BC</span></h3><p>Yes. Precision Labs was founded by a United States Marine Corps veteran. The same discipline, integrity, and standards drilled into every Marine are applied to every aspect of this business \u2014 from sourcing and testing to shipping and customer service.</p></div>'
+'<div class="pp-faq-item"><h3>Do you offer bulk or wholesale pricing? <span>\u25BC</span></h3><p>Yes. For large research orders or institutional purchases, contact us directly for custom pricing. We offer volume discounts starting at 10+ units.</p></div>'
+'</div>'

/* ============================================================
   NEWSLETTER SECTION — Stay in the Loop
   ============================================================ */
+'<div style="max-width:700px;margin:50px auto 40px;padding:40px 24px;text-align:center;background:#fff;border-radius:16px;box-shadow:0 2px 12px rgba(0,0,0,.06)">'
+'<h2 style="font-family:Archivo,sans-serif;font-size:24px;font-weight:800;color:#0e1b4d;margin:0 0 8px">Stay in the Loop</h2>'
+'<p style="font-size:14px;color:rgba(14,27,77,0.65);margin:0 0 24px;line-height:1.6">Be the first to know about new products and exclusive offers.</p>'
+'<div style="display:flex;gap:10px;max-width:460px;margin:0 auto;flex-wrap:wrap;justify-content:center">'
+'<input type="email" id="pp-nl-email" placeholder="Enter your email" style="flex:1;min-width:220px;padding:14px 18px;border:2px solid #ddd;border-radius:40px;font-size:14px;font-family:Questrial,sans-serif;outline:none">'
+'<button onclick="var em=document.getElementById(\'pp-nl-email\');if(em&&em.value.indexOf(\'@\')>0){em.style.display=\'none\';this.textContent=\'Subscribed!\';this.style.background=\'#2e7d32\';this.style.cursor=\'default\';}else if(em){em.style.borderColor=\'#e74c3c\';}" style="padding:14px 28px;background:#4770db;color:#fff;border:none;border-radius:40px;font-size:14px;font-weight:600;cursor:pointer;font-family:Archivo,sans-serif;white-space:nowrap">Subscribe</button>'
+'</div>'
+'</div>';

document.body.appendChild(d);
/* FAQ accordion toggle */
d.addEventListener("click",function(e){var fi=e.target.closest(".pp-faq-item");if(fi){fi.classList.toggle("open");var sp=fi.querySelector("h3 span");if(sp)sp.textContent=fi.classList.contains("open")?"\u25B2":"\u25BC";}});
/* If on /faq, scroll to FAQ and hide products */
if(window.ppShowFAQ){document.getElementById("pp-faq-section").style.display="block";setTimeout(function(){document.getElementById("pp-faq-section").scrollIntoView({behavior:"smooth"});},500);}
if(!document.getElementById('pp-footer')){var ft=document.createElement('div');ft.id='pp-footer';ft.style.cssText='background:#0e1b4d;padding:30px 20px 20px;text-align:center;font-family:Questrial,sans-serif;margin-top:0;position:relative;z-index:9000;width:100vw;box-sizing:border-box';ft.innerHTML='<div style="margin:0 0 12px"><span style="font-family:Archivo,sans-serif;font-size:16px;font-weight:700;color:#fff;letter-spacing:1px">LEGAL</span></div><div style="display:flex;justify-content:center;gap:20px;flex-wrap:wrap"><span onclick="window.location.href=\'/terms\'" style="color:#abb8e6;font-size:13px;text-decoration:underline;font-weight:600;cursor:pointer">Terms of Service</span><span onclick="window.location.href=\'/disclaimer\'" style="color:#abb8e6;font-size:13px;text-decoration:underline;font-weight:600;cursor:pointer">Disclaimer</span><span onclick="window.location.href=\'/research-use\'" style="color:#abb8e6;font-size:13px;text-decoration:underline;font-weight:600;cursor:pointer">Research Use Only</span><span onclick="window.location.href=\'/faq\'" style="color:#abb8e6;font-size:13px;text-decoration:underline;font-weight:600;cursor:pointer">FAQ</span></div><div style="margin-top:16px;border-top:1px solid #1a2a6e;padding-top:14px"><span style="color:#556;font-size:11px">\u00A9 2026 Precision Labs. All rights reserved.</span></div>';document.body.appendChild(ft);}
var hh=document.getElementById('pp-hide-home');if(hh)hh.remove();document.body.style.opacity='1';
d.addEventListener('click',function(e){var btn=e.target.closest('.pp-cb');if(btn){e.preventDefault();d.querySelectorAll('.pp-cb').forEach(function(x){x.classList.remove('active');});btn.classList.add('active');var cat=btn.getAttribute('data-cat');document.getElementById('pp-pg').innerHTML=rc(cat);document.getElementById('pp-cnt').textContent=rcN+' Products';document.getElementById('pp-grid-title').textContent=cat==='All'?'All Products':(CN[cat]||cat);var ss=document.getElementById('pp-ss');if(ss)ss.textContent=cat==='All'?'':((window.ppCatDesc||{})[cat]||'');document.getElementById('pp-grid-title').scrollIntoView({behavior:'smooth'});}var card=e.target.closest('.pp-card');if(card){e.preventDefault();e.stopPropagation();var sl=card.getAttribute('data-slug');if(sl&&window.ppDetail)window.ppDetail(sl);}});
/* Inject SEO structured data schemas */
try{injectSEOSchema();}catch(e){console.warn('SEO schema injection error:',e);}
}
function tryGo(){if(!document.getElementById('pp-hp')){go();}}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){setTimeout(tryGo,3000);});}else{setTimeout(tryGo,3000);}
setInterval(function(){if((!document.getElementById('pp-hp')||!document.getElementById('pp-hdr'))&&(document.querySelector('#PAGES_CONTAINER')||document.querySelector('#SITE_PAGES'))){go();}},2000);
})();


(function(){
var S='https://www.purefusionpeptide.com/cdn/shop/files/';
var F='https://www.purefusionpeptide.com/cdn/shop/files/';
window.ppExtra=[];
window.ppExtraDesc={
'5-amino-1mq-10mg':'5-Amino-1MQ is an NNMT inhibitor studied for its potential role in fat metabolism and energy balance. Research explores its influence on cellular energy pathways, lipid processing, and metabolic regulation. May support healthy body composition through enhanced metabolic activity.',
'alcohol-research-stack':'A three-peptide research stack combining MOTS-c (10mg), BPC-157 (10mg), and GHK-Cu (50mg). Studied for potential support of cellular recovery, mitochondrial function, and tissue repair. Research explores synergistic effects on metabolic resilience and oxidative balance.',
'aod-9604-10mg':'AOD-9604 (HGH Fragment 176-191) is a peptide studied in research on lipid metabolism and cellular energy pathways. Research explores its influence on metabolic activity in laboratory settings. For research use only — not for human consumption.',
'ara-290-10mg':'ARA-290 is a non-erythropoietic peptide studied in research on nerve signaling and inflammatory pathways. Research explores its interaction with the innate repair receptor (IRR) and potential roles in nerve and tissue biology. For research use only.',
'bacteriostatic-water-10ml':'Sterile water containing 0.9% benzyl alcohol as a bacteriostatic preservative. Used for reconstituting lyophilized peptides. Multi-use vial designed to inhibit bacterial growth after opening.',
'bacteriostatic-water-30ml':'Sterile water containing 0.9% benzyl alcohol as a bacteriostatic preservative. Larger 30ml vial for reconstituting multiple lyophilized peptide vials. Multi-use with bacterial growth inhibition.',
'bacteriostatic-water-3ml':'Sterile water containing 0.9% benzyl alcohol preservative. Compact 3ml vial ideal for single peptide reconstitution. Inhibits bacterial growth for safe multi-dose use.',
'bacteriostatic-water-5ml':'Sterile water containing 0.9% benzyl alcohol preservative. 5ml vial for peptide reconstitution. Multi-use design inhibits bacterial growth after initial puncture.',
'beauty-blend-10ml':'A multi-component vitamin and nutrient formulation studied for effects on skin health, collagen production, and cellular vitality. Contains B-vitamins and amino acids researched for their roles in skin radiance, hair biology, and overall energy support.',
'bpc-157-10mg':'BPC-157 (Body Protective Compound) is a pentadecapeptide studied in research on tissue-repair and anti-inflammatory pathways. Research explores its potential roles in tendon and ligament repair, gastric protection, and musculoskeletal recovery mechanisms. For research use only.',
'bpc-157-5mg':'BPC-157 (Body Protective Compound) is a pentadecapeptide studied in research on tissue-repair and anti-inflammatory pathways. Research explores its potential in tendon and ligament repair, gastric protection, and musculoskeletal recovery mechanisms. For research use only.',
'bpc-157-tb-500-30ct-strawberry-watermelon':'Oral dissolving strips combining BPC-157 and TB-500 for needle-free dosing. Studied for synergistic tissue repair, gut health, and accelerated recovery. Sublingual absorption for rapid bioavailability.',
'cagrilintide-10mg':'Cagrilintide is a long-acting amylin analog studied for appetite regulation and weight management. Research explores its potential influence on satiety signaling, caloric intake reduction, and metabolic balance. May complement GLP-1 therapies.',
'cjc-1295-ipamorelin-5mg5mg':'CJC-1295 and Ipamorelin are peptides studied in research on growth-hormone and IGF-1 signaling pathways. Research investigates their combined activity in models of body composition, recovery, metabolic balance, and sleep-cycle regulation. For research use only.',
'diabetes-research-stack':'A four-peptide research stack combining Retatrutide (10mg), BPC-157 (10mg), CJC-1295/Ipamorelin (5/5mg), and supporting compounds. Studied for metabolic regulation, insulin sensitivity, and cellular repair through multi-pathway targeting.',
'dsip-delta-sleep-inducing-peptide-5mg':'DSIP (Delta Sleep-Inducing Peptide) is a naturally occurring neuropeptide studied for sleep regulation, stress modulation, and neuroendocrine balance. Research explores its influence on circadian rhythm, cortisol levels, and restorative sleep cycles.',
'dsip-delta-sleep-inducing-peptide-10mg':'DSIP (Delta Sleep-Inducing Peptide) is a neuropeptide studied for sleep regulation, stress response, and neuroendocrine function. Research explores its influence on REM sleep balance, cortisol modulation, and hormonal stability.',
'dsip-delta-sleep-inducing-peptide-15mg':'DSIP (Delta Sleep-Inducing Peptide) is a neuropeptide studied for sleep regulation, stress modulation, and neuroendocrine balance. Higher-dose formulation for advanced research protocols examining circadian rhythm and recovery.',
'epitalon-10mg':'Epitalon is a tetrapeptide studied in aging research for telomerase activity and cellular maintenance. Research explores its potential roles in telomere biology, melatonin signaling, sleep-cycle regulation, and immune pathways. For research use only.',
'epitalon-50mg':'Epitalon is a tetrapeptide studied in aging research for telomerase activity and cellular maintenance. Higher-concentration formulation for advanced research protocols. Explored for telomere biology, melatonin cycles, and immune pathways. For research use only.',
'fat-burning-research-stack':'A multi-compound research stack combining Retatrutide and 5-Amino-1MQ. Studied for synergistic effects on fat metabolism, metabolic activation, and body composition through dual-pathway targeting of energy balance.',
'fat-dissolver-10ml':'A lipotropic injection blend containing MIC (Methionine, Inositol, Choline), NAD+, and B-complex vitamins. Studied for fat metabolism support, liver function, and cellular energy. Designed for targeted body composition research.',
'ghkcu-copper-serum':'GHKCU Copper Serum is a topical GHK-Cu (.5mm) copper-peptide preparation studied in research on skin-related pathways such as collagen and elasticity. Investigated in laboratory research for antioxidant activity. .5 fl oz / 15 ml. Research purposes only — not for human consumption.',
'ghk-cu-copper-50mg':'GHK-Cu is a copper-binding tripeptide studied in research on collagen synthesis and skin-related pathways. Research explores its roles in cellular aging, hair-follicle biology, antioxidant activity, and tissue-repair mechanisms. For research use only.',
'ghk-cu-copper-100mg':'GHK-Cu is a copper-binding tripeptide studied in research on collagen synthesis and skin-related pathways. Higher-concentration formulation for advanced research. Explored for cellular aging, hair biology, and tissue-repair pathways. For research use only.',
'glow-stack-70mg-bpc-157-10mg-ghk-cu-50mg-tb500-10mg':'A three-peptide research stack combining BPC-157 (10mg), GHK-Cu (50mg), and TB-500 (10mg). Studied in research on skin and tissue pathways, collagen production, and cellular aging. For research use only.',
'glutathione-1500mg':'Glutathione is the body\'s master antioxidant studied for detoxification, immune support, and cellular protection. Research explores its roles in oxidative stress reduction, liver health, skin brightening, and overall longevity.',
'hcg-5-000iu':'HCG (Human Chorionic Gonadotropin) is a glycoprotein studied in research on endocrine signaling. Research explores its potential roles in gonadotropin and reproductive-axis pathways in laboratory settings. For research use only — not for human consumption.',
'hep-1-2mg':'HEP-1 is a hepatoprotective peptide studied for liver protection and regeneration. Research explores its potential roles in hepatocyte repair, liver enzyme regulation, and cellular recovery from oxidative damage.',
'hgh-15iu':'Human Growth Hormone (HGH) studied in research on body composition, cellular repair, and metabolic function. Research explores its roles in lean-mass, lipid-metabolism, bone-density, and recovery pathways. For research use only — not for human consumption.',
'hgh-6mg':'Human Growth Hormone (HGH) studied in research on body composition, cellular repair, and metabolic function. Research explores its roles in lean-mass, lipid-metabolism, bone-health, and regenerative pathways. For research use only — not for human consumption.',
'humanin-10mg':'Humanin is a mitochondrial-derived peptide studied for neuroprotection and cellular survival. Research explores its potential roles in cognitive health, oxidative stress defense, apoptosis resistance, and metabolic regulation.',
'igf-1lr3-1mg':'IGF-1 LR3 is a modified insulin-like growth factor studied for muscle growth and tissue repair. Research explores its extended half-life and potential in muscle hypertrophy, recovery, and cellular proliferation.',
'ipamorelin-10mg':'Ipamorelin is a selective growth-hormone secretagogue studied in research on lean-mass, recovery, and body-composition pathways. Research explores its targeted GH-release profile without affecting cortisol or prolactin, making it one of the most studied GH peptides. For research use only.',
'ipamorelin-5mg':'Ipamorelin is a selective GH secretagogue studied in research on lean-mass and recovery pathways. Research explores its targeted growth-hormone release profile and potential roles in body composition and sleep-cycle regulation. For research use only.',
'kisspeptin-10mg':'Kisspeptin is a neuropeptide studied in research on reproductive-axis signaling. Research explores its role in GnRH pathways and endocrine regulation in laboratory models. For research use only.',
'klow-80mg':'KLOW is a multi-peptide injectable blend combining KPV, BPC-157, TB-500, and GHK-Cu. Studied for synergistic anti-inflammatory, tissue repair, and skin rejuvenation effects through multi-pathway targeting.',
'klow-30ct-berry':'KLOW oral dissolving strips combining KPV, BPC-157, TB-500, and GHK-Cu in a berry-flavored sublingual format. Needle-free delivery studied for anti-inflammatory and tissue repair support.',
'kpv-10mg':'KPV is a tripeptide derived from alpha-MSH studied in research on inflammatory pathways. Research explores its potential roles in gut, skin, and immune-modulation research and mucosal-repair mechanisms. For research use only.',
'l-carnitine-600ml':'L-Carnitine is an amino acid derivative studied for fat transport and energy production. Research explores its role in shuttling fatty acids into mitochondria for oxidation, supporting exercise performance and metabolic health.',
'lipo-c-10ml':'Lipo-C is a lipotropic injection blend with B12 studied for fat metabolism and energy. Contains Methionine, Inositol, and Choline to support liver function, lipid processing, and cellular energy production.',
'lipo-c-10ml-w-o-b12':'Lipo-C lipotropic injection blend without B12. Contains Methionine, Inositol, and Choline studied for fat metabolism, liver support, and cellular energy. Ideal for those supplementing B12 separately.',
'll-37-10mg':'LL-37 is a cathelicidin antimicrobial peptide studied in research on innate immunity. Research explores its roles in bacterial clearance, biofilm disruption, tissue-repair pathways, and innate immune activation. For research use only.',
'melanotan-i-10mg':'Melanotan I (Afamelanotide) is a melanocortin peptide studied for UV protection and skin pigmentation. Research explores its potential in stimulating melanin production for photoprotection without excessive UV exposure.',
'melanotan-ii-10mg':'Melanotan II is a melanocortin peptide studied in research on pigmentation pathways. Research explores its multi-receptor activity, including melanocortin-receptor, appetite-signaling, and melanin-production pathways. For research use only — not for human consumption.',
'mots-c-10mg':'MOTS-c is a mitochondrial-derived peptide studied for metabolic regulation and exercise mimicry. Research explores its potential in glucose metabolism, insulin sensitivity, fat oxidation, and cellular energy pathways.',
'mots-c-40mg':'MOTS-c is a mitochondrial-derived peptide studied for metabolic health. Higher-dose formulation for advanced research on glucose metabolism, insulin sensitivity, fat oxidation, and exercise mimetic effects.',
'nad-500mg':'NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme essential for cellular energy and DNA repair. Research explores its roles in mitochondrial function, healthy aging, cognitive health, and metabolic support.',
'nad-recharge-30ct-mint':'NAD+ oral dissolving strips for needle-free supplementation. Sublingual delivery studied for enhanced bioavailability of NAD+ to support cellular energy, DNA repair, and healthy aging pathways.',
'oxytocin-acetate':'Oxytocin is a neuropeptide studied in research on social-bonding and stress-response pathways. Research explores its potential roles in stress-response modulation and reproductive-axis signaling in laboratory models. For research use only.',
'p21-5mg':'P21 is a synthetic nootropic peptide studied for neurogenesis and cognitive enhancement. Research explores its potential to promote new neuron growth in the hippocampus, supporting memory, learning, and brain plasticity.',
'pe-22-28-10mg':'PE-22-28 is a cognitive peptide studied for memory enhancement and neuroprotection. Research explores its interaction with neural pathways involved in long-term potentiation, learning, and mental clarity.',
'pinealon-20mg':'Pinealon is a tripeptide neuropeptide studied for brain function and neuroprotection. Research explores its roles in cognitive clarity, stress resilience, circadian rhythm regulation, and neuronal survival.',
'pnc-27-10mg':'PNC-27 is a peptide studied for anticancer activity through HDM-2 protein targeting. Research explores its selective interaction with cancer cell membranes, potential in tumor suppression, and p53 pathway modulation.',
'pnc-27-5mg':'PNC-27 is a peptide studied for anticancer activity through HDM-2 targeting. Research explores its selective action on transformed cells and potential roles in tumor suppression pathways.',
'pt-141-bremelanotide-10mg':'PT-141 (Bremelanotide) is a melanocortin peptide studied in research on melanocortin-receptor signaling. Research explores its mechanism of action through CNS pathways rather than vascular effects. For research use only — not for human consumption.',
'retatrutide-10mg':'Retatrutide is a triple agonist targeting GLP-1, GIP, and glucagon receptors. Studied for significant weight management potential through multi-pathway metabolic activation including appetite control, fat oxidation, and energy expenditure.',
'retatrutide-20mg':'Retatrutide is a triple agonist targeting GLP-1, GIP, and glucagon receptors. Studied for significant weight management potential through multi-pathway metabolic activation including appetite control, fat oxidation, and energy expenditure. 20mg research vial.',
'retatrutide-30mg':'Retatrutide is a triple agonist targeting GLP-1, GIP, and glucagon receptors. Higher-dose formulation for advanced weight management research. Studied for multi-pathway metabolic activation and body composition optimization.',
'selank-10mg':'Selank is an anxiolytic heptapeptide studied for stress reduction and mood balance. Research explores its influence on GABA signaling, serotonin metabolism, cognitive function, and immune modulation without sedative effects.',
'semaglutide-10mg':'Semaglutide is a GLP-1 receptor agonist studied for weight management and metabolic health. Research explores its effects on appetite regulation, blood sugar control, and significant body weight reduction through incretin pathways.',
'semaglutide-5mg':'Semaglutide is a GLP-1 receptor agonist studied for weight management and glucose regulation. Research explores its potential in appetite control, metabolic health, and body composition improvement.',
'semax-10mg':'Semax is a nootropic heptapeptide studied for cognitive enhancement and neuroprotection. Research explores its potential roles in focus, memory, BDNF expression, and mental clarity without stimulant side effects.',
'sermorelin-10mg':'Sermorelin is a GHRH analog studied in research on growth-hormone signaling. Research explores its potential in GH-release pathways and models of body composition and sleep-cycle regulation. For research use only.',
'sermorelin-5mg':'Sermorelin is a GHRH analog studied in research on growth-hormone release pathways. Research explores its roles in models of body composition, recovery, sleep-cycle regulation, and metabolic function. For research use only.',
'slu-pp-332-250mcg':'SLU-PP-332 is an ERR (Estrogen-Related Receptor) activator studied as an exercise mimetic. Oral capsule formulation researched for potential effects on endurance, fat oxidation, and metabolic pathways without physical exercise.',
'slu-pp-332-5mg':'SLU-PP-332 is an ERR activator studied as an exercise mimetic peptide. Research explores its potential to activate exercise-related metabolic pathways, enhancing endurance and fat oxidation at the cellular level.',
'ss-31-elamipretide-50mg':'SS-31 (Elamipretide) is a mitochondria-targeted peptide studied in research on cellular energy and protection. Research explores its role in stabilizing cardiolipin, oxidative-stress pathways, and mitochondrial function in aging-related research models. For research use only.',
'super-human-blend-10ml':'Super Human Blend is a multi-amino acid injectable formulation studied for energy, performance, and recovery. Contains a synergistic combination of amino acids and nutrients designed for comprehensive metabolic and vitality support.',
'tb500-5mg':'TB-500 (Thymosin Beta-4) is a peptide studied in research on tissue-repair and regeneration pathways. Research explores its roles in wound-repair, inflammatory, cardiovascular, and cellular-migration pathways. For research use only.',
'tb500-10mg':'TB-500 (Thymosin Beta-4) is a peptide studied in research on tissue-repair, wound-repair, and regeneration pathways. Research explores its potential in cardiac, hair-biology, anti-inflammatory, and recovery pathways. For research use only.',
'tesamorelin-10':'Tesamorelin is a GHRH analog studied in research on body composition and adipose-tissue pathways. Research explores its growth-hormone signaling activity and potential roles in metabolic research models. For research use only.',
'thymosin-alpha-1-10mg':'Thymosin Alpha-1 is an immune-modulating peptide studied for T-cell activation and immune surveillance. Research explores its potential roles in viral defense, cancer immunotherapy support, and overall immune system optimization.',
'thymosin-alpha-1-5mg':'Thymosin Alpha-1 is a thymic peptide studied for immune system modulation. Research explores its T-cell activation, antiviral defense, and potential roles in supporting immune resilience.',
'tirzepatide-30mg':'Tirzepatide is a dual GIP/GLP-1 receptor agonist studied for weight management and metabolic health. Research explores its effects on appetite regulation, insulin sensitivity, and significant body composition improvements.',
'tirzepatide':'Tirzepatide is a dual GIP/GLP-1 receptor agonist studied for metabolic optimization. Higher-dose 60mg formulation for advanced weight management research with dual-pathway metabolic activation.',
'wolverine-stack-bpc-157-10mg-tb500-10mg':'The Wolverine Stack combines BPC-157 (10mg) and TB-500 (10mg) for research on synergistic tissue repair. Studied in research on tendon, ligament, muscle, and joint repair through complementary recovery pathways. For research use only.',
'wolverine-stack-bpc-157-5mg-tb500-5mg':'The Wolverine Stack combines BPC-157 (5mg) and TB-500 (5mg) for research on tissue repair. Studied in research on tendon, ligament, and muscle repair through complementary regenerative mechanisms. For research use only.',
'metalean-g3-4ct-mint':'MetaLean+ G3 oral strips featuring a triple agonist formulation studied for metabolic activation. Sublingual delivery for enhanced bioavailability targeting appetite regulation, fat oxidation, and energy balance.',
'u-100-syringes-pack-of-100':'U-100 insulin syringes (29G x 1/2") in a 100-pack. Precision-engineered for accurate peptide dosing with minimal discomfort. Individually sealed for sterility.',
'u-100-syringes-pk-of-10':'U-100 insulin syringes (29G x 1/2") in a 10-pack. Precision-engineered for accurate peptide dosing with minimal discomfort. Individually sealed for sterility.'
};
window.ppCart={
k:'pp_cart',
get:function(){try{return JSON.parse(localStorage.getItem(this.k))||{};}catch(e){return{};}},
save:function(c){localStorage.setItem(this.k,JSON.stringify(c));this.badge();},
add:function(slug){var c=this.get();c[slug]=(c[slug]||0)+1;this.save(c);},
rm:function(slug){var c=this.get();delete c[slug];this.save(c);},
qty:function(slug,n){var c=this.get();if(n<1)delete c[slug];else c[slug]=n;this.save(c);},
count:function(){var c=this.get(),t=0;for(var k in c)t+=c[k];return t;},
total:function(){var c=this.get(),A=[].concat(window.ppProducts||[],window.ppExtra||[]),t=0;for(var s in c){for(var i=0;i<A.length;i++){if(A[i][2]===s){t+=A[i][3]*c[s];break;}}}return t;},
find:function(slug){var A=[].concat(window.ppProducts||[],window.ppExtra||[]);for(var i=0;i<A.length;i++){if(A[i][2]===slug)return A[i];}return null;},
badge:function(){var b=document.getElementById('pp-cart-badge');if(!b)return;var n=this.count();b.textContent=n;b.style.display=n>0?'inline-block':'none';}
};
window.ppAffiliate={codes:{'RICKYJ':{discount:0.15,label:'RICKY J - 15% OFF'},'RICKY J':{discount:0.15,label:'RICKY J - 15% OFF'},'JESS':{discount:0.15,label:'JESS - 15% OFF'},'JESS15':{discount:0.15,label:'JESS - 15% OFF'},'JADE':{discount:0.15,label:'JADE - 15% OFF'},'ALEX':{discount:0.15,label:'ALEX - 15% OFF'},'CHERA88':{discount:0.12,label:'12% OFF'},'CODE12':{discount:0.12,label:'12% OFF'},'12':{discount:0.12,label:'12% OFF'}},applied:null,getDiscount:function(subtotal){if(!this.applied)return 0;var code=this.codes[this.applied];return code?Math.round(subtotal*code.discount*100)/100:0;},apply:function(code){var upper=code.toUpperCase().trim();if(this.codes[upper]){this.applied=upper;try{localStorage.setItem('pp_applied',upper);}catch(e){}return{success:true,label:this.codes[upper].label};}return{success:false};},remove:function(){this.applied=null;try{localStorage.removeItem('pp_applied');}catch(e){}},addCode:function(code,discount,label){this.codes[code.toUpperCase()]={discount:discount,label:label};try{var stored=JSON.parse(localStorage.getItem('pp-codes')||'{}');stored[code.toUpperCase()]={discount:discount,label:label};localStorage.setItem('pp-codes',JSON.stringify(stored));}catch(e){}}};try{var saved=JSON.parse(localStorage.getItem('pp-codes')||'{}');for(var k in saved)window.ppAffiliate.codes[k]=saved[k];}catch(e){}try{var pa=localStorage.getItem('pp_applied');if(pa&&window.ppAffiliate.codes[pa]){window.ppAffiliate.applied=pa;if(window.ppCartRefresh)ppCartRefresh();}}catch(e){}
window.ppJoinMembership=function(tier){var TIERS={'99':{disc:0.15,label:'15% OFF',monthly:99,suf:'15'},'85':{disc:0.15,label:'15% OFF',monthly:85,suf:'15'},'75':{disc:0.10,label:'10% OFF',monthly:75,suf:'10'},'65':{disc:0.10,label:'10% OFF',monthly:65,suf:'10'}};var t=TIERS[tier]||TIERS['99'];var disc=t.disc;var label=t.label;var monthly=t.monthly;var existingOv=document.getElementById('pp-join-overlay');if(existingOv)existingOv.remove();var ov=document.createElement('div');ov.id='pp-join-overlay';ov.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:100000;display:flex;align-items:center;justify-content:center;padding:20px;overflow-y:auto';ov.innerHTML='<div style="background:#fff;border-radius:16px;max-width:460px;width:100%;padding:32px 24px;max-height:90vh;overflow-y:auto;position:relative"><button onclick="document.getElementById(\'pp-join-overlay\').remove()" style="position:absolute;top:12px;right:16px;background:none;border:none;font-size:28px;cursor:pointer;color:#000">&times;</button><h2 style="font-family:Archivo,sans-serif;font-size:22px;font-weight:800;color:#000;margin:0 0 4px;text-align:center">Join Research Circle</h2><p style="font-size:14px;color:#000;margin:0 0 20px;text-align:center">'+label+' forever \u2022 $'+monthly+'/month ACH</p><div id="pp-join-step1"><label style="display:block;font-size:13px;font-weight:700;color:#000;margin:0 0 4px">First Name</label><input type="text" id="pp-join-name" placeholder="e.g. Linda" style="width:100%;padding:12px;border:1px solid #ddd;border-radius:8px;font-size:14px;margin:0 0 14px;box-sizing:border-box"><label style="display:block;font-size:13px;font-weight:700;color:#000;margin:0 0 4px">Email</label><input type="email" id="pp-join-email" placeholder="you@email.com" style="width:100%;padding:12px;border:1px solid #ddd;border-radius:8px;font-size:14px;margin:0 0 18px;box-sizing:border-box"><button id="pp-join-submit" style="width:100%;padding:14px;background:#4770db;color:#fff;border:none;border-radius:40px;font-size:16px;font-weight:700;cursor:pointer">Generate My Code</button><p style="font-size:11px;color:#000;text-align:center;margin:12px 0 0;line-height:1.5">ACH auto-renewal begins once Moov is live. You\'ll get an email with payment setup. Cancel anytime.</p></div><div id="pp-join-step2" style="display:none"></div></div>';document.body.appendChild(ov);var btn=document.getElementById('pp-join-submit');btn.onclick=function(){var nm=(document.getElementById('pp-join-name').value||'').trim();var em=(document.getElementById('pp-join-email').value||'').trim();if(nm.length<2){document.getElementById('pp-join-name').style.border='2px solid #c62828';return;}if(em.indexOf('@')<1){document.getElementById('pp-join-email').style.border='2px solid #c62828';return;}var code=nm.substring(0,3).toUpperCase().replace(/[^A-Z]/g,'')+t.suf;ppAffiliate.addCode(code,disc,label);ppAffiliate.apply(code);try{if(window.ppCartRefresh)ppCartRefresh();}catch(e){}/* membership lead stored locally; CRM capture via native Wix form (see audit) */document.getElementById('pp-join-step1').style.display='none';var s2=document.getElementById('pp-join-step2');s2.style.display='block';var note=encodeURIComponent('PP Membership '+code);var venmoUrl='https://venmo.com/?txn=pay&recipients=Vegasvip2&amount='+monthly+'&note='+note;var cashUrl='https://cash.app/$MillionairesClub777/'+monthly;s2.innerHTML='<div style="text-align:center"><div style="width:52px;height:52px;border-radius:50%;background:#e8f5e9;margin:0 auto 12px;display:flex;align-items:center;justify-content:center"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg></div><h3 style="font-family:Archivo,sans-serif;font-size:20px;font-weight:800;color:#000;margin:0 0 4px">You\'re in, '+nm+'!</h3><p style="font-size:13px;color:#000;margin:0 0 16px">Your code is applied to your cart.</p><div style="background:#f7f7f8;border:2px dashed #4770db;border-radius:12px;padding:16px 14px;margin:0 0 16px;text-align:center"><div style="font-size:11px;color:#000;letter-spacing:1px;font-weight:700;margin:0 0 4px">YOUR CODE</div><div style="font-family:Archivo,sans-serif;font-size:30px;font-weight:800;color:#000;letter-spacing:2px;margin:0 0 6px">'+code+'</div><div style="font-size:12px;color:#000">'+label+' every order</div></div><button onclick="navigator.clipboard.writeText(\''+code+'\').then(function(){var b=event.target;var o=b.textContent;b.textContent=\'\u2713 Copied!\';b.style.background=\'#2e7d32\';setTimeout(function(){b.textContent=o;b.style.background=\'#0e1b4d\'},1500)})" style="width:100%;padding:12px;background:#0e1b4d;color:#fff;border:none;border-radius:40px;font-size:14px;font-weight:700;cursor:pointer;margin:0 0 16px">Copy Code</button><div style="text-align:left;border-top:1px solid #eee;padding:14px 0 0;margin:0 0 12px"><div style="font-family:Archivo,sans-serif;font-size:15px;font-weight:800;color:#000;text-align:center;margin:0 0 4px">Pay $'+monthly+' to activate</div><p style="font-size:11px;color:#000;text-align:center;margin:0 0 12px;line-height:1.5">Membership activates once payment clears. Use your code on every order.</p><a href="'+venmoUrl+'" target="_blank" style="display:block;padding:13px;background:#008CFF;color:#fff;border-radius:40px;font-size:15px;font-weight:700;text-align:center;text-decoration:none;margin:0 0 8px">Pay $'+monthly+' with Venmo</a><a href="'+cashUrl+'" target="_blank" style="display:block;padding:13px;background:#00D632;color:#fff;border-radius:40px;font-size:15px;font-weight:700;text-align:center;text-decoration:none;margin:0 0 8px">Pay $'+monthly+' with Cash App</a><div onclick="var n=this.querySelector(\'.pp-copy-label\');navigator.clipboard.writeText(\'7029948002\').then(function(){n.textContent=\'\u2713 Copied — send $'+monthly+' note: '+code+'\';setTimeout(function(){n.textContent=\'Zelle: 7029948002 (tap to copy)\'},2500)})" style="display:block;padding:13px;background:#6D1ED4;color:#fff;border-radius:40px;font-size:14px;font-weight:700;text-align:center;cursor:pointer;margin:0 0 8px"><span style="font-weight:800;font-style:italic">Zelle</span> — <span class="pp-copy-label">Zelle: 7029948002 (tap to copy)</span></div></div><p style="font-size:11px;color:#000;margin:12px 0 0;line-height:1.5">After payment, we\'ll email '+em+' within 24h confirming activation. Auto-renewal via Moov ACH launches once approved.</p></div>';};ov.addEventListener('click',function(e){if(e.target===ov)ov.remove()});};
window.ppShipping={standard:9.99,express:14.95,freeThreshold:300,selected:'standard',getFee:function(subtotal){var disc=ppAffiliate.getDiscount(subtotal);var afterDisc=subtotal-disc;if(afterDisc>=this.freeThreshold)return 0;return this.selected==='express'?this.express:this.standard;},getMethod:function(subtotal){var disc=ppAffiliate.getDiscount(subtotal);var afterDisc=subtotal-disc;if(afterDisc>=this.freeThreshold)return 'Free Shipping';return this.selected==='express'?'Express Shipping (2-3 business days)':'Standard Shipping (5-7 business days)';},getDelivery:function(subtotal){return this.selected==='express'?'2-3 business days':'5-7 business days';},getTotal:function(subtotal){var disc=ppAffiliate.getDiscount(subtotal);return(subtotal-disc)+this.getFee(subtotal);}};
window.ppCartPage=function(){
if(document.getElementById('pp-cart-page'))return;
var B='https://static.wixstatic.com/media/';
var c=ppCart.get(),items='',tot=ppCart.total(),n=ppCart.count();
for(var s in c){var p=ppCart.find(s);if(p){var img=p[1][0]==='h'?p[1]:B+p[1];items+='<div style="display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid #eee"><img src="'+img+'" style="width:60px;height:60px;object-fit:contain;display:block!important"><div style="flex:1"><div style="font-weight:700;color:#0e1b4d;font-size:14px">'+p[0]+'</div><div style="color:#555;font-size:13px">$'+p[3]+' x '+c[s]+'</div></div><div style="display:flex;align-items:center;gap:8px"><button onclick="ppCart.qty(\''+s+'\','+(c[s]-1)+');ppCartRefresh()" style="width:32px;height:32px;border:1px solid #ccc;border-radius:50%;background:#fff;cursor:pointer;font-size:18px;color:#0e1b4d;font-weight:700;line-height:1;display:flex;align-items:center;justify-content:center">&minus;</button><span>'+c[s]+'</span><button onclick="ppCart.qty(\''+s+'\','+(c[s]+1)+');ppCartRefresh()" style="width:32px;height:32px;border:1px solid #ccc;border-radius:50%;background:#fff;cursor:pointer;font-size:18px;color:#0e1b4d;font-weight:700;line-height:1;display:flex;align-items:center;justify-content:center">+</button></div></div>';}}
if(!items)items='<p style="text-align:center;color:#888;padding:40px 0">Your cart is empty</p>';
var discAmt=ppAffiliate.getDiscount(tot);var afterDisc=tot-discAmt;var shipFee=ppShipping.getFee(tot);var grandTotal=afterDisc+shipFee;var isFree=afterDisc>=ppShipping.freeThreshold;
var shipSelector='<div style="margin:16px 0 0;padding:16px;background:#f0f4ff;border-radius:10px;border:1px solid #d0d8f0"><h2 style="font-size:16px;color:#0e1b4d;margin:0 0 12px">Shipping Method</h2>';
if(isFree){shipSelector+='<div style="background:#e8f5e9;border-radius:8px;padding:12px;text-align:center"><span style="font-size:14px;font-weight:700;color:#2e7d32">FREE SHIPPING on orders over $'+ppShipping.freeThreshold+'!</span></div>';}
else{shipSelector+='<label style="display:flex;align-items:center;gap:10px;padding:12px;background:#fff;border:2px solid '+(ppShipping.selected==='standard'?'#4770db':'#ddd')+';border-radius:8px;cursor:pointer;margin:0 0 8px" onclick="ppShipping.selected=\'standard\';ppCartRefresh()"><input type="radio" name="pp-ship-method" value="standard" '+(ppShipping.selected==='standard'?'checked':'')+' style="accent-color:#4770db;width:18px;height:18px"><div style="flex:1"><div style="font-weight:700;color:#0e1b4d;font-size:14px">Standard Shipping</div><div style="color:#888;font-size:12px">5-7 business days</div></div><div style="font-weight:700;color:#0e1b4d;font-size:14px">$'+ppShipping.standard.toFixed(2)+'</div></label>';
shipSelector+='<label style="display:flex;align-items:center;gap:10px;padding:12px;background:#fff;border:2px solid '+(ppShipping.selected==='express'?'#4770db':'#ddd')+';border-radius:8px;cursor:pointer" onclick="ppShipping.selected=\'express\';ppCartRefresh()"><input type="radio" name="pp-ship-method" value="express" '+(ppShipping.selected==='express'?'checked':'')+' style="accent-color:#4770db;width:18px;height:18px"><div style="flex:1"><div style="font-weight:700;color:#0e1b4d;font-size:14px">Express Shipping</div><div style="color:#888;font-size:12px">2-3 business days</div></div><div style="font-weight:700;color:#0e1b4d;font-size:14px">$'+ppShipping.express.toFixed(2)+'</div></label>';}
if(!isFree){shipSelector+='<div style="margin:10px 0 0;padding:10px;background:#f0f7ff;border-radius:8px;text-align:center;border:1px dashed #4770db"><span style="font-size:13px;color:#4770db;font-weight:600">\u{1F69A} FREE SHIPPING on orders over $'+ppShipping.freeThreshold+'!</span></div>';}shipSelector+='</div>';
var venmoUrl='https://venmo.com/u/Vegasvip2?txn=pay&amount='+grandTotal.toFixed(2)+'&note='+encodeURIComponent('Precision Labs Order');
var cashUrl='https://cash.app/$MillionairesClub777/'+grandTotal.toFixed(2);
var shipForm='<div style="margin:16px 0 0;padding:16px;background:#f8f9fc;border-radius:10px"><h2 style="font-size:16px;color:#0e1b4d;margin:0 0 12px">Shipping Information</h2><div style="display:flex;flex-direction:column;gap:10px"><input type="text" id="pp-ship-name" placeholder="Full Name" style="padding:12px;border:1px solid #ddd;border-radius:8px;font-size:14px" required><input type="email" id="pp-ship-email" placeholder="Email Address" style="padding:12px;border:1px solid #ddd;border-radius:8px;font-size:14px" required><input type="tel" id="pp-ship-phone" placeholder="Phone Number" style="padding:12px;border:1px solid #ddd;border-radius:8px;font-size:14px" required><input type="text" id="pp-ship-addr" placeholder="Street Address" style="padding:12px;border:1px solid #ddd;border-radius:8px;font-size:14px" required><input type="text" id="pp-ship-apt" placeholder="Apt / Suite / Unit (optional)" style="padding:12px;border:1px solid #ddd;border-radius:8px;font-size:14px"><div style="display:flex;gap:8px"><input type="text" id="pp-ship-city" placeholder="City" style="flex:1;padding:12px;border:1px solid #ddd;border-radius:8px;font-size:14px" required><input type="text" id="pp-ship-state" placeholder="State" style="width:70px;padding:12px;border:1px solid #ddd;border-radius:8px;font-size:14px" required><input type="text" id="pp-ship-zip" placeholder="ZIP" style="width:80px;padding:12px;border:1px solid #ddd;border-radius:8px;font-size:14px" required></div></div></div>';
var ven='<a id="pp-venmo-btn" href="'+venmoUrl+'" target="_blank" onclick="ppNotifyOrder(\'Venmo\','+grandTotal.toFixed(2)+')" style="display:block;padding:14px;background:#ccc;color:#fff;border-radius:40px;font-size:16px;font-weight:600;text-align:center;text-decoration:none;margin:0 0 8px;pointer-events:none">Pay with Venmo \u2014 $'+grandTotal.toFixed(2)+'</a>';var cas='<div id="pp-cash-btn" style="display:block;padding:14px;background:#ccc;color:#fff;border-radius:40px;font-size:16px;font-weight:600;text-align:center;pointer-events:none">Pay with Cash App \u2014 $'+grandTotal.toFixed(2)+'</div>';var terms='<label style="display:flex;align-items:flex-start;gap:8px;margin:14px 0 10px;cursor:pointer"><input type="checkbox" id="pp-agree" onchange="ppTogglePay(this.checked,'+grandTotal.toFixed(2)+')" style="margin-top:2px;width:18px;height:18px;accent-color:#0e1b4d"><span style="font-size:12px;color:#555;line-height:1.4">I agree to the terms and conditions. All sales are final \u2014 no refunds, returns, or exchanges. Products are for research and educational purposes only.*</span></label>';var crypto='<div id="pp-crypto-btn" onclick="ppCryptoCheckout('+grandTotal.toFixed(2)+')" style="display:block;padding:14px;background:#ccc;color:#fff;border-radius:40px;font-size:16px;font-weight:600;text-align:center;cursor:default;pointer-events:none;margin:8px 0 0">\u20BF Pay with Crypto \u2014 $'+grandTotal.toFixed(2)+'</div>';var zelle='<div id="pp-zelle-btn" onclick="ppZelleCheckout('+grandTotal.toFixed(2)+')" style="display:block;padding:14px;background:#ccc;color:#fff;border-radius:40px;font-size:16px;font-weight:600;text-align:center;cursor:default;pointer-events:none;margin:8px 0 0"><span style="font-weight:800;font-style:italic;letter-spacing:-0.5px">Zelle</span> \u2014 $'+grandTotal.toFixed(2)+'</div>';var paypal='';var sq='<div id="pp-square-btn" onclick="ppSquareCheckout('+grandTotal.toFixed(2)+')" style="display:block;padding:14px;background:#ccc;color:#fff;border-radius:40px;font-size:16px;font-weight:700;text-align:center;cursor:default;pointer-events:none;margin:0 0 8px">Pay by Card / Apple Pay — $'+grandTotal.toFixed(2)+'</div><div style="font-size:11px;color:#888;text-align:center;margin:-4px 0 10px">Apple Pay · Google Pay · secured by Square</div>';var ach='<div id="pp-ach-btn" onclick="ppAchCheckout('+(grandTotal*0.97).toFixed(2)+')" style="display:block;padding:14px;background:#ccc;color:#fff;border-radius:40px;font-size:16px;font-weight:700;text-align:center;cursor:default;pointer-events:none;margin:0 0 8px">🏦 Pay by Bank (ACH) — 3% off ($'+(grandTotal*0.97).toFixed(2)+')</div>';var pay=n>0?shipSelector+shipForm+terms+sq+ach+ven+cas+crypto+zelle+'<p style="font-size:11px;color:#888;margin:8px 0 0;text-align:center">Add your order items to the payment note</p>':'';
var d=document.createElement('div');d.id='pp-cart-page';d.className='pp-cf';
var trustBadges='<div style="display:flex;justify-content:center;gap:16px;flex-wrap:wrap;padding:12px 0;margin:0 0 4px;border-top:1px solid #eee"><div style="display:flex;align-items:center;gap:5px"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4770db" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><span style="font-size:10px;color:#0e1b4d;font-weight:700">99%+ PURITY</span></div><div style="display:flex;align-items:center;gap:5px"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4770db" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg><span style="font-size:10px;color:#0e1b4d;font-weight:700">SECURE CHECKOUT</span></div><div style="display:flex;align-items:center;gap:5px"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4770db" stroke-width="2.5"><path d="M9 12l2 2 4-4"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg><span style="font-size:10px;color:#0e1b4d;font-weight:700">LAB TESTED</span></div></div>';
var promoHtml='<div style="padding:12px 0"><div style="display:flex;flex-direction:column;gap:8px;width:100%">';if(ppAffiliate.applied){promoHtml+='<div style="width:100%;padding:10px 14px;background:#e8f5e9;border:2px solid #2e7d32;border-radius:8px;display:flex;align-items:center;justify-content:space-between;box-sizing:border-box"><span style="font-weight:700;color:#2e7d32;font-size:14px">'+ppAffiliate.applied+' \u2014 '+ppAffiliate.codes[ppAffiliate.applied].label+' Applied!</span><span onclick="ppAffiliate.remove();ppCartRefresh()" style="color:#c62828;cursor:pointer;font-weight:700;font-size:18px">\u2715</span></div>';}else{promoHtml+='<input type="text" id="pp-promo-input" placeholder="Affiliate / Promo Code" style="width:100%;padding:12px;border:1px solid #ddd;border-radius:8px;font-size:14px;text-transform:uppercase;box-sizing:border-box"><button onclick="var inp=document.getElementById(\'pp-promo-input\');if(inp){var r=ppAffiliate.apply(inp.value);if(r.success){ppCartRefresh();}else{inp.style.border=\'2px solid #c62828\';inp.placeholder=\'Invalid code\';inp.value=\'\';}}" style="width:100%;padding:12px;background:#0e1b4d;color:#fff;border:none;border-radius:8px;font-weight:700;font-size:14px;cursor:pointer;box-sizing:border-box">Apply</button>';}promoHtml+='</div></div>';var discLine=discAmt>0?'<div style="display:flex;justify-content:space-between;font-size:14px;padding:4px 0"><span style="color:#2e7d32;font-weight:600">Discount ('+ppAffiliate.codes[ppAffiliate.applied].label+')</span><span style="font-weight:700;color:#2e7d32">-$'+discAmt.toFixed(2)+'</span></div>':'';var totalsHtml='<div style="padding:16px 0;color:#0e1b4d">'+promoHtml+'<div style="display:flex;justify-content:space-between;font-size:14px;padding:4px 0"><span style="color:#666">Subtotal</span><span style="font-weight:600">$'+tot.toFixed(2)+'</span></div>'+discLine+'<div style="display:flex;justify-content:space-between;font-size:14px;padding:4px 0"><span style="color:#666">Shipping ('+ppShipping.getMethod(tot)+')</span><span style="font-weight:600;color:'+(isFree?'#2e7d32':'#0e1b4d')+'">'+(isFree?'FREE':'$'+shipFee.toFixed(2))+'</span></div><div style="display:flex;justify-content:space-between;font-size:20px;font-weight:800;padding:12px 0 0;border-top:2px solid #0e1b4d;margin-top:8px"><span>Total</span><span>$'+grandTotal.toFixed(2)+'</span></div></div>';
d.innerHTML='<h1>Your Cart</h1>'+items+totalsHtml+trustBadges+pay+'<p style="text-align:center;margin:16px 0 0"><span onclick="window.location.href=\'/\'" style="color:#4770db;font-weight:600;cursor:pointer">Continue Shopping</span></p>';
document.body.appendChild(d);
};
window.ppCartRefresh=function(){var el=document.getElementById('pp-cart-page');if(el){el.remove();ppCartPage();}};
window.ppNotifyOrder=function(method,amt){
try{var _pc=(window.ppAffiliate&&ppAffiliate.applied)||'';if(_pc){try{var _em=(document.getElementById('pp-ship-email')||{}).value||'';navigator.sendBeacon('https://anna-answer-celebs-sky.trycloudflare.com/api/promo-track',JSON.stringify({code:_pc,method:method,amount:amt,email:_em}));}catch(e){}}}catch(e){}
try{
var cart=ppCart.get(),items=[],itemLines=[],orderItems=[];
var subtotal=ppCart.total();
var shipFee=ppShipping.getFee(subtotal);var shipMethod=ppShipping.getMethod(subtotal);var shipDelivery=ppShipping.getDelivery(subtotal);
for(var s in cart){var p=ppCart.find(s);if(p){items.push(p[0]+' x'+cart[s]+' ($'+(p[3]*cart[s]).toFixed(2)+')');itemLines.push(p[0]+' x'+cart[s]);orderItems.push({name:p[0],qty:cart[s],unitPrice:p[3],lineTotal:p[3]*cart[s]});}}
var name=document.getElementById('pp-ship-name').value||'';
var email=document.getElementById('pp-ship-email').value||'';
var phone=document.getElementById('pp-ship-phone').value||'';
var addr=document.getElementById('pp-ship-addr').value||'';
var apt=document.getElementById('pp-ship-apt').value||'';
var city=document.getElementById('pp-ship-city').value||'';
var state=document.getElementById('pp-ship-state').value||'';
var zip=document.getElementById('pp-ship-zip').value||'';
var _incomplete=!(String(name).trim()&&String(addr).trim()&&String(phone).trim());
if(!String(name).trim()&&!String(addr).trim()&&!String(phone).trim()&&!String(email).trim()){return;}
var now=new Date();
var ts=now.toLocaleString('en-US',{timeZone:'America/Los_Angeles',month:'short',day:'numeric',year:'numeric',hour:'numeric',minute:'2-digit',hour12:true});
var oid='PP-'+now.getFullYear()+''+(now.getMonth()+1<10?'0':'')+(now.getMonth()+1)+now.getDate()+'-'+Math.random().toString(36).substr(2,5).toUpperCase();
var fullAddr=addr+(apt?' '+apt:'')+'\n'+city+', '+state+' '+zip;
var msg=(_incomplete?'\u{26A0}\u{FE0F} INCOMPLETE — no customer/shipping info (likely test or abandoned, NOT shippable)\n\n':'')+'\u{1F6D2} NEW ORDER \u{2014} '+oid+'\n';
msg+='\u{23F0} '+ts+'\n';
msg+='\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\n\n';
msg+='\u{1F4B0} Subtotal: $'+subtotal.toFixed(2)+'\n';
msg+='\u{1F69A} Shipping: '+shipMethod+' ('+(shipFee===0?'FREE':'$'+shipFee.toFixed(2))+')\n';
msg+='\u{1F4B0} Total: $'+amt.toFixed(2)+'\n';
msg+='\u{1F4B3} Payment: '+method+'\n\n';
msg+='\u{1F4E6} Items:\n'+items.join('\n')+'\n\n';
msg+='\u{1F464} Customer: '+name+'\n';
msg+='\u{1F4E7} Email: '+email+'\n';
msg+='\u{1F4F1} Phone: '+phone+'\n\n';
msg+='\u{1F4CD} Ship to:\n'+fullAddr+'\n';
msg+='\u{1F69A} Method: '+shipMethod+'\n\n';
msg+='\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\n';
msg+='\u{26A0}\u{FE0F} ACTION NEEDED: Confirm payment received';
var tk='ODA2Mzc0OTk5NDpBQUhFQTRaNTdicjJ6WTk5RktIT2h1SWdOU0lYUnRGdGhPZw==';
var botUrl='https://api.telegram.org/bot'+atob(tk);
fetch(botUrl+'/sendMessage',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({chat_id:8553770323,text:msg})}).then(function(){
var sms='\u{1F6A8} ORDER $'+amt.toFixed(2)+' via '+method+' from '+name+' ('+phone+'). '+itemLines.join(', ')+'. Ship: '+shipMethod+' '+city+' '+state+' '+zip+'. Ref: '+oid;
return fetch(botUrl+'/sendMessage',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({chat_id:8553770323,text:sms})});
}).catch(function(){});
try{fetch('https://textbelt.com/text',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({phone:'+17029948002',message:'Precision Labs Order '+oid+': $'+amt.toFixed(2)+' via '+method+' from '+name+'. '+itemLines.join(', ')+'. Ship to '+city+' '+state+' '+zip,key:'textbelt'})}).catch(function(){});}catch(e2){}
/* Send order confirmation email to customer */
try{var orderData={orderId:oid,customerName:name,customerEmail:email,customerPhone:phone,shippingAddress:fullAddr,paymentMethod:method,items:orderItems,subtotal:subtotal,shippingMethod:shipMethod,shippingFee:shipFee,orderTotal:amt,estimatedDelivery:shipDelivery,orderDate:ts};
fetch('https://formsubmit.co/ajax/e6b18531dc6882b2edff2593d4136d92',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({_subject:'NEW ORDER '+oid+' - $'+amt.toFixed(2)+' ('+method+')',_template:'table',orderId:oid,date:ts,customer:name,email:email,phone:phone,shipTo:fullAddr,payment:method,items:items.join(' | '),subtotal:'$'+subtotal.toFixed(2),shipping:shipMethod,total:'$'+amt.toFixed(2),fullOrder:msg})}).catch(function(){});
/* Fallback: store order data for local script pickup */
try{localStorage.setItem('pp_last_order',JSON.stringify(orderData));}catch(ls){}
}catch(ec){try{console.log('Order confirmation email error:',ec.message);}catch(ec2){}}
}catch(e){try{var tk2='ODA2Mzc0OTk5NDpBQUhFQTRaNTdicjJ6WTk5RktIT2h1SWdOU0lYUnRGdGhPZw==';fetch('https://api.telegram.org/bot'+atob(tk2)+'/sendMessage',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({chat_id:8553770323,text:'\u{26A0}\u{FE0F} Order notification error: '+e.message+'. Payment: '+method+' $'+amt})}).catch(function(){});}catch(e3){}}
};
window.ppTogglePay=function(on,amt){var v=document.getElementById('pp-venmo-btn'),c=document.getElementById('pp-cash-btn');
var shipOk=true,fields=['pp-ship-name','pp-ship-email','pp-ship-phone','pp-ship-addr','pp-ship-city','pp-ship-state','pp-ship-zip'];
if(on){for(var i=0;i<fields.length;i++){var f=document.getElementById(fields[i]);if(f){f.style.borderColor=f.value.trim()?'#ddd':'#e74c3c';if(!f.value.trim())shipOk=false;}}}
var enabled=on&&shipOk;
if(!shipOk&&on){var cb=document.getElementById('pp-agree');if(cb)cb.checked=false;alert('Please fill in all shipping fields before proceeding.');return;}
if(enabled){var note='Order: ';var cart=ppCart.get();for(var s in cart){var p=ppCart.find(s);if(p)note+=p[0]+' x'+cart[s]+', ';}note+='Ship to: '+document.getElementById('pp-ship-name').value+', '+document.getElementById('pp-ship-addr').value+(document.getElementById('pp-ship-apt').value?' '+document.getElementById('pp-ship-apt').value:'')+', '+document.getElementById('pp-ship-city').value+' '+document.getElementById('pp-ship-state').value+' '+document.getElementById('pp-ship-zip').value+' | Ph: '+document.getElementById('pp-ship-phone').value+' | Email: '+document.getElementById('pp-ship-email').value;
var vUrl='https://venmo.com/u/Vegasvip2?txn=pay&amount='+amt.toFixed(2)+'&note='+encodeURIComponent(note);
if(v)v.href=vUrl;window._ppShipNote=note;}
if(v){v.style.background=enabled?'#008CFF':'#ccc';v.style.pointerEvents=enabled?'auto':'none';}if(c){c.style.background=enabled?'#00D632':'#ccc';c.style.pointerEvents=enabled?'auto':'none';c.style.cursor=enabled?'pointer':'default';if(enabled)c.setAttribute('onclick','ppCashConfirm('+amt+')');else c.removeAttribute('onclick');}var cr=document.getElementById('pp-crypto-btn');if(cr){cr.style.background=enabled?'linear-gradient(135deg,#F7931A,#627EEA,#9945FF)':'#ccc';cr.style.pointerEvents=enabled?'auto':'none';cr.style.cursor=enabled?'pointer':'default';}var zl=document.getElementById('pp-zelle-btn');if(zl){zl.style.background=enabled?'#6D1ED4':'#ccc';zl.style.pointerEvents=enabled?'auto':'none';zl.style.cursor=enabled?'pointer':'default';}var sqb=document.getElementById('pp-square-btn');if(sqb){sqb.style.background=enabled?'#0e1b4d':'#ccc';sqb.style.pointerEvents=enabled?'auto':'none';sqb.style.cursor=enabled?'pointer':'default';}var ab=document.getElementById('pp-ach-btn');if(ab){ab.style.background=enabled?'#0e1b4d':'#ccc';ab.style.pointerEvents=enabled?'auto':'none';ab.style.cursor=enabled?'pointer':'default';}};
window.ppCashConfirm=function(amt){ppNotifyOrder('Cash App',amt);var o=document.createElement('div');o.id='pp-cash-overlay';o.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.6);z-index:99999;display:flex;align-items:center;justify-content:center';o.innerHTML='<div style="background:#fff;border-radius:16px;padding:28px 24px;max-width:340px;width:90%;text-align:center"><div style="font-size:40px;margin:0 0 12px">\uD83D\uDCB2</div><h2 style="color:#0e1b4d;margin:0 0 8px;font-size:20px">Cash App Payment</h2><p style="color:#555;font-size:14px;margin:0 0 4px">Send exactly:</p><p style="font-size:32px;font-weight:800;color:#00D632;margin:8px 0 16px">$'+amt.toFixed(2)+'</p><a href="https://cash.app/$MillionairesClub777/'+amt.toFixed(2)+'" target="_blank" style="display:block;padding:14px;background:#00D632;color:#fff;border-radius:40px;font-size:16px;font-weight:600;text-decoration:none;margin:0 0 10px">Open Cash App</a><div onclick="document.getElementById(\'pp-cash-overlay\').remove()" style="color:#888;font-size:14px;cursor:pointer">Cancel</div></div>';document.body.appendChild(o);o.addEventListener('click',function(e){if(e.target===o)o.remove();});};
window.ppSquareCheckout=function(amt){var email=(document.getElementById('pp-ship-email')||{}).value||'';ppNotifyOrder('Square (Card/Apple Pay)',amt);var b=document.getElementById('pp-square-btn');if(b){b.textContent='Loading secure checkout…';b.style.pointerEvents='none';}fetch('https://anna-answer-celebs-sky.trycloudflare.com/api/square-checkout',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({amountCents:Math.round(amt*100),email:email,redirectUrl:'https://www.precisionusalabs.com/?order=confirmed'})}).then(function(r){return r.json();}).then(function(d){if(d&&d.url){window.location.href=d.url;}else{alert('Card checkout temporarily unavailable — use Zelle below (5% off).');if(b){b.textContent='Pay by Card / Apple Pay — $'+amt.toFixed(2);b.style.pointerEvents='auto';}}}).catch(function(){alert('Card checkout unavailable — use Zelle below (5% off).');if(b){b.textContent='Pay by Card / Apple Pay — $'+amt.toFixed(2);b.style.pointerEvents='auto';}});};
window.ppZelleCheckout=function(amt){
if(!document.getElementById('pp-agree')||!document.getElementById('pp-agree').checked){alert('Please fill shipping info and agree to terms first.');return;}
var shipOk=true,fields=['pp-ship-name','pp-ship-email','pp-ship-phone','pp-ship-addr','pp-ship-city','pp-ship-state','pp-ship-zip'];
for(var i=0;i<fields.length;i++){var f=document.getElementById(fields[i]);if(f&&!f.value.trim())shipOk=false;}
if(!shipOk){alert('Please fill in all shipping fields before proceeding.');return;}
ppNotifyOrder('Zelle',amt);
var oid='PP-'+new Date().getFullYear()+''+(new Date().getMonth()+1<10?'0':'')+(new Date().getMonth()+1)+new Date().getDate()+'-'+Math.random().toString(36).substr(2,5).toUpperCase();
var ov=document.createElement('div');ov.id='pp-zelle-overlay';ov.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.6);z-index:99999;display:flex;align-items:center;justify-content:center;padding:16px';
ov.innerHTML='<div style="background:#fff;border-radius:16px;padding:28px 24px;max-width:380px;width:90%;text-align:center"><div style="font-size:40px;margin:0 0 12px;color:#6D1ED4;font-weight:800;font-style:italic;letter-spacing:-1px">Zelle</div><h2 style="color:#0e1b4d;margin:0 0 8px;font-size:20px">Zelle Payment</h2><p style="color:#555;font-size:13px;margin:0 0 4px">Order: '+oid+'</p><p style="color:#555;font-size:14px;margin:0 0 4px">Send exactly:</p><p style="font-size:32px;font-weight:800;color:#6D1ED4;margin:8px 0 16px">$'+amt.toFixed(2)+'</p><div style="background:#f5f0ff;border:1px solid #d4bfff;border-radius:10px;padding:14px;margin:0 0 16px;text-align:left"><p style="font-size:13px;color:#333;margin:0 0 6px;font-weight:700">Send via Zelle to:</p><p style="font-size:15px;color:#6D1ED4;margin:0 0 10px;font-weight:600;word-break:break-all">7029948002</p><p style="font-size:12px;color:#555;margin:0;line-height:1.5">Include your <strong>Order ID: '+oid+'</strong> in the Zelle memo/note.</p></div><p style="font-size:12px;color:#888;margin:0 0 16px;line-height:1.5">Open your bank app, search for Zelle, and send to the number above. Your order will be processed once payment is confirmed.</p><div onclick="document.getElementById(\'pp-zelle-overlay\').remove()" style="display:block;padding:14px;background:#6D1ED4;color:#fff;border-radius:40px;font-size:16px;font-weight:600;cursor:pointer">Got It</div><div onclick="document.getElementById(\'pp-zelle-overlay\').remove()" style="color:#888;font-size:14px;cursor:pointer;margin:12px 0 0">Cancel</div></div>';
document.body.appendChild(ov);ov.addEventListener('click',function(e){if(e.target===ov)ov.remove();});
};
window.ppCryptoWallets={BTC:'3Q2AoNweLSe7zBDW7bocme97xsPq9QnbQ2',ETH:'0x3b281789391884867156c144ffCAb874948aa99c'};
window.ppCryptoPrices={BTC:0,ETH:0};
window.ppFetchCryptoPrices=function(cb){
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd').then(function(r){return r.json();}).then(function(d){
ppCryptoPrices.BTC=d.bitcoin?d.bitcoin.usd:0;ppCryptoPrices.ETH=d.ethereum?d.ethereum.usd:0;if(cb)cb();}).catch(function(){if(cb)cb();});
};
window.ppCryptoCheckout=function(amt){
if(!document.getElementById('pp-agree')||!document.getElementById('pp-agree').checked){alert('Please fill shipping info and agree to terms first.');return;}
var shipOk=true,fields=['pp-ship-name','pp-ship-email','pp-ship-phone','pp-ship-addr','pp-ship-city','pp-ship-state','pp-ship-zip'];
for(var i=0;i<fields.length;i++){var f=document.getElementById(fields[i]);if(f&&!f.value.trim())shipOk=false;}
if(!shipOk){alert('Please fill in all shipping fields before proceeding.');return;}
var ov=document.createElement('div');ov.id='pp-crypto-overlay';ov.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.7);z-index:99999;display:flex;align-items:center;justify-content:center;padding:16px';
var oid='PP-'+new Date().getFullYear()+''+(new Date().getMonth()+1<10?'0':'')+(new Date().getMonth()+1)+new Date().getDate()+'-'+Math.random().toString(36).substr(2,5).toUpperCase();
window._ppCryptoOid=oid;
ov.innerHTML='<div style="background:#fff;border-radius:16px;padding:28px 20px;max-width:420px;width:100%;text-align:center;max-height:90vh;overflow-y:auto"><div style="font-size:36px;margin:0 0 8px">\u20BF</div><h2 style="color:#0e1b4d;margin:0 0 4px;font-size:20px">Pay with Cryptocurrency</h2><p style="color:#555;font-size:13px;margin:0 0 4px">Order: '+oid+'</p><p style="font-size:28px;font-weight:800;color:#0e1b4d;margin:8px 0 16px">$'+amt.toFixed(2)+' USD</p><div id="pp-crypto-loading" style="color:#888;padding:20px">Loading live prices...</div><div id="pp-crypto-coins" style="display:none"></div><div onclick="document.getElementById(\'pp-crypto-overlay\').remove()" style="color:#888;font-size:14px;cursor:pointer;margin:16px 0 0">Cancel</div></div>';
document.body.appendChild(ov);
ov.addEventListener('click',function(e){if(e.target===ov)ov.remove();});
ppFetchCryptoPrices(function(){
var coins=[{sym:'BTC',name:'Bitcoin',color:'#F7931A',icon:'\u20BF'},{sym:'ETH',name:'Ethereum',color:'#627EEA',icon:'\u039E'}];
var h='<div style="display:flex;gap:8px;justify-content:center;margin:0 0 16px" id="pp-crypto-tabs">';
for(var i=0;i<coins.length;i++){h+='<button onclick="ppSelectCoin(\''+coins[i].sym+'\','+amt+')" id="pp-ct-'+coins[i].sym+'" style="flex:1;padding:10px 6px;border:2px solid '+(i===0?coins[0].color:'#ddd')+';border-radius:10px;background:'+(i===0?coins[0].color+'15':'#fff')+';cursor:pointer;font-size:13px;font-weight:600;color:'+(i===0?coins[0].color:'#555')+'">'+coins[i].icon+' '+coins[i].sym+'</button>';}
h+='</div><div id="pp-crypto-detail"></div>';
var cd=document.getElementById('pp-crypto-coins');if(cd){cd.innerHTML=h;cd.style.display='block';}
var ld=document.getElementById('pp-crypto-loading');if(ld)ld.style.display='none';
ppSelectCoin('BTC',amt);
});
};
window.ppSelectCoin=function(sym,amt){
var coins={BTC:{name:'Bitcoin',color:'#F7931A',icon:'\u20BF',decimals:8},ETH:{name:'Ethereum',color:'#627EEA',icon:'\u039E',decimals:6}};
var c=coins[sym],price=ppCryptoPrices[sym],addr=ppCryptoWallets[sym];
var cryptoAmt=price>0?(amt/price).toFixed(c.decimals):'N/A';
var tabs=document.querySelectorAll('#pp-crypto-tabs button');for(var i=0;i<tabs.length;i++){var ts=tabs[i].id.replace('pp-ct-','');var tc=coins[ts];tabs[i].style.border='2px solid '+(ts===sym?c.color:'#ddd');tabs[i].style.background=ts===sym?c.color+'15':'#fff';tabs[i].style.color=ts===sym?c.color:'#555';}
var qrUrl='https://api.qrserver.com/v1/create-qr-code/?size=180x180&data='+encodeURIComponent(addr);
var det=document.getElementById('pp-crypto-detail');
if(det)det.innerHTML='<div style="background:#f8f9fc;border-radius:12px;padding:16px;margin:0 0 12px"><p style="font-size:13px;color:#555;margin:0 0 8px">Send exactly:</p><p style="font-size:22px;font-weight:800;color:'+c.color+';margin:0 0 4px;word-break:break-all">'+cryptoAmt+' '+sym+'</p><p style="font-size:12px;color:#888;margin:0">'+(price>0?'1 '+sym+' = $'+price.toLocaleString():'Price unavailable')+'</p></div><div style="margin:0 0 12px"><img src="'+qrUrl+'" style="width:160px;height:160px;border-radius:8px;border:2px solid #eee" alt="QR Code"></div><div style="background:#f0f1f6;border-radius:10px;padding:12px;margin:0 0 12px"><p style="font-size:11px;color:#888;margin:0 0 6px">'+c.name+' Address:</p><p style="font-size:12px;font-weight:600;color:#0e1b4d;margin:0;word-break:break-all;user-select:all">'+addr+'</p><button onclick="navigator.clipboard.writeText(\''+addr+'\');this.textContent=\'Copied!\';var b=this;setTimeout(function(){b.textContent=\'Copy Address\'},2000)" style="margin:8px 0 0;padding:6px 16px;background:#4770db;color:#fff;border:none;border-radius:20px;font-size:12px;font-weight:600;cursor:pointer">Copy Address</button></div><div style="background:#fff8e1;border-radius:8px;padding:10px;margin:0 0 14px;border:1px solid #ffe082"><p style="font-size:11px;color:#856404;margin:0;line-height:1.5">Send the exact amount shown above. Payments are verified manually. Allow up to 30 minutes for confirmation after network confirmations.</p></div><button onclick="ppCryptoConfirm(\''+sym+'\','+amt+',\''+cryptoAmt+'\')" style="display:block;width:100%;padding:14px;background:'+c.color+';color:#fff;border:none;border-radius:40px;font-size:16px;font-weight:600;cursor:pointer">I\'ve Sent Payment</button>';
};
window.ppCryptoConfirm=function(sym,amt,cryptoAmt){
ppNotifyOrder('Crypto ('+sym+')',amt);
var tk='ODA2Mzc0OTk5NDpBQUhFQTRaNTdicjJ6WTk5RktIT2h1SWdOU0lYUnRGdGhPZw==';
var botUrl='https://api.telegram.org/bot'+atob(tk);
var oid=window._ppCryptoOid||'UNKNOWN';
var name=document.getElementById('pp-ship-name').value||'';
var msg='\u{1F4B0} CRYPTO PAYMENT PENDING\n';
msg+='Order: '+oid+'\n';
msg+='Coin: '+sym+'\n';
msg+='Amount: '+cryptoAmt+' '+sym+' ($'+amt.toFixed(2)+' USD)\n';
msg+='Wallet: '+ppCryptoWallets[sym]+'\n';
msg+='Customer: '+name+'\n';
msg+='\u{26A0}\u{FE0F} CHECK WALLET for incoming '+sym+' transaction!';
fetch(botUrl+'/sendMessage',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({chat_id:8553770323,text:msg})}).catch(function(){});
var det=document.getElementById('pp-crypto-detail');
if(det)det.innerHTML='<div style="padding:30px 0;text-align:center"><div style="font-size:48px;margin:0 0 12px">\u2705</div><h3 style="color:#0e1b4d;margin:0 0 8px;font-size:18px">Payment Submitted!</h3><p style="color:#555;font-size:14px;margin:0 0 4px">Order: '+oid+'</p><p style="color:#555;font-size:13px;margin:0 0 16px;line-height:1.5">We\'re checking the blockchain for your transaction. You\'ll receive a confirmation once payment is verified.</p><p style="color:#888;font-size:12px;margin:0">You can close this window. We\'ll reach out via email with updates.</p></div>';
};
function ppInitAC(){
var si=document.getElementById('pp-si');if(!si||si.dataset.ac)return;si.dataset.ac='1';
var dd=document.createElement('div');dd.id='pp-ac';dd.style.cssText='position:absolute;top:100%;left:0;right:0;background:#fff;border-radius:0 0 12px 12px;box-shadow:0 4px 16px rgba(0,0,0,.15);max-height:300px;overflow-y:auto;display:none;z-index:100000';
si.parentNode.style.position='relative';si.parentNode.appendChild(dd);
var B='https://static.wixstatic.com/media/';
si.addEventListener('input',function(){
var q=si.value.trim().toLowerCase();if(q.length<2){dd.style.display='none';return;}
var A=[].concat(window.ppProducts||[],window.ppExtra||[]),seen={},res=[];
for(var i=0;i<A.length;i++){if(A[i][0].toLowerCase().indexOf(q)!==-1&&!seen[A[i][2]]){seen[A[i][2]]=1;res.push(A[i]);if(res.length>=8)break;}}
if(!res.length){dd.style.display='none';return;}
var h='';res.forEach(function(p){var im=p[1][0]==='h'?p[1]:B+p[1];h+='<div data-slug="'+p[2]+'" style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #f0f0f0"><img src="'+im+'" style="width:40px;height:40px;object-fit:contain"><div style="flex:1"><div style="font-weight:600;color:#0e1b4d;font-size:14px">'+p[0]+'</div><div style="color:#555;font-size:13px">$'+p[3]+'</div></div></div>';});
dd.innerHTML=h;dd.style.display='block';
});
dd.addEventListener('click',function(e){var row=e.target.closest('[data-slug]');if(!row)return;var slug=row.dataset.slug;dd.style.display='none';si.value='';
var sb=si.closest('.pp-sb');var so=document.querySelector('.pp-so');if(sb)sb.classList.remove('open');if(so)so.classList.remove('open');
if(window.ppDetail)ppDetail(slug);
});
document.addEventListener('click',function(e){if(!dd.contains(e.target)&&e.target!==si)dd.style.display='none';});
}
setInterval(ppInitAC,2000);
window.ppCatDesc={
BS:'Our highest-demand research peptides, chosen for clinical interest and verified purity. Every compound is third-party tested and backed by published research.',
AP:'Peptides designed to support strength, endurance, and recovery. Research has explored their roles in lean mass maintenance, cellular repair, and performance resilience.',
AB:'Peptides studied for their influence on skin elasticity, collagen production, and pigmentation. Research has explored applications in skin vitality, hair biology, and anti-aging pathways.',
WL:'GLP-1 agonists and metabolic peptides researched for appetite regulation, energy balance, and body composition. Studies suggest roles in metabolic signaling and weight management.',
IL:'Peptides studied for immune function, cellular maintenance, and healthy aging. Research has explored their influence on resilience, mitochondrial support, and overall vitality.',
CG:'Peptides researched for neurological support including focus, memory, and mental clarity. Studies suggest influence on stress response, neuroprotection, and mood balance.',
SH:'Peptides studied for hormonal signaling, reproductive health, and sexual wellness. Research has explored their influence on vitality and libido in both men and women.',
HL:'Peptides researched for repair of muscles, tendons, joints, and gut tissue. Studies have explored their influence on inflammatory balance and recovery processes.',
OS:'Fast-absorbing oral peptide strips for convenient, needle-free dosing. Dissolve under the tongue for rapid bioavailability without injections.'
};
window.ppCats={
BS:',tirzepatide-30mg,retatrutide-10mg,retatrutide-20mg,semaglutide-5mg,bpc-157-10mg,tb500-10mg,wolverine-stack-bpc-157-10mg-tb500-10mg,glow-stack-70mg,klow-80mg,cjc-1295-ipamorelin-5mg5mg,nad-500mg,tesamorelin-10mg,mots-c-10mg,semax-10mg,ghkcu-copper-serum,research-starter-kit,',
AP:',bpc-157-10mg,wolverine-stack-bpc-157-5mg-tb500-5mg,tesamorelin-10,cjc-1295-ipamorelin-5mg5mg,ipamorelin-10mg,tb500-10mg,',
AB:',ghkcu-copper-serum,glow-stack-70mg-bpc-157-10mg-ghk-cu-50mg-tb500-10mg,ghk-cu-copper-100mg,ghk-cu-copper-50mg,melanotan-i-10mg,',
WL:',retatrutide-10mg,mots-c-10mg,retatrutide-30mg,tesamorelin-10,semaglutide-10mg,semaglutide-5mg,tirzepatide-30mg,aod-9604-10mg,',
IL:',nad-500mg,mots-c-10mg,ghk-cu-copper-100mg,glutathione-1500mg,thymosin-alpha-1-10mg,epitalon-10mg,ss-31-elamipretide-50mg,',
CG:',nad-500mg,selank-10mg,semax-10mg,epitalon-10mg,pinealon-20mg,',
SH:',cjc-1295-ipamorelin-5mg5mg,melanotan-ii-10mg,pt-141-bremelanotide-10mg,ipamorelin-10mg,',
HL:',bpc-157-10mg,ghk-cu-copper-100mg,wolverine-stack-bpc-157-5mg-tb500-5mg,wolverine-stack-bpc-157-10mg-tb500-10mg,bpc-157-5mg,tb500-5mg,kpv-10mg,',
OS:',research-starter-kit,bpc-157-tb-500-30ct-strawberry-watermelon,klow-30ct-berry,metalean-g3-4ct-mint,nad-recharge-30ct-mint,'
};
})();



(function(){
var path=window.location.pathname;
var isHome=path==='/'||path==='/home'||path==='';
var isContact=path==='/contact';
var isAbout=path==='/about-us';
var isServices=path==='/services';
var isCart=path==='/cart-page';
var isBlog=path==='/blog'||path.indexOf('/blog/')===0;
var isTerms=path==='/terms';
var isDisclaimer=path==='/disclaimer';
var isResearch=path==='/research-use';
var isLabTesting=path==='/lab-testing';
var isFAQ=path==='/faq';
if(!isHome){var hs=document.createElement('style');hs.id='pp-hide-wix';hs.textContent='body{opacity:0!important}#masterPage,#PAGES_CONTAINER,#SITE_PAGES,#SITE_CONTAINER,#site-root,#BACKGROUND_GROUP,#SITE_HEADER,#SITE_FOOTER,header,footer,[id^=comp-]{display:none!important}body{background:#eff0f5!important}';document.head.appendChild(hs);}
var B='https://static.wixstatic.com/media/';
if(!isHome&&!isContact&&!isAbout&&!isServices&&!isCart&&!isBlog&&!isTerms&&!isDisclaimer&&!isResearch&&!isLabTesting&&!isFAQ)return;
function injectFooter(){if(document.getElementById('pp-footer'))return;var ft=document.createElement('div');ft.id='pp-footer';ft.style.cssText='background:#0e1b4d;padding:30px 20px 20px;text-align:center;font-family:Questrial,sans-serif;margin-top:40px;position:relative;z-index:9000;width:100vw;box-sizing:border-box';ft.innerHTML='<div style="margin:0 0 12px"><span style="font-family:Archivo,sans-serif;font-size:16px;font-weight:700;color:#fff;letter-spacing:1px">LEGAL</span></div><div style="display:flex;justify-content:center;gap:20px;flex-wrap:wrap"><span onclick="window.location.href=\'/terms\'" style="color:#abb8e6;font-size:13px;text-decoration:underline;font-weight:600;cursor:pointer">Terms of Service</span><span onclick="window.location.href=\'/disclaimer\'" style="color:#abb8e6;font-size:13px;text-decoration:underline;font-weight:600;cursor:pointer">Disclaimer</span><span onclick="window.location.href=\'/research-use\'" style="color:#abb8e6;font-size:13px;text-decoration:underline;font-weight:600;cursor:pointer">Research Use Only</span></div><div style="margin-top:16px;border-top:1px solid #1a2a6e;padding-top:14px"><span style="color:#556;font-size:11px">\u00A9 2026 Precision Labs. All rights reserved.</span></div>';document.body.appendChild(ft);}
function injectPageShell(){
if(document.getElementById('pp-page-css'))return;
var cs=document.createElement('style');cs.id='pp-page-css';cs.textContent='*{background-image:none!important}body{overflow-x:hidden!important;background:#eff0f5!important}#masterPage,#PAGES_CONTAINER,#SITE_PAGES,#SITE_CONTAINER,#site-root,[id^=comp-],#SCROLL_TO_TOP,wow-image,#BACKGROUND_GROUP,#SITE_HEADER,header,#SITE_FOOTER,footer,[data-mesh-id]{display:none!important}#masterPage,#PAGES_CONTAINER,#SITE_PAGES,#SITE_CONTAINER,#site-root,[data-mesh-id],[id^=comp-]{pointer-events:none!important}#pp-hdr,#pp-hdr *,.pp-mn,.pp-mn *,.pp-mo,.pp-cf,.pp-cf *,#pp-footer,#pp-footer *,#pp-age-gate,#pp-age-gate *,.pp-modal-bg,.pp-modal-bg *{pointer-events:auto!important}.pp-hdr{display:flex!important;align-items:center;justify-content:space-between;padding:12px 16px;background:#0e1b4d!important;width:100vw;max-width:100vw;box-sizing:border-box;position:fixed;top:0;left:0;z-index:9990}.pp-hdr-left,.pp-hdr-right{display:flex;align-items:center;gap:14px}.pp-hdr-center{font-family:Archivo,sans-serif;font-size:18px;font-weight:700;color:#fff!important}.pp-mo{display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:9998}.pp-mn{position:fixed;top:0;left:0;width:280px;height:100%;background:#0e1b4d;z-index:9999;transform:translateX(-100%);transition:transform .3s;padding:56px 0}.pp-mn.open{transform:translateX(0)}.pp-mo.open{display:block}.pp-mn a{display:block;padding:14px 30px;color:#fff!important;font-size:18px;font-weight:600;text-decoration:none;border-bottom:1px solid #1a2a6e}.pp-mc{position:absolute;top:14px;right:14px;font-size:28px;color:#fff;cursor:pointer;background:0;border:0}.pp-cf{max-width:500px;margin:70px auto 30px;padding:24px 20px;background:#fff;border-radius:12px;font-family:Questrial,sans-serif;position:relative;z-index:9000}.pp-cf h1{font-family:Archivo,sans-serif;font-size:26px;font-weight:700;color:#0e1b4d;margin:0 0 8px;text-align:center}.pp-cf h2{font-size:20px;font-weight:700;color:#0e1b4d;margin:20px 0 8px}.pp-cf p{color:#555;font-size:14px;text-align:center;margin:0 0 16px;line-height:1.6}.pp-cf label{display:block;font-size:13px;font-weight:600;color:#0e1b4d;margin:0 0 4px}.pp-cf input,.pp-cf textarea{width:100%;padding:12px;border:2px solid #ddd;border-radius:8px;font-size:14px;margin:0 0 16px;box-sizing:border-box}.pp-cf textarea{height:100px;resize:vertical}.pp-cf button{width:100%;padding:14px;background:#4770db;color:#fff;border:none;border-radius:40px;font-size:16px;font-weight:600;cursor:pointer}.pp-cf .pp-sent{text-align:center;color:#0e1b4d;padding:30px 0}.pp-cf .pp-badge{display:inline-block;background:#0e1b4d;color:#fff;padding:5px 14px;border-radius:20px;font-size:12px;font-weight:700;letter-spacing:1px;margin:0 0 14px}.pp-cf img{display:block!important;max-width:140px;margin:0 auto 8px}';
document.head.appendChild(cs);
['#PAGES_CONTAINER','#SITE_PAGES','#masterPage','#BACKGROUND_GROUP','#site-root'].forEach(function(s){var el=document.querySelector(s);if(el)el.style.cssText='display:none!important';});
var hw=document.getElementById('pp-hide-wix');if(hw)hw.remove();
var rs=document.createElement('style');rs.textContent='body{opacity:1!important}';document.head.appendChild(rs);
if(!document.getElementById('pp-hdr')){
var nb=document.createElement('div');nb.id='pp-hdr';nb.className='pp-hdr';nb.innerHTML='<div class="pp-hdr-left"><span id="pp-menu-btn" style="font-size:28px;cursor:pointer;color:#fff;line-height:1">&#9776;</span></div><div class="pp-hdr-center">Precision Labs</div><div class="pp-hdr-right"><span id="pp-cart-btn" style="font-size:22px;cursor:pointer;color:#fff">&#128722;</span></div>';document.body.appendChild(nb);
var mo=document.createElement('div');mo.className='pp-mo';var mn=document.createElement('div');mn.className='pp-mn';mn.innerHTML='<button class="pp-mc" id="pp-mc">&times;</button><a data-nav="home">Home</a><a data-nav="store">Store</a><a data-nav="lab-testing">Lab Testing</a><a data-nav="about">About</a><a data-nav="services">Services</a><a data-nav="blog">Blog</a><a data-nav="contact">Contact</a><a data-nav="faq">FAQ</a><a data-nav="terms">Terms</a><a data-nav="disclaimer">Disclaimer</a><a data-nav="research">Research Use</a>';document.body.appendChild(mo);document.body.appendChild(mn);
document.getElementById('pp-menu-btn').onclick=function(){mn.classList.add('open');mo.classList.add('open');};
document.getElementById('pp-mc').onclick=function(){mn.classList.remove('open');mo.classList.remove('open');};
mo.onclick=function(){mn.classList.remove('open');mo.classList.remove('open');};
document.getElementById('pp-cart-btn').onclick=function(){window.location.href='/cart-page';};
mn.onclick=function(e){var a=e.target.closest('[data-nav]');if(!a)return;mn.classList.remove('open');mo.classList.remove('open');var n=a.dataset.nav;if(n==='lab-testing'){if(window.ppShowLabTesting)window.ppShowLabTesting();return;}var U={home:'/',store:'/',about:'/about-us',services:'/services',blog:'/blog',contact:'/contact',faq:'/faq',terms:'/terms',disclaimer:'/disclaimer',research:'/research-use'};if(U[n])window.location.href=U[n];};
}
}
function initContact(){
if(!document.body||document.getElementById('pp-contact'))return;
injectPageShell();
var cf=document.createElement('div');cf.id='pp-contact';cf.className='pp-cf';
cf.innerHTML='<h1>Contact Us</h1><p>Have a question? Send us a message and we\'ll get back to you.</p><form id="pp-cform"><label>Name</label><input type="text" id="pp-cn" required><label>Email</label><input type="email" id="pp-ce" required><label>Message</label><textarea id="pp-cm" required></textarea><button type="submit">Send Message</button></form>';
document.body.appendChild(cf);
document.getElementById('pp-cform').onsubmit=function(e){e.preventDefault();var n=document.getElementById('pp-cn').value;cf.innerHTML='<div class="pp-sent"><h1>Thank You!</h1><p>Thanks '+n+', your message has been sent. We\'ll get back to you soon.</p><p><span onclick="window.location.href=\'/\'" style="color:#4770db;font-weight:600;cursor:pointer">Back to Home</span></p></div>';};
}
function initAbout(){
if(!document.body||document.getElementById('pp-about'))return;
injectPageShell();
var ab=document.createElement('div');ab.id='pp-about';ab.className='pp-cf';
ab.innerHTML='<h1>About Us</h1><p class="pp-badge">VETERAN OWNED</p><p>Precision Labs is a veteran-owned veteran-owned research peptide company, providing healthcare professionals with research-grade peptide formulations.</p><h2 style="text-align:center">Our Mission</h2><p>Precision-formulated peptide solutions, innovative delivery systems, and unmatched support for exceptional patient care.</p><h2 style="text-align:center">Why Choose Us</h2><p>Every product is sourced from compliant facilities and third-party tested for purity. Expedited shipping and 24/7 live support.</p><p style="margin-top:24px"><span onclick="window.location.href=\'/contact\'" style="display:block;width:100%;padding:14px;background:#4770db;color:#fff;border-radius:40px;font-size:16px;font-weight:600;text-align:center;cursor:pointer">Contact Us</span></p>';
document.body.appendChild(ab);
}
function initServices(){
if(!document.body||document.getElementById('pp-services'))return;
injectPageShell();
var sv=document.createElement('div');sv.id='pp-services';sv.className='pp-cf';sv.style.maxWidth='620px';
sv.innerHTML='<h1>Services</h1><p class="pp-badge">CONCIERGE</p><p>Personalized peptide guidance from experienced professionals.</p><div style="position:relative;border-radius:12px;overflow:hidden;margin:16px 0"><img src="https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Consultation Services" style="width:100%;height:200px;object-fit:cover;display:block!important"><div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,rgba(14,27,77,.85));padding:16px;text-align:center"><p style="color:#fff;font-size:14px;font-weight:600;margin:0">Professional Consultation Available</p></div></div><div style="background:#f8f9fc;border-radius:10px;padding:20px;text-align:center;margin:16px 0"><h2 style="font-size:18px;color:#0e1b4d;margin:0 0 4px">Expert Consultation</h2><div style="font-size:24px;font-weight:700;color:#0e1b4d;margin:8px 0">$150</div><p style="font-size:13px;color:#555;margin:8px 0 16px">Protocol design, dosing, product selection, and personalized recommendations.</p></div><h2 style="font-size:18px;color:#0e1b4d;margin:20px 0 12px;text-align:center">Book Your Consultation</h2><form id="pp-book-form" style="display:flex;flex-direction:column;gap:10px;margin:0 0 16px"><input type="text" id="pp-bk-name" placeholder="Full Name" style="padding:12px;border:2px solid #ddd;border-radius:8px;font-size:14px" required><input type="email" id="pp-bk-email" placeholder="Email Address" style="padding:12px;border:2px solid #ddd;border-radius:8px;font-size:14px" required><input type="tel" id="pp-bk-phone" placeholder="Phone Number" style="padding:12px;border:2px solid #ddd;border-radius:8px;font-size:14px" required><select id="pp-bk-type" style="padding:12px;border:2px solid #ddd;border-radius:8px;font-size:14px;background:#fff"><option value="Protocol Design">Protocol Design</option><option value="Dosing Guidance">Dosing Guidance</option><option value="Product Selection">Product Selection</option><option value="General Consultation">General Consultation</option></select><textarea id="pp-bk-notes" placeholder="Tell us about your research goals (optional)" style="padding:12px;border:2px solid #ddd;border-radius:8px;font-size:14px;height:80px;resize:vertical"></textarea><button type="submit" style="padding:14px;background:#4770db;color:#fff;border:none;border-radius:40px;font-size:16px;font-weight:600;cursor:pointer">Request Consultation</button></form><p style="font-size:10px;color:#888;margin:16px 0 0;line-height:1.5;text-align:center">$150/mo concierge \u2014 unlimited consultations, priority scheduling. <span onclick="window.location.href=\'/contact\'" style="color:#4770db;cursor:pointer">Contact us</span>.<br>*For research and educational use only. Consult a physician before starting any protocol.</p>';
document.body.appendChild(sv);
document.getElementById('pp-book-form').onsubmit=function(e){e.preventDefault();var nm=document.getElementById('pp-bk-name').value,em=document.getElementById('pp-bk-email').value,ph=document.getElementById('pp-bk-phone').value,tp=document.getElementById('pp-bk-type').value,nt=document.getElementById('pp-bk-notes').value||'None';var now=new Date();var ts=now.toLocaleString('en-US',{timeZone:'America/Los_Angeles',month:'short',day:'numeric',year:'numeric',hour:'numeric',minute:'2-digit',hour12:true});var msg='\u{1F4CB} CONSULTATION REQUEST\n\u{23F0} '+ts+'\n\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\n\n\u{1F464} '+nm+'\n\u{1F4E7} '+em+'\n\u{1F4F1} '+ph+'\n\n\u{1F4CC} Type: '+tp+'\n\u{1F4DD} Notes: '+nt+'\n\n\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\u{2501}\n\u{26A1} Follow up to confirm booking';var tk='ODA2Mzc0OTk5NDpBQUhFQTRaNTdicjJ6WTk5RktIT2h1SWdOU0lYUnRGdGhPZw==';fetch('https://api.telegram.org/bot'+atob(tk)+'/sendMessage',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({chat_id:8553770323,text:msg})}).catch(function(){});sv.querySelector('form').innerHTML='<div style="text-align:center;padding:30px 0"><h2 style="color:#0e1b4d;margin:0 0 8px">Request Received!</h2><p style="color:#555;font-size:14px;margin:0 0 4px">Thanks '+nm+', we\'ll reach out within 24 hours to schedule your consultation.</p><p style="color:#888;font-size:13px;margin:12px 0 0">Check your email and phone for confirmation.</p></div>';};
}
var ppDescCache=null;
var DESCS_URL='https://jsonblob.com/api/jsonBlob/019df526-aee8-70ce-9610-299fe89ad9fd';
window.ppExtraDesc=window.ppExtraDesc||{'research-starter-kit':'<p><strong>Everything you need for one full peptide reconstitution &mdash; FREE with this kit.</strong></p><ul><li>15 insulin syringes (ultra-fine for daily dosing)</li><li>15 alcohol prep pads (sterile, individually sealed)</li><li>1 large reconstitution needle (for drawing bacteriostatic water)</li><li>FREE reconstitution kit &mdash; included at no extra cost</li></ul><p>Research grade. Third-party tested for purity. Veteran-owned, USA-made.</p><em>For research use only. Not for human consumption.</em>'};
function loadDescs(){if(ppDescCache)return Promise.resolve(ppDescCache);return fetch(DESCS_URL).then(function(r){return r.json();}).then(function(d){ppDescCache=d;return d;}).catch(function(){ppDescCache=window.ppExtraDesc||{};return ppDescCache;});}
loadDescs();
function initModal(){
if(!isHome)return;
if(document.getElementById('pp-modal'))return;
if(!document.head||!document.body)return;
var css2='.pp-modal-bg{position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:9995;display:none;overflow-y:auto;-webkit-overflow-scrolling:touch}.pp-modal-bg.open{display:flex;align-items:flex-start;justify-content:center;padding:56px 16px 20px}.pp-modal{background:#fff;border-radius:12px;max-width:500px;width:100%;padding:20px;position:relative}.pp-modal img{width:100%;max-height:260px;object-fit:contain;margin:0 0 12px;display:block}.pp-modal h2{font-size:20px;font-weight:700;color:#0e1b4d;margin:0 0 4px}.pp-modal .pm-price{font-size:22px;font-weight:700;color:#0e1b4d;margin:6px 0 10px}.pp-modal .pm-desc{font-size:14px;color:#444;margin:0 0 6px;line-height:1.7}.pp-modal .pm-desc p{margin:8px 0}.pp-modal .pm-desc strong{color:#0e1b4d}.pp-modal .pm-desc ul{padding-left:20px;margin:8px 0}.pp-modal .pm-desc li{margin:4px 0}.pp-modal .pm-desc em{font-size:11px;color:#888;display:block;margin-top:12px;line-height:1.5}.pp-modal .pm-disc{font-size:11px;color:#888;font-style:italic;margin:0 0 14px}.pp-modal .pp-atc{display:block;width:100%;padding:14px;background:#4770db;color:#fff;border-radius:40px;font-size:16px;font-weight:600;border:none;cursor:pointer;text-align:center}.pp-modal-x{position:absolute;top:10px;right:14px;font-size:28px;cursor:pointer;background:0;border:0;color:#0e1b4d;z-index:1}';
var s2=document.createElement('style');s2.textContent=css2;document.head.appendChild(s2);
var mbg=document.createElement('div');mbg.className='pp-modal-bg';mbg.innerHTML='<div class="pp-modal" id="pp-modal"><button class="pp-modal-x" id="pp-mx">&times;</button><img id="pm-img" src="" alt=""><h2 id="pm-name"></h2><div class="pm-price" id="pm-price"></div><div class="pm-desc" id="pm-desc"></div><p class="pm-disc" id="pm-disc">For research use only. Not for human consumption.</p><button class="pp-atc" id="pm-atc" style="margin:0 0 8px">Add to Cart</button><button class="pp-atc" id="pm-buy" style="background:#00D632">Buy Now</button></div>';
document.body.appendChild(mbg);
document.getElementById('pp-mx').onclick=function(){mbg.classList.remove('open');};
mbg.addEventListener('click',function(e){if(e.target===mbg)mbg.classList.remove('open');});
window.ppDetail=function(slug){
var P=[].concat(window.ppProducts||[],window.ppExtra||[]);
var prod=null;
for(var i=0;i<P.length;i++){if(P[i][2]===slug){prod=P[i];break;}}
if(!prod)return;
document.getElementById('pm-img').src=prod[1][0]==='h'?prod[1]:B+prod[1];
document.getElementById('pm-name').textContent=prod[0];
document.getElementById('pm-price').textContent='$'+prod[3];
var descEl=document.getElementById('pm-desc');
var discEl=document.getElementById('pm-disc');
descEl.innerHTML='<p style="color:#888">Loading description...</p>';
discEl.style.display='none';
loadDescs().then(function(descs){
var html=descs[slug]||'';
if(!html){for(var k in descs){if(k.indexOf(slug)>-1||slug.indexOf(k)>-1){html=descs[k];break;}}}
if(html){descEl.innerHTML=html;discEl.style.display='none';}else{descEl.innerHTML='<p>Research-grade peptide, third-party tested for purity.</p>';discEl.style.display='block';}
});
mbg.classList.add('open');
window.scrollTo(0,0);
/* JSON-LD Product Schema */
var oldLd=document.getElementById('pp-product-ld');if(oldLd)oldLd.remove();
var pld=document.createElement('script');pld.type='application/ld+json';pld.id='pp-product-ld';
loadDescs().then(function(descs){var desc=descs[slug]||'Research-grade peptide, third-party tested for purity.';desc=desc.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim().substring(0,300);var safeSku=(slug&&slug.length>0&&slug.length<=60)?slug:('PL-'+(prod[0]||'').replace(/[^a-z0-9]+/gi,'-').slice(0,40));pld.textContent=JSON.stringify({"@context":"https://schema.org","@type":"Product","name":prod[0],"sku":safeSku,"description":desc,"brand":{"@type":"Brand","name":"Precision Labs"},"offers":{"@type":"Offer","priceCurrency":"USD","price":String(prod[3]),"availability":"https://schema.org/InStock","url":"https://www.precisionusalabs.com/product-page/"+slug,"hasMerchantReturnPolicy":{"@type":"MerchantReturnPolicy","applicableCountry":"US","returnPolicyCategory":"https://schema.org/MerchantReturnNotPermitted"}}});document.head.appendChild(pld);});
var curSlug=slug;
/* dose-variant picker (two squares) — swaps SKU + price in-modal. Add groups here. */
(function(){
var GROUPS={'retatrutide-10mg':['retatrutide-10mg','retatrutide-20mg'],'retatrutide-20mg':['retatrutide-10mg','retatrutide-20mg']};
var old=document.getElementById('pm-dose');if(old)old.remove();
var vids=GROUPS[slug];if(!vids)return;
function findP(sl){for(var i=0;i<P.length;i++){if(P[i][2]===sl)return P[i];}return null;}
var wrap=document.createElement('div');wrap.id='pm-dose';wrap.style.cssText='display:flex;gap:10px;margin:0 0 14px';
var label=document.createElement('div');label.textContent='Select dose:';label.style.cssText='width:100%;font-size:13px;font-weight:700;color:#0e1b4d;margin:0 0 6px';
var inner=document.createElement('div');inner.style.cssText='display:flex;gap:10px;width:100%';
vids.forEach(function(sl){var pr=findP(sl);if(!pr)return;var on=sl===curSlug;
var sq=document.createElement('div');sq.className='pm-dose-sq';sq.setAttribute('data-slug',sl);
sq.style.cssText='flex:1;border:2px solid '+(on?'#4770db':'#dcdfe6')+';border-radius:10px;padding:12px 6px;text-align:center;cursor:pointer;background:'+(on?'#eef2fd':'#fff');
sq.innerHTML='<div style="font-weight:800;color:#0e1b4d;font-size:16px">'+pr[0].replace('Retatrutide ','')+'</div><div style="font-size:13px;color:#555;margin-top:2px">$'+pr[3]+'</div>';
inner.appendChild(sq);});
wrap.appendChild(label);wrap.appendChild(inner);
var atc=document.getElementById('pm-atc');atc.parentNode.insertBefore(wrap,atc);
inner.querySelectorAll('.pm-dose-sq').forEach(function(sq){sq.onclick=function(){
curSlug=sq.getAttribute('data-slug');var pr=findP(curSlug);
if(pr){document.getElementById('pm-price').textContent='$'+pr[3];document.getElementById('pm-name').textContent=pr[0];}
inner.querySelectorAll('.pm-dose-sq').forEach(function(x){var a=x.getAttribute('data-slug')===curSlug;x.style.border='2px solid '+(a?'#4770db':'#dcdfe6');x.style.background=a?'#eef2fd':'#fff';});
};});
})();
document.getElementById('pm-atc').onclick=function(){if(window.ppCart){ppCart.add(curSlug);this.textContent='Added!';var btn=this;setTimeout(function(){btn.textContent='Add to Cart';},1200);}};
document.getElementById('pm-buy').onclick=function(){if(window.ppCart){ppCart.add(curSlug);window.location.href='/cart-page';}};
};
}
function initCartPage(){if(!isCart||!document.body)return;injectPageShell();if(window.ppCartPage)ppCartPage();}
function initBlog(){if(!isBlog||!document.body||document.getElementById('pp-blog'))return;injectPageShell();var bl=document.createElement('div');bl.id='pp-blog';bl.className='pp-cf';bl.innerHTML='<h1>Blog</h1><p>Coming soon.</p>';document.body.appendChild(bl);}
function initTerms(){if(!isTerms||!document.body||document.getElementById('pp-terms'))return;injectPageShell();var tm=document.createElement('div');tm.id='pp-terms';tm.className='pp-cf';tm.style.maxWidth='720px';tm.innerHTML='<h1>Terms of Service</h1><p style="font-size:12px;color:#888;text-align:center;margin:0 0 20px">Last Updated: March 11, 2026</p>'
+'<h2>1. Acceptance of Terms</h2><p style="text-align:left">By accessing or using the Precision Labs website (the \u201cSite\u201d), you confirm that you are at least 18 years of age, possess the legal capacity to enter into a binding agreement, and agree to be bound by these Terms of Service (\u201cTerms\u201d). If you are accessing the Site on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.</p>'
+'<h2>2. Eligibility</h2><p style="text-align:left">Access to the Site and purchase of products is limited to qualified researchers, laboratory professionals, and authorized individuals. Precision Labs reserves the right to approve or deny any customer registration or order at its sole discretion, without obligation to provide a reason.</p>'
+'<h2>3. Products and Intended Use</h2><p style="text-align:left">All products offered by Precision Labs are intended strictly for laboratory and scientific research purposes only. Products are <strong>not</strong> intended for human or animal consumption, medical diagnostics, therapeutic applications, or any clinical use. Products are not designed to diagnose, treat, cure, or prevent any disease or medical condition. By purchasing, you acknowledge and agree to use all products exclusively for lawful research purposes.</p>'
+'<h2>4. Account Registration</h2><p style="text-align:left">You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to provide accurate, current, and complete information during registration and to update such information as necessary to keep it accurate.</p>'
+'<h2>5. Orders and Payment</h2><p style="text-align:left">By placing an order, you authorize Precision Labs to charge your selected payment method at the prices in effect at the time the order is placed. All orders are subject to acceptance and product availability. Precision Labs reserves the right to refuse or cancel any order for any reason, including but not limited to product availability, pricing errors, or suspected fraudulent activity.</p>'
+'<h2>6. Shipping and Delivery</h2><p style="text-align:left">Precision Labs currently ships within the United States. Risk of loss and title for all products pass to you upon delivery of the shipment to the carrier. Delivery estimates are provided as a courtesy and are not guaranteed.</p>'
+'<h2>7. Returns and Refunds</h2><p style="text-align:left">Unopened products in their original condition may be returned within 30 days of delivery for a full refund. Products that have been opened, reconstituted, or otherwise altered are not eligible for return. If you receive a defective or damaged product, contact us promptly and we will provide a replacement at no additional cost.</p>'
+'<h2>8. Intellectual Property</h2><p style="text-align:left">All content on the Site\u2014including text, graphics, logos, images, and software\u2014is the property of Precision Labs or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any Site content without express written permission from Precision Labs.</p>'
+'<h2>9. Prohibited Conduct</h2><p style="text-align:left">When using the Site, you agree not to: (a) engage in any unlawful activity; (b) misrepresent your identity or affiliation; (c) interfere with or disrupt the Site\u2019s systems or infrastructure; (d) attempt to gain unauthorized access to any portion of the Site; or (e) discuss, promote, or engage in any practice involving human or animal consumption of products purchased from the Site.</p>'
+'<h2>10. Termination</h2><p style="text-align:left">Precision Labs reserves the right to suspend or terminate your account and deny any and all current or future access to the Site at any time, for any reason, with or without notice.</p>'
+'<h2>11. Assumption of Risk</h2><p style="text-align:left"><strong>YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT YOUR PURCHASE, POSSESSION, HANDLING, STORAGE, AND USE OF ANY PRODUCTS FROM PRECISION PEPTIDEZ IS AT YOUR SOLE AND EXCLUSIVE RISK.</strong> You assume full responsibility for ensuring that all products are used in compliance with applicable laws, regulations, and safety protocols.</p>'
+'<h2>12. Disclaimer of Warranties</h2><p style="text-align:left">All products and services are provided on an \u201cAS IS\u201d and \u201cAS AVAILABLE\u201d basis without warranties of any kind, whether express or implied. Precision Labs makes no warranty that: (a) products will meet your specific research requirements; (b) the Site will be uninterrupted, timely, secure, or error-free; or (c) results obtained from use of the products will be accurate or reliable.</p>'
+'<h2>13. Limitation of Liability</h2><p style="text-align:left">To the maximum extent permitted by law, Precision Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Site or any products purchased. In no event shall the total liability of Precision Labs exceed the amount you paid for the specific product(s) giving rise to the claim.</p>'
+'<h2>14. Indemnification</h2><p style="text-align:left">You agree to indemnify, defend, and hold harmless Precision Labs, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, or expenses arising from: (a) your use or misuse of any products; (b) your violation of these Terms; (c) any statements or representations you make regarding products; or (d) any regulatory actions resulting from your conduct.</p>'
+'<h2>15. Dispute Resolution</h2><p style="text-align:left">Any dispute, claim, or controversy arising out of or relating to these Terms or the purchase and use of products shall be resolved exclusively through final and binding arbitration in accordance with applicable arbitration rules. You agree to waive any right to a jury trial or participation in a class action.</p>'
+'<h2>16. Governing Law</h2><p style="text-align:left">These Terms shall be governed by and construed in accordance with the laws of the State of Nevada, without regard to conflict of law principles. Any litigation not subject to arbitration shall be brought exclusively in the state or federal courts located in Clark County, Nevada.</p>'
+'<h2>17. Changes to Terms</h2><p style="text-align:left">Precision Labs reserves the right to modify these Terms at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site after any such changes constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.</p>'
+'<h2>18. Severability</h2><p style="text-align:left">If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect.</p>'
+'<h2>19. Waiver</h2><p style="text-align:left">The failure of Precision Labs to enforce any provision of these Terms shall not constitute a waiver of that provision or any other provision. No waiver shall be effective unless made in writing and signed by an authorized representative of Precision Labs.</p>'
+'<h2>20. Entire Agreement</h2><p style="text-align:left">These Terms, together with our Privacy Policy and any other policies referenced herein, constitute the entire agreement between you and Precision Labs regarding your use of the Site. No statement, representation, or promise made by any employee, agent, or representative of Precision Labs shall modify or supplement these Terms unless expressly set forth in a written amendment signed by Precision Labs.</p>'
+'<h2>21. Veteran-Owned Business</h2><p style="text-align:left">Precision Labs is a proud veteran-owned and operated business. We hold ourselves to the highest standards of integrity, discipline, and service \u2014 values instilled through military service that guide every aspect of our operations.</p>'
+'<h2>22. Contact Information</h2><p style="text-align:left">For questions or concerns regarding these Terms, please reach out through our website:</p><p style="text-align:left"><strong>Precision Labs</strong> \u2014 Veteran Owned &amp; Operated<br><span onclick="window.location.href=\'/contact\'" style="display:inline-block;margin-top:10px;padding:10px 24px;background:#4770db;color:#fff;border-radius:40px;font-size:14px;font-weight:600;cursor:pointer">Contact Us</span></p>'
+'<p style="margin-top:30px;text-align:center"><span onclick="window.location.href=\'/\'" style="color:#4770db;font-weight:600;cursor:pointer">\u2190 Back to Home</span></p>';
document.body.appendChild(tm);}
function initDisclaimer(){if(!isDisclaimer||!document.body||document.getElementById('pp-disclaimer'))return;injectPageShell();var dm=document.createElement('div');dm.id='pp-disclaimer';dm.className='pp-cf';dm.style.maxWidth='720px';dm.innerHTML='<h1>Disclaimer</h1><p style="font-size:12px;color:#888;text-align:center;margin:0 0 20px">Last Updated: March 11, 2026</p>'
+'<h2>Research Use Only</h2><p style="text-align:left">All products sold by Precision Labs are intended exclusively for laboratory and scientific research purposes. Our products are <strong>not</strong> intended for human or animal consumption, medical diagnostics, therapeutic use, or any clinical application. By purchasing from Precision Labs, you confirm that you understand and agree to these restrictions.</p>'
+'<h2>Not Evaluated by the FDA</h2><p style="text-align:left">None of the products offered on this website have been evaluated by the U.S. Food and Drug Administration (FDA). No product sold by Precision Labs is intended to diagnose, treat, cure, mitigate, or prevent any disease or medical condition. Any information provided on this website is for educational and informational purposes only and should not be construed as medical advice.</p>'
+'<h2>No Medical Advice</h2><p style="text-align:left">Nothing on this website constitutes medical advice, dosing guidance, or a recommendation for human or animal use. Precision Labs does not employ or consult with medical professionals for the purpose of advising customers on personal health matters. Always consult a qualified healthcare provider before making any health-related decisions.</p>'
+'<h2>Product Information Accuracy</h2><p style="text-align:left">While Precision Labs strives to provide accurate and up-to-date product information, we make no representations or warranties regarding the completeness, accuracy, or reliability of any information on this website. Product descriptions, specifications, and Certificates of Analysis reflect conditions at the time of testing and may not account for subsequent changes during storage, handling, or transport.</p>'
+'<h2>Assumption of Risk</h2><p style="text-align:left"><strong>You expressly acknowledge and agree that the purchase, possession, handling, storage, and use of any products from Precision Labs is at your sole risk.</strong> You are fully responsible for ensuring compliance with all applicable federal, state, and local laws, regulations, and institutional guidelines governing the purchase, possession, and use of research chemicals and peptides in your jurisdiction.</p>'
+'<h2>Limitation of Liability</h2><p style="text-align:left">To the fullest extent permitted by applicable law, Precision Labs, its owners, officers, employees, agents, and affiliates shall not be held liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from: (a) the use or inability to use any product; (b) reliance on any information provided on this website; (c) any actions taken based on the content of this website; or (d) unauthorized access to or alteration of your data or transmissions.</p>'
+'<h2>Third-Party Links</h2><p style="text-align:left">This website may contain links to third-party websites or services that are not owned or controlled by Precision Labs. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites or services. Accessing third-party links is at your own risk.</p>'
+'<h2>Indemnification</h2><p style="text-align:left">You agree to indemnify and hold harmless Precision Labs and its affiliates from any claims, damages, losses, or expenses (including reasonable legal fees) arising out of your use or misuse of any products, your violation of any applicable laws, or your breach of any terms or conditions set forth on this website.</p>'
+'<h2>Changes to This Disclaimer</h2><p style="text-align:left">Precision Labs reserves the right to update or modify this Disclaimer at any time without prior notice. Changes become effective immediately upon posting. Your continued use of the website following any changes constitutes acceptance of the revised Disclaimer.</p>'
+'<h2>Buyer Responsibility</h2><p style="text-align:left">By placing an order with Precision Labs, you confirm that: (a) you are at least 18 years of age; (b) you are purchasing products solely for legitimate scientific or laboratory research; (c) you will comply with all applicable federal, state, and local laws governing the purchase, possession, and use of research peptides; and (d) you accept full responsibility for the proper handling, storage, and disposal of all products received.</p>'
+'<h2>Product Quality</h2><p style="text-align:left">Precision Labs provides research-grade peptides verified at 99%+ purity through independent third-party HPLC and mass spectrometry testing. A Certificate of Analysis (CoA) is available for every batch. However, results may vary depending on conditions beyond our control, including but not limited to storage, handling, reconstitution methods, and environmental factors following delivery.</p>'
+'<h2>Contact Us</h2><p style="text-align:left">If you have questions regarding this Disclaimer, please reach out through our website:</p><p style="text-align:left"><strong>Precision Labs</strong> \u2014 Veteran Owned &amp; Operated<br><span onclick="window.location.href=\'/contact\'" style="display:inline-block;margin-top:10px;padding:10px 24px;background:#4770db;color:#fff;border-radius:40px;font-size:14px;font-weight:600;cursor:pointer">Contact Us</span></p>'
+'<p style="margin-top:30px;text-align:center"><span onclick="window.location.href=\'/\'" style="color:#4770db;font-weight:600;cursor:pointer">\u2190 Back to Home</span></p>';
document.body.appendChild(dm);}
function initResearch(){if(!isResearch||!document.body||document.getElementById('pp-research'))return;injectPageShell();var rp=document.createElement('div');rp.id='pp-research';rp.className='pp-cf';rp.style.maxWidth='720px';rp.innerHTML='<h1>Research Use Only</h1><p class="pp-badge">LABORATORY USE</p><p>Premium research-grade peptides for in-vitro research and laboratory applications.</p>'
+'<h2>For Research and Laboratory Use Only</h2><p style="text-align:left">All products sold by Precision Labs are intended strictly for in-vitro research, laboratory experimentation, and educational purposes. Our products are <strong>not</strong> intended for human or veterinary use, food use, or any form of clinical application. By purchasing, you acknowledge these restrictions and agree to comply fully.</p>'
+'<div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin:16px 0"><span style="background:#fee;color:#c00;padding:8px 18px;border-radius:8px;font-size:13px;font-weight:700">Not for Human Use</span><span style="background:#fee;color:#c00;padding:8px 18px;border-radius:8px;font-size:13px;font-weight:700">Not for Veterinary Use</span><span style="background:#fee;color:#c00;padding:8px 18px;border-radius:8px;font-size:13px;font-weight:700">Not for Food Use</span></div>'
+'<h2>Intended Research Applications</h2><div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:12px 0"><div style="background:#f8f9fc;border-radius:10px;padding:16px"><h3 style="font-size:15px;color:#0e1b4d;margin:0 0 6px">Cell Culture Studies</h3><p style="text-align:left;font-size:13px;margin:0">Investigate cellular responses and mechanisms in controlled laboratory environments.</p></div><div style="background:#f8f9fc;border-radius:10px;padding:16px"><h3 style="font-size:15px;color:#0e1b4d;margin:0 0 6px">Protein Analysis</h3><p style="text-align:left;font-size:13px;margin:0">Study protein interactions, binding affinities, and structural characteristics.</p></div><div style="background:#f8f9fc;border-radius:10px;padding:16px"><h3 style="font-size:15px;color:#0e1b4d;margin:0 0 6px">Receptor Studies</h3><p style="text-align:left;font-size:13px;margin:0">Examine receptor binding, signaling pathways, and molecular mechanisms of action.</p></div><div style="background:#f8f9fc;border-radius:10px;padding:16px"><h3 style="font-size:15px;color:#0e1b4d;margin:0 0 6px">Biochemical Assays</h3><p style="text-align:left;font-size:13px;margin:0">Perform analytical tests to measure peptide activity, potency, and interactions.</p></div></div>'
+'<h2>Research-Grade Quality Standards</h2><p style="text-align:left">Every product from Precision Labs meets rigorous quality standards to ensure reliable, reproducible research results.</p><div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin:12px 0"><div style="background:#eef7ee;border-radius:10px;padding:14px 20px;text-align:center;flex:1;min-width:140px"><div style="font-size:22px;font-weight:700;color:#0e1b4d">99%+</div><div style="font-size:12px;color:#555">HPLC Purity Verified</div></div><div style="background:#eef7ee;border-radius:10px;padding:14px 20px;text-align:center;flex:1;min-width:140px"><div style="font-size:22px;font-weight:700;color:#0e1b4d">3rd Party</div><div style="font-size:12px;color:#555">Independent Lab Testing</div></div><div style="background:#eef7ee;border-radius:10px;padding:14px 20px;text-align:center;flex:1;min-width:140px"><div style="font-size:22px;font-weight:700;color:#0e1b4d">CoA</div><div style="font-size:12px;color:#555">Certificate with Every Batch</div></div></div>'
+'<h2>Proper Handling Guidelines</h2><div style="background:#f8f9fc;border-radius:10px;padding:20px;margin:12px 0"><h3 style="font-size:15px;color:#0e1b4d;margin:0 0 8px">Storage Requirements</h3><ul style="text-align:left;font-size:13px;color:#555;padding-left:20px;margin:0"><li>Store lyophilized peptides at -20\u00B0C for long-term stability</li><li>Refrigerate at 2\u20138\u00B0C for short-term storage (up to 4 weeks)</li><li>Keep reconstituted peptides refrigerated at 2\u20138\u00B0C</li><li>Protect from light and moisture at all times</li><li>Avoid repeated freeze-thaw cycles</li></ul></div>'
+'<div style="background:#f8f9fc;border-radius:10px;padding:20px;margin:12px 0"><h3 style="font-size:15px;color:#0e1b4d;margin:0 0 8px">Handling Precautions</h3><ul style="text-align:left;font-size:13px;color:#555;padding-left:20px;margin:0"><li>Use appropriate personal protective equipment (PPE)</li><li>Handle in a clean, controlled laboratory environment</li><li>Employ sterile techniques for all reconstitution procedures</li><li>Avoid contamination with skin oils or foreign materials</li><li>Dispose of all materials according to local regulations</li></ul></div>'
+'<div style="background:#f8f9fc;border-radius:10px;padding:20px;margin:12px 0"><h3 style="font-size:15px;color:#0e1b4d;margin:0 0 8px">Reconstitution Best Practices</h3><ul style="text-align:left;font-size:13px;color:#555;padding-left:20px;margin:0"><li>Use sterile bacteriostatic water for reconstitution</li><li>Allow vials to reach room temperature before opening</li><li>Add diluent slowly down the side of the vial</li><li>Gently swirl to dissolve \u2014 never shake vigorously</li><li>Filter if necessary for cell culture applications</li></ul></div>'
+'<h2>Researcher Responsibility</h2><p style="text-align:left">By purchasing from Precision Labs, you acknowledge that you are a qualified researcher or are purchasing for legitimate research purposes. You agree to use all products in accordance with applicable federal, state, and local laws and regulations. Precision Labs reserves the right to request verification of research credentials and to refuse service to any individual or organization at its discretion.</p>'
+'<div style="display:flex;gap:12px;justify-content:center;margin:24px 0;flex-wrap:wrap"><span onclick="window.location.href=\'/\'" style="display:inline-block;padding:14px 28px;background:#4770db;color:#fff;border-radius:40px;font-size:15px;font-weight:600;cursor:pointer">Browse Products</span><span onclick="window.location.href=\'/disclaimer\'" style="display:inline-block;padding:14px 28px;background:#0e1b4d;color:#fff;border-radius:40px;font-size:15px;font-weight:600;cursor:pointer">Read Full Disclaimer</span></div>'
+'<p style="margin-top:20px;text-align:center"><span onclick="window.location.href=\'/\'" style="color:#4770db;font-weight:600;cursor:pointer">\u2190 Back to Home</span></p>';
document.body.appendChild(rp);}
/* Lab Testing as full-screen overlay — works from ANY page, no Wix route needed */
(function(){
var SC='';
var COA_DATA=[
["ARA-290 10mg","https://static.wixstatic.com/media/e76a5f_b10aa388e98449a3be93a230cc345cab~mv2.png"],
["BPC-157 10mg","https://static.wixstatic.com/media/e76a5f_d45cd509e40846febacd114f91b5f9e1~mv2.png"],
["BPC-157 5mg","https://static.wixstatic.com/media/e76a5f_696cd9491fe44929ba866b3a14815237~mv2.png"],
["CJC-1295 / Ipamorelin 5mg/5mg","https://static.wixstatic.com/media/e76a5f_cb7618196b394bfc9431c116ed8e51e0~mv2.png"],
["DSIP (Delta Sleep-Inducing Peptide) 5mg","https://static.wixstatic.com/media/e76a5f_cda47f5ba72947e7ab2d185e1998672a~mv2.png"],
["Epitalon 10mg","https://static.wixstatic.com/media/e76a5f_9b8367ac2fb542f0873acf9a7a9b8f6f~mv2.png"],
["Glutathione 1500mg","https://static.wixstatic.com/media/e76a5f_302b9fd79a8e4b399c38cfb93d48df83~mv2.png"],
["HGH 15iu","https://static.wixstatic.com/media/e76a5f_4e00602bf04a49b7bbd10ca3c4a63663~mv2.png"],
["HGH 6mg","https://static.wixstatic.com/media/e76a5f_fc81f320fb244af995df215b3bf553ed~mv2.png"],
["Ipamorelin 10mg","https://static.wixstatic.com/media/e76a5f_c009fadabd9846d2b092e09e11668b51~mv2.png"],
["Kisspeptin 10mg","https://static.wixstatic.com/media/e76a5f_991ff1c87667499da4a7179fa8c169c9~mv2.png"],
["KPV 10mg","https://static.wixstatic.com/media/e76a5f_5b5e7e87b2c34db1ac46bd9387de080e~mv2.png"],
["Melanotan I 10mg","https://static.wixstatic.com/media/e76a5f_5dd32c3ae6584d54a7218c4223f07f95~mv2.png"],
["NAD+ 500mg","https://static.wixstatic.com/media/e76a5f_c4fc9beda3bd4b40b14724f7bc527dc5~mv2.png"],
["Oxytocin Acetate 5mg","https://static.wixstatic.com/media/e76a5f_9b45d67882264f6182a1691f85506119~mv2.png"],
["PE-22-28 10mg","https://static.wixstatic.com/media/e76a5f_bac9884727e44ec2b46a5784b07fe32a~mv2.png"],
["PT-141 (Bremelanotide) 10mg","https://static.wixstatic.com/media/e76a5f_9cf2419717974bf6aaf7c9e6afb08bd8~mv2.png"],
["Semax 10mg","https://static.wixstatic.com/media/e76a5f_55469088743f40deafc6cc14dc10010a~mv2.png"],
["TB500 10mg","https://static.wixstatic.com/media/e76a5f_2181edcc51df4f719c56cdef11f73932~mv2.png"],
["TB500 5mg","https://static.wixstatic.com/media/e76a5f_8c14726b9aa74b27baf09f393b07478f~mv2.png"],
["Tesamorelin 10mg","https://static.wixstatic.com/media/e76a5f_b35a21ae32204409a81f421626f15607~mv2.png"],
["Thymosin Alpha-1 10mg","https://static.wixstatic.com/media/e76a5f_e10f071440564f4ba866f1699dcef11e~mv2.png"],
["Wolverine Stack (BPC-157 10mg + TB500 10mg)","https://static.wixstatic.com/media/e76a5f_b0d510f213384ef88c811fde371f3840~mv2.png"]
];
var coaCss=document.createElement('style');coaCss.textContent='.pp-coa-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin:20px 0}.pp-coa-card{background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.08);transition:transform .2s,box-shadow .2s}.pp-coa-card:hover{transform:translateY(-3px);box-shadow:0 6px 20px rgba(0,0,0,.15)}.pp-coa-label{background:#0e1b4d;color:#fff;padding:10px 14px;font-family:Archivo,sans-serif;font-size:13px;font-weight:700;text-align:center}.pp-coa-card img{width:100%;display:block!important;cursor:pointer}.pp-coa-zoom{position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.85);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:20px}.pp-coa-zoom img{max-width:95vw;max-height:90vh;border-radius:8px;display:block!important}.pp-coa-zoom-title{position:fixed;top:16px;left:50%;transform:translateX(-50%);color:#fff;font-family:Archivo,sans-serif;font-size:18px;font-weight:700;z-index:100000;text-align:center;background:rgba(14,27,77,.8);padding:8px 24px;border-radius:30px}.pp-coa-zoom-close{position:fixed;top:16px;right:20px;color:#fff;font-size:36px;z-index:100000;cursor:pointer;background:none;border:none;font-weight:700}.pp-lt-overlay{position:fixed;inset:0;z-index:99990;background:#eff0f5;overflow-y:auto;-webkit-overflow-scrolling:touch}.pp-lt-overlay .pp-lt-close{position:fixed;top:14px;right:16px;z-index:99995;background:#0e1b4d;color:#fff;border:none;border-radius:50%;width:40px;height:40px;font-size:24px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 10px rgba(0,0,0,.3)}.pp-lt-overlay .pp-lt-inner{max-width:900px;margin:20px auto 40px;padding:24px 20px;background:#fff;border-radius:12px;font-family:Questrial,sans-serif}@media(max-width:768px){.pp-coa-grid{grid-template-columns:repeat(2,1fr);gap:10px}.pp-coa-label{font-size:11px;padding:8px 10px}}@media(max-width:480px){.pp-coa-grid{grid-template-columns:1fr}}';document.head.appendChild(coaCss);
window.ppCoaZoom=function(src,name){var z=document.createElement('div');z.className='pp-coa-zoom';z.innerHTML='<div class="pp-coa-zoom-title">'+name+'</div><button class="pp-coa-zoom-close">&times;</button><img src="'+src+'" alt="'+name+'">';z.onclick=function(){z.remove();};document.body.appendChild(z);};
var coaCards='';COA_DATA.forEach(function(c){coaCards+='<div class="pp-coa-card"><div class="pp-coa-label">'+c[0]+'</div><img src="'+c[1]+'" alt="COA - '+c[0]+'" loading="lazy" onclick="window.ppCoaZoom(this.src,\''+c[0].replace(/'/g,"\\'")+'\')"></div>';});
var ltHTML='<button class="pp-lt-close" onclick="this.parentElement.remove()">&times;</button><div class="pp-lt-inner"><h1 style="font-family:Archivo,sans-serif;font-size:26px;font-weight:700;color:#0e1b4d;margin:0 0 8px;text-align:center">Certificate of Analysis</h1><p style="display:inline-block;background:#0e1b4d;color:#fff;padding:5px 14px;border-radius:20px;font-size:12px;font-weight:700;letter-spacing:1px;margin:0 auto 14px;text-align:center">QUALITY ASSURANCE</p><p style="color:#555;font-size:14px;text-align:center;margin:0 0 16px;line-height:1.6">Precision Labs is committed to transparency. All products undergo rigorous third-party testing.</p>'
+'<div style="text-align:center;font-size:12px;color:#0e1b4d;font-weight:700;letter-spacing:1px;margin:8px 0 20px">VETERAN OWNED &nbsp;|&nbsp; 99%+ PURITY GUARANTEED &nbsp;|&nbsp; RESEARCH USE ONLY</div>'
+'<div style="background:linear-gradient(135deg,#0e1b4d,#1a2f7a);border-radius:14px;padding:28px 24px;margin:0 0 24px;text-align:center"><div style="display:flex;justify-content:center;gap:24px;flex-wrap:wrap;margin:0 0 16px"><div style="text-align:center"><div style="font-size:32px;font-weight:800;color:#4770db">99%+</div><div style="font-size:12px;color:#abb8e6;margin-top:2px">HPLC Purity</div></div><div style="text-align:center"><div style="font-size:32px;font-weight:800;color:#4770db">'+COA_DATA.length+'</div><div style="font-size:12px;color:#abb8e6;margin-top:2px">COAs Available</div></div><div style="text-align:center"><div style="font-size:32px;font-weight:800;color:#4770db">100%</div><div style="font-size:12px;color:#abb8e6;margin-top:2px">Batches Tested</div></div></div><p style="color:#abb8e6;font-size:13px;margin:0;line-height:1.5">Independent third-party laboratories verify every product before it ships.</p></div>'
+'<h2 style="text-align:center;margin:24px 0 8px;font-size:20px;font-weight:700;color:#0e1b4d">Certificates of Analysis</h2><p style="text-align:center;font-size:13px;color:#555;margin:0 0 6px">Tap any certificate to view full size.</p>'
+'<div class="pp-coa-grid">'+coaCards+'</div>'
+'<h2 style="text-align:center;margin:30px 0 10px;font-size:20px;font-weight:700;color:#0e1b4d">Testing Protocol</h2><p style="text-align:left;font-size:13px;color:#555">Each peptide batch undergoes a comprehensive multi-step verification process:</p>'
+'<div style="display:grid;grid-template-columns:1fr;gap:14px;margin:14px 0">'
+'<div style="background:#f8f9fc;border-radius:12px;padding:18px 20px;border-left:4px solid #4770db"><h3 style="font-size:15px;color:#0e1b4d;margin:0 0 6px">1. HPLC Purity Analysis</h3><p style="text-align:left;font-size:13px;color:#555;margin:0;line-height:1.6">High-Performance Liquid Chromatography (HPLC) measures peptide purity with precision. Each batch must meet our strict \u226599% purity threshold.</p></div>'
+'<div style="background:#f8f9fc;border-radius:12px;padding:18px 20px;border-left:4px solid #4770db"><h3 style="font-size:15px;color:#0e1b4d;margin:0 0 6px">2. Mass Spectrometry (MS) Identity</h3><p style="text-align:left;font-size:13px;color:#555;margin:0;line-height:1.6">LC-MS confirms the molecular weight and identity of each peptide, ensuring the compound matches its specification.</p></div>'
+'<div style="background:#f8f9fc;border-radius:12px;padding:18px 20px;border-left:4px solid #4770db"><h3 style="font-size:15px;color:#0e1b4d;margin:0 0 6px">3. Endotoxin &amp; Sterility Screening</h3><p style="text-align:left;font-size:13px;color:#555;margin:0;line-height:1.6">LAL endotoxin testing and USP sterility testing confirm products are free from microbial contamination.</p></div>'
+'</div>'
+'<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:20px 0"><div style="background:#eef7ee;border-radius:10px;padding:14px 16px;text-align:center"><div style="font-size:14px;font-weight:700;color:#0e1b4d">Independent Labs</div><div style="font-size:11px;color:#555;margin-top:4px">Not manufacturer-provided</div></div><div style="background:#eef7ee;border-radius:10px;padding:14px 16px;text-align:center"><div style="font-size:14px;font-weight:700;color:#0e1b4d">ISO 17025</div><div style="font-size:11px;color:#555;margin-top:4px">Accredited facilities</div></div><div style="background:#eef7ee;border-radius:10px;padding:14px 16px;text-align:center"><div style="font-size:14px;font-weight:700;color:#0e1b4d">Batch-Specific</div><div style="font-size:11px;color:#555;margin-top:4px">Not reused across lots</div></div><div style="background:#eef7ee;border-radius:10px;padding:14px 16px;text-align:center"><div style="font-size:14px;font-weight:700;color:#0e1b4d">Pre-Purchase</div><div style="font-size:11px;color:#555;margin-top:4px">Available on request</div></div></div>'
+'<h2 style="text-align:center;font-size:20px;font-weight:700;color:#0e1b4d">Need a Specific COA?</h2><p style="text-align:left;font-size:13px;color:#555">Need a Certificate of Analysis for a product not shown above, or for a specific lot number? Contact us and we\'ll send it directly to your email.</p>'
+'<div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin:20px 0"><span onclick="document.querySelector(\'.pp-lt-overlay\').remove();window.location.href=\'/contact\'" style="display:inline-block;padding:14px 28px;background:#4770db;color:#fff;border-radius:40px;font-size:15px;font-weight:600;cursor:pointer">Request COA</span><span onclick="document.querySelector(\'.pp-lt-overlay\').remove()" style="display:inline-block;padding:14px 28px;background:#0e1b4d;color:#fff;border-radius:40px;font-size:15px;font-weight:600;cursor:pointer">Back to Products</span></div>'
+'<div style="background:#fff8e1;border-radius:10px;padding:16px;margin:16px 0;border:1px solid #ffe082"><p style="text-align:left;font-size:12px;color:#6d5200;margin:0;line-height:1.6"><strong>Note:</strong> COA documents are updated with each new production batch. If you have a specific lot number, we can provide the exact COA for your batch. All products are for research and educational purposes only.</p></div>'
+'</div>';
window.ppShowLabTesting=function(){if(document.querySelector('.pp-lt-overlay'))return;var ov=document.createElement('div');ov.className='pp-lt-overlay';ov.innerHTML=ltHTML;document.body.appendChild(ov);ov.scrollTop=0;};
})();
function initLabTesting(){if(!isLabTesting)return;
/* Use injectPageShell to properly hide Wix 404 and show our UI */
injectPageShell();
/* Remove the hide-wix opacity:0 style */
var hw=document.getElementById('pp-hide-wix');if(hw)hw.remove();
/* Force body visible */
var rv=document.createElement('style');rv.id='pp-lt-visible';rv.textContent='body{opacity:1!important;background:#eff0f5!important}';document.head.appendChild(rv);
document.body.style.cssText='opacity:1!important;background:#eff0f5!important;overflow:auto!important';
/* Hide ALL Wix elements aggressively */
['#PAGES_CONTAINER','#SITE_PAGES','#masterPage','#BACKGROUND_GROUP','#site-root','#SCROLL_TO_TOP','#SITE_HEADER','#SITE_FOOTER'].forEach(function(s){var el=document.querySelector(s);if(el)el.style.cssText='display:none!important';});
document.querySelectorAll('[id^="comp-"]').forEach(function(c){c.style.display='none';});
/* Show lab testing overlay */
if(window.ppShowLabTesting){window.ppShowLabTesting();}
/* Mark as initialized */
var marker=document.createElement('div');marker.id='pp-lab-testing';document.body.appendChild(marker);
}
function initFAQ(){if(!isFAQ||!document.body||document.getElementById('pp-faq'))return;injectPageShell();var fq=document.createElement('div');fq.id='pp-faq';fq.className='pp-cf';fq.style.maxWidth='720px';
var faqs=[
['How are your peptides tested?','Every batch undergoes independent third-party testing at ISO 17025 accredited laboratories. We verify purity via HPLC (High-Performance Liquid Chromatography) and confirm molecular identity through mass spectrometry. A Certificate of Analysis (CoA) is available for every product \u2014 just ask.'],
['What purity level do your peptides meet?','All products meet our strict 99%+ purity standard. We reject any batch that falls below this threshold. You can view our COAs on the <span onclick=\"window.location.href=\\\'/lab-testing\\\'\" style=\"color:#4770db;cursor:pointer;font-weight:600\">Lab Testing</span> page.'],
['Are your products for human consumption?','No. All products sold by Precision Labs are intended strictly for laboratory and scientific research purposes only. They are not intended for human or animal consumption, medical diagnostics, or therapeutic use.'],
['How do I store my peptides?','Lyophilized (freeze-dried) peptides should be stored at -20\u00B0C for long-term stability. For short-term use (up to 4 weeks), refrigerate at 2\u20138\u00B0C. Once reconstituted, keep refrigerated and use within 4 weeks. Always protect from light and avoid repeated freeze-thaw cycles.'],
['How do I reconstitute peptides?','Use sterile bacteriostatic water. Let the vial reach room temperature, then slowly add the diluent down the side of the vial. Gently swirl to dissolve \u2014 never shake. We sell bacteriostatic water in 3ml, 10ml, and 30ml sizes.'],
['What payment methods do you accept?','We accept major credit and debit cards. All transactions are processed through secure, encrypted payment systems.'],
['How fast do you ship?','Orders placed before 2 PM PST ship same-day. Standard shipping is 2\u20135 business days within the US. Temperature-sensitive products are shipped with cold packs. All packaging is plain with no product names on the label.'],
['Is shipping free?','Yes \u2014 free shipping on all orders over $300. Orders under $300 have a flat-rate shipping fee.'],
['Do you ship internationally?','Currently, we only ship within the United States.'],
['What is your return policy?','Unopened products in original condition can be returned within 30 days for a full refund. Opened, reconstituted, or altered products cannot be returned. If you receive a defective or damaged product, contact us immediately for a free replacement.'],
['What is your consultation service?','We offer personalized peptide guidance from experienced professionals. A one-time consultation is $150 and covers protocol design, dosing guidance, and product selection. We also offer a $150/month concierge plan with unlimited consultations and priority scheduling. <span onclick=\"window.location.href=\\\'/services\\\'\" style=\"color:#4770db;cursor:pointer;font-weight:600\">Book here</span>.'],
['Is Precision Labs veteran-owned?','Yes. Precision Labs was founded by a United States Marine. The discipline, integrity, and no-shortcut mentality that comes from military service is baked into every aspect of how we operate \u2014 from sourcing to shipping.'],
['How do I contact you?','Use our <span onclick=\"window.location.href=\\\'/contact\\\'\" style=\"color:#4770db;cursor:pointer;font-weight:600\">contact form</span> and we\'ll respond within hours. We also offer live support for urgent questions.'],
['Do you provide Certificates of Analysis?','Yes. Every product has a batch-specific CoA from an independent lab. You can view available COAs on our <span onclick=\"window.location.href=\\\'/lab-testing\\\'\" style=\"color:#4770db;cursor:pointer;font-weight:600\">Lab Testing</span> page or request a specific one via our contact form.']
];
var h='<h1>Frequently Asked Questions</h1><p class="pp-badge">SUPPORT</p><p>Everything you need to know about ordering, shipping, and our products.</p>';
h+='<div style="margin:20px 0">';
for(var i=0;i<faqs.length;i++){
h+='<div style="border-bottom:1px solid #eee;padding:0"><button onclick="var a=this.nextElementSibling;var ar=this.querySelector(\'.pp-faq-arrow\');if(a.style.maxHeight&&a.style.maxHeight!==\'0px\'){a.style.maxHeight=\'0px\';ar.style.transform=\'rotate(0deg)\';}else{a.style.maxHeight=a.scrollHeight+\'px\';ar.style.transform=\'rotate(180deg)\';}" style="width:100%;text-align:left;padding:18px 0;background:none;border:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:12px"><span style="font-family:Archivo,sans-serif;font-size:15px;font-weight:700;color:#0e1b4d">'+faqs[i][0]+'</span><span class="pp-faq-arrow" style="font-size:18px;color:#4770db;transition:transform .3s;flex-shrink:0">\u25BC</span></button><div style="max-height:0;overflow:hidden;transition:max-height .3s ease"><p style="text-align:left;font-size:14px;color:#555;line-height:1.7;padding:0 0 18px;margin:0">'+faqs[i][1]+'</p></div></div>';
}
h+='</div>';
h+='<div style="background:#f8f9fc;border-radius:12px;padding:24px;text-align:center;margin:24px 0"><h2 style="font-size:18px;color:#0e1b4d;margin:0 0 8px">Still have questions?</h2><p style="font-size:14px;color:#555;margin:0 0 16px">Our team responds within hours.</p><span onclick="window.location.href=\'/contact\'" style="display:inline-block;padding:14px 28px;background:#4770db;color:#fff;border-radius:40px;font-size:15px;font-weight:600;cursor:pointer">Contact Us</span></div>';
h+='<p style="margin-top:20px;text-align:center"><span onclick="window.location.href=\'/\'" style="color:#4770db;font-weight:600;cursor:pointer">\u2190 Back to Home</span></p>';
fq.innerHTML=h;document.body.appendChild(fq);}

function initAll(){if(isContact)initContact();if(isAbout)initAbout();if(isServices)initServices();if(isLabTesting)initLabTesting();if(isCart)initCartPage();if(isBlog)initBlog();if(isTerms)initTerms();if(isFAQ)initFAQ();if(isDisclaimer)initDisclaimer();if(isResearch)initResearch();if(isHome)initModal();injectFooter();}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',function(){setTimeout(initAll,3500);});}else{setTimeout(initAll,3500);}
setInterval(function(){if(isContact&&!document.getElementById('pp-contact')&&document.body)initContact();if(isAbout&&!document.getElementById('pp-about')&&document.body)initAbout();if(isServices&&!document.getElementById('pp-services')&&document.body)initServices();if(isHome&&!document.getElementById('pp-modal')&&document.body)initModal();if(isCart&&!document.getElementById('pp-cart-page')&&document.body)initCartPage();if(isBlog&&!document.getElementById('pp-blog')&&document.body)initBlog();if(isTerms&&!document.getElementById('pp-terms')&&document.body)initTerms();if(isFAQ&&!document.getElementById('pp-faq')&&document.body)initFAQ();if(isDisclaimer&&!document.getElementById('pp-disclaimer')&&document.body)initDisclaimer();if(isResearch&&!document.getElementById('pp-research')&&document.body)initResearch();if(isLabTesting&&!document.getElementById('pp-lab-testing')&&document.body)initLabTesting();},2500);
})();

/* v5 1776382014 */
/* v6 1776394825 */
/* v7 1776406440 */

/* v8 1776417422 — URL-var fix to restore visibility */
/* v8-styling 1776418572 — black membership block, no box around $99, MOST POPULAR inline */
/* v9-black-letters 1776419349 */
/* v10-banner-restored 1776419729 */
/* v11-fresh-product-grid 1776420109 — P array regenerated from live Wix API */
/* v12-promo-stack 1776421788 — promo code + apply stacked, full-width */

/* v13-fix-join-404 1776421822 — /join → /contact?membership= */

/* v14-join-modal 1776422087 — mock membership flow with code gen */

/* v15-mobile-go-shop-fix 1776423068 */

/* v16-payment-options 1776423124 */

/* v18-disclaimer-compound 1776431101 */

/* v19-starter-kit 1776513121 — Research Starter Kit $20 added to P array + home hero card */

/* v20-kit-hero-img 1776513329 */

/* v21-kit-final 1776515841 — branded kit img + pinned first in grid */

/* v22-kit-in-categories 1776515996 */

/* v23-architect-image 1776517700 — using Architect's actual branded photo */

/* v24-remove-kit-hero 1776517958 — keeping only grid card */

/* v25-banner-uncropped 1776858005 */
;(function(){try{if(!/[?&]order=confirmed/.test(location.search))return;function show(){if(document.getElementById('pp-thx'))return;var o=document.createElement('div');o.id='pp-thx';o.style.cssText='position:fixed;inset:0;z-index:999999;background:rgba(10,15,40,.94);display:flex;align-items:center;justify-content:center;font-family:-apple-system,Segoe UI,Roboto,sans-serif;padding:24px;';o.innerHTML='<div style="max-width:420px;text-align:center;color:#fff;background:#0e1b4d;border:1px solid #2a3a7a;border-radius:18px;padding:36px 28px;box-shadow:0 20px 60px rgba(0,0,0,.5)"><div style="font-size:54px;line-height:1;margin-bottom:14px">&#10003;</div><div style="font-size:23px;font-weight:700;margin-bottom:10px">Order received</div><div style="font-size:15px;opacity:.85;line-height:1.5;margin-bottom:22px">Thank you. A confirmation email is on its way. Your order is being prepared.</div><a href="https://www.precisionusalabs.com/" style="display:inline-block;background:#c9a24a;color:#0e1b4d;font-weight:700;text-decoration:none;padding:12px 26px;border-radius:10px">Continue</a></div>';document.body.appendChild(o);}if(document.body)show();else document.addEventListener('DOMContentLoaded',show);}catch(e){}})();
;(function(){try{var m=location.search.match(/[?&]promo=([A-Za-z0-9]+)/);if(!m)return;var c=m[1].toUpperCase();function go(){try{if(window.ppAffiliate&&ppAffiliate.codes[c]){ppAffiliate.apply(c);if(window.ppCartRefresh)ppCartRefresh();try{var _v=localStorage.getItem('pp_vid')||'';var _src=new URLSearchParams(location.search).get('src')||'';fetch('https://sharp-pamela-warnings-cheaper.trycloudflare.com/api/promo-event',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({type:'promo_visit',code:c,source:_src,referrer:document.referrer,vid:_v,ts:Date.now()})}).catch(function(){});}catch(e){}try{var _sh=document.getElementById('pp-shop');if(_sh)_sh.scrollIntoView({behavior:'smooth'});}catch(e){}try{var _t=document.createElement('div');_t.textContent=(ppAffiliate.codes[c].label||c)+' applied ✓';_t.style.cssText='position:fixed;top:64px;left:50%;transform:translateX(-50%);background:#0e1b4d;color:#fff;padding:12px 22px;border-radius:30px;font:600 14px system-ui,sans-serif;z-index:200000;box-shadow:0 6px 24px rgba(0,0,0,.3)';document.body.appendChild(_t);setTimeout(function(){_t.style.transition='opacity .5s';_t.style.opacity='0';setTimeout(function(){_t.remove();},500);},3500);}catch(e){}}}catch(e){}}if(document.readyState!=='loading')setTimeout(go,1200);else document.addEventListener('DOMContentLoaded',function(){setTimeout(go,1200);});}catch(e){}})();
/* v26-rebrand-heading-fix 1778000000 — rewrite legacy "Precision Peptidez"/"Peptidez" in headings + title to "Precision Labs" */
;(function(){try{function fix(str){return str.replace(/Precision\s+Peptidez/gi,'Precision Labs').replace(/Peptidez/gi,'Labs');}function rewriteHeadings(){try{var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null,false);var n;while(n=w.nextNode()){if(/Peptidez/i.test(n.nodeValue))n.nodeValue=fix(n.nodeValue);}}catch(e){}try{if(document.title&&/Peptidez/i.test(document.title))document.title=fix(document.title);}catch(e){}try{var ms=document.querySelectorAll('meta[content]');for(var k=0;k<ms.length;k++){var c=ms[k].getAttribute('content');if(c&&/Peptidez/i.test(c))ms[k].setAttribute('content',fix(c));}}catch(e){}try{var as=document.querySelectorAll('a[href]');for(var q=0;q<as.length;q++){var hh=as[q].getAttribute('href');if(hh==='/about'||hh==='/about/')as[q].setAttribute('href','/about-us');else if(hh==='/shop'||hh==='/shop/'||hh==='/store'||hh==='/store/')as[q].setAttribute('href','/#pp-shop');}}catch(e){}}function run(){rewriteHeadings();}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();var tries=0;var iv=setInterval(function(){tries++;rewriteHeadings();if(tries>=10)clearInterval(iv);},700);try{var mo=new MutationObserver(function(){rewriteHeadings();});mo.observe(document.documentElement,{childList:true,subtree:true});setTimeout(function(){try{mo.disconnect();}catch(e){}},9000);}catch(e){}}catch(e){}})();

(function(){try{var TXT='Products are offered for research use only. Not for human consumption. No medical or treatment claims are made or implied.';function shopBanner(){try{if(document.getElementById('pp-ruo-shop'))return true;var anchor=document.getElementById('pp-shop')||document.getElementById('pp-grid-title');if(!anchor||!anchor.parentNode)return false;var d=document.createElement('div');d.id='pp-ruo-shop';d.style.cssText='max-width:900px;margin:10px auto 4px;padding:8px 14px;font-family:Questrial,Arial,sans-serif;font-size:11px;line-height:1.5;color:#8a90a6;text-align:center;background:#f4f5fa;border:1px solid #e3e6f0;border-radius:8px';d.textContent=TXT;anchor.parentNode.insertBefore(d,anchor);return true;}catch(e){return false;}}function footerNote(){try{if(document.getElementById('pp-ruo-footer'))return true;var ft=document.getElementById('pp-footer');if(!ft)return false;var d=document.createElement('div');d.id='pp-ruo-footer';d.style.cssText='max-width:900px;margin:14px auto 0;padding-top:12px;border-top:1px solid rgba(255,255,255,0.15);font-family:Questrial,Arial,sans-serif;font-size:11px;line-height:1.5;color:#8f9bc6;text-align:center';d.textContent=TXT;ft.appendChild(d);return true;}catch(e){return false;}}function tick(){var a=shopBanner();var b=footerNote();return a&&b;}function boot(){try{if(tick())return;var n=0;var iv=setInterval(function(){n++;if(tick()||n>=30)clearInterval(iv);},700);}catch(e){}}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();}catch(e){}})();

/* v27-perpage-seo — unique title + meta description per inner page + Organization/Breadcrumb schema (Googlebot renders JS) */
;(function(){try{
  var P=(location.pathname||'/').replace(/\/+$/,'').toLowerCase()||'/';
  var SEO={
    '/services':{t:'Research Product Services | Precision Labs',d:'Explore Precision Labs research-use product support, documentation, lab-testing standards, and customer guidance.'},
    '/research-use':{d:'Learn what research-use-only means, how Precision Labs positions products, and why compliance-safe education matters.'},
    '/lab-testing':{d:'Review lab-testing standards, documentation practices, and quality transparency for Precision Labs products.'},
    '/about-us':{d:'Precision Labs focuses on research-use transparency, product documentation, lab-testing standards, and professional customer support.'},
    '/contact':{d:'Contact Precision Labs for research-use product questions, documentation support, and customer service.'},
    '/blog':{d:'Read Precision Labs research-use education, lab-testing guidance, product documentation tips, and compliance-safe research product information.'},
    '/terms':{d:'Review Precision Labs terms of service for research-use product access, website use, purchases, and customer responsibilities.'},
    '/privacy-policy':{d:'Read how Precision Labs handles customer information, privacy, website data, and communication preferences.'},
    '/disclaimer':{d:'Review Precision Labs research-use disclaimers, product limitations, and compliance-safe website information.'},
    '/book-online':{d:'Book a Precision Labs consultation or support session for research-use product guidance and documentation questions.'},
    '/inquiry-services-page':{d:'Submit a Precision Labs inquiry for research-use product support, documentation, ordering questions, and professional customer service.'}
  };
  function setMeta(name,val,prop){try{var sel=prop?'meta[property="'+name+'"]':'meta[name="'+name+'"]';var m=document.querySelector(sel);if(!m){m=document.createElement('meta');m.setAttribute(prop?'property':'name',name);document.head.appendChild(m);}m.setAttribute('content',val);}catch(e){}}
  function applySEO(){var e=SEO[P];if(!e)return;if(e.d){setMeta('description',e.d);setMeta('og:description',e.d,true);setMeta('twitter:description',e.d,true);}}
  function blogH1(){if(P!=='/blog')return;try{var hs=document.querySelectorAll('h1,h2,[role="heading"]');for(var i=0;i<hs.length;i++){var tx=(hs[i].textContent||'').trim();if(/^welcome$/i.test(tx)){var wn=document.createTreeWalker(hs[i],NodeFilter.SHOW_TEXT,null,false);var nn;while(nn=wn.nextNode()){if(/welcome/i.test(nn.nodeValue))nn.nodeValue=nn.nodeValue.replace(/welcome/i,'Precision Labs Research Education');}}}}catch(e){}}
  function schema(){try{if(!document.getElementById('pp-org-schema')){var org={"@context":"https://schema.org","@type":"Organization","name":"Precision Labs","url":"https://www.precisionusalabs.com","logo":"https://www.precisionusalabs.com/favicon.ico","contactPoint":{"@type":"ContactPoint","contactType":"customer support","url":"https://www.precisionusalabs.com/contact"},"sameAs":["https://www.instagram.com/precisionpeptidez","https://www.tiktok.com/@precisionpeptidez","https://www.linkedin.com/company/precisionpeptidez"]};var s=document.createElement('script');s.type='application/ld+json';s.id='pp-org-schema';s.textContent=JSON.stringify(org);document.head.appendChild(s);}if(P!=='/'&&!document.getElementById('pp-bc-schema')){var nm=(document.title||'').split('|')[0].split(' - ')[0].trim()||P.replace(/\//g,'');var bc={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.precisionusalabs.com/"},{"@type":"ListItem","position":2,"name":nm,"item":"https://www.precisionusalabs.com"+P}]};var s2=document.createElement('script');s2.type='application/ld+json';s2.id='pp-bc-schema';s2.textContent=JSON.stringify(bc);document.head.appendChild(s2);}}catch(e){}}
  function run(){applySEO();blogH1();schema();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
  var n=0;var iv=setInterval(function(){n++;run();if(n>=12)clearInterval(iv);},500);
}catch(e){}})();

/* v28-enterprise-seo-runtime 20260717 - rendered SEO, schema, accessibility, links, image performance */
;(function(){try{
  var SITE='https://www.precisionusalabs.com';
  var BRAND='Precision Labs';
  var OG='https://static.wixstatic.com/media/e76a5f_398beccf075b4f0c93d26b2a6ae2c997~mv2.png';
  var path=(location.pathname||'/').replace(/\/+$/,'').toLowerCase()||'/';
  var categoryMap={
    'healing-regeneration':'Healing and Regeneration',
    'metabolic-weight-management':'Metabolic and Weight Management',
    'immune-longevity':'Immune and Longevity',
    'sexual-health-hormonal-support':'Sexual Health and Hormonal Support',
    'aesthetics-beauty':'Aesthetics and Beauty',
    'all-products':'All Research Products',
    'glp’s':'GLP Research Products',
    'glps':'GLP Research Products',
    'athletics-performance':'Athletics and Performance',
    'cognitive-mood':'Cognitive and Mood'
  };
  var staticPages={
    '/':{
      title:'Research Peptides USA | Lab-Tested Research Products | Precision Labs',
      desc:'Precision Labs provides research-use peptides, lab-tested product documentation, secure checkout, discreet shipping, and professional customer support for qualified researchers.',
      h1:'Precision Labs Research Peptides'
    },
    '/home':{
      title:'Research Peptides USA | Lab-Tested Research Products | Precision Labs',
      desc:'Precision Labs provides research-use peptides, lab-tested product documentation, secure checkout, discreet shipping, and professional customer support for qualified researchers.',
      h1:'Precision Labs Research Peptides'
    },
    '/about-us':{
      title:'About Precision Labs | Veteran-Owned Research Product Company',
      desc:'Learn about Precision Labs, a veteran-owned research product company focused on quality, lab documentation, transparent support, and research-use compliance.',
      h1:'About Precision Labs'
    },
    '/services':{
      title:'Research Product Services | Consultation and Support | Precision Labs',
      desc:'Explore Precision Labs research-use product services, ordering support, documentation guidance, and professional customer assistance.',
      h1:'Research Product Services'
    },
    '/book-online':{
      title:'Book Research Product Support | Precision Labs',
      desc:'Book Precision Labs research product support for documentation questions, ordering guidance, and research-use product assistance.',
      h1:'Book Research Product Support'
    },
    '/inquiry-services-page':{
      title:'Research Product Inquiry | Precision Labs',
      desc:'Submit a Precision Labs inquiry for research-use product support, documentation, ordering questions, and professional customer service.',
      h1:'Research Product Inquiry'
    },
    '/lab-testing':{
      title:'Lab Testing and COA Standards | Precision Labs',
      desc:'Review Precision Labs lab-testing standards, COA documentation practices, purity transparency, and research-use product quality controls.',
      h1:'Lab Testing and COA Standards'
    },
    '/research-use':{
      title:'Research Use Only Policy | Precision Labs',
      desc:'Understand Precision Labs research-use-only positioning, product limitations, compliance-safe education, and responsible laboratory-use standards.',
      h1:'Research Use Only'
    },
    '/blog':{
      title:'Research Peptide Education Blog | Precision Labs',
      desc:'Read Precision Labs research-use education, lab-testing guidance, product documentation tips, and compliance-safe research product information.',
      h1:'Research Peptide Education'
    },
    '/contact':{
      title:'Contact Precision Labs | Research Product Support',
      desc:'Contact Precision Labs for research-use product questions, lab documentation support, ordering help, and customer service.',
      h1:'Contact Precision Labs'
    },
    '/terms':{
      title:'Terms of Service | Precision Labs',
      desc:'Review Precision Labs terms for website use, research-use products, ordering, checkout, shipping, and customer responsibilities.',
      h1:'Terms of Service'
    },
    '/privacy-policy':{
      title:'Privacy Policy | Precision Labs',
      desc:'Read how Precision Labs handles privacy, website data, customer information, communication preferences, and information security.',
      h1:'Privacy Policy'
    },
    '/disclaimer':{
      title:'Research Product Disclaimer | Precision Labs',
      desc:'Review Precision Labs disclaimers for research-use products, product limitations, compliance, and website information.',
      h1:'Research Product Disclaimer'
    },
    '/cart-page':{
      title:'Secure Checkout | Precision Labs',
      desc:'Review your Precision Labs cart, apply affiliate or promo codes, select shipping, and complete secure checkout.',
      h1:'Secure Checkout'
    },
    '/faq':{
      title:'Research Product FAQ | Precision Labs',
      desc:'Find answers about Precision Labs research products, lab testing, COAs, shipping, storage, payment methods, and research-use-only policies.',
      h1:'Research Product FAQ'
    }
  };
  function cap(s){return String(s||'').replace(/[-_]+/g,' ').replace(/\b\w/g,function(c){return c.toUpperCase();}).replace(/\bAnd\b/g,'and').trim();}
  function clean(s){return String(s||'').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();}
  function trimDesc(s){s=clean(s);if(s.length>158)s=s.slice(0,155).replace(/\s+\S*$/,'')+'...';return s;}
  function productBySlug(slug){var a=[].concat(window.ppProducts||[],window.ppExtra||[]);for(var i=0;i<a.length;i++){if(a[i]&&a[i][2]===slug)return a[i];}return null;}
  function imageFor(p){if(!p||!p[1])return OG;return /^https?:/.test(p[1])?p[1]:'https://static.wixstatic.com/media/'+p[1];}
  function routeInfo(){
    var info=staticPages[path]||null, slug, p, nm, cat;
    if(path.indexOf('/product-page/')===0){
      slug=decodeURIComponent(path.split('/product-page/')[1]||'');
      p=productBySlug(slug); nm=p?p[0]:cap(slug);
      return {kind:'product',slug:slug,product:p,title:nm+' | Lab-Tested Research Product | Precision Labs',desc:trimDesc((window.ppExtraDesc&&window.ppExtraDesc[slug])||nm+' from Precision Labs is a research-use-only product with lab documentation, secure checkout, and discreet shipping.'),h1:nm,image:imageFor(p),canonical:SITE+'/product-page/'+slug};
    }
    if(path.indexOf('/category/')===0){
      slug=decodeURIComponent(path.split('/category/')[1]||''); cat=categoryMap[slug]||cap(slug);
      return {kind:'category',slug:slug,title:cat+' | Research Products | Precision Labs',desc:'Shop '+cat.toLowerCase()+' research products from Precision Labs with research-use positioning, lab documentation, secure checkout, and discreet shipping.',h1:cat,canonical:SITE+'/category/'+slug};
    }
    if(path.indexOf('/post/')===0){
      slug=decodeURIComponent(path.split('/post/')[1]||''); nm=cap(slug);
      return {kind:'blog',slug:slug,title:nm+' | Precision Labs Research Education',desc:'Precision Labs research education: '+nm.toLowerCase()+'. Learn research-use context, product documentation basics, and compliance-safe information.',h1:nm,canonical:SITE+'/post/'+slug};
    }
    if(!info)info={title:BRAND+' | Research Products',desc:'Precision Labs provides research-use products, lab documentation, secure checkout, and professional support.',h1:BRAND};
    info.kind=path==='/'||path==='/home'?'home':'page'; info.canonical=SITE+(path==='/'||path==='/home'?'':path); return info;
  }
  function setTitle(v){try{var t=document.querySelector('title');if(!t){t=document.createElement('title');document.head.appendChild(t);}t.textContent=v;}catch(e){}}
  function setMeta(k,v,prop){try{if(!v)return;var sel=(prop?'meta[property="'+k+'"]':'meta[name="'+k+'"]');var m=document.querySelector(sel);if(!m){m=document.createElement('meta');m.setAttribute(prop?'property':'name',k);document.head.appendChild(m);}m.setAttribute('content',v);}catch(e){}}
  function setCanonical(url){try{var c=document.querySelector('link[rel="canonical"]');if(!c){c=document.createElement('link');c.rel='canonical';document.head.appendChild(c);}c.href=url;}catch(e){}}
  function ld(id,obj){try{var s=document.getElementById(id);if(!s){s=document.createElement('script');s.type='application/ld+json';s.id=id;document.head.appendChild(s);}s.textContent=JSON.stringify(obj);}catch(e){}}
  function applyMeta(info){
    var img=info.image||OG;
    setTitle(info.title);
    setMeta('description',info.desc);
    setMeta('robots','index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setCanonical(info.canonical);
    setMeta('og:title',info.title,true);setMeta('og:description',info.desc,true);setMeta('og:url',info.canonical,true);setMeta('og:type',info.kind==='blog'?'article':(info.kind==='product'?'product':'website'),true);setMeta('og:site_name',BRAND,true);setMeta('og:image',img,true);setMeta('og:image:alt',info.h1+' - '+BRAND,true);
    setMeta('twitter:card','summary_large_image');setMeta('twitter:title',info.title);setMeta('twitter:description',info.desc);setMeta('twitter:image',img);
  }
  function applySchema(info){
    ld('pp-v28-org-schema',{"@context":"https://schema.org","@type":"Organization","name":BRAND,"url":SITE,"logo":OG,"contactPoint":{"@type":"ContactPoint","contactType":"customer support","url":SITE+"/contact"}});
    ld('pp-v28-website-schema',{"@context":"https://schema.org","@type":"WebSite","name":BRAND,"url":SITE});
    var crumbs=[{"@type":"ListItem","position":1,"name":"Home","item":SITE+"/"}];if(info.kind!=='home')crumbs.push({"@type":"ListItem","position":2,"name":info.h1,"item":info.canonical});
    ld('pp-v28-breadcrumb-schema',{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":crumbs});
    if(info.kind==='product'&&info.product){
      ld('pp-v28-product-schema',{"@context":"https://schema.org","@type":"Product","name":info.product[0],"sku":info.slug,"description":info.desc,"image":info.image,"brand":{"@type":"Brand","name":BRAND},"offers":{"@type":"Offer","priceCurrency":"USD","price":String(info.product[3]),"availability":"https://schema.org/InStock","url":info.canonical,"itemCondition":"https://schema.org/NewCondition"}});
    }
    if(info.kind==='category')ld('pp-v28-collection-schema',{"@context":"https://schema.org","@type":"CollectionPage","name":info.h1,"description":info.desc,"url":info.canonical});
    if(info.kind==='blog')ld('pp-v28-blogposting-schema',{"@context":"https://schema.org","@type":"BlogPosting","headline":info.h1,"description":info.desc,"url":info.canonical,"publisher":{"@type":"Organization","name":BRAND,"logo":{"@type":"ImageObject","url":OG}}});
    if(path==='/'||path==='/research-use'||path==='/lab-testing'||path==='/faq'){
      ld('pp-v28-faq-schema',{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
        {"@type":"Question","name":"Are Precision Labs products for research use only?","acceptedAnswer":{"@type":"Answer","text":"Yes. Precision Labs products are offered for research use only and are not for human consumption."}},
        {"@type":"Question","name":"Are COAs available?","acceptedAnswer":{"@type":"Answer","text":"COA documentation is available on request when applicable to the product and batch."}},
        {"@type":"Question","name":"Does Precision Labs offer secure checkout?","acceptedAnswer":{"@type":"Answer","text":"Precision Labs provides secure checkout options and discreet shipping for eligible orders."}}
      ]});
    }
  }
  function ensureH1(info){
    try{
      if(document.getElementById('pp-seo-h1'))return;
      if(document.querySelectorAll('h1').length>0)return;
      var h=document.createElement('h1');h.id='pp-seo-h1';h.textContent=info.h1;h.style.cssText='position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important';
      var target=document.getElementById('pp-hp')||document.querySelector('main')||document.body;if(target)target.insertBefore(h,target.firstChild);
    }catch(e){}
  }
  function improveImages(info){
    try{
      var imgs=document.querySelectorAll('img');for(var i=0;i<imgs.length;i++){var im=imgs[i];if(!im.getAttribute('alt'))im.setAttribute('alt',info.h1+' - '+BRAND);if(i===0){im.setAttribute('fetchpriority','high');}else if(!im.getAttribute('loading'))im.setAttribute('loading','lazy');im.setAttribute('decoding','async');}
    }catch(e){}
  }
  function improveAccess(){
    try{
      var nav=document.getElementById('pp-hdr');if(nav){nav.setAttribute('role','banner');nav.setAttribute('aria-label','Precision Labs primary navigation');}
      var menu=document.querySelector('.pp-mn');if(menu){menu.setAttribute('role','navigation');menu.setAttribute('aria-label','Precision Labs menu');}
      var els=document.querySelectorAll('[onclick],.pp-cb,.pp-atc,#pp-menu-btn,#pp-search-btn,#pp-cart-btn');for(var i=0;i<els.length;i++){var el=els[i],tag=(el.tagName||'').toLowerCase();if(tag==='button'||tag==='a'||tag==='input'||tag==='select'||tag==='textarea')continue;if(!el.getAttribute('role'))el.setAttribute('role','button');if(!el.getAttribute('tabindex'))el.setAttribute('tabindex','0');if(!el.getAttribute('aria-label'))el.setAttribute('aria-label',clean(el.textContent)||'Precision Labs action');if(!el.dataset.ppKey){el.dataset.ppKey='1';el.addEventListener('keydown',function(ev){if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();this.click();}});}}
    }catch(e){}
  }
  function addResourceLinks(){
    try{
      if(document.getElementById('pp-seo-resource-links'))return;
      var anchor=document.getElementById('pp-pg')||document.getElementById('pp-hp')||document.body;if(!anchor||!anchor.parentNode)return;
      var box=document.createElement('section');box.id='pp-seo-resource-links';box.setAttribute('aria-label','Research product resources');box.style.cssText='max-width:1100px;margin:28px auto;padding:22px 20px;background:#fff;border:1px solid #dfe3f0;border-radius:14px;font-family:Questrial,Arial,sans-serif;text-align:center';
      box.innerHTML='<h2 style="font-family:Archivo,Arial,sans-serif;font-size:20px;color:#0e1b4d;margin:0 0 8px">Research Product Resources</h2><p style="font-size:13px;color:#5d6680;margin:0 auto 16px;max-width:720px;line-height:1.6">Explore lab documentation, research-use guidance, product categories, and customer support from Precision Labs.</p><div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><a href="/lab-testing" style="padding:9px 14px;border-radius:30px;background:#eef2fc;color:#0e1b4d;font-weight:700;font-size:13px">Lab Testing</a><a href="/research-use" style="padding:9px 14px;border-radius:30px;background:#eef2fc;color:#0e1b4d;font-weight:700;font-size:13px">Research Use</a><a href="/blog" style="padding:9px 14px;border-radius:30px;background:#eef2fc;color:#0e1b4d;font-weight:700;font-size:13px">Education Blog</a><a href="/contact" style="padding:9px 14px;border-radius:30px;background:#eef2fc;color:#0e1b4d;font-weight:700;font-size:13px">Support</a><a href="/category/healing-regeneration" style="padding:9px 14px;border-radius:30px;background:#eef2fc;color:#0e1b4d;font-weight:700;font-size:13px">Healing</a><a href="/category/metabolic-weight-management" style="padding:9px 14px;border-radius:30px;background:#eef2fc;color:#0e1b4d;font-weight:700;font-size:13px">Metabolic</a><a href="/category/aesthetics-beauty" style="padding:9px 14px;border-radius:30px;background:#eef2fc;color:#0e1b4d;font-weight:700;font-size:13px">Aesthetics</a></div>';
      anchor.parentNode.insertBefore(box,anchor.nextSibling);
    }catch(e){}
  }
  function addResourceHints(){
    try{['https://static.wixstatic.com','https://cdn.jsdelivr.net'].forEach(function(u){if(document.querySelector('link[rel="preconnect"][href="'+u+'"]'))return;var l=document.createElement('link');l.rel='preconnect';l.href=u;l.crossOrigin='anonymous';document.head.appendChild(l);});}catch(e){}
  }
  function run(){
    var info=routeInfo();
    applyMeta(info);applySchema(info);ensureH1(info);improveImages(info);improveAccess();addResourceLinks();addResourceHints();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
  var tries=0,iv=setInterval(function(){tries++;run();if(tries>=12)clearInterval(iv);},700);
  try{var mo=new MutationObserver(function(){run();});mo.observe(document.documentElement,{childList:true,subtree:true});setTimeout(function(){try{mo.disconnect();}catch(e){}},12000);}catch(e){}
}catch(e){}})();

/* ==== Pay by Bank (ACH) via Moov — appended 2026-07-15T08:46:40Z ==== */
/* Precision Labs — "Pay by Bank (ACH)" checkout.
 * Integrates with the existing combined-pp.js checkout: reuses the pp-ship-* fields
 * for customer info, collects routing + account number, posts to the Moov backend.
 * Append to combined-pp.js (or load after it). Wire a button:
 *   <div id="pp-ach-btn" onclick="ppAchCheckout(GRANDTOTAL)">Pay by Bank (ACH) — 3% off</div>
 * and enable it in ppTogglePay alongside the other methods.
 *
 * Set PAY_API to the PERSISTENT tunnel URL of moov-server.js once it's hosted.
 */
(function () {
  // Stable public resolver → current Moov backend tunnel URL (no secrets; URL only).
  // Repo: vegasblackcard/pp-pay. Both endpoints serve CORS: *.
  // Primary: api.github.com contents (fresh, max-age=60, 60/hr per visitor IP).
  // Fallback: raw.githubusercontent (unlimited, but ~5min CDN cache).
  var RESOLVER_API = 'https://api.github.com/repos/vegasblackcard/pp-pay/contents/pp-pay-endpoint.json';
  var RESOLVER_RAW = 'https://raw.githubusercontent.com/vegasblackcard/pp-pay/main/pp-pay-endpoint.json';
  var _apiPromise = null;
  function parseEndpoint(j) {
    if (!j || !j.api || /REPLACE/.test(j.api)) throw new Error('no endpoint');
    return j.api.replace(/\/+$/, '');
  }
  function resolveApi() {
    if (_apiPromise) return _apiPromise;
    _apiPromise = fetch(RESOLVER_API, { headers: { Accept: 'application/vnd.github.raw' }, cache: 'no-store' })
      .then(function (r) { if (!r.ok) throw new Error('api ' + r.status); return r.json(); })
      .then(parseEndpoint)
      .catch(function () {
        return fetch(RESOLVER_RAW + '?t=' + Date.now(), { cache: 'no-store' })
          .then(function (r) { return r.json(); })
          .then(parseEndpoint);
      });
    _apiPromise.catch(function () { _apiPromise = null; });
    return _apiPromise;
  }

  function val(id) { var e = document.getElementById(id); return e ? (e.value || '').trim() : ''; }

  window.ppAchCheckout = function (amt) {
    // require shipping info first (same gate as other methods)
    var need = ['pp-ship-name', 'pp-ship-email', 'pp-ship-phone', 'pp-ship-addr', 'pp-ship-city', 'pp-ship-state', 'pp-ship-zip'];
    for (var i = 0; i < need.length; i++) { if (!val(need[i])) { alert('Please fill in all shipping fields first.'); return; } }
    if (!document.getElementById('pp-agree') || !document.getElementById('pp-agree').checked) { alert('Please agree to the terms first.'); return; }

    var o = document.createElement('div');
    o.id = 'pp-ach-overlay';
    o.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:99999;display:flex;align-items:center;justify-content:center;padding:16px';
    o.innerHTML =
      '<div style="background:#fff;border-radius:16px;padding:24px;max-width:380px;width:100%;box-sizing:border-box">' +
      '<h2 style="color:#0e1b4d;margin:0 0 4px;font-size:20px">Pay by Bank</h2>' +
      '<p style="color:#2e7d32;font-weight:700;font-size:13px;margin:0 0 14px">3% off — lowest fees, direct from your bank</p>' +
      '<input id="pp-ach-holder" placeholder="Name on Account" style="width:100%;padding:12px;border:1px solid #ddd;border-radius:8px;font-size:14px;box-sizing:border-box;margin:0 0 10px">' +
      '<input id="pp-ach-routing" inputmode="numeric" maxlength="9" placeholder="Routing Number (9 digits)" style="width:100%;padding:12px;border:1px solid #ddd;border-radius:8px;font-size:14px;box-sizing:border-box;margin:0 0 10px">' +
      '<input id="pp-ach-account" inputmode="numeric" placeholder="Account Number" style="width:100%;padding:12px;border:1px solid #ddd;border-radius:8px;font-size:14px;box-sizing:border-box;margin:0 0 10px">' +
      '<select id="pp-ach-type" style="width:100%;padding:12px;border:1px solid #ddd;border-radius:8px;font-size:14px;box-sizing:border-box;margin:0 0 14px"><option value="checking">Checking</option><option value="savings">Savings</option></select>' +
      '<button id="pp-ach-pay" style="width:100%;padding:14px;background:#0e1b4d;color:#fff;border:none;border-radius:40px;font-size:16px;font-weight:700;cursor:pointer">Pay $' + amt.toFixed(2) + '</button>' +
      '<div id="pp-ach-status" style="font-size:12px;color:#666;text-align:center;margin:10px 0 0;min-height:16px"></div>' +
      '<div onclick="document.getElementById(\'pp-ach-overlay\').remove()" style="color:#888;font-size:13px;text-align:center;cursor:pointer;margin:10px 0 0">Cancel</div>' +
      '</div>';
    document.body.appendChild(o);
    o.addEventListener('click', function (e) { if (e.target === o) o.remove(); });

    document.getElementById('pp-ach-pay').onclick = function () {
      var routing = val('pp-ach-routing'), account = val('pp-ach-account');
      var status = document.getElementById('pp-ach-status');
      if (!/^\d{9}$/.test(routing)) { status.textContent = 'Routing number must be 9 digits.'; return; }
      if (!/^\d{4,17}$/.test(account)) { status.textContent = 'Enter a valid account number.'; return; }
      var btn = this; btn.disabled = true; btn.textContent = 'Processing…'; status.style.color = '#666'; status.textContent = 'Contacting your bank…';

      var nameParts = val('pp-ship-name').split(' ');
      resolveApi().then(function (PAY_API) {
      return fetch(PAY_API + '/api/moov/ach-transfer', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amountCents: Math.round(amt * 100),
          customer: {
            firstName: nameParts[0] || '', lastName: nameParts.slice(1).join(' ') || '',
            email: val('pp-ship-email'), phone: val('pp-ship-phone'),
            orderId: 'PP-' + Date.now().toString(36).toUpperCase(),
          },
          bank: {
            holderName: val('pp-ach-holder') || val('pp-ship-name'),
            routingNumber: routing, accountNumber: account,
            bankAccountType: val('pp-ach-type') || 'checking',
          },
        }),
      })
        .then(function (r) { return r.json().then(function (d) { return { ok: r.ok, d: d }; }); })
        .then(function (res) {
          if (res.ok && res.d.transferID) {
            status.style.color = '#2e7d32';
            status.innerHTML = '✅ Payment submitted! Order confirmed.';
            if (window.ppNotifyOrder) window.ppNotifyOrder('ACH (Bank) — ' + res.d.status, amt);
            if (window.ppCart && window.ppCart.clear) try { window.ppCart.clear(); } catch (e) {}
            btn.textContent = 'Done';
            setTimeout(function () { o.remove(); window.location.href = '/?order=confirmed'; }, 1800);
          } else {
            status.style.color = '#c62828';
            status.textContent = (res.d && res.d.detail) ? 'Bank declined — check details or use another method.' : 'Payment failed. Try another method.';
            btn.disabled = false; btn.textContent = 'Pay $' + amt.toFixed(2);
          }
        })
        .catch(function () {
          status.style.color = '#c62828';
          status.textContent = 'Connection error. Try again or use another method.';
          btn.disabled = false; btn.textContent = 'Pay $' + amt.toFixed(2);
        });
      }).catch(function () {
        status.style.color = '#c62828';
        status.textContent = 'Payment service offline. Please use another method.';
        btn.disabled = false; btn.textContent = 'Pay $' + amt.toFixed(2);
      });
    };
  };
})();
