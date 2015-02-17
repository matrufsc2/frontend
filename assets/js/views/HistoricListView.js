define("views/HistoricListView", [
    "views/BaseView",
    "chaplin",
    "underscore",
    "views/HistoricItemView"
], function(BaseView, Chaplin, _, HistoricItemView) {
    "use strict";
	var HistoricListView = BaseView.extend({
        "itemView": HistoricItemView,
		"tagName": "ul",
		"attributes": {
			"class": "dropdown"
		},
		"initialize": function(options){
			BaseView.prototype.initialize.call(this, options);
			Chaplin.CollectionView.prototype.initialize.call(this, options);
            this.status = options.status;
            this.listenTo(this.status, "change:version", this.render);
		},
        "initItemView": function(model) {
			if (this.itemView) {
				return new this.itemView({
					"model": model,
					"status": this.status
				});
			} else {
				throw new Error("The CollectionView#itemView property " + "must be defined or the initItemView() must be overridden.");
			}
		},
		"render": function(){
			BaseView.prototype.render.call(this);
			Chaplin.CollectionView.prototype.render.call(this);
			this.$("li.active").removeClass("active");
            if (this.status.get("version")) {
                this.$("a[data-id='"+this.status.get("version")+"']").parents("li").addClass("active");
            }
		}
    });
	_.extend(HistoricListView.prototype,
		_.omit(
			Chaplin.CollectionView.prototype,
			_.keys(HistoricListView.prototype),
			_.keys(BaseView.prototype)
		)
	);
    return HistoricListView;
});