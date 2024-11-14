console.clear()

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/vnd.api+json");
myHeaders.append("Accept", "application/vnd.junglescout.v1+json");
myHeaders.append("Authorization", "seller_tool:-6KiaIRE2LdP6ET0VnItOTm75nz-G1E6vwpGMOMeJJg");
myHeaders.append("X-API-Type", "junglescout");

var raw = JSON.stringify({
    "data": {
        "type": "product_database_query",
        "attributes": {
            "include_keywords": [
                "videogames"
            ],
            "exclude_unavailable_products": true
        }
    }
});
var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch("https://developer.junglescout.com/api/product_database_query?marketplace=us", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result)
    })
    .catch(error => console.log('error', error));
