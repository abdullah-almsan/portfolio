/* Direct PDF download helper. Never navigates to the PDF URL.
 * PDF bytes are bundled in same-origin scripts to support local file:// previews,
 * where fetch/XHR often cannot read neighboring files due to CORS restrictions.
 */
(function(){
  'use strict';
  const allowed = Object.freeze({'cv-en':1,'cv-ar':1,'ejpt':1});
  const base = document.currentScript.src.replace(/[^/]+(?:\?.*)?$/, '');
  const pending = Object.create(null);
  function ensure(key){
    if (!allowed[key]) return Promise.reject(new Error('Unsupported PDF'));
    if (window.PortfolioPdfPayloads?.[key]) return Promise.resolve(window.PortfolioPdfPayloads[key]);
    if (pending[key]) return pending[key];
    pending[key] = new Promise(function(resolve,reject){
      const script = document.createElement('script');
      script.src = base + 'direct-pdf-payload-' + key + '.js';
      script.async = true;
      script.onload = function(){
        const payload = window.PortfolioPdfPayloads?.[key];
        if (payload) resolve(payload);
        else reject(new Error('PDF payload was not registered'));
      };
      script.onerror = function(){reject(new Error('PDF download data unavailable'));};
      document.head.appendChild(script);
    }).catch(function(error){delete pending[key];throw error;});
    return pending[key];
  }
  function save(key,filename){
    return ensure(key).then(function(data){
      const binary = atob(data);
      const bytes = new Uint8Array(binary.length);
      for(let i=0;i<binary.length;i++)bytes[i]=binary.charCodeAt(i);
      // Keep the filename specific to the selected CV language or certificate.
      const blob = new Blob([bytes],{type:'application/pdf'});
      const objectURL = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href=objectURL;
      a.download=filename;
      a.style.display='none';
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(function(){URL.revokeObjectURL(objectURL);},30000);
      return true;
    }).catch(function(error){
      console.error('Direct PDF download failed:',error);
      return false;
    });
  }
  window.PortfolioDirectPdf=Object.freeze({preload:ensure,download:save});
})();
