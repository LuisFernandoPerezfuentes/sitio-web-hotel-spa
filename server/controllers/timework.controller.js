const Timework = require('../models/timework');

const timeworkCtrl = {};

timeworkCtrl.getTimeworks = async (req, res) => {
    const timeworks = await Timework.find();
    res.json(timeworks);
};

timeworkCtrl.createTimework = async (req, res) => {
    const timework = new Timework({
        idemployee: req.body.idemployee,
        hourenter: req.body.hourenter,
        hourexit: req.body.hourexit,




        tipohabitacion: req.body.tipohabitacion,
        fechareserva: req.body.fechareserva,
        numeropersonas: req.body.numeropersonas




    });
    await timework.save();
    res.json({status: 'Timework created'});
};

timeworkCtrl.getTimework = async (req, res) => {
    const { id } = req.params;
    const timework = await Timework.findById(id);
    res.json(timework);
};

timeworkCtrl.editTimework = async (req, res) => {
    const { id } = req.params;
    const timework = {
        idemployee: req.body.idemployee,
        hourenter: req.body.hourenter,
        hourexit: req.body.hourexit,




        tipohabitacion: req.body.tipohabitacion,
        fechareserva: req.body.fechareserva,
        numeropersonas: req.body.numeropersonas
    };
    await Timework.findByIdAndUpdate(id, {$set: timework}, {new: true});
    res.json({status: 'Timework Updated'});
};

timeworkCtrl.deleteTimework = async (req, res) => {
    await Timework.findByIdAndRemove(req.params.id);
    res.json({status: 'Timework Deleted'});
};

module.exports = timeworkCtrl;