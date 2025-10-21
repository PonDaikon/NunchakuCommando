
(function(){
  const container=document.getElementById('products-grid');
  if(!container) return;
  const {badge} = NC.util;
  const statusBadge=(s)=>`<span class="badge">${({released:'公開中','in-dev':'制作中',archive:'アーカイブ'})[s]||s}</span>`;
  const typeIcon=(t)=>({game:'🎲', video:'▶️', flyer:'🖨️', event:'📅'}[t]||'📦');
  const actions=(p)=>{
    const detail = p.url || `/products/product.html?id=${encodeURIComponent(p.id)}`;
    const howto = `${detail}#howto`;
    const watch = p.watch || p.url;
    const signup = p.signup || p.url;
    let ctas=[];
    if(p.type==='game'){
      ctas.push(`<a class="btn" href="${howto}">遊び方</a>`);
      if(p.sold===true){
        ctas.push(`<span class="btn btn--sold" aria-disabled="true">SOLD</span>`);
      } else if(p.shop){
        ctas.push(`<a class="btn btn--ghost" href="${p.shop}" target="_blank" rel="noopener">購入</a>`);
      } else {
        ctas.push(`<span class="btn btn--sold" aria-disabled="true">COMING SOON</span>`);
      }
    } else if(p.type==='video'){
      if(watch){ ctas.push(`<a class="btn" href="${watch}" target="_blank" rel="noopener">視聴</a>`); }
      ctas.push(`<a class="btn btn--ghost" href="${detail}">詳細</a>`);
    } else if(p.type==='event'){
      if(signup){ ctas.push(`<a class="btn" href="${signup}" target="_blank" rel="noopener">申込/詳細</a>`); }
      ctas.push(`<a class="btn btn--ghost" href="${detail}">イベント概要</a>`);
    } else {
      ctas.push(`<a class="btn" href="${detail}">詳細</a>`);
      if(p.download){ ctas.push(`<a class="btn btn--ghost" href="${p.download}" target="_blank" rel="noopener">資料DL</a>`); }
    }
    return `<div class="actions">${ctas.join('')}</div>`;
  };
  const card=(p)=>{
    const cover=p.cover?`<img src="${p.cover}" alt="${p.title}のカバー画像" style="width:100%;height:auto;border-radius:12px;">`:'<div class="thumb">No Cover</div>';
    return `
    <article class="card">
      ${cover}
      <h3 style="margin:8px 0 6px">${typeIcon(p.type)} ${p.title}</h3>
      <p class="muted" style="margin:0 0 6px">${p.subtitle||''}</p>
      <div class="meta" style="margin:6px 0 10px">
        ${(p.players?badge(p.players):'')+(p.time?badge(p.time):'')+(p.age?badge(p.age):'')}
        ${p.status?statusBadge(p.status):''}
      </div>
      ${actions(p)}
    </article>`;
  };
  const placeholderCard=()=>`
    <article class="card">
      <div class="thumb">Coming Soon</div>
      <h3 style="margin:8px 0 6px">Coming Soon</h3>
      <p class="muted" style="margin:0 0 6px">次のプロダクトを準備中です。</p>
      <div class="actions">
        <span class="btn btn--sold" aria-disabled="true">詳細</span>
        <span class="btn btn--sold" aria-disabled="true">COMING SOON</span>
      </div>
    </article>`;
  const orderOf=(s)=>({released:0,'in-dev':1,archive:2}[s]??9);
  fetch('/products/products.json', {cache:'no-store'})
    .then(r=>r.json())
    .then(data=>{
      if(!Array.isArray(data.products)) throw new Error('Invalid schema');
      const sorted=data.products
        .sort((a,b)=> (a.order??0)-(b.order??0) || orderOf(a.status)-orderOf(b.status));
      const desired=3;
      const cards = sorted.map(card);
      while(cards.length<desired){ cards.push(placeholderCard()); }
      container.innerHTML=cards.slice(0,desired).join('\n');
    })
    .catch(e=>{ console.error(e); container.innerHTML='<p class="muted">プロダクトデータの読み込みに失敗しました。<a href="/products/">プロダクト一覧</a>をご覧ください。</p>'; });
})();
