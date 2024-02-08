require('dotenv').config()
const chargebee = require("chargebee");

const {site, api_key} = process.env

chargebee.configure({ site, api_key })

chargebee.subscription
  .list({
    "status[is]": 'active',
    "customer_id[is]": '6oadVU3azFV41fD'
  },)
  .request(function(error,result) {
    console.log(result.list[0].subscription)
  });

chargebee.item_family
  .create({
    id : "test-item-family",
    description : "Test Item Family",
    name : "Test Item Family"
  })
  .request(function(error,result) {
    console.log(result);
  });

chargebee.coupon
  .create_for_items({
    id : "summer_offer",
    name : "Summer Offer",
    discount_percentage : "10.0",
    discount_type : "PERCENTAGE",
    duration_type : "FOREVER",
    apply_on : "EACH_SPECIFIED_ITEM",
  })
  .request(function(error,result) {
    console.log(result);
  });