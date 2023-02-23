const {Router} = require('express');

const router = Router();

router.get('/users', (req, res) => {
  res.send('Atendiendo un Get')
});

router.post('/users', (req, res) => {
 res.send(req.body);
 
});

module.exports = router;