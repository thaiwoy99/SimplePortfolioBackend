const express = require ("express")
const {
AddProject,deleteProject,getProject,updateProject,getAllProjects,
} = require('../Controller/control')

const router = express.Router()


router.get('/projects',getAllProjects)
router.get('/projects/:id',getProject)
router.put('/projects/:id',updateProject)
router.post('/projects',AddProject)
router.delete('/projects/:id',deleteProject)

module.exports = router