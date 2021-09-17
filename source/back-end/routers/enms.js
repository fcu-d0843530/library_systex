var express = require('express');
var router = express.Router();

var api = require('../api/api_enms');


/*========================================================== */
//  tcp client
/*========================================================== */
router.post('/send_switch_socket', function (req, res) {
    api.send_switch_socket(req, res);
});

/*========================================================== */
//  enms api
/*========================================================== */
router.get('/select_current_month_cumulative_electricity_consumption', function (req, res) {
    api.select_current_month_cumulative_electricity_consumption(req, res);
});

router.get('/select_real_time_electricity_consumption', function (req, res) {
    api.select_real_time_electricity_consumption(req, res);
});

router.get('/select_two_years_electricity_consumption', function (req, res) {
    api.select_two_years_electricity_consumption(req, res);
});

router.get('/select_event_log', function (req, res) {
    api.select_event_log(req, res);
});


module.exports = router;
