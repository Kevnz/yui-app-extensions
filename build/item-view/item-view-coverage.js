if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/item-view/item-view.js']) {
   __coverage__['build/item-view/item-view.js'] = {"path":"build/item-view/item-view.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":21},"end":{"line":1,"column":40}}},"2":{"name":"(anonymous_2)","line":4,"loc":{"start":{"line":4,"column":17},"end":{"line":4,"column":29}}},"3":{"name":"(anonymous_3)","line":15,"loc":{"start":{"line":15,"column":14},"end":{"line":15,"column":26}}},"4":{"name":"(anonymous_4)","line":16,"loc":{"start":{"line":16,"column":12},"end":{"line":16,"column":24}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":45,"column":71}},"2":{"start":{"line":3,"column":0},"end":{"line":42,"column":3}},"3":{"start":{"line":5,"column":8},"end":{"line":9,"column":11}},"4":{"start":{"line":10,"column":8},"end":{"line":12,"column":9}},"5":{"start":{"line":11,"column":12},"end":{"line":11,"column":84}},"6":{"start":{"line":13,"column":8},"end":{"line":13,"column":63}},"7":{"start":{"line":17,"column":8},"end":{"line":17,"column":58}},"8":{"start":{"line":18,"column":8},"end":{"line":22,"column":17}},"9":{"start":{"line":23,"column":8},"end":{"line":23,"column":42}},"10":{"start":{"line":24,"column":8},"end":{"line":24,"column":68}},"11":{"start":{"line":26,"column":8},"end":{"line":30,"column":9}},"12":{"start":{"line":27,"column":12},"end":{"line":27,"column":48}},"13":{"start":{"line":29,"column":12},"end":{"line":29,"column":52}},"14":{"start":{"line":31,"column":8},"end":{"line":31,"column":56}},"15":{"start":{"line":32,"column":8},"end":{"line":32,"column":39}},"16":{"start":{"line":33,"column":8},"end":{"line":33,"column":32}},"17":{"start":{"line":35,"column":8},"end":{"line":37,"column":9}},"18":{"start":{"line":36,"column":12},"end":{"line":36,"column":44}},"19":{"start":{"line":38,"column":8},"end":{"line":38,"column":28}},"20":{"start":{"line":39,"column":8},"end":{"line":39,"column":24}},"21":{"start":{"line":40,"column":8},"end":{"line":40,"column":20}},"22":{"start":{"line":43,"column":0},"end":{"line":43,"column":22}}},"branchMap":{"1":{"line":10,"type":"if","locations":[{"start":{"line":10,"column":8},"end":{"line":10,"column":8}},{"start":{"line":10,"column":8},"end":{"line":10,"column":8}}]},"2":{"line":24,"type":"cond-expr","locations":[{"start":{"line":24,"column":36},"end":{"line":24,"column":62}},{"start":{"line":24,"column":65},"end":{"line":24,"column":67}}]},"3":{"line":26,"type":"if","locations":[{"start":{"line":26,"column":8},"end":{"line":26,"column":8}},{"start":{"line":26,"column":8},"end":{"line":26,"column":8}}]},"4":{"line":35,"type":"if","locations":[{"start":{"line":35,"column":8},"end":{"line":35,"column":8}},{"start":{"line":35,"column":8},"end":{"line":35,"column":8}}]}},"code":["(function () { YUI.add('item-view', function (Y, NAME) {","","var ItemView = Y.Base.create('itemView', Y.View, [], {\r","    initializer: function () {\r","        this.publish('render', {\r","            broadcast: true,\r","            bubbles: true,\r","            emitFacade: true\r","        });\r","        if(this.get('model')) {\r","            this.get('model').after(['load', 'change', 'reset'], this.render, this);\r","        }\r","        ItemView.superclass.constructor.apply(this, arguments);\r","    },\r","    onRender: function () {},\r","    render: function () {\r","        ItemView.superclass.render.apply(this, arguments);\r","        var container,\r","            model,\r","            source,\r","            compiledTemplate,\r","            html;\r","        container = this.get('container');\r","        model = this.get('model') ? this.get('model').toJSON() : {};\r","\r","        if (this.useLoader) {\r","            source = Y.templates[this.template];\r","        } else {\r","            source = Y.one(this.template).getHTML();\r","        }\r","        compiledTemplate = Y.Handlebars.compile(source);\r","        html = compiledTemplate(model);\r","        container.setHTML(html);\r","\r","        if (!container.inDoc()) {\r","            Y.one('body').append(container);\r","        }\r","        this.fire('render');\r","        this.onRender();\r","        return this;\r","    }\r","});\r","Y.ItemView = ItemView;","","}, '@VERSION@', {\"requires\": [\"view\", \"handlebars\", \"node\", \"event\"]});","","}());"]};
}
var __cov_8oERRZXS73xX2AOmpcOveA = __coverage__['build/item-view/item-view.js'];
__cov_8oERRZXS73xX2AOmpcOveA.s['1']++;YUI.add('item-view',function(Y,NAME){__cov_8oERRZXS73xX2AOmpcOveA.f['1']++;__cov_8oERRZXS73xX2AOmpcOveA.s['2']++;var ItemView=Y.Base.create('itemView',Y.View,[],{initializer:function(){__cov_8oERRZXS73xX2AOmpcOveA.f['2']++;__cov_8oERRZXS73xX2AOmpcOveA.s['3']++;this.publish('render',{broadcast:true,bubbles:true,emitFacade:true});__cov_8oERRZXS73xX2AOmpcOveA.s['4']++;if(this.get('model')){__cov_8oERRZXS73xX2AOmpcOveA.b['1'][0]++;__cov_8oERRZXS73xX2AOmpcOveA.s['5']++;this.get('model').after(['load','change','reset'],this.render,this);}else{__cov_8oERRZXS73xX2AOmpcOveA.b['1'][1]++;}__cov_8oERRZXS73xX2AOmpcOveA.s['6']++;ItemView.superclass.constructor.apply(this,arguments);},onRender:function(){__cov_8oERRZXS73xX2AOmpcOveA.f['3']++;},render:function(){__cov_8oERRZXS73xX2AOmpcOveA.f['4']++;__cov_8oERRZXS73xX2AOmpcOveA.s['7']++;ItemView.superclass.render.apply(this,arguments);__cov_8oERRZXS73xX2AOmpcOveA.s['8']++;var container,model,source,compiledTemplate,html;__cov_8oERRZXS73xX2AOmpcOveA.s['9']++;container=this.get('container');__cov_8oERRZXS73xX2AOmpcOveA.s['10']++;model=this.get('model')?(__cov_8oERRZXS73xX2AOmpcOveA.b['2'][0]++,this.get('model').toJSON()):(__cov_8oERRZXS73xX2AOmpcOveA.b['2'][1]++,{});__cov_8oERRZXS73xX2AOmpcOveA.s['11']++;if(this.useLoader){__cov_8oERRZXS73xX2AOmpcOveA.b['3'][0]++;__cov_8oERRZXS73xX2AOmpcOveA.s['12']++;source=Y.templates[this.template];}else{__cov_8oERRZXS73xX2AOmpcOveA.b['3'][1]++;__cov_8oERRZXS73xX2AOmpcOveA.s['13']++;source=Y.one(this.template).getHTML();}__cov_8oERRZXS73xX2AOmpcOveA.s['14']++;compiledTemplate=Y.Handlebars.compile(source);__cov_8oERRZXS73xX2AOmpcOveA.s['15']++;html=compiledTemplate(model);__cov_8oERRZXS73xX2AOmpcOveA.s['16']++;container.setHTML(html);__cov_8oERRZXS73xX2AOmpcOveA.s['17']++;if(!container.inDoc()){__cov_8oERRZXS73xX2AOmpcOveA.b['4'][0]++;__cov_8oERRZXS73xX2AOmpcOveA.s['18']++;Y.one('body').append(container);}else{__cov_8oERRZXS73xX2AOmpcOveA.b['4'][1]++;}__cov_8oERRZXS73xX2AOmpcOveA.s['19']++;this.fire('render');__cov_8oERRZXS73xX2AOmpcOveA.s['20']++;this.onRender();__cov_8oERRZXS73xX2AOmpcOveA.s['21']++;return this;}});__cov_8oERRZXS73xX2AOmpcOveA.s['22']++;Y.ItemView=ItemView;},'@VERSION@',{'requires':['view','handlebars','node','event']});