YUI.add("app-create",function(e,t){var n=e.Base,r="initializer",i="destructor",s="views",o=n._build,u,a=function(t,n,a,f,l,c){var h=o._ctor(n,c),p=o._cfg(n,c,a),d=o._mixCust,v=h._yuibuild.dynamic,m,g,y,b,w,E,S,x=h.prototype.views,T=[];for(m=0,g=a.length;m<g;m++)y=a[m],b=y.prototype,w=b[r],E=b[i],S=b[s],delete b[s],delete b[r],delete b[i],e.mix(h,y,!0,null,1),x=e.merge(x,S),d(h,y,p),w&&(b[r]=w),E&&(b[i]=E),T=T.concat(y.ATTRS.routes.value),h._yuibuild.exts.push(y);return f&&e.mix(h.prototype,f,!0),l&&(l.ATTRS.routes.value=T.concat(l.ATTRS.routes.value),e.mix(h,o._clean(l,p),!0),d(h,l,p)),h.prototype.hasImpl=o._impl,u=e.merge(h.prototype.views,x),h.prototype.views=u,v&&(h.NAME=t,h.prototype.constructor=h,h.modifyAttrs=n.modifyAttrs),h},f=function(){};f.NAME="app-create",f.create=function(e,t,n,r,i){return a(e,t,n,r,i)},e.App.Create=f,e.App.create=f.create,e.Base.mix(e.App,[f])},"@VERSION@",{requires:["app-base","base-build"]});
