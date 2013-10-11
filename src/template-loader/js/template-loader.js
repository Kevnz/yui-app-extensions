Y.log('test');
Y.TemplateLoader = function(uri) {
    var cfg,
    request;
    cfg = {
        sync: true
    };
    request = Y.io(uri, cfg);
    return request.responseText;
};

Y.log('tester');