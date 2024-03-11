const router = require("express").Router();

const verify = require("../verifyToken");
const CryptoJS = require("crypto-js");
const Subscriber = require("../models/Subscriber");

//create
router.post("/create", verify, async (req, res, next) => {
  if (req.user.isAdmin) {
    const newSubscriber = new Subscriber(req.body);
    try {
      const saveSubscriber = await newSubscriber.save();
      res.status(200).json(saveSubscriber);
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

//UPDATING
//patch : when you want to apply partial updates,
//put :  when you want to update or create a resource with a complete representation.
router.patch("/:id", verify, async (req, res, next) => {
  if (req.user.isAdmin) {
    try {
      const updateSubscriber = await Subscriber.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true, //return the modified document rather than the original
        }
      );

      res.status(200).json(updateSubscriber);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    //403 is forbidden
    res.status(403).json("you can only update ur acc");
  }
});

//DELETE

router.delete("/:id", verify, async (req, res, next) => {
  if (req.user.isAdmin) {
    try {
      await Subscriber.findByIdAndDelete(req.params.id);

      res.status(200).json("delete Subscriber success");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    //403 is forbidden
    res.status(403).json("you can only delete ur acc");
  }
});

//get
router.get("/find/:id", async (req, res) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id);
    const { email, ...info } = subscriber._doc;
    res.status(200).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL

// router.get("/", verify, async (req, res, next) => {
//   const query = req.query.new; // /?new=true
//   if (req.user.isAdmin) {
//     try {
//       const users = query
//         ? await User.find().sort({ _id: -1 }).limit(5)
//         : await User.find();

//       res.status(200).json(users);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   } else {
//     //403 is forbidden
//     res.status(403).json("you are not allow");
//   }
// });

//GET ALL
router.get("/", async (req, res) => {
  const query = req.query.new;
  try {
    const subscribers = query
      ? await Subscriber.find().sort({ _id: -1 }).limit(5)
      : await Subscriber.find();
    res.status(200).json(subscribers);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //GET USER STATS
// router.get("/stats", async (req, res) => {
//   const today = new Date();
//   const latYear = today.setFullYear(today.setFullYear() - 1);

//   try {
//     const data = await User.aggregate([
//       {
//         $project: {
//           month: { $month: "$createdAt" },
//         },
//       },
//       {
//         $group: {
//           _id: "$month",
//           total: { $sum: 1 },
//         },
//       },
//     ]);
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
