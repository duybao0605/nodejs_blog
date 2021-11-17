const express = require('express')
const router = express.Router()

const courseController = require('../app/controllers/course.controller')

router.get('/create', courseController.create)
router.post('/store', courseController.store)
router.get('/:id/edit', courseController.edit)
router.post('/handle-form-action', courseController.handleFormAction)
router.put('/:id', courseController.update)
router.post('/:id/restore', courseController.restore)
router.post('/:id', courseController.destroy)
router.post('/:id/force', courseController.forceDestroy)
router.get('/:slug', courseController.show)



module.exports = router