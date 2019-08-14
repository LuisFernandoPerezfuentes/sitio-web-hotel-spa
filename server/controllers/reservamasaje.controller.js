const Reservamasaje = require('../models/reservamasaje');

const reservamasajeCtrl = {};




reservamasajeCtrl.getReservamasaje = async (req, res) => {
    const reservamasaje = await Reservamasaje.find();
    res.json(reservamasaje);
};

reservamasajeCtrl.createReservamasaje = async (req, res) => {
    const reservamasaje = new Reservamasaje({
        idcliente: req.body.idcliente,
        hourenter: req.body.hourenter,
        hourexit: req.body.hourexit,
        tipomasaje: req.body.tipomasaje,
        fechareserva: req.body.fechareserva,
        usovapor: req.body.usovapor




    });
    await reservamasaje.save();
    res.json({status: 'Reservamasaje created'});
};

reservamasajeCtrl.getReservamasaje = async (req, res) => {
    const { id } = req.params;
    const reservamasaje = await Reservamasaje.findById(id);
    res.json(reservamasaje);
};

reservamasajeCtrl.editReservamasaje = async (req, res) => {
    const { id } = req.params;
    const reservamasaje = {
        idcliente: req.body.idcliente,
        hourenter: req.body.hourenter,
        hourexit: req.body.hourexit,
        tipomasaje: req.body.tipomasaje,
        fechareserva: req.body.fechareserva,
        usovapor: req.body.usovapor

    };
    await Reservamasaje.findByIdAndUpdate(id, {$set: reservamasaje}, {new: true});
    res.json({status: 'Reservamasaje Updated'});
};

reservamasajeCtrl.deleteReservamasaje = async (req, res) => {
    await Reservamasaje.findByIdAndRemove(req.params.id);
    res.json({status: 'Reservamasaje Deleted'});
};

module.exports = reservamasajeCtrl;


