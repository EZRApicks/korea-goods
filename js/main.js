const tabs=[...document.querySelectorAll('.switch button')],panels=[...document.querySelectorAll('.panel')];
function show(b){if(!tabs.some(t=>t.dataset.b===b))b='verish';
tabs.forEach(t=>t.setAttribute('aria-pressed',t.dataset.b===b));panels.forEach(p=>p.hidden=p.dataset.b!==b);
try{history.replaceState(null,'','#'+b)}catch(e){}}
tabs.forEach(t=>t.addEventListener('click',()=>show(t.dataset.b)));
show((location.hash||'').slice(1));
