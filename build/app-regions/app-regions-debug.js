YUI.add('app-regions', function (Y, NAME) {

var Lang = Y.Lang;

function AppRegions() { }

AppRegions.ATTRS = {
    regions: {
        setter: '_setRegions',
        value: false
    }
};



/*


*/
AppRegions.prototype = {
    initializer: function() {
        
    },
    //TODO: Not sure on the naming
    showView: function (view, config, options, callback) {
        /*jshint expr: true */

        var viewInfo, created, regions, region;
        regions = this.get('regions');
        options || (options = {});
        Y.log('showing Alt View' + view + ' in region ' + region);
        // Support the callback function being either the fourth or fifth arg.
        if (callback) {
            options = Y.merge(options, { callback: callback });
        } else if (Lang.isFunction(options)) {
            options = { callback: options };
        }

        if (Lang.isString(view)) {
            viewInfo = this.getViewInfo(view);
            if (viewInfo && viewInfo.preserve && viewInfo.instance) {
                view = viewInfo.instance;

                // Make sure there's a mapping back to the view metadata.
                this._viewInfoMap[Y.stamp(view, true)] = viewInfo;
            } else {
                view = this.createView(view, config);
                created = true;
            }
        }

        // Update the specified or preserved `view` when signaled to do so.
        // There's no need to updated a view if it was _just_ created.
        if (options.update && !created) {
            view.setAttrs(config);
        }
        if ('render' in options) {
            if (options.render) {
                view.render();
            }
        } else if (created) {
            view.render();
        }
        
        return this._set(region +'View', view, { options: options });
    },
    //TODO: Not sure on the naming
    showViewInRegion: function (region, view, config, options, callback) {
        /*jshint expr: true */
        Y.log('showing Alt View' + view + ' in region ' + region);
        var viewInfo, created;

        options || (options = {});

        // Support the callback function being either the fourth or fifth arg.
        if (callback) {
            options = Y.merge(options, { callback: callback });
        } else if (Lang.isFunction(options)) {
            options = { callback: options };
        }

        if (Lang.isString(view)) {
            viewInfo = this.getViewInfo(view);
            if (viewInfo && viewInfo.preserve && viewInfo.instance) {
                view = viewInfo.instance;

                // Make sure there's a mapping back to the view metadata.
                this._viewInfoMap[Y.stamp(view, true)] = viewInfo;
            } else {
                view = this.createView(view, config);
                created = true;
            }
        }

        // Update the specified or preserved `view` when signaled to do so.
        // There's no need to updated a view if it was _just_ created.
        if (options.update && !created) {
            view.setAttrs(config);
        }
        if ('render' in options) {
            if (options.render) {
                view.render();
            }
        } else if (created) {
            view.render();
        }
        
        return this._set(region +'View', view, { options: options });
    },
    _setRegions: function(regions) {
        var defRegions = this.regions;
        if (regions && regions === true) {
            return Y.merge(defRegions);
        }
        return regions;
    }
};

// -- Namespace ----------------------------------------------------------------
Y.App.AppRegions = AppRegions;
Y.Base.mix(Y.App, [AppRegions]);

}, '@VERSION@', {"requires": ["app-base"]});
