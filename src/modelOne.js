const mongolayer = require("mongolayer");

const model = new mongolayer.Model({
	collection : "test",
	fields : [
		{ name : "updated", validation : { type : "date" }, required : true },
		{
			name : "social",
			validation : {
				type : "array",
				schema : {
					type : "object",
					schema : [
						{ name : "fieldname", type : "string" },
						{ name : "value", type : "string" },
						{ name : "smfieldid", type : "number" },
						{ name : "smserviceid", type : "number" }
					]
				}
			}
		},
		{ name : "ares_siteid", validation : { type : "number" } },
		{ name : "taid", validation : { type : "number" } },
		{ name : "wctid", validation : { type : "number" } },
		{ name : "oncethere_orgid", validation : { type : "number" } },
		{ name : "ares_endrange", validation : { type : "string" } },
		{ name : "taoptin", validation : { type : "boolean" } },
		{ name : "address1", validation : { type : "string" } },
		{ name : "address2", validation : { type : "string" } },
		{ name : "address3", validation : { type : "string" } },
		{ name : "zip", validation : { type : "string" } },
		{ name : "contact_email", validation : { type : "string" } },
		{
			name : "media",
			validation : {
				type : "array",
				schema : {
					type : "object",
					schema : [
						{ name : "mediathumbfile", type : "string" },
						{ name : "mediaid", type : "number" },
						{ name : "mediafile", type : "string" },
						{ name : "mediathumburl", type : "string" },
						{ name : "mediaurl", type : "string" },
						{ name : "sortorder", type : "number" },
						{ name : "medianame", type : "string" },
						{ name : "mediadesc", type : "string" },
						{ name : "mediatype", type : "string" },
						{
							name : "focal_point",
							validation : {
								type : "object",
								schema : [
									{ name : "x", type : "number", required : true },
									{ name : "y", type : "number", required : true },
								]
							},
							allowExtraKeys : false
						},
						{ name : "mediacopyright", type : "string" }
					]
				}
			}
		},
		{ name : "primary_image_url", validation : { type : "string" } },
		{ name : "primary_image_is_default", validation : { type : "boolean" } },
		{ name : "region", validation : { type : "string" } },
		{ name : "fax", validation : { type : "string" } },
		{ name : "listing_keywords", validation : { type : "string" } },
		{ name : "typeid", validation : { type : "number" } },
		{ name : "company", validation : { type : "string" } },
		{ name : "altphoneext", validation : { type : "string" } },
		{
			name : "dtn",
			validation : {
				type : "object",
				schema : [
					{ name : "edate", type : "date" },
					{ name : "description", type : "string" },
					{ name : "mediaid", type : "number" },
					{ name : "rank", type : "number" },
					{ name : "sdate", type : "date" },
					{ name : "showweb", type : "boolean" },
					{ name : "mobile", type : "boolean" },
					{
						name : "categories",
						type : "array",
						schema : {
							type : "object",
							schema : [
								{ name : "catid", type : "number" }
							]
						}
					},
					{
						name : "subcategories",
						type : "array",
						schema : {
							type : "object",
							schema : [
								{ name : "subcatid", type : "number" }
							]
						}
					}
				]
			}
		},
		{ name : "aresid", validation : { type : "number" } },
		{ name : "altphone", validation : { type : "string" } },
		{ name : "tacatid", validation : { type : "number" } },
		{ name : "ares_startrange", validation : { type : "string" } },
		{ name : "description", validation : { type : "string" } },
		{ name : "fullname", validation : { type : "string" } },
		{ name : "city", validation : { type : "string" } },
		{ name : "account_keywords", validation : { type : "string" } },
		{ name : "acctid", validation : { type : "number" } },
		{ name : "parentid", validation : { type : "number" } },
		{ name : "sortcompany", validation : { type : "string" } },
		{ name : "typename", validation : { type : "string" } },
		{ name : "rankorder", validation : { type : "number" } },
		{ name : "state", validation : { type : "string" } },
		{ name : "fname", validation : { type : "string" } },
		{ name : "lname", validation : { type : "string" } },
		{ name : "recid", validation : { type : "number" } },
		{ name : "weburl", validation : { type : "string" } },
		{ name : "status", validation : { type : "string" } },
		{ name : "phoneext", validation : { type : "string" } },
		{
			name : "meetingfacility",
			validation : {
				type : "object",
				schema : [
					{ name : "exhibitspace", type : "number" },
					{ name : "description", type : "string" },
					{ name : "exhibits", type : "number" },
					{ name : "ceiling", type : "number" },
					{ name : "imageurl", type : "string" },
					{ name : "largestroom", type : "number" },
					{ name : "tollfree", type : "string" },
					{ name : "totalsqft", type : "number" },
					{ name : "reception", type : "number" },
					{ name : "imagefile", type : "string" },
					{ name : "spacenotes", type : "string" },
					{ name : "theatre", type : "number" },
					{ name : "bigfile", type : "string" },
					{ name : "villas", type : "number" },
					{ name : "banquet", type : "number" },
					{ name : "numrooms", type : "number" },
					{ name : "booths", type : "number" },
					{ name : "bigurl", type : "string" },
					{ name : "suites", type : "number" },
					{ name : "classroom", type : "number" },
					{ name : "sleepingrooms", type : "number" }
				],
				deleteExtraKeys : true
			}
		},
		{ name : "phone", validation : { type : "string" } },
		{ name : "addressid", validation : { type : "number" } },
		{ name : "email", validation : { type : "string" } },
		{ name : "rankname", validation : { type : "string" } },
		{ name : "country", validation : { type : "string" } },
		{ name : "tollfree", validation : { type : "string" } },
		{ name : "faxext", validation : { type : "string" } },
		{ name : "rankid", validation : { type : "number" } },
		{
			name : "meetingrooms",
			validation : {
				type : "array",
				schema : {
					type : "object",
					schema : [
						{ name : "height", type : "string" },
						{ name : "listeningdevices", type : "string" },
						{ name : "reception", type : "string" },
						{ name : "theater", type : "string" },
						{ name : "width", type : "string" },
						{ name : "roomname", type : "string" },
						{ name : "roomid", type : "string" },
						{ name : "banquet", type : "string" },
						{ name : "booths", type : "string" },
						{ name : "classroom", type : "string" },
						{ name : "length", type : "string" },
						{ name : "sqft", type : "string" },
						{ name : "amphitheater", type : "string" },
					],
					deleteExtraKeys : true
				}
			}
		},
		{ name : "contactid", validation : { type : "number" } },
		{ name : "addresstype", validation : { type : "string" } },
		{ name : "statusid", validation : { type : "number" } },
		{
			name : "categories",
			validation : {
				type : "array",
				schema : {
					type : "object",
					schema : [
						{ name : "primary", type : "boolean" },
						{ name : "subcatid", type : "number" },
						{ name : "subcatname", type : "string" },
						{ name : "catname", type : "string" },
						{ name : "catid", type : "number" }
					],
					deleteExtraKeys : true
				}
			}
		},
		{ name : "primary_category", validation : { type : "object" } },
		{ name : "primarycatid", validation : { type : "number" } },
		{ name : "primarysubcatid", validation : { type : "number" } },
		{ name : "regionid", validation : { type : "number" } },
		{ name : "title", validation : { type : "string" }, required : true },
		{ name : "cms_title", validation : { type : "string" } },
		{ name : "cms_title_sort", validation : { type : "string" } },
		{ name : "contacttitle", validation : { type : "string" } },
		{ name : "alpha", validation : { type : "string" } },
		{ name : "crmtracking", validation : { type : "object" } },
		{
			name : "tripadvisor",
			validation : {
				type : "object",
				schema: [
					{ name : "tatype", type : "string" },
					{ name : "taurl", type : "string" },
					{ name : "rating", type : "number" },
					{ name : "ratingimage", type : "string" },
					{ name : "rankstring", type : "string" },
					{ name : "reviews", type : "number" },
					{ name : "pricelevel", type : "string" }
				],
				deleteExtraKeys : true
			}
		},
		{ name : "tripadvisor_checksum", validation : { type : "string" } },
		{ name : "primary_site", validation : { type : "string" }, required : true },
		{ name : "sites", validation : { type : "array", schema : { type : "string" } }, required : true },
		{ name : "locale_code", validation : { type: "string" } },
		{ 
			name : "locale_related",
			validation : {
				type : "array",
				schema : {
					type : "object",
					schema : [
						{ name : "recid", type : "number" },
						{ name : "locale_code", type : "string" }
					]
				}
			}
		},
		{ name : "filter_tags", validation : { type : "array", schema : { type : "string" } } }, // used as index aggregator for array values
		{ name : "detail_type", validation : { type : "string" } },
		{ name : "qualityScore", validation : { type : "number" } },
		{ name : "yelpid", validation : { type : "string" } },
		{
			name : "yelp",
			validation : {
				type : "object",
				schema : [
					{ name : "id", type : "string", required : true },
					{ name : "alias", type : "string" }, // should be required post 35.0.0 release
					{ name : "hash", type : "string", required : true },
					{ name : "name", type : "string", required : true },
					{ name : "url", type : "string", required : true },
					{ name : "photos", type : "array", schema : { type : "string" } },
					{ name : "phone", type : "string" },
					{ name : "price", type : "string" },
					{ name : "rating", type : "number" },
					{ name : "review_count", type : "number" },
					{
						name : "hours",
						type : "array",
						schema : {
							type : "object",
							schema : [
								{ name : "day_long", type : "string", required : true },
								{ name : "day_short", type : "string", required : true },
								{
									name : "opens",
									type : "array",
									schema : {
										type : "object",
										schema : [
											{ name : "string", type : "string", required : true },
											{ name : "start", type : "string", required : true },
											{ name : "end", type : "string", required : true },
											{ name : "is_overnight", type : "boolean", required : true }
										],
										allowExtraKeys : false
									}
								}
							],
							allowExtraKeys : false
						}
					}
				],
				allowExtraKeys : false
			}
		},
		{ name : "threshold360id", validation : { type : "string" } },
		{ name : "polling_engine_id", validation : { type : "string" } }
	]
});

module.exports = model;