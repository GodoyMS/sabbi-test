// // middlewares/validateRequest.ts
// import { Request, Response, NextFunction } from "express";
// import { validationResult } from "express-validator";

// export function validateRequest(req: Request, res: Response, next: NextFunction) {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({
//       errors: errors.array().map(err => err.msg),
//     });
//   }
//   next();
// }


import { Request, Response, NextFunction } from "express";
import { matchedData, validationResult } from "express-validator";

export function validateRequest(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return; // just return void here, do NOT return res
  }
  req.body = matchedData(req, { locations: ["body"] });

  next();
}
