import Axios from "axios";

function AxiosService() {
	this.instance = Axios.create({
		baseURL: ""
	});
	this.instance.interceptors.response.use();
}

AxiosService.prototype.handleSuccess = function(response) {
	return response;
};

AxiosService.prototype.handleFailture = function(error) {
	return Promise.reject(error);
};

AxiosService.prototype.getData = function(url) {
	return this.instance.get(url);
};

AxiosService.prototype.findById = function(url, id) {
	return this.instance.get(`${url}/${id}`);
};

AxiosService.prototype.postData = function(url, data) {
	return this.instance.post(url, JSON.stringify(data), {
		headers: {
			Accept: "application/json",
			"Content-type": "application/json"
		}
	});
};

AxiosService.prototype.updateData = function(url, data) {
	const { id } = data;
	return this.instance.put(`${url}/${id}`, JSON.stringify(data), {
		headers: {
			Accept: "application/json",
			"Content-type": "application/json"
		}
	});
};

AxiosService.prototype.deleteById = function(url, id) {
	return this.instance.delete(`${url}/${id}`);
};

export default new AxiosService();
