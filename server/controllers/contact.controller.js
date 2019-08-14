const Contact = require('../models/contact');

const contactCtrl = {};

contactCtrl.getContacts = async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts);
};

contactCtrl.createContact = async (req, res) => {
    const contact = new Contact({
        telephone: req.body.telephone,
        mail: req.body.mail
    });
    await contact.save();
    res.json({status: 'Contact created'});
};

contactCtrl.getContact = async (req, res) => {
    const { id } = req.params;
    const contact = await Contact.findById(id);
    res.json(contact);
};

contactCtrl.editContact = async (req, res) => {
    const { id } = req.params;
    const contact = {
        telephone: req.body.telephone,
        mail: req.body.mail
    };
    await Contact.findByIdAndUpdate(id, {$set: contact}, {new: true});
    res.json({status: 'Contact Updated'});
};

contactCtrl.deleteContact = async (req, res) => {
    await Contact.findByIdAndRemove(req.params.id);
    res.json({status: 'Contact Deleted'});
};

module.exports = contactCtrl;