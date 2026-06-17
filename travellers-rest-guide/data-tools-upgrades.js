(function(){
  window.TR_DATA=window.TR_DATA||{};
  const C=window.TR_DATA.catalog=window.TR_DATA.catalog||[];
  const key=s=>(s||'').toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  function add(x){x.search=[x.name,x.kind,x.desc,x.aliases,x.tier,x.materials,x.source].flat().filter(Boolean).join(' ');if(!C.some(e=>key(e.name)===key(x.name)))C.push(x)}
  const source='Fandom Tools';
  const upgrades=[
    ['Picareta de Cobre','Cobre','25 Barras de Cobre + 35 Tábuas de Madeira','Primeira picareta craftável para mineração.'],
    ['Picareta de Ferro','Ferro','Picareta de Cobre x1 + 30 Barras de Ferro + 60 Tábuas de Madeira','Melhoria recomendada primeiro para avançar na mina.'],
    ['Picareta de Cobalto','Cobalto','Picareta de Ferro x1 + 45 Lingotes de Cobalto + 40 Tábuas de Madeira Nobre','Melhoria avançada de mineração.'],
    ['Pá de Cobre','Cobre','15 Barras de Cobre + 25 Tábuas de Madeira','Remove grama, cultivos e cava pontos de tesouro.'],
    ['Pá de Ferro','Ferro','Pá de Cobre x1 + 25 Barras de Ferro + 40 Tábuas de Madeira','Melhoria da pá.'],
    ['Pá de Cobalto','Cobalto','Pá de Ferro x1 + 30 Lingotes de Cobalto + 30 Tábuas de Madeira Nobre','Melhoria avançada da pá.'],
    ['Enxada de Cobre','Cobre','10 Barras de Cobre + 20 Tábuas de Madeira','Prepara e refaz solo para plantio.'],
    ['Enxada de Ferro','Ferro','Enxada de Cobre x1 + 10 Barras de Ferro + 30 Tábuas de Madeira','Melhoria da enxada.'],
    ['Enxada de Cobalto','Cobalto','Enxada de Ferro x1 + 15 Lingotes de Cobalto + 20 Tábuas de Madeira Nobre','Melhoria avançada da enxada.'],
    ['Machado de Cobre','Cobre','25 Barras de Cobre + 35 Tábuas de Madeira','Corta árvores e limpa obstáculos.'],
    ['Machado de Ferro','Ferro','Machado de Cobre x1 + 30 Barras de Ferro + 60 Tábuas de Madeira','Melhoria recomendada depois da picareta.'],
    ['Machado de Cobalto','Cobalto','Machado de Ferro x1 + 45 Lingotes de Cobalto + 40 Tábuas de Madeira Nobre','Melhoria avançada do machado.'],
    ['Regador de Cobre','Cobre','20 Barras de Cobre + 30 Tábuas de Madeira','Regador craftável/melhorável.'],
    ['Regador de Ferro','Ferro','Regador de Cobre x1 + 30 Barras de Ferro + 50 Tábuas de Madeira','Melhoria do regador.'],
    ['Regador de Cobalto','Cobalto','Regador de Ferro x1 + 40 Lingotes de Cobalto + 30 Tábuas de Madeira Nobre','Melhoria avançada do regador.']
  ];
  upgrades.forEach(([name,tier,materials,desc])=>add({kind:'Melhoria de ferramenta',name,tier,materials,desc,aliases:['ferramenta','melhoria','upgrade','material necessário','materiais necessários','cobre','ferro','cobalto'],source}));
  window.TR_DATA.toolUpgrades=C.filter(x=>x.kind==='Melhoria de ferramenta');
  window.TR_DATA.sources=window.TR_DATA.sources||[];
  if(!window.TR_DATA.sources.some(s=>s.label==='Fandom Tools'))window.TR_DATA.sources.push({label:'Fandom Tools',url:'https://travellers-rest.fandom.com/wiki/Tools',why:'Custos de ferramentas de cobre, ferro e cobalto.'});
})();
