/**
 * The ExpressJS namespace.
 * @external ExpressApplicationObject
 * @see {@link http://expressjs.com/3x/api.html#app}
 */

/**
 * Mobile Cloud custom code service entry point.
 * @param {external:ExpressApplicationObject}
 * service 
 */
module.exports = function (service) {


	/**
	 *  The file samples.txt in the archive that this file was packaged with contains some example code.
	 */

	var idcsDomainID = "idcs-442850ccf0b247c7b8eac5c700532738";
	var dbaasURL = "https://dbaas.oraclecloud.com/paas/service/dbcs/api/v1.1/instances/idcs-442850ccf0b247c7b8eac5c700532738";
	var storageURL = "https://gse00014769.us.storage.oraclecloud.com/v1/Storage-gse00014769/";
	var vAuthorization = "Basic Y2xvdWQuYWRtaW46c0lsTFlANUF1ZEl0T3I="; //cloud.admin:<password>

	service.get('/mobile/custom/DBCSRest/backups', function (req, res) {

		var result = {};
		var statusCode = 200;
		var request = require("request");
		var serviceName = req.query.serviceName;

		require("./node_modules/request-debug")(request);

		var handler = function (error, response, body) {
			if (error) {
				console.log("error: " + JSON.stringify(error));
				res.send(500, error.message);
			} else {
				console.log("success: " + JSON.stringify(body));
				res.send(response.statusCode, body);
			}
		};

		if (!serviceName) {
			console.error("Missing required field serviceName")
			res.send(500, "Missing required field serviceName");
		} else {
			request({
				method: 'GET',
				url: dbaasURL + "/" + serviceName + "/backups",
				headers:
				{
					'Authorization': vAuthorization,
					'X-ID-TENANT-NAME': idcsDomainID,
					'identityDomainId': idcsDomainID,
					'serviceId': serviceName,
					'Content-Type': 'application/json'
				}
			}, handler);
		}
	});

	service.post('/mobile/custom/DBCSRest/backups', function (req, res) {

		var result = {};
		var statusCode = 200;
		var request = require("request");
		var serviceName = req.query.serviceName;

		require("./node_modules/request-debug")(request);

		var handler = function (error, response, body) {
			if (error) {
				console.log("error: " + JSON.stringify(error));
				res.send(500, error.message);
			} else {
				console.log("success: " + JSON.stringify(body));
				res.send(response.statusCode, body);
			}
		};

		if (!serviceName) {
			console.error("Missing required field serviceName")
			res.send(500, "Missing required field serviceName");
		} else {
			request({
				method: 'POST',
				url: dbaasURL + "/" + serviceName + "/backups",
				//body: JSON.stringify(reqBody),
				headers:
				{
					'Authorization': vAuthorization,
					'X-ID-TENANT-NAME': idcsDomainID,
					'identityDomainId': idcsDomainID,
					'serviceId': serviceName,
					'Content-Type': 'application/json'
				}
			}, handler);
		}
	});

	service.post('/mobile/custom/DBCSRest/backups/recovery', function (req, res) {

		var result = {};
		var statusCode = 200;
		var request = require("request");
		var serviceName = req.query.serviceName;
		var tag = req.query.tag;

		require("./node_modules/request-debug")(request);

		var handler = function (error, response, body) {
			if (error) {
				console.log("error: " + JSON.stringify(error));
				res.send(500, error.message);
			} else {
				console.log("success: " + JSON.stringify(body));
				res.send(response.statusCode, body);
			}
		};

		if (!serviceName) {
			console.error("Missing required field serviceName")
			res.send(500, "Missing required field serviceName");
		} else {

			if (!tag) {
				console.error("Missing required field tag")
				res.send(500, "Missing required field tag");
			} else {
				var reqBody = {
					"tag": tag//"TAG20180717T132330" //– This tag name can be taken from DBCS console.
				}
				request({
					method: 'POST',
					url: dbaasURL + "/" + serviceName + "/backups",
					body: JSON.stringify(reqBody),
					headers:
					{
						'Authorization': vAuthorization,
						'X-ID-TENANT-NAME': idcsDomainID,
						'identityDomainId': idcsDomainID,
						'serviceId': serviceName,
						'Content-Type': 'application/json'
					}
				}, handler);
			}
		}
	});

	service.post('/mobile/custom/DBCSRest/refresh', function (req, res) {

		var result = {};
		var statusCode = 200;
		var request = require("request");
		var serviceName = req.query.serviceName;

		require("./node_modules/request-debug")(request);

		var handler = function (error, response, body) {
			if (error) {
				console.log("error: " + JSON.stringify(error));
				res.send(500, error.message);
			} else {
				console.log("success: " + JSON.stringify(body));
				res.send(response.statusCode, body);
			}
		};

		if (!serviceName) {
			console.error("Missing required field serviceName")
			res.send(500, "Missing required field serviceName");
		} else {
			var reqBody = {
				"lifecycleState": "Restart",
				"lifecycleTimeout": "60",
				"vmName": serviceName
			}
			request({
				method: 'POST',
				url: dbaasURL + "/" + serviceName,
				body: JSON.stringify(reqBody),
				headers:
				{
					'Authorization': vAuthorization,
					'X-ID-TENANT-NAME': idcsDomainID,
					'identityDomainId': idcsDomainID,
					'serviceId': serviceName,
					'Content-Type': 'application/json'
				}
			}, handler);
		}
	});

	service.get('/mobile/custom/DBCSRest/getContainers', function (req, res) {

		var result = {};
		var statusCode = 201;
		var request = require("request");

		/*require("./node_modules/request-debug")(request);

		var handler = function (error, response, body) {
			if (error) {
				console.log("error: " + JSON.stringify(error));
				res.send(500, error.message);
			} else {
				console.log("success: " + JSON.stringify(body));
				res.send(response.statusCode, body);
			}
		};

		request({
			method: 'GET',
			url: storageURL,
			//body: JSON.stringify(reqBody),
			headers:
			{
				'Authorization': vAuthorization,
				'Content-Type': 'application/json'
			}
		}, handler);*/
		res.send(200,'success')

	});

	service.put('/mobile/custom/DBCSRest/createStorage', function (req, res) {

		var result = {};
		var statusCode = 201;
		var request = require("request");
		var containerName = req.query.containerName;

		console.log("req.query: " + JSON.stringify(req.query));
		require("./node_modules/request-debug")(request);

		var handler = function (error, response, body) {
			if (error) {
				console.log("error: " + JSON.stringify(error));
				res.send(500, error.message);
			} else {
				console.log("success: " + JSON.stringify(body));
				res.send(response.statusCode, body);
			}
		};

		console.log("containerName: " + containerName);
		if (!containerName) {
			console.error("Missing required field containerName")
			res.send(500, "Missing required field containerName");
		} else {
			request({
				method: 'PUT',
				url: storageURL + "/" + containerName,
				headers:
				{
					'Authorization': vAuthorization,
					'Content-Type': 'application/json'
				}
			}, handler);
		}
	});

	service.post('/mobile/custom/DBCSRest/stopStartService', function (req, res) {

		var result = {};
		var statusCode = 201;
		var request = require("request");
		var serviceName = req.query.serviceName;
		var operationName = req.query.operationName;

		console.log("req.query: " + JSON.stringify(req.query));
		require("./node_modules/request-debug")(request);

		var handler = function (error, response, body) {
			if (error) {
				console.log("error: " + JSON.stringify(error));
				res.send(500, error.message);
			} else {
				console.log("success: " + JSON.stringify(body));
				res.send(response.statusCode, body);
			}
		};

		console.log("operationName: " + operationName);
		console.log("serviceName: " + serviceName);

		if (!operationName) {
			console.error("Missing required field operationName")
			res.send(500, "Missing required field operationName");
		} else
			if (!serviceName) {
				console.error("Missing required field serviceName")
				res.send(500, "Missing required field serviceName");
			} else {
				var reqBody = {
					"lifecycleState": operationName, //"stop", "start", "delete"
					"lifecycleTimeout": "60",
					"vmName": serviceName, //"OMCeDBtest"
				}

				request({
					method: 'POST',
					url: dbaasURL + "/" + serviceName,
					body: JSON.stringify(reqBody),
					headers:
					{
						'X-ID-TENANT-NAME': idcsDomainID,
						'Authorization': vAuthorization,
						'Content-Type': 'application/json'
					}
				}, handler);
			}
	});

	service.post('/mobile/custom/DBCSRest/createService', function (req, res) {
		var result = {};
		var statusCode = 201;
		var serviceName = req.query.serviceName;
		var containerName = req.query.containerName

		console.log("req.query: " + JSON.stringify(req.query));

		var request = require("request");

		require("./node_modules/request-debug")(request);

		var handler = function (error, response, body) {
			if (error) {
				console.log("error: " + JSON.stringify(error));
				res.send(500, error.message);
			} else {
				console.log("success: " + JSON.stringify(body));
				res.send(response.statusCode, body);
			}
		};
		console.log("containerName: " + containerName);
		console.log("serviceName: " + serviceName);
		if (!containerName) {
			console.error("Missing required field containerName")
			res.send(500, "Missing required field containerName");
		} else if (!serviceName) {
			console.error("Missing required field serviceName")
			res.send(500, "Missing required field serviceName");
		} else {
			var reqBody = {
				"description": "DB-Creation via REST",
				"edition": "EE",
				"level": "PAAS",
				"serviceName": serviceName,
				"shape": "oc3",
				"subscriptionType": "Hourly",
				"version": "12.1.0.2",
				"vmPublicKeyText": "ssh-rsa AAAAB3NzaC1yc2EAAAABJQAAAQEAyQpkVWWXUBThHQB3Q3PGfGjVE2Y7GZw5FebfihQQCCjvrfAU8ovWchlDtz30+VIxhs+U/1BB796ZMkvRnWCYtqADN0qRXqFWxOoZNZZl32Wb0KJExGIsNbXG7+/qPDF9ydkIg8L6jKibqPUUMGUZoLsyWxEWn3YTZothwEWTtbGafWNlbwDDdomMtwOl+JVFCHIuX8d6v1Ioau6dJHZCNLEmIjhrqV4y9e9ZAVM/vEpS7G34x88RHH2ShECpGTBLnY8xuO1nMLAtsAdLc2JznQBMjauqD2Z2AYrgkYTykOzkfytM+HbnQmoXQdZc1UucmgbSywDJMgF0WLPX6FsIJw== rsa-key-20180605",
				"parameters": [
					{
						"type": "db",
						"usableStorage": "15",
						"adminPassword": "Welcome_1",
						"sid": "ORCL",
						"pdbName": "MYPDB",
						"failoverDatabase": "no",
						"backupDestination": "BOTH",
						"cloudStorageContainer": "https://gse00014769.us.storage.oraclecloud.com/v1/Storage-gse00014769/" + containerName,
						"cloudStorageUser": "cloud.admin",
						"cloudStoragePwd": "sIlLY@5AudItOr"
					}
				]
			};

			console.log("reqBody: " + JSON.stringify(reqBody));

			request({
				method: 'POST',
				url: dbaasURL,
				body: JSON.stringify(reqBody),
				headers:
				{
					'X-ID-TENANT-NAME': idcsDomainID,
					'Authorization': vAuthorization,
					'Content-Type': 'application/json',
					"Connection": "keep-alive"
				}
			}, handler);
		}
	});



};
