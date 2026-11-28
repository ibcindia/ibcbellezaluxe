(function(){
 const current=document.currentScript;
 const root=current && current.dataset.root ? current.dataset.root : './';
 const url=(p)=>root+p;
 const header=document.createElement('header'); header.id='ibc-site-header';
 header.innerHTML=`<div class="ibc-mast"><a class="ibc-brand" href="${url('index.html')}" aria-label="IBC Belleza Luxe Home">IBC BELLEZA <span>LUXÉ</span></a><p class="ibc-tag">Fashion · Beauty · Lifestyle · Culture · Entertainment</p></div><nav class="ibc-nav" aria-label="Main navigation"><a href="${url('index.html')}#top">Home</a><a href="${url('index.html')}#stories">Latest</a><a href="${url('index.html')}#c-super-kids">Super Kids</a><a href="${url('index.html')}#c-beauty-pageant">Beauty Pageant</a><a href="${url('article.html')}?id=fashion">Fashion</a><a href="${url('short-film-festival.html')}">Short Film Festival</a></nav>`;
 const footer=document.createElement('footer'); footer.id='ibc-site-footer';
 footer.innerHTML=`<a class="ibc-footbrand" href="${url('index.html')}">IBC BELLEZA <span>LUXÉ</span></a><p>A global destination for fashion, beauty, lifestyle, culture and extraordinary personalities. Presented by International Broadcasting Corporation.</p><div class="ibc-footlinks"><a href="${url('index.html')}#top">Home</a><a href="${url('index.html')}#stories">Latest Stories</a><a href="${url('index.html')}#c-beauty-pageant">Beauty Pageant</a><a href="${url('short-film-festival.html')}">Short Film Festival</a><a href="${url('film-application.html')}">Film Application</a><a href="${url('index.html')}#contact">Contact</a></div><p class="ibc-copy">© 2026 International Broadcasting Corporation. All Rights Reserved.</p>`;
 document.body.insertBefore(header,document.body.firstChild);
 document.body.appendChild(footer);
})();
