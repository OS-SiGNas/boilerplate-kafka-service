export type Environment = "dev" | "test" | "prod";

export interface IService {
  run: () => void;
}
