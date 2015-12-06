
var cvm_RPCCall = function (host, method, params, cb) {
	$.jsonRPC.request(method, {
		endPoint: 'http://' + host,
		namespace: '',
  		params: params, 
		success: function (data) { cb (null, data['result']); }, 
		error: function (data) { cb (data['error'], null); } });
};

var cvm_jsonLocalCall = function (method, params, cb) {
	return cvm_RPCCall ('localhost:8181', method, params, cb);
};


var cvm = {
	jsonLocalCall: cvm_jsonLocalCall
};

