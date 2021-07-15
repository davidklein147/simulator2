function errors(res, err ,mas){
    return res.status(500).send(mas)
};

module.exports = errors