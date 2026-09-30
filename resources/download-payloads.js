(function(){
  "use strict";
  /* Lightweight replacement for the old base64 payload bundle.
     Same public API: PortfolioDownloads.download(url, name) -> true when handled,
     PortfolioDownloads.has(url), PortfolioDownloads.blob(url) -> Promise<Blob|null>.
     Files are fetched from their real paths only when the visitor clicks. */
  const FILES=Object.create(null);
  [
    ["assets/telegram-support/Telegram_Support_Bot_Architecture_AR.pdf","application/pdf"],
    ["assets/telegram-support/Telegram_Support_Bot_Architecture_EN.pdf","application/pdf"],
    ["assets/soc-windows-logon/Windows_Failed_Logon_Splunk_Lab.pdf","application/pdf"],
    ["assets/penguide/VirtualLab_v4_PenGuide.md","text/markdown"],
    ["assets/Abdullah_Nasser_AlMsan_CV_EN.pdf","application/pdf"],
    ["resources/Pentest_Cheat_Sheets_AR.zip","application/zip"],
    ["resources/Pentest_Cheat_Sheets_EN.zip","application/zip"],
    ["assets/Splunk_ASREP_Case_Study.pdf","application/pdf"],
    ["assets/Abdullah_Nasser_AlMsan_CV_AR.pdf","application/pdf"],
    ["assets/soc-asrep/Splunk_ASREP_Case_Study_AR.pdf","application/pdf"],
    ["assets/soc-asrep/Splunk_ASREP_Case_Study_EN.pdf","application/pdf"],
    ["assets/soc-windows-logon/Windows_Failed_Logon_Splunk_Lab_AR.pdf","application/pdf"],
    ["assets/soc-windows-logon/Windows_Failed_Logon_Splunk_Lab_EN.pdf","application/pdf"]
  ].forEach(function(e){FILES[e[0]]={name:e[0].split('/').pop(),mime:e[1]};});
  function keyFrom(input){
    let s=String(input||'').replace(/\\/g,'/').split(/[?#]/)[0];
    try{s=decodeURIComponent(s);}catch(_){}
    const asset=s.lastIndexOf('/assets/'), res=s.lastIndexOf('/resources/');
    if(asset>=0)s=s.slice(asset+1); else if(res>=0)s=s.slice(res+1);
    s=s.replace(/^(?:\.\.\/|\.\/)+/,'').replace(/^\/+/, '');
    return s;
  }
  function clickLink(href,name,revoke){
    const a=document.createElement('a');
    a.href=href;a.download=name;a.style.display='none';
    document.body.appendChild(a);a.click();a.remove();
    if(revoke)setTimeout(function(){URL.revokeObjectURL(href);},30000);
  }
  function xhrBlob(input,item){
    return new Promise(function(resolve){
      try{
        const xhr=new XMLHttpRequest();
        xhr.open('GET',input,true);
        xhr.responseType='blob';
        xhr.onload=function(){
          if((xhr.status>=200&&xhr.status<300)||xhr.status===0){
            const blob=xhr.response;
            resolve(blob?new Blob([blob],{type:item.mime}):null);
          }else resolve(null);
        };
        xhr.onerror=function(){resolve(null);};
        xhr.send();
      }catch(_){resolve(null);}
    });
  }
  function getBlob(input){
    const item=FILES[keyFrom(input)];
    if(!item)return Promise.resolve(null);
    return fetch(input,{credentials:'same-origin'}).then(function(r){
      if(!r.ok)throw new Error('HTTP '+r.status);
      return r.blob();
    }).then(function(b){return new Blob([b],{type:item.mime});}).catch(function(){return xhrBlob(input,item);});
  }
  function download(input,filename){
    const item=FILES[keyFrom(input)];
    if(!item)return false;
    const name=filename||item.name;
    getBlob(input).then(function(blob){
      if(blob)clickLink(URL.createObjectURL(blob),name,true);
      else clickLink(input,name,false);
    });
    return true;
  }
  window.PortfolioDownloads=Object.freeze({download:download,blob:getBlob,has:function(input){return !!FILES[keyFrom(input)];}});
})();
