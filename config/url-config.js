var today = new Date();

var year = today.getFullYear();

var month = today.getMonth() + 1;

module.exports = {

  remote: 'http://whereis-whoishiring-hiring.me/city/' + year + '/' + month + '/REMOTE',

  sanFran: 'http://whereis-whoishiring-hiring.me/city/' + year + '/' + month + '/San%20Francisco',

  newYork: 'http://whereis-whoishiring-hiring.me/city/' + year + '/' + month + '/New%20York%20City'

};