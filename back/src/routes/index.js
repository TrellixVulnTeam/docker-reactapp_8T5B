let { Router } = require('express')
const router = Router()
let { writeMessages, readMessages } = require('../controllers/controller.messages')

router.get('/test', (req, res) => {
    console.log('hola')
    res.send('en la raiz del server desde /api')
})


router.post('/', writeMessages)
router.get('/messages', readMessages)


module.exports = router