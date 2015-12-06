$.jsonRPC.setup({
  endPoint: 'http://localhost:8181/',
  namespace: ''
});


var rpc = function (method, params, cb) {
	$.jsonRPC.request(method, {
  		params: params, 
		success: function (data) { cb (null, data['result']); }, 
		error: function (data) { cb (data['error'], null); } });
};
