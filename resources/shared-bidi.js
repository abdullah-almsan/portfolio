(function(){
  function clear(root=document.body){root?.querySelectorAll('bdi.auto-bidi').forEach(el=>el.replaceWith(document.createTextNode(el.textContent||'')));}
  function apply(root=document.body){
    if(!root||document.documentElement.lang!=='ar')return;
    const skip=new Set(['SCRIPT','STYLE','CODE','PRE','BDI','TEXTAREA','SVG']);
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(node){
      const parent=node.parentElement;if(!parent||skip.has(parent.tagName)||parent.closest('code,pre,script,style,bdi,svg,.ltr,.ltr-inline,.mono,.cmd,.result,[dir="ltr"]'))return NodeFilter.FILTER_REJECT;
      return /[A-Za-z0-9]/.test(node.nodeValue||'')?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;
    }});
    const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
    const pattern=/[A-Za-z0-9]+(?:[A-Za-z0-9._:\/+@#()=\-]*[A-Za-z0-9])?(?:\s+[A-Za-z0-9][A-Za-z0-9._:\/+@#()=\-]*)*(?:[.\-](?=\s|$|[،؛؟]))?/g;
    nodes.forEach(node=>{const value=node.nodeValue||'';pattern.lastIndex=0;let m,last=0,hit=false;const frag=document.createDocumentFragment();while((m=pattern.exec(value))){hit=true;if(m.index>last)frag.append(value.slice(last,m.index));const b=document.createElement('bdi');b.dir='ltr';b.className='auto-bidi';b.textContent=m[0];frag.append(b);last=pattern.lastIndex;}if(hit){if(last<value.length)frag.append(value.slice(last));node.replaceWith(frag);}});
  }
  window.portfolioBidi={clear,apply};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>apply());else apply();
  window.addEventListener('portfolio-language-change',()=>{clear();requestAnimationFrame(()=>apply());});
})();
