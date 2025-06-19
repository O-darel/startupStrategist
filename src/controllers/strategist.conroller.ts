import { NextFunction, Request, Response } from "express";
import * as strategyService from "../services/strategist.service";
import { ApiError } from "../utils/apiError";

export const brainstorm = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body || typeof req.body !== "object") {
    return next(new ApiError(400, "Invalid or missing request body"));
  }

  const { topic, stream } = req.body;

  if (!topic) {
    return next(new ApiError(400, "Topic is required", "Missing field: topic"));
  }

  try {
    const response = await strategyService.brainstormIdeas(topic, stream);
    res.json({
      status: "success",
      message: "",
      data: response,
    });
  } catch (err) {
    next(err);
  }
};

export const businessPlan = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body || typeof req.body !== "object") {
    return next(new ApiError(400, "Invalid or missing request body"));
  }

  const { idea, stream } = req.body;

  if (!idea) {
    return next(new ApiError(400, "Idea is required", "Missing field: idea"));
  }

  try {
    const response = await strategyService.generateBusinessPlan(idea, stream);
    res.json({
      status: "success",
      message: "",
      data: response,
    });
  } catch (err) {
    next(err);
  }
};

export const marketSize = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body || typeof req.body !== "object") {
    return next(new ApiError(400, "Invalid or missing request body"));
  }

  const { industry, stream } = req.body;

  if (!industry) {
    return next(new ApiError(400, "Industry is required", "Missing field: industry"));
  }

  try {
    const response = await strategyService.estimateMarketSize(industry, stream);
    res.json({
      status: "success",
      message: "",
      data: response,
    });
  } catch (err) {
    next(err);
  }
};

export const pitchDeck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body || typeof req.body !== "object") {
    return next(new ApiError(400, "Invalid or missing request body"));
  }

  const { idea, stream } = req.body;

  if (!idea) {
    return next(new ApiError(400, "Idea is required", "Missing field: idea"));
  }

  try {
    const response = await strategyService.createPitchDeck(idea, stream);
    res.json({
      status: "success",
      message: "",
      data: response,
    });
  } catch (err) {
    next(err);
  }
};

export const swot = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body || typeof req.body !== "object") {
    return next(new ApiError(400, "Invalid or missing request body"));
  }

  const { idea, stream } = req.body;

  if (!idea) {
    return next(new ApiError(400, "Idea is required", "Missing field: idea"));
  }

  try {
    const response = await strategyService.analyzeSWOT(idea, stream);
    res.json({
      status: "success",
      message: "",
      data: response,
    });
  } catch (err) {
    next(err);
  }
};
