module.exports = {
    index: (req, res, next)=>{
        res.status(200).json({ message: 'Hello world'});
    }
};