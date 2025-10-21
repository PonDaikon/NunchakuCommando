
(function(){
  const container = document.getElementById('blog-cards');
  if(!container) return;
  const {toDateStr, badge} = NC.util;
  const cardHTML = (a)=>{
    const url = a.url || `/blog/article.html?id=${encodeURIComponent(a.id)}`;
    const cover = a.cover ? `<img src="${a.cover}" alt="${a.title}のカバー画像" style="width:100%;height:auto;border-radius:12px;">` : '<div class="thumb">No Cover</div>';
    const cats = (a.categories||[]).map(badge).join('');
    const tags = (a.tags||[]).slice(0,3).map(badge).join('');
    return `
    <article class="card">
      ${cover}
      <h3 style="margin:8px 0 6px">${a.title}</h3>
      <p class="muted" style="margin:0 0 6px">${a.summary||''}</p>
      <div class="meta" style="margin:6px 0 10px">
        ${cats} ${tags}
        <span class="muted" style="margin-left:auto">${toDateStr(a.date)}</span>
      </div>
      <a href="${url}" class="btn btn--ghost">記事を読む</a>
    </article>`;
  };
  fetch('/blog/blog.json', {cache:'no-store'})
    .then(r=>r.json())
    .then((data)=>{
      if(!Array.isArray(data.articles)) throw new Error('Invalid schema');
      const list = data.articles
        .sort((a,b)=> new Date(b.date) - new Date(a.date))
        .slice(0,6)
        .map(cardHTML)
        .join('\n');
      container.innerHTML = list || '<p class="muted">記事がまだありません。</p>';
    })
    .catch(err=>{
      console.error(err);
      container.innerHTML = '<p class="muted">記事の読み込みに失敗しました。<a href="/blog/">ブログ一覧</a>をご覧ください。</p>';
    });
})();
