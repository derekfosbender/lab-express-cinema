const express = require('express');

const router = express.Router();

const Movie = require("../models/Movie.model");


router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req,res)=>{
Movie.find() 
.then((allTheMovies)=>{
 res.render("movies", {movies: allTheMovies})
})
.catch((err)=>{
 console.log(err);
});
});

router.get("/movies/new",(req,res,next)=>{
    res.render('new');
});

router.post('/movies/create', (req,res)=>{
    Movie.create({
        title: req.body.title,
      director: req.body.director,
      stars: req.body.stars,
      image: req.body.img,
      descrption: req.body.description,
      showtimes: req.body.showtimes
    }).then((response)=>{
        res.redirect("/movies") //redirect on post
       })
       .catch((err)=>{
        console.log(err);
       })
})
router.get("/movies/:theID", (req, res)=>{
    Movie.findById(req.params.theID)
    .then((aMovie)=>{
        res.render("detailsOfMovie", {aMovie: aMovie})
    })
    .catch((err)=>{
        console.log(err);
    });
});


router.get('/movies/:id/edit', (req,res)=>{
    Movie.findById(req.params.id)
    .then((aMovie)=>{
        res.render("edit", {aMovie: aMovie})
       }) 
})

router.post('/movies/:theID/update', (req,res)=>{
    Movie.findByIdAndUpdate(req.params.theID,{
        title: req.body.title,
        director: req.body.director,
        stars: req.body.stars,
        image: req.body.img,
        descrption: req.body.description,
        showtimes: req.body.showtimes
    }).then((response)=>{
        res.redirect("/movies/"+req.params.theID)
    })
})

module.exports = router;
