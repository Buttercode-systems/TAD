(function(root){
'use strict';
var CONTACT='buttercoder.dev@gmail.com';
function clean(v,n){return String(v==null?'':v).trim().slice(0,n||500)}
function qualify(input){
 input=input||{};
 var active=Number(input.activeRecords)||0,reasons=[],score=0;
 if(active>=10&&active<=100){score+=3}else if(active>100){score+=2;reasons.push('The backlog is larger than the launch offer boundary and may need a separate scope.')}else{reasons.push('The first managed service is designed for at least 10 active leads or open quotes.')}
 if(input.followUpProblem&&input.followUpProblem!=='none'){score+=2}else{reasons.push('No repeated follow-up problem was selected.')}
 if(input.ownerAvailable){score+=2}else{reasons.push('An owner or manager must be available for decisions.')}
 if(input.dataAuthority){score+=2}else{reasons.push('The business must confirm authority to use the operational records supplied.')}
 if(input.boundaryAccepted){score+=1}else{reasons.push('The human-approval and data boundary must be accepted.')}
 var ready=score>=8&&active>=10&&input.ownerAvailable&&input.dataAuthority&&input.boundaryAccepted&&input.followUpProblem!=='none';
 return {ready:ready,score:score,maxScore:10,reasons:reasons,activeRecords:active};
}
function buildBrief(input,result){
 var lines=[
  'THE ADMIN DEPARTMENT — SALES ADMIN APPLICATION','',
  'Business: '+clean(input.business,160),
  'Contact: '+clean(input.contact,160),
  'Email: '+clean(input.email,320),
  'Active leads/open quotes: '+clean(input.activeRecords,20),
  'Main follow-up problem: '+clean(input.followUpProblem,80),
  'Current tools: '+(clean(input.tools,300)||'Not supplied'),
  'Result required: '+clean(input.outcome,700),'',
  'Owner/manager available: '+(input.ownerAvailable?'Yes':'No'),
  'Data authority confirmed: '+(input.dataAuthority?'Yes':'No'),
  'Human-approval boundary accepted: '+(input.boundaryAccepted?'Yes':'No'),
  'Readiness score: '+result.score+'/'+result.maxScore,
  'Ready for scoped conversation: '+(result.ready?'Yes':'No'),''];
 if(result.reasons.length){lines.push('READINESS GAPS:');result.reasons.forEach(function(x){lines.push('- '+x)})}
 lines.push('','BOUNDARY: No customer records were submitted through the website. Any implementation requires confirmed authority, protected records and explicit scope.');
 return lines.join('\n');
}
function buildMailto(input,result){return 'mailto:'+CONTACT+'?subject='+encodeURIComponent('Sales Admin Setup — '+clean(input.business,120))+'&body='+encodeURIComponent(buildBrief(input,result))}
function collect(form){var f=new FormData(form);return {business:f.get('business'),contact:f.get('contact'),email:f.get('email'),activeRecords:f.get('active_records'),followUpProblem:f.get('follow_up_problem'),tools:f.get('tools'),outcome:f.get('outcome'),ownerAvailable:f.get('owner_available')==='on',dataAuthority:f.get('data_authority')==='on',boundaryAccepted:f.get('boundary_accepted')==='on'}}
function valid(form){var fields=form.querySelectorAll('[required]');for(var i=0;i<fields.length;i++){if(!fields[i].reportValidity())return false}return true}
function applyQuery(form){var q=new URLSearchParams(root.location&&root.location.search||'');[['business','business'],['contact','contact'],['email','email']].forEach(function(pair){var v=q.get(pair[0]),el=form.elements[pair[1]];if(v&&el&&!el.value)el.value=clean(v,pair[0]==='email'?320:160)})}
function render(result,input){
 var shell=document.getElementById('application-result'),title=document.getElementById('readiness-title'),summary=document.getElementById('readiness-summary'),list=document.getElementById('readiness-reasons'),send=document.getElementById('send-application');
 shell.hidden=false;
 title.textContent=result.ready?'Ready for a scoped Sales Admin conversation':'Start with the Admin Audit first';
 summary.textContent=result.ready?'Your answers fit the launch boundary. Review the prepared application email before sending it.':'The service should not start until the gaps below are resolved.';
 list.innerHTML=(result.reasons.length?result.reasons:['No launch-boundary gaps were identified.']).map(function(x){return '<li>'+String(x).replace(/[&<>'"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]})+'</li>'}).join('');
 send.hidden=!result.ready;
 if(result.ready)send.href=buildMailto(input,result);
 shell.scrollIntoView({behavior:'smooth',block:'start'});
}
function init(){
 var form=document.getElementById('sales-admin-application');if(!form)return;applyQuery(form);
 form.onsubmit=function(e){e.preventDefault();if(!valid(form))return;var input=collect(form),result=qualify(input);render(result,input)};
 var edit=document.getElementById('edit-application');if(edit)edit.onclick=function(){document.getElementById('application-result').hidden=true;form.scrollIntoView({behavior:'smooth',block:'start'})};
}
var api={CONTACT:CONTACT,qualify:qualify,buildBrief:buildBrief,buildMailto:buildMailto};root.SalesAdminOffer=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;if(typeof document!=='undefined')document.addEventListener('DOMContentLoaded',init);
})(typeof window!=='undefined'?window:globalThis);
