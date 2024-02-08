require('dotenv').config()
const chargebee = require("chargebee");

const {site, api_key} = process.env

chargebee.configure({ site, api_key })

chargebee.subscription.list({
  "status[is]": 'active',
  "customer_id[is]": '6oadVU3azFV41fD'
},).request(function(error,result) {
  if(error){
    console.log(error);
  }
  else{
    console.log(result.list[0].subscription)
  }
});