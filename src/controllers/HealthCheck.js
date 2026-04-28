import { ApiResponse } from "../utils/Api-response.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// const healthCheck = async (req, res, next) => {
//   try {
//     res
//       .status(200)
//       .json(new ApiResponse(200, { message: "Server is running" }));
//   } catch (error) {
//     next(err);
//   }
// };

const healthCheck = asyncHandler((req, res, next) => {
  res.status(200).json(new ApiResponse(200, { message: "Server is running" }));
});

export { healthCheck };
