var jsViewed = function(filter) {
	'use strict';
	
	var ctrl = this;
	
	
	/* ----- параметры для работы корзины ----- */
	var param = {
		ls : {
			viewed		:		'__jsviewed_' + filter,
		},
	};
	
	
	/* ----- движок работы с локальным хранилищем ----- */
	ctrl.ls = {
		set:function(id,value) {localStorage.setItem(id,value);},
		get:function(id) {
			var item = localStorage.getItem(id);
			if(typeof item !== 'undefined' && item != null) {
				return localStorage.getItem(id);
			} else {
				return null;
			}
		},
		remove:function(id) {localStorage.removeItem(id);},
		clear:function() {localStorage.clear();},
		obj2s:function(id,obj2save) {this.set(id,JSON.stringify(obj2save));},
		s2obj:function(id) {
			var item = this.get(id);
			if(typeof item !== 'undefined' && item != null) {
				return JSON.parse(item);
			} else {
				return null;
			}
			
		}
	};
	
	
	/* ----- добавление элементов в список ----- */
	ctrl.add = function(el) {
		var _list = ctrl.ls.s2obj(param.ls.viewed);
		var to_add = true;
		if(_list != null) {
			
		} else {
			_list = [];
		}
		
		if(typeof _list[0] !== 'undefined' && _list[0] != null) {
			var item = _list[0];
			if(typeof item.id !== 'undefined' && item.id != null && typeof el.id !== 'undefined' && el.id != null) {
				
				if(item.id == el.id) {
					to_add = false;
				} else {
					
				}
				
			} else {
				
			}
		}
		
		if(to_add) {
			_list.unshift(el);
			_list.slice(0,25);
		}
		
		ctrl.ls.obj2s(param.ls.viewed, _list);
	};
	
	
	/* ----- получение информации о товаре в корзине ----- */
	ctrl.getAll = function(start, end) {
		var _list = ctrl.ls.s2obj(param.ls.viewed);
		
		if(_list != null) {
			return _list;
		} else {
			return [];
		}
	};
	
	
	
	/* ----- очистка данных, удаляет все из списка ----- */
	ctrl.clear = function() {
		ctrl.ls.obj2s(param.ls.viewed, {});
	};
	
	
	/* ----- сохранение (колбек обработки данных из локального хранилища) ----- */
	ctrl.saveAll = function(cb) {
		cb(ctrl.ls.s2obj(param.ls.viewed));
	};
	
};