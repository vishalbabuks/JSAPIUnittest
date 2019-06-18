const frisby = require('frisby');

it('should be a list of users', function () {
  return frisby.get('/api/users?page=2')
    .expect('status', 200);
});
