const authController = require('../auth/controller.auth');
const adminController = require('../admin/controller.admin');

const router = app => {
  app.use('/auth', authController);
  app.use('/admin', adminController);
};

module.exports = router;
