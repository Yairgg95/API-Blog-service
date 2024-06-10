const express = require('express');
const usersUseCase = require('../usecases/users.usecase')

const router = express.Router();

router.get('/:id', async (req,res) => {
    const { id } = req.params;
    try {
        const user = await usersUseCase.getById(id);
        res.json({
            success: true,
            data: { user },
        })
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message,
        });
    }
})


router.post('/', async (req, res) => {
    try {
        const createdUser = await usersUseCase.create(req.body);
        res.json({
            success: true,
            data: { User: createdUser},
        })
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message,
        });
    }
})

router.get('/', async (req,res) => {
    try {
        const allUsers = await usersUseCase.getAll();
        res.json({
            success: true,
            data: { Users: allUsers }
        })
    } catch (error) {
        res.status(error.status || 500);
        res.json({
            success: false,
            error: error.message,
        });
    }
})

module.exports = router;
