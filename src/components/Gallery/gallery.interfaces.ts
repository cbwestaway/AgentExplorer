export interface ModelConfig {
  name: string;
  path: string;
  summary: string;
  active: boolean;
};

export interface Models {
  models: ModelConfig[];
};
