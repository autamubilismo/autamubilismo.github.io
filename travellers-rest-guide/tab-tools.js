(function(){
  const D=window.TR_DATA||{};
  const upgrades=D.toolUpgrades||[];
  const $=(s,r=document)=>r.querySelector(s);
  const esc=s=>(s??'').toString().replace(/[&<>]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[m]));
  const attr=s=>esc(s).replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  const norm=s=>(s||'').toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  function card(r){const raw=attr(encodeURIComponent(JSON.stringify(r)));return `<article class="db-card detail-source tool-upgrade-card" data-title="${attr(r.name)}" data-kind="${attr(r.kind)}" data-desc="${attr(r.desc)}" data-raw="${raw}" data-text="${attr(norm([r.name,r.kind,r.tier,r.materials,r.desc].join(' ')))}"><div class="item-art">⚒️</div><h3>${esc(r.name)}</h3><span class="tag">${esc(r.tier)}</span><p>${esc(r.desc)}</p><div class="detail-row" style="margin-top:10px"><b>Materiais necessários</b><br><span>${esc(r.materials)}</span></div><button class="more-info" type="button">Mais infos</button></article>`}
  function panel(t,b){return `<div class='panel'><div class='section-title'><h2>${t}</h2></div>${b}</div>`}
  function list(items){return items.length?`<div class="db-list">${items.map(card).join('')}</div>`:`<div class="empty-state show">Sem dados ainda.</div>`}
  function render(){
    const root=$('#planner');
    if(!root||!upgrades.length)return;
    const cobre=upgrades.filter(x=>x.tier==='Cobre');
    const ferro=upgrades.filter(x=>x.tier==='Ferro');
    const cobalto=upgrades.filter(x=>x.tier==='Cobalto');
    const html=panel('Melhorias de ferramentas',`<p style="position:relative;z-index:1;color:var(--muted);line-height:1.45">Materiais necessários para cada melhoria de ferramenta. Toque em qualquer card para abrir detalhes.</p><div class="chips"><a class="chip active" href="#tools-cobre">Cobre</a><a class="chip" href="#tools-ferro">Ferro</a><a class="chip" href="#tools-cobalto">Cobalto</a></div>${list(upgrades)}`)+panel('Ferramentas de cobre',list(cobre))+panel('Ferramentas de ferro',list(ferro))+panel('Ferramentas de cobalto',list(cobalto));
    root.insertAdjacentHTML('afterbegin',html);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',render);else render();
})();
