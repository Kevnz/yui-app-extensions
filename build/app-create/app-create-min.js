YUI.add("app-create",function(e,t){var n=e.Base,r="initializer",i="destructor",s="views",o=n._build,u=function(t,n,u,a,f,l){var c=o._ctor(n,l),h=o._cfg(n,l,u),p=o._mixCust,d=c._yuibuild.dynamic,v,m,g,y,b,w,E,S=c.prototype.views,x=[];for(v=0,m=u.length;v<m;v++)g=u[v],y=g.prototype,b=y[r],w=y[i],E=y[s],delete y[s],delete y[r],delete y[i],e.mix(c,g,!0,null,1),S=e.merge(S,E),p(c,g,h),b&&(y[r]=b),w&&(y[i]=w),x=x.concat(g.ATTRS.routes.value),c._yuibuild.exts.push(g);a&&e.mix(c.prototype,a,!0),f&&(f.ATTRS.routes.value=x.concat(f.ATTRS.routes.value),e.mix(c,o._clean(f,h),!0),p(c,f,h)),c.prototype.hasImpl=o._impl;var T=e.merge(c.prototype.views,S);return c.prototype.views=T,d&&(c.NAME=t,c.prototype.constructor=c,c.modifyAttrs=n.modifyAttrs),c},a=function(e){};a.NAME="app-create",a.create=function(e,t,n,r,i){return u(e,t,n,r,i)},e.App.Create=a,e.App.create=a.create,e.Base.mix(e.App,[a])},"@VERSION@",{requires:["app-base","base-build"]});
