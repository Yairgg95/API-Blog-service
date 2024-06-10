const express = require('express')
const postsUseCase = require('../usecases/posts.usecase')
const auth = require('../middlewares/auth.middleware')

router.post('/', auth, async (req, res) => {
    try {
        const userId = req.user._id; 
        const postCreated = await postsUseCase.create(req.body, userId);
        res.json({
            success: true,
            data: { postCreated },
        });
    } catch (error) {
       res.status(error.status || 500);
       res.json({
        success: false,
        error: error.message,
       });
    }
});

router.patch('/:id', auth, async (req, res) => {
    const { id } = req.params;
    const userId = req.user._id; 

    try {
        const postUpdated = await postsUseCase.updateById(id, req.body, userId);
        res.json({
            success: true,
            data: { post: postUpdated },
        });
    } catch (error) {
        res.status(error.status || 500);
        res.json({
         success: false,
         error: error.message,
        });
     }
});

router.delete('/:id', auth, async (req,res) => {
    const { id } = req.params;
    const userId = req.user._id;

    try {
        const postDeleted = await postsUseCase.deleteById(id, userId);
        res.json({
            succes: true,
            data: { post: postDeleted }
        });
    } catch (error) {
        res.status(error.status || 500);
        res.json({
         success: false,
         error: error.message,
        });
     }
})

router.get("/", async (req, res) => {
    const { search } = req.query;

    try {
        const posts = await postsUseCase.getAll(search);
        res.json ({
            succes: true,
            data: { posts }
        })
    } catch (error) {
        res.status(error.status || 500);
        res.json({
         success: false,
         error: error.message,
        });
     }
});

module.exports = router;