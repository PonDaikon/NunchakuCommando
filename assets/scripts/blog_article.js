
(function(){
  const params=new URLSearchParams(location.search); const id=params.get('id');
  const root=document.getElementById('article');
  if(!id){ root.innerHTML='<p>記事IDが指定されていません。</p>'; return; }
  fetch('/blog/blog.json', {cache:'no-store'}).then(r=>r.json()).then(data=>{
    const a=(data.articles||[]).find(x=>x.id===id);
    if(!a){ root.innerHTML='<p>記事が見つかりません。</p>'; return; }
    document.title = `${a.title}｜ブログ｜ヌンチャクコマンドー`;
    document.getElementById('title').textContent=a.title;
    document.getElementById('date').textContent=a.date;
    document.getElementById('cats').innerHTML=(a.categories||[]).map(c=>`<span class='badge'>${c}</span>`).join(' ');
    if(a.cover){ document.getElementById('cover-wrap').innerHTML=`<img src='${a.cover}' alt='${a.title}のカバー画像'>`; }
    const cano=document.getElementById('canonical'); if(cano) cano.setAttribute('href', a.url||location.href);
    return fetch(`/blog/posts/${id}.html`, {cache:'no-store'});
  }).then(r=> r ? r.text(): '').then(html=>{
    if(html){ document.getElementById('content').innerHTML=html; }
  }).catch(err=>{
    console.error(err);
    document.getElementById('content').innerHTML='<p>本文の読み込みに失敗しました。</p>';
  });
})();
