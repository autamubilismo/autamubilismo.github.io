(function(){
  const D=window.TR_DATA||{};
  const C=D.catalog||[];
  const $=(s,r=document)=>r.querySelector(s);
  const esc=s=>(s??'').toString().replace(/[&<>]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[m]));
  const attr=s=>esc(s).replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  const norm=s=>(s||'').toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  const ptName=s=>{s=(s||'').toString();return s.includes('/')?s.split('/').map(x=>x.trim()).filter(Boolean).pop():s};
  const kindPT=k=>({'Pesca':'Pesca','Frutos do mar':'Frutos do mar','Isca':'Isca','Ferramenta de pesca':'Ferramenta de pesca','Lixo de pesca':'Lixo de pesca','Guia de pesca':'Guia de pesca'}[k]||k);
  const icon=r=>{const t=norm((r.kind||'')+' '+(r.name||''));if(t.includes('isca'))return'🪱';if(t.includes('ferramenta')||t.includes('vara')||t.includes('armadilha'))return'🎣';if(t.includes('lixo'))return'🗑️';if(t.includes('frutos')||t.includes('camarao')||t.includes('lagosta')||t.includes('caranguejo')||t.includes('polvo')||t.includes('lula'))return'🦐';if(t.includes('guia'))return'🗺️';return'🐟'};
  function rawText(o){return Object.entries(o||{}).filter(([k,v])=>!['search','display'].includes(k)&&v!=null&&String(v).trim()!=='').map(([k,v])=>`${k}: ${Array.isArray(v)?v.join(', '):v}`).join(' • ')}
  function card(r){const raw=attr(encodeURIComponent(JSON.stringify(r)));const name=ptName(r.name);const desc=r.desc||rawText(r);return `<article class="db-card db-source detail-source" data-title="${attr(name)}" data-kind="${attr(r.kind)}" data-desc="${attr(desc)}" data-raw="${raw}" data-text="${attr(norm([name,r.name,r.kind,desc,r.aliases,r.category,r.location,r.season,r.bait].flat().join(' ')))}"><button class="fav" type="button">★</button><div class="item-art">${icon(r)}</div><h3>${esc(name)}</h3><span class="tag">${esc(kindPT(r.kind))}</span><p>${esc(desc.slice(0,160))}</p><button class="more-info" type="button">Mais infos</button></article>`}
  function panel(t,b,l=''){return `<div class='panel'><div class='section-title'><h2>${t}</h2>${l}</div>${b}</div>`}
  function list(items){return items.length?`<div class="db-list">${items.map(card).join('')}</div>`:`<div class="empty-state show">Nada aqui ainda.</div>`}
  function chips(){return `<div class="chips fish-chipbar"><a class="chip active" href="#pesca">Tudo</a><a class="chip" href="#pesca-oleoso">Peixe oleoso</a><a class="chip" href="#pesca-branco">Peixe branco</a><a class="chip" href="#pesca-doce">Água doce</a><a class="chip" href="#pesca-salgada">Água salgada</a><a class="chip" href="#pesca-isca">Iscas</a><a class="chip" href="#pesca-armadilha">Armadilha</a></div>`}
  function render(){
    const root=$('#pesca');
    if(!root)return;
    const all=C.filter(x=>['Pesca','Frutos do mar','Isca','Ferramenta de pesca','Lixo de pesca','Guia de pesca'].includes(x.kind));
    const peixes=all.filter(x=>x.kind==='Pesca');
    const oleoso=peixes.filter(x=>norm(x.category+' '+x.desc+' '+x.aliases).includes('oleoso'));
    const branco=peixes.filter(x=>norm(x.category+' '+x.desc+' '+x.aliases).includes('branco'));
    const doce=peixes.filter(x=>norm(x.location+' '+x.desc).includes('agua doce'));
    const salgada=peixes.filter(x=>norm(x.location+' '+x.desc).includes('agua salgada'));
    const frutos=all.filter(x=>x.kind==='Frutos do mar');
    const iscas=all.filter(x=>x.kind==='Isca');
    const ferramentas=all.filter(x=>x.kind==='Ferramenta de pesca'||norm(x.search).includes('fish trap')||norm(x.name).includes('armadilha'));
    const lixo=all.filter(x=>x.kind==='Lixo de pesca'||x.kind==='Guia de pesca');
    root.innerHTML=panel('Pesca',`<p style="position:relative;z-index:1;color:var(--muted);line-height:1.45">Peixes, frutos do mar, iscas, varas, armadilha, locais e lixo de pesca. Toque em qualquer card para abrir detalhes.</p>${chips()}${list(all)}`)+panel('Peixe oleoso',list(oleoso))+panel('Peixe branco',list(branco))+panel('Água doce',list(doce))+panel('Água salgada',list(salgada))+panel('Frutos do mar',list(frutos))+panel('Iscas',list(iscas))+panel('Varas e armadilhas',list(ferramentas))+panel('Extras de pesca',list(lixo));
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',render);else render();
})();
