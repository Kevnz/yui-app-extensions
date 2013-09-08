yui-app-extensions
==================

Modules to extend the YUI App Framework.

In developing a number of web apps using the YUI App framework I have found several area's that the default modules are lacking. These modules include views for both a model and a model list. A template loader to load a template from a url instead of having every template in the dom. Also included is a model binder that provides two way databinding between the rendered template and the model. I have also extended the Base.create call to merge views and routes from multiple apps to create larger apps.

Status
------
* model-binder (alpha)
* template-loader (beta)
* collection-view (beta)
* item-view (beta)
* app-create (create)
Planned
-------
I have pushed the boundries of what I feel are comfortable sizes for a single app. I have been experimenting with a region extension for an app to allow for an app to have multiple regions to render views to. I will be looking at a list view that renders individual models and templates as part of a model list. I am also looking at a parent/child composite view for tree structures.