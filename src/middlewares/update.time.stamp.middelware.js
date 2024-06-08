function updateTimestamp(schema) {
    schema.pre('save', function(next) {
        this.updated_at = Date.now();
        next();
    });
};


module.exports = { updateTimestamp };