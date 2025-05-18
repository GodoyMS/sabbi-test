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
    return; 
  }
  req.body = matchedData(req, { locations: ["body"] });

  next();
}
