import "reflect-metadata";
import { DataSource } from "typeorm";
import { ProductoIndividual } from "../entities/ProductoIndividual";
import { ProductoCompuestoDetalle } from "../entities/ProductoCompuestoDetalle";
import { ProductoCompuesto } from "../entities/ProductoCompuesto";
import { env } from "./configEnv";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [ProductoIndividual, ProductoCompuesto, ProductoCompuestoDetalle],
  migrations: [],
  subscribers: [],
});