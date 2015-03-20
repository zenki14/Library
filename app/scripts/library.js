function doCSS(prop,val) {
	var isSet = Boolean(val),
	action = CSSStyleDeclaration.prototype.setProperty,
	ars = arguments;
	if(isSet) {
		this.each(function(node, i) {
			action.apply(node.style, args);
		});
		return this;
	} else {
		this.nodes[0].style[prop];
	}
}

//works

function doATTR(prop, val) {
	var isSet = Boolean(val),
	action = Element.prototype.setAttribute,
	args = arguments;
	if(isSet) {
		this.each(function(node, i) {
			action.apply(node, args);
		});
		return this;
	} else {
		return Array.prototype.map.call(this.nodes, function(node){
			return node.getAttribute(prop);
		});
	}

}

function sel(selector) {
	var self = {};
	self.selector = selector;
	self.element = document.querySelector(self.selector);

	self.html = function() {
		return self.element;
	}

	self.attribute = function(name,value) {
		if(!value) return self.element.getAttribute(name)
		self.element.setAttribute(name,value);
		return self;
	}

	self.on = function(type,callback) {
		self.element['on' + type] = callback;
		return self;
	}

	self.each = function(action) {
		Array.prototype.forEach.call(this.self.element, function(item, i) {
			action(item, i);
		});
		return this;
	}

	self.toString = function() {
		return this.selector;
	}

	self.css = function(prop,val) {
		return doCSS.call(this, prop, val);
	}
	return

	self.attrGet = function(prop,val) {
		return doATTR.call(this, prop, val);
	}

	self.height = function() {
		return self.element.offsetHeight;
	}
	return self;
}
