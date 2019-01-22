
const axios = require('axios')
module.exports = async function (context, req) {

  /*   axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  }); */

         context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello London people"
        };
};