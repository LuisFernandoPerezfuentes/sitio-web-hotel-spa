const express = require('express');
const router = express.Router();


///Modelos de Comentario
const Comment = require('../../../reservaciones/src/models/comment');
///Modelos de Reservaciones
const ReservationNice = require('../../../reservaciones/src/models/reservation-nice');
const ReservationFantasy = require('../../../reservaciones/src/models/reservation-fantasy');


//Rutas de Navegación

router.get('/', (req, res) => {
    res.render('index.html', { title: 'Inicio' });
});



router.get('/comment-user-nice', async (req, res) => {
    res.render('views-comment/comment-nice.html', {title: 'Comentario'})
});
    

router.get('/comment-user-fantasy', async (req, res) => {
    res.render('views-comment/comment-fantasy.html', {title: 'Comentario'})
});



router.get('/about', (req, res) => {
    res.render('about.html', { title: 'About' });
});

router.get('/reservation', (req, res) => {
    res.render('views-reservation/reservation.html', { title: 'Reservation' });
});

router.get('/comment', (req, res) => {
    res.render('views-comment/comment.html', { title: 'Comentarios' });
});
router.get('/comment-admin', async (req, res) => {
    const comments = await Comment.find();
    res.render('views-comment/comment-admin.html',
        { comments });
});


router.get('/reservation-admin-nice', async (req, res) => {
    const reservationsNice = await ReservationNice.find();
    res.render('views-reservation/reservation-admin-nice.html',
        { reservationsNice });
});

router.get('/reservation-admin-fantasy', async (req, res) => {
    const reservationsFantasy = await ReservationFantasy.find();
    res.render('views-reservation/reservation-admin-fantasy.html',
        { reservationsFantasy });
});


router.get('/reservation-user-nice', async (req, res) => {
    const reservationsNice = await ReservationNice.find();
    res.render('views-reservation/formulario-reservation-nice-user.html',
        { reservationsNice });
});

router.get('/reservation-user-fantasy', async (req, res) => {
    const reservationsFantasy = await ReservationFantasy.find();
    res.render('views-reservation/formulario-reservation-fantasy-user.html',
        { reservationsFantasy });
});


///Reservation Nice

router.post('/add-reservation-nice-user', async (req, res) => {
    const reservationNice = new ReservationNice(req.body);
    await reservationNice.save();
    res.redirect('/reservation-user-nice');
});


router.post('/add-reservation-nice-admin', async (req, res) => {
    const reservationNice = new ReservationNice(req.body);
    await reservationNice.save();
    res.redirect('/reservation-admin-nice');

});

router.get('/editRN/:id', async (req, res, next) => {
    const { id } = req.params;
    const reservationNice = await ReservationNice.findById(id);

    res.render('edit-reservation-nice', {
        reservationNice
    });
});


router.post('/editRN/:id', async (req, res) => {
    const { id } = req.params;
    await ReservationNice.update({ _id: id }, req.body);
    res.redirect('/reservation-admin-nice');
});



router.get('/deleteRN/:id', async (req, res) => {
    const { id } = req.params;
    await ReservationNice.remove({ _id: id });
    const reservationsNice = await ReservationNice.find();

    res.redirect('/reservation-admin-nice');
});


//End Reservacion Nice






///Reservation Fantasy

router.post('/add-reservation-fantasy-user', async (req, res) => {
    const reservationFantasy = new ReservationFantasy(req.body);
    await reservationFantasy.save();
    res.redirect('/reservation-user-fantasy');
});

router.post('/add-reservation-fantasy-admin', async (req, res) => {
    const reservationFantasy = new ReservationFantasy(req.body);
    await reservationFantasy.save();
    res.redirect('/reservation-admin-fantasy');

});


router.get('/editRF/:id', async (req, res, next) => {
    const { id } = req.params;
    const reservationFantasy = await ReservationFantasy.findById(id);

    res.render('edit-reservation-fantasy', {
        reservationFantasy
    });
});


router.post('/editRF/:id', async (req, res) => {
    const { id } = req.params;
    await ReservationFantasy.update({ _id: id }, req.body);
    res.redirect('/reservation-admin-fantasy');
});



router.get('/deleteRF/:id', async (req, res) => {
    const { id } = req.params;
    await ReservationFantasy.remove({ _id: id });
    const reservationFantasy = await ReservationFantasy.find();

    res.redirect('/reservation-admin-fantasy');
});
//End Reservacion Nice


//Comentarios

router.post('/add-admin', async (req, res) => {
    const comment = new Comment(req.body);
    await comment.save();
    res.redirect('/comment-admin');

});

router.post('/add-user-fantasy', async (req, res) => {
    const comment = new Comment(req.body);
    await comment.save();
    res.redirect('/comment-user-fantasy');
});

router.post('/add-user-nice', async (req, res) => {
    const comment = new Comment(req.body);
    await comment.save();
    res.redirect('/comment-user-nice');
});

router.post('/add-user', async (req, res ) =>{
   
    const comment= new Comment(req.body);
    await comment.save();
    res.render('views-comment/comment.html', {title: 'Comentario'});

    
});

router.get('/edit/:id', async (req, res, next) => {
    const { id } = req.params;
    const comment = await Comment.findById(id);

    res.render('edit-comment',{
        comment
    });
  });


router.post('/edit/:id', async(req, res)=>{
    const { id } = req.params;
    await Comment.update({_id: id}, req.body);
    res.redirect('/comment-admin');
});

router.get('/delete/:id', async(req, res)=>{
    const { id } = req.params;
   await Comment.remove({_id: id});
   const comments= await Comment.find();

   res.redirect('/comment-admin');
});
module.exports = router;