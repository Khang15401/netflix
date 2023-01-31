// import User from "../models/User.js";

// export const updateUser = async (req, res, next) => {
// //   if (req.user.id === req.params.id || req.user.isAdmin) {
// //     if (req.body.password) {
// //       req.body.password = CryptoJS.AES.encrypt(
// //         req.body.password,
// //         process.env.SECRET_KEY
// //       ).toString();
// //     }

//     try {
//       const updateUser = await User.findByIdAndUpdate(
//         req.params.id,
//         {
//           $set: req.body,
//         },
//         { new: true }
//       );
//       res.status(200).json(updateUser);
//     } catch (err) {
//       res.status(500).json(err);
//       next(err);
//     }
// //   } else {
// //     res.status(403).json("Bạn có thể cập nhật tài khoản của bản thân!");
// //   }
// }
