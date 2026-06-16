(function(){
  window.TR_DATA=window.TR_DATA||{};
  const C=window.TR_DATA.catalog=window.TR_DATA.catalog||[];
  const key=s=>(s||'').toString().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  function add(x){x.search=[x.name,x.kind,x.desc,x.aliases,x.category,x.location,x.season,x.bait,x.source].flat().filter(Boolean).join(' ');if(!C.some(e=>key(e.name)===key(x.name)))C.push(x)}
  const source='Fandom Fishing';
  const fish=[
    ['Anchovy / Anchova','Peixe oleoso','Água salgada','Primavera, Verão','Larva'],
    ['Barbel / Barbo','Peixe branco','Água doce','Primavera, Verão, Outono','Isca de carne'],
    ['Black Goby / Gobião-preto','Peixe','Água salgada','Todas','Isca de frutos do mar'],
    ['Carp / Carpa','Peixe','Água doce','Outono, Inverno','Larva'],
    ['Catfish / Bagre','Peixe','Água doce','Primavera, Verão, Outono','Isca de carne'],
    ['Cod / Bacalhau','Peixe','Água salgada','Primavera, Outono, Inverno','Isca artificial'],
    ['Dusky Grouper / Garoupa-escura','Peixe','Água salgada','Primavera, Outono, Inverno','Isca de frutos do mar'],
    ['Eel / Enguia','Peixe oleoso','Água doce ou salgada','Primavera, Outono, Inverno','Isca de frutos do mar'],
    ['Gilt-Head Bream / Dourada','Peixe oleoso','Água salgada','Verão, Outono','Minhoca'],
    ['Goby / Gobião','Peixe branco','Água doce','Verão, Outono','Larva'],
    ['Hake / Pescada','Peixe','Água salgada','Outono, Inverno','Isca artificial'],
    ['Horse Mackerel / Carapau','Peixe','Água salgada','Primavera, Verão','Isca de carne'],
    ['Meagre / Corvina','Peixe','Água doce ou salgada','Todas','Minhoca'],
    ['Megrim / Areeiro','Peixe','Água salgada','Primavera, Outono, Inverno','Isca de frutos do mar'],
    ['Moray / Moreia','Peixe','Água salgada','Verão, Outono, Inverno','Isca de carne'],
    ['Perch / Perca','Peixe','Água doce','Primavera, Inverno','Larva'],
    ['Pike / Lúcio','Peixe','Água doce','Primavera, Verão','Isca artificial'],
    ['Piranha / Piranha','Peixe oleoso','Água doce','Todas','Isca de carne'],
    ['Pomfret / Papaterra','Peixe branco','Água salgada','Verão','Minhoca'],
    ['Red Porgy / Pargo-vermelho','Peixe','Água salgada','Primavera, Verão','Isca artificial'],
    ['Red Scorpionfish / Peixe-escorpião-vermelho','Peixe','Água salgada','Primavera, Verão','Isca de frutos do mar'],
    ['Salmon / Salmão','Peixe oleoso','Água doce','Primavera, Verão','Larva'],
    ['Sardine / Sardinha','Peixe oleoso','Água salgada','Verão, Outono','Isca de frutos do mar'],
    ['Sargo / Sargo','Peixe branco','Água salgada','Primavera, Verão','Isca de frutos do mar'],
    ['Sea Bass / Robalo','Peixe oleoso','Água salgada','Primavera, Outono','Minhoca'],
    ['Stingray / Arraia','Peixe branco','Água salgada','Primavera, Outono','Isca de frutos do mar'],
    ['Sunfish / Peixe-lua','Peixe','Água doce','Verão','Larva'],
    ['Tilapia / Tilápia','Peixe','Água doce','Verão','Minhoca'],
    ['Trout / Truta','Peixe oleoso','Água doce','Primavera, Verão, Outono','Larva'],
    ['Turbot / Pregado','Peixe branco','Água salgada','Verão, Outono','Minhoca']
  ];
  fish.forEach(([name,category,location,season,bait])=>add({kind:'Pesca',name,category,location,season,bait,aliases:['peixe','pesca','fishing',category.toLowerCase(),location.toLowerCase(),season.toLowerCase(),bait.toLowerCase()],desc:`${category}. Local: ${location}. Estação: ${season}. Isca: ${bait}.`,used_for:'Receitas, ingredientes e decoração de parede',source}));
  const shellfish=[
    ['Blue Crab / Caranguejo-azul','Caranguejo','Beach / Fish Trap','Primavera, Outono'],
    ['Brown Crab / Caranguejo-marrom','Caranguejo','Beach / Fish Trap','Primavera, Inverno'],
    ['Clam / Amêijoa','Fruto do mar','Areia da praia','Todas'],
    ['Cuttlefish / Choco','Fruto do mar','Água salgada com isca artificial / Fish Trap','Primavera, Verão'],
    ['Dungeness Crab / Caranguejo-dungeness','Caranguejo','Beach / Fish Trap','Primavera, Outono, Inverno'],
    ['Great Scallop / Vieira-grande','Fruto do mar','Areia da praia','Primavera, Verão, Outono'],
    ['Lobster / Lagosta','Fruto do mar','Fish Trap','Todas'],
    ['Mussel / Mexilhão','Fruto do mar','Beach / pedras da praia','Todas'],
    ['Octopus / Polvo','Fruto do mar','Fish Trap','Todas'],
    ['Razor Clam / Lingueirão','Fruto do mar','Areia da praia','Primavera, Outono, Inverno'],
    ['Red King Crab / Caranguejo-real-vermelho','Caranguejo','Beach / Fish Trap','Primavera, Verão, Outono'],
    ['Sea Urchin / Ouriço-do-mar','Fruto do mar','Areia da praia','Todas'],
    ['Shrimp / Camarão','Fruto do mar','Fish Trap','Todas'],
    ['Squid / Lula','Fruto do mar','Água salgada com isca artificial / Fish Trap','Verão, Outono']
  ];
  shellfish.forEach(([name,category,location,season])=>add({kind:'Frutos do mar',name,category,location,season,aliases:['frutos do mar','marisco','shellfish','praia','beach','fish trap',category.toLowerCase()],desc:`${category}. Local: ${location}. Estação: ${season}.`,used_for:'Receitas, iscas e Fish Trap',source}));
  const bait=[
    ['Larva / Larva','Drop ao cortar árvores','Usada como isca para vários peixes de água doce e salgada.'],
    ['Lure / Isca artificial','Comprada da Hikari por 4 prata e 50 bronze','Isca comprável para peixes específicos.'],
    ['Meat Bait / Isca de carne','Craft na Tackle Table usando qualquer carne','Também aceita Vegetable Meat como alternativa vegana.'],
    ['Seafood Bait / Isca de frutos do mar','Craft na Tackle Table usando qualquer Shellfish','Boa para peixes e frutos do mar específicos.'],
    ['Worm / Minhoca','Cavar marcas de X com pá','Isca encontrada ao cavar tesouros/marcas no chão.']
  ];
  bait.forEach(([name,get,desc])=>add({kind:'Isca',name,get,desc,aliases:['isca','bait','pesca','tackle'],source}));
  const tools=[
    ['Battered Fishing Rod / Vara de Pesca Gasta','Fale com Hikari na Beach','75 prata'],
    ['Handmade Fishing Rod / Vara de Pesca Artesanal','Pescar 8 tipos diferentes de peixe','1 ouro e 75 prata'],
    ['Radiant Fishing Rod / Vara de Pesca Radiante','Comprar de Hikari na Beach','3 ouro e 15 prata'],
    ['Tackle Table / Mesa de Iscas','Comprar de Hikari na Beach','2 ouro e 50 prata'],
    ['Fish Trap / Armadilha de Peixe','Craft na Tackle Table','5 Wooden Planks + 2 Iron Nails + 5 Plant Fiber + 2 Fish']
  ];
  tools.forEach(([name,get,cost])=>add({kind:'Ferramenta de pesca',name,get,cost,aliases:['pesca','vara','isca','armadilha','fish trap','tackle'],desc:`${get}. Custo/receita: ${cost}.`,source}));
  add({kind:'Pesca',name:'Seaweed / Alga',category:'Alga',location:'Areia da praia / Fish Trap',season:'Todas',aliases:['alga','seaweed','praia','fish trap'],desc:'Item coletável de pesca/praia. Pode aparecer na areia ou na Fish Trap.',source});
  ['Boot / Bota','Net / Rede','Underpants / Cueca','Starfish / Estrela-do-mar'].forEach(name=>add({kind:'Lixo de pesca',name,aliases:['lixo','trash','pesca','wilson seal'],desc:'Item de lixo encontrado pescando, cavando ou usando Fish Trap. Pode ser trocado por Wilson Seals.',source}));
  add({kind:'Guia de pesca',name:'Locais de pesca / Água doce e salgada',aliases:['local pesca','água doce','agua doce','água salgada','agua salgada','beach','river bank','altar','miner camp'],desc:'Água salgada: Beach. Água doce: South River Bank, lago perto do Miner’s Camp e caverna do Altar.',source});
  window.TR_DATA.fish=C.filter(x=>['Pesca','Frutos do mar','Isca','Ferramenta de pesca','Lixo de pesca','Guia de pesca'].includes(x.kind));
  window.TR_DATA.sources=window.TR_DATA.sources||[];
  if(!window.TR_DATA.sources.some(s=>s.label==='Fandom Fishing'))window.TR_DATA.sources.push({label:'Fandom Fishing',url:'https://travellers-rest.fandom.com/wiki/Fishing',why:'Peixes, iscas, varas, locais, Fish Trap, frutos do mar, algas e lixo.'});
})();
