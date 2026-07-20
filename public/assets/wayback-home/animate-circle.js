var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
const animateCircle=t=>{const{percentage:e,onScroll:c,speed:o,element:i,size:n,background_clr:a,color:r,stroke_width:h}=t,l=Math.ceil(document.body.scrollHeight-window.innerHeight);let s=i[0];ctx=s.getContext("2d"),s.width=2*n+h,s.height=2*n+h;let d=s.width/2,x=s.height/2,g=0;const m=t=>{(c?(g=Math.floor(t/l*360),Math.floor(t/l*100)):(g+=o)/360*100)<=e?(ctx.clearRect(0,0,s.width,s.height),ctx.beginPath(),ctx.lineWidth=h,ctx.arc(d,x,n,0,2*Math.PI),ctx.strokeStyle=a,ctx.stroke(),ctx.closePath(),ctx.beginPath(),ctx.lineWidth=h,ctx.strokeStyle=r,ctx.arc(d,x,n,0,2*Math.PI/360*g),ctx.stroke(),ctx.closePath(),c||requestAnimationFrame(m)):c||cancelAnimationFrame(m)};c||requestAnimationFrame(m),c&&(m(window.pageYOffset),document.addEventListener("scroll",(()=>{const t=Math.ceil(window.pageYOffset);m(t)})))};
}

/*
     FILE ARCHIVED ON 04:35:54 Mar 31, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:49:30 Mar 14, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 18.901
  captures_list: 0.632
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 13.373
  LoadShardBlock: 177.898 (3)
  PetaboxLoader3.datanode: 540.191 (5)
  load_resource: 374.85
  loaddict: 35.796
*/