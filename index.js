const express = require("express");
const res = require("express/lib/response");

const handleAllRequests = (requestObject, responseObject) => {
	console.log("Hi i just received a request");
	// console.log(requestObject);
	// responseObject.write("htis is a response from the server \n");
	// responseObject.write("this is your second response");
	// responseObject.write("<h1>just trying hi tag in here</h1>");
	responseObject.setHeader("Content-Type", "text/html");
	const url = requestObject.url;
	// {
	// 	responseObject.write("");

	// 	responseObject.write("<h1>page not found</h1>");
	// }
	responseObject.end();
};

const handleAllHomeRequest = (req, res) => {
	res.send("<h1>welcome to the home page</h1>");
};
const handleLoginRequest = (req, res) => {
	res.send("<h2>this is login page</h2>");
};
const handleSignupRequest = (req, res) => {
	res.send("<h1>this is sign up page</h1>");
};
const handleProfileRequest = (req, res) => {
	res.send("<h2>hey welcome to the profile page</2>");
};
const handleDetailsRequest = (req, res) => {
	res.send("<h1>this is the details page</h1>");
};

const server = express();
server.use("/details", handleDetailsRequest);
server.use("/profile", handleProfileRequest);
server.use("/signup", handleSignupRequest);
server.use("/login", handleLoginRequest);
server.use("/", handleAllHomeRequest);
server.use(handleAllRequests);

server.listen(3000, "127.0.0.1", () =>
	console.log("server is ready to accept request")
);

// configuring HTTP server
// const http = require("http");

// const handleAllRequest = (requestObject, responseObject) => {
// 	console.log("Hi i just received a request");
// 	// console.log(requestObject);
// 	// responseObject.write("htis is a response from the server \n");
// 	// responseObject.write("this is your second response");
// 	// responseObject.write("<h1>just trying hi tag in here</h1>");
// 	responseObject.setHeader("Content-Type", "text/html");
// 	const url = requestObject.url;
// 	if (url === "/") {
// 		responseObject.write("<h1>welcome to the home page</h1>");

// 	} else if (url === "/login") {
// 		responseObject.write("<h2>this is login page</h2>");
// 	} else if (url === "/signup") {
// 		responseObject.write("<h1>this is sign up page</h1>");
// 	} else if (url === "/profile") {
// 		responseObject.write("<h2>hey welcome to the profile page</2>");
// 	} else {
// 		responseObject.write("<h1>page not found</h1>");
// 	}
// 	responseObject.end();
// };

// const server = http.createServer(handleAllRequest);
// server.listen(3000, "127.0.0.1", () => {
// 	console.log("Hi server is ready to accept a request");
// });
