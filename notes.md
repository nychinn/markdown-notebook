
## Notes

* marked.js makes it easy to convert markdown to html
* jsdelivr.net is a faster CDN than unpkg.com

### Computed Property

* allows us to define new properties that combine other properties
* allows us to have new properties transformed from existing ones
* the value is cached so its only computed when we need it
* can be used like any other property
* you can use computed properties inside other computed properties
* it is not computed until its used in the app

### Text Interpolation Escaping

* you should always interpolate text in comments, otherwise someone might try to insert malicious code that would be vulnerable for both you and your users (cross-site scripting attack)

### Saving Notes

* we can use the localStorage API to save notes
* localStorage is provided in most browsers

### Watching Changes

* we need something that is called when our data changes
* we use `watchers` for this
* `watchers` can be used with `handler`, `deep` and `immediate`
* `deep` is a boolean that tells vues to watch inside nested objects
* `immediate` is a boolean that forces handler to run right away instead of waiting for a change (when you first load the app)
* the default value for the above options is false
* without calling any option, it will default to `handler`
* this is the most common syntax when the watcher doesn't need the other options

### Methods

* resuable functions are called methods
* inside methods, we can use the `this` keyword to retrieve data in the vue instance

### Lifecycle hooks

* each vue instance follows a precise lifecycle
* each vue instance will be created, mounted on the page, updated, and then destroyed
* during the create step, vue will make the data reactive
* we have multiple hooks at our disposal
	* `beforeCreate` - called when vue instance is created, but before vue can do anything with it
	* `created` - called after vue instance is ready (not in the DOM yet)
	* `beforeMount` - called before the vue instance is added to the web page
	* `mounted` - called when the instance is visible on the DOM
	* `beforeUpdate` - called when instance needs to be updated
	* `updated` - called after data changes are applied (DOM may not be up to date yet)
	* `beforeDestroy` - called before instance is removed
	* `destroyed` - called when instance is removed











