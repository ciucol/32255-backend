const { Router } = require('express')

const router = Router()

router.get('/', async (req, res) => {
  try {
    res.json({ status: 'success', message })
  } catch (error) {
    res.status(500).json({ status: 'error', error })
  }
})

router.get('/:id', async (req, res) => {
  try {
    res.json({ status: 'success', message })
  } catch (error) {
    res.status(500).json({ status: 'error', error })
  }
})

router.post('/', async (req, res) => {
  try {
    res.json({ status: 'success', message })
  } catch (error) {
    res.status(500).json({ status: 'error', error })
  }
})

module.exports = router
