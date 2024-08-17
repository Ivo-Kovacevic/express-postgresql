const { Router } = require('express');
const controller = require('../controllers/controller');
const router = Router();

router.get('/', controller.getUsernames);
router.get('/new', controller.createUsernameGet);
router.post('/new', controller.createUsernamePost);

router.get('/search', controller.searchUsernamesGet);
router.post('/delete', controller.deleteUsernamesPost);

module.exports = router;