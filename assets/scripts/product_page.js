
(function(){
  const id=new URLSearchParams(location.search).get('id');
  const root=document.getElementById('product');
  if(!id){ root.innerHTML='<p>プロダクトIDが指定されていません。</p>'; return; }
  fetch('/products/products.json',{cache:'no-store'}).then(r=>r.json()).then(d=>{
    const p=(d.products||[]).find(x=>x.id===id);
    if(!p){ root.innerHTML='<p>プロダクトが見つかりません。</p>'; return; }
    document.title=`${p.title}｜プロダクト｜ヌンチャクコマンドー`;
    document.getElementById('title').textContent=p.title;
    document.getElementById('meta1').textContent=p.players||p.type||'';
    document.getElementById('meta2').textContent=p.time||p.age||'';
    document.getElementById('status').textContent=p.status?`📌 ${({'released':'公開中','in-dev':'制作中','archive':'アーカイブ'})[p.status]||p.status}`:'';
    if(p.cover){document.getElementById('cover-wrap').innerHTML=`<img src='${p.cover}' alt='${p.title}のカバー画像'>`;}
    const ctas=[];
    if(p.type==='game'){
      if(p.shop && !p.sold) ctas.push(`<a class='btn btn--lg' href='${p.shop}' target='_blank' rel='noopener'>BOOTHで購入</a>`);
      if(p.sold) ctas.push(`<span class='btn btn--sold btn--lg' aria-disabled='true'>SOLD</span>`);
      ctas.push(`<a class='btn btn--ghost btn--lg' href='${(p.url||location.href)}#howto'>遊び方</a>`);
    } else if(p.type==='video'){
      if(p.watch) ctas.push(`<a class='btn btn--lg' href='${p.watch}' target='_blank' rel='noopener'>視聴</a>`);
    } else if(p.type==='event'){
      if(p.signup) ctas.push(`<a class='btn btn--lg' href='${p.signup}' target='_blank' rel='noopener'>申込/詳細</a>`);
    } else if(p.download){ ctas.push(`<a class='btn btn--lg' href='${p.download}' target='_blank' rel='noopener'>資料DL</a>`); }
    document.getElementById('ctas').innerHTML=ctas.join(' ');
    const cano=document.getElementById('canonical'); if(cano) cano.setAttribute('href', p.url||location.href);
    return fetch(`/products/pages/${id}.html`,{cache:'no-store'});
  }).then(r=> r ? r.text(): '').then(html=>{ if(html){ document.getElementById('content').innerHTML=html; } })
  .catch(e=>{console.error(e); document.getElementById('content').innerHTML='<p>本文の読み込みに失敗しました。</p>';});
})();
