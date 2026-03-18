// types.ts
import { z } from 'zod';

// Model names
export enum ModelName {
  LogisticRegression = 'LogisticRegression',
  DecisionTree = 'DecisionTree',
  RandomForest = 'RandomForest',
  SupportVectorMachine = 'SupportVectorMachine',
}

// Model types
export enum ModelType {
  Classification = 'classification',
  Regression = 'regression',
  Clustering = 'clustering',
}

// Algorithm names
export enum AlgorithmName {
  SGD = 'SGD',
  AdaGrad = 'AdaGrad',
  Adam = 'Adam',
}

// Model configuration options
export type ModelConfig = {
  type: ModelType;
  name: ModelName;
  algorithm: AlgorithmName;
  learningRate: number;
  numIterations: number;
  regularizationStrength: number;
}

// Input data schema
export type InputData = {
  features: number[][];
  labels: number[];
}

// Prediction result
export type PredictionResult = {
  probabilities: number[];
  predictions: number[];
}