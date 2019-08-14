const Typeroom = require('../models/typeroom');

const typeroomCtrl = {};

typeroomCtrl.getTyperooms = async (req, res) => {
    const typerooms = await Typeroom.find();
    res.json(typerooms);
};

typeroomCtrl.createTyperoom = async (req, res) => {
    const typeroom = new Typeroom({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });
    await typeroom.save();
    res.json({status: 'Typeroom created'});
};

typeroomCtrl.getTyperoom = async (req, res) => {
    const { id } = req.params;
    const typeroom = await Typeroom.findById(id);
    res.json(typeroom);
};

typeroomCtrl.editTyperoom = async (req, res) => {
    const { id } = req.params;
    const typeroom = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    };
    await Typeroom.findByIdAndUpdate(id, {$set: typeroom}, {new: true});
    res.json({status: 'Typeroom Updated'});
};

typeroomCtrl.deleteTyperoom = async (req, res) => {
    await Typeroom.findByIdAndRemove(req.params.id);
    res.json({status: 'Typeroom Deleted'});
};

module.exports = typeroomCtrl;