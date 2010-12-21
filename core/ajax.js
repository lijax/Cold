Cold.add("Cold.ajax",function(){

	var _jsonToQuery = function(data){
		if(Cold.isString(data)){
			return data;
		}
		var q = '';
		for(var p in data){
			q += (p + '=' + data[p] + '&');
		}
		if(q !== ''){
			q = q.slice(0, -1);
		}
		return q.toLowerCase();
	};

	var _addQuery = function(url, data){
		return url + '?' + _jsonToQuery(data);
	};

	var _getRequest = function(){
		try{
			return new XMLHttpRequest();
		}
		catch(e){
			try{
				return new ActiveXObject('MSXML2.XMLHTTP');
			}
			catch(e){
				return new ActiveXObject('Microsoft.XMLHTTP');
			}
		}
	};

	var _defaultOption = {
		method		: 'get',
		data		: {},
		async		: true,
		contentType : 'application/x-www-form-urlencoded',
        charset		: 'utf-8',
		timeout		: 30 * 1000,
		returnType	: 'json',	// json | xml | html | text | jsonp & script is undefined
		onSuccess	: function(){},
		onError		: function(){}
	};

	var _ajax = function(url, option){
		if (url == '' || url == null) {
			throw new Error('ajax need parameter url.');
		}
		var XHR = _getRequest(),
			op = _defaultOption,
			method;
		Cold.extend(op, option, true);
		method = op.method.toLowerCase();

		XHR.onreadystatechange = function(){
			var data = '';
			if(XHR.readyState === 4){
				if(XHR.status === 200 || XHR.status === 0){
					switch(op.returnType){
						case 'text':
						case 'html':
							data = XHR.responseText;
							break;
						case 'xml':
							data = XHR.responseXML;
							break;
						case 'script':
							break;
						case 'jsonp':
							break;
						case 'json':
							data = eval('('+ XHR.responseText +')');
							break;
					}
					op.onSuccess && op.onSuccess(data);
				}
				else{
					op.onError && op.onError();
				}
			}
		};
		if(op.data && method === 'get'){
			op.data['rd'] = new Date().valueOf();
			url = _addQuery(url, op.data);
		}
		XHR.open(method, url, op.async);
		XHR.setRequestHeader('Content-Type', op.contentType + ';charset=' + op.charset.toLowerCase());
		XHR.send( (method === 'post') ? _jsonToQuery(data) : null);
		return XHR;
	};

	var _get = function(url, option){
		option = option || {};
		option['method'] = 'get';
		return _ajax(url, option);
	};

	var _post = function(url, option){
		option = option || {};
		option['method'] = 'post';
		return _ajax(url, option);
	};

	var _getJson = function(url, option){
		option = option || {};
		option['method'] = 'get';
		option['returnType'] = 'json';
		return _ajax(url, option);
	};

	var _getXml = function(url, option){
		option = option || {};
		option['method'] = 'get';
		option['returnType'] = 'xml';
		return _ajax(url, option);
	};

	var _getText = function(url, option){
		option = option || {};
		option['method'] = 'get';
		option['returnType'] = 'text';
		return _ajax(url, option);
	};
	
	return {
		getXHR		: _getRequest,
		ajax		: _ajax,
		get			: _get,
		post		: _post,
		getJson		: _getJson,
		getXml		: _getXml,
		getText		: _getText,
		jsonToQuery : _jsonToQuery
	};
	
});