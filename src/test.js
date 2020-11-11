const mongolayer = require("mongolayer");
const assert = require("assert");

const modelOne = require("./modelOne");

async function run() {
	const conn = await mongolayer.promises.connect({ connectionString : "mongodb://mongo:27017/test" });
	
	await conn.promises.add({ model : modelOne });
	await modelOne.promises.remove({});

	// await testRequired();
	// await wrongTypeInArray();
	// await multipleFailures();
	// await nestedObjectFailure();
	// await deleteExtraKeys();
	await bogusColumn();

	conn.close();
}

/**
 * Show error thrown if required fields aren't provided
 */
async function testRequired() {
	await modelOne.promises.insert({
		updated : new Date()
	});
}

/**
 * Throws due to second entry in media array contains invalid type
 */
async function wrongTypeInArray() {
	await modelOne.promises.insert({
		updated : new Date(),
		primary_site : "primary",
		sites : ["primary"],
		title : "testing",
		media : [
			{
				medianame : "test1",
				mediatype : "something"
			},
			{
				medianame : "test2",
				mediatype : true
			}
		]
	});
}

/**
 * Shows what happens when multiple elements fail in one call
 */
async function multipleFailures() {
	await modelOne.promises.insert({
		updated : "im a string",
		primary_site : "primary",
		sites : ["primary"],
		title : "testing",
		media : [
			{
				medianame : "test1",
				mediatype : "something"
			},
			{
				medianame : "test2",
				mediatype : true
			}
		]
	});
}

/**
 * Shows what happens when the failure comes from a deeply nested object
 */
async function nestedObjectFailure() {
	await modelOne.promises.insert({
		updated : new Date(),
		primary_site : "primary",
		sites : ["primary"],
		title : "Testing",
		dtn : {
			edate : new Date(),
			rank : "shouldbenumber",
			categories : [
				{ catid : 10 },
				{ catid : "a" }
			]
		}
	});
}

/**
 * Shows the behavior when deleteExtraKeys is in place in a sub-object removing unknown columns but allowing the insert
 */
async function deleteExtraKeys() {
	await modelOne.promises.insert({
		_id : new mongolayer.testId("01"),
		updated : new Date(),
		primary_site : "primary",
		sites : ["primary"],
		title : "Testing",
		meetingfacility : {
			exhibitspace : 10000,
			description : "My string",
			bogus : 10,
			anotherBogus : 20,
			moreBogus : 30
		}
	});

	const data = await modelOne.promises.find({ _id : mongolayer.testId("01") });
	// bogus and anotherBogus are dropped because deleteExtraKeys was declared on the subobject meetingfacility
	console.log("data", data);
}

/**
 * Shows the behavior when deleteExtraKeys is not in place, preventing the insert
 */
async function bogusColumn() {
	await modelOne.promises.insert({
		_id : new mongolayer.testId("01"),
		updated : new Date(),
		primary_site : "primary",
		sites : ["primary"],
		title : "Testing",
		whatisthis : true
	});
}

run().catch(e => {
	console.log(e);
	process.exit();
});