const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

router  
    .route('/')
    .get(getAllThought)
    .post(createThought)
router
    .route('/:id')
    .get(getThoughtById)
    .delete(removeThought)
    .put(updateThought)

router 
    .route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction)
module.exports = router;