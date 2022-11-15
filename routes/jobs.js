const express = require('express')
const {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
} = require('../controllers/jobs')

const router = express.Router()

router.get('/', getAllJobs)
router.get('/:id', getJob)
router.post('/', createJob)
router.put('/:id', updateJob)
router.delete('/:id', deleteJob)

module.exports = router