YUI.add('model-sync-cached-rest', function (Y, NAME) {



var REST = Y.ModelSync.REST,
    LOCAL = Y.ModelSync.Local;
    
function CachedRestSync() {}

LocalSync.prototype = {
 
    root: '',

 
    storage: null,

    // -- Lifecycle Methods -----------------------------------------------------
    initializer: function (config) {
 		
    },
    
    // -- Public Methods -----------------------------------------------------------
    
 
    sync: function (action, options, callback) {
        options || (options = {});
        var response, errorInfo;

        try {
            switch (action) {
                case 'read':
                    if (this._isYUIModelList) {
                        response = this._index(options);
                    } else {
                        response = this._show(options);
                    }
                    break;
                case 'create':
                    response = this._create(options);
                    break;
                case 'update':
                    response = this._update(options);
                    break;
                case 'delete':
                    response = this._destroy(options);
                    break;
            }
        } catch (error) {
            errorInfo = error.message;
        }

        if (response) {
            callback(null, response);
        } else if (errorInfo) {
            callback(errorInfo);
        } else {
            callback("Data not found in either LocalStorage or on the server");
        }
    },

    /**
    Generate a random GUID for our Models. This can be overriden if you have
    another method of generating different IDs.
    
    @method generateID
    @protected
    @param {String} pre Optional GUID prefix
    **/
    generateID: function (pre) {
        return Y.guid(pre + '_');
    },

    // -- Protected Methods ----------------------------------------------------

 
    _index: function () {
         
    },

 
    _show: function () {
         
    },
    
 
    _create: function () {
         
    },

 
    _update: function () {
         
    },

 
    _destroy: function () {
         
    },
    
 
    _save: function () {
 
    }
};


Y.namespace('ModelSync').CachedRest = CachedRestSync;

}, '@VERSION@', {"requires": ["model-sync-rest", "model-sync-local"]});
