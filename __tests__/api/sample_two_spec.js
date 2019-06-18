
const frisby = require('frisby');
it ('GET should return a status of 200 OK', function (done) {
  frisby
    .get('https://reqres.in/api/users/2')
    .inspectJSON()
    .done(done);
});
