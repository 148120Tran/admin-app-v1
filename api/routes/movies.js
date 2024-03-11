const router = require("express").Router();

const verify = require("../verifyToken");

const Movie = require("../models/Movie");

//CREATING

router.post("/", verify, async (req, res, next) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);
    try {
      const saveMovie = await newMovie.save();
      res.status(201).json(saveMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("ur not allowed");
  }
});

//UPDATING

router.put("/:id", verify, async (req, res, next) => {
  if (req.user.isAdmin) {
    try {
      const updateMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(201).json(updateMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("ur not allowed");
  }
});

//UPDATE ALL

// router.put("/updateAll", verify, async (req, res, next) => {
//   if (req.user.isAdmin) {
//     try {
//       const updateAllMovie = await Movie.updateMany(
//         { isSeries: true },
//         { $set: req.body }
//       );
//       res.status(201).json(updateAllMovie);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   } else {
//     res.status(403).json("ur not allowed");
//   }
// });

//DELETE

router.delete("/:id", verify, async (req, res, next) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(201).json("delete movie");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("ur not allowed");
  }
});

//GET

router.get("/find/:id", verify, async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET RANDOM

router.get("/random", verify, async (req, res, next) => {
  const type = req.query.type; // /?type=series
  let movie;
  try {
    if (type === "series") {
      movie = await Movie.aggregate([
        {
          $match: { isSeries: true },
        },
        { $sample: { size: 1 } }, // this $sample  give randomly spicific number of doc
      ]);
    }
    // type would be movie
    else {
      movie = await Movie.aggregate([
        {
          $match: { isSeries: false },
        },
        { $sample: { size: 1 } }, // this $sample  give randomly spicific number of doc
      ]);
    }
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL

router.get("/", verify, async (req, res, next) => {
  try {
    const movie = await Movie.find();
    res.status(200).json(movie.reverse()); // give the most recent
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
