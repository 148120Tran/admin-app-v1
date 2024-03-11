const router = require("express").Router();

const verify = require("../verifyToken");

const List = require("../models/List");

//CREATING

router.post("/", verify, async (req, res, next) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body);
    try {
      const saveList = await newList.save();
      res.status(201).json(saveList);
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
      const updateList = await List.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );

      res.status(201).json(updateList);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("ur not allowed");
  }
});

//DELETE

router.delete("/:id", verify, async (req, res, next) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id);
      res.status(200).json("delete list of movie");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("ur not allowed");
  }
});

//GET ALL
// router.get("/", verify, async (req, res, next) => {
//   if (req.user.isAdmin) {
//     try {
//       const movieList = await List.find();
//       res.status(200).json(movieList);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }
// });

//GET
router.get("/", verify, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];
  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery, genre: genreQuery } },
        ]);
      } else {
        list = await List.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQuery } },
        ]);
      }
    } else {
      list = await List.aggregate([{ $sample: { size: 10 } }]);
    }
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

//1:43
