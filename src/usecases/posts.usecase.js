const createError = require('http-errors')
const Post = require('../models/posts.model');

async function create(postData, userId) {
    const { title, image, body } = postData;

    const newItem = new Post({
        title,
        image,
        body,
        user: userId,
        created_at: Date.now(),
        updated_at: Date.now(),
    });

    return await newItem.save();
}

async function updateById(id, newData, userId)  {
    
    const post = await Post.findById(id);

    
    if (!post) {
        throw createError(404,'Post not found');
    }

    if (post.user.toString() !== userId.toString()) {
        throw createError(403,'Unauthorized to update this post');
    }

    if (newData.user) {
        throw createError(405, 'User cannot be updated')
    }

    newData.updated_at = Date.now();

    const updatedPost = await Post.findByIdAndUpdate(id, newData, { new: true });

    return updatedPost;
};

async function deleteById(id, userId) {
    const post = await Post.findById(id);

    if (!post) {
        throw createError(404, "Post not found");
    }

    if (post.user.toString() !== userId.toString()) {
        throw createError(403, 'Unauthorized to delete this post');
    }

    const postDeleted = await Post.findByIdAndDelete(id);
    return postDeleted
} 

async function getAll(search)  {
    const query = {};

    if (search) {
        query.title = { $regex: search, $options: 'i' }; 
    }

    const documents = await Post.find(query).populate("user");
    return documents;
};

async function getById(id) {
    try {
        const post = await Post.findById(id).populate('user');
        return post;
    } catch (error) {
        throw new Error('Error retrieving post');
    }
}

module.exports = {
    create,
    getAll,
    deleteById,
    updateById,
    getById
}
