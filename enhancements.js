(function(){
  const $=id=>document.getElementById(id);
  const isArabic=()=>document.documentElement.lang==='ar';

  function enhanceEducation(){
    const items=document.querySelectorAll('#educationList .education-card');
    if(!items.length)return;
    const diploma=[...items].find(item=>/Information Security|أمن المعلومات/.test(item.textContent||''));
    if(!diploma||diploma.querySelector('.edu-doc'))return;
    const target=diploma.querySelector('div:last-child')||diploma;
    const box=document.createElement('div');
    box.className='edu-doc';
    box.innerHTML=`
      <button class="edu-doc-thumb" type="button" aria-label="${isArabic()?'عرض وثيقة التخرج':'View graduation document'}">
        <img src="assets/education/psau-diploma-certificate-public.png" alt="${isArabic()?'وثيقة دبلوم أمن المعلومات':'Information Security Diploma document'}" loading="lazy">
      </button>
      <div class="edu-doc-copy">
        <div class="doc-caption">${isArabic()?'وثيقة التخرج — دبلوم أمن المعلومات':'Graduation document — Information Security Diploma'}</div>
        <button class="doc-button" type="button">${isArabic()?'عرض الوثيقة':'View document'}</button>
      </div>`;
    const open=()=>window.openDocViewer?.('assets/education/psau-diploma-certificate-public.png',isArabic()?'وثيقة التخرج — دبلوم أمن المعلومات':'Graduation document — Information Security Diploma');
    box.querySelector('.edu-doc-thumb').onclick=open;
    box.querySelector('.doc-button').onclick=open;
    target.appendChild(box);
  }

  function setupReveal(){
    if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    document.documentElement.classList.add('js-reveal');
    const items=[...document.querySelectorAll('.reveal')];
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}
    }),{rootMargin:'0px 0px -8% 0px',threshold:.08});
    items.forEach(item=>observer.observe(item));
  }

  function apply(){enhanceEducation();}
  window.applyEnhancements=apply;
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{apply();setupReveal();});else{apply();setupReveal();}
  $('langBtn')?.addEventListener('click',()=>setTimeout(apply,20));
})();
