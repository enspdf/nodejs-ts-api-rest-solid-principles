import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUsercontroler } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailTrapMailProvider = new MailTrapMailProvider();
const postgresUsersRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailTrapMailProvider
);

const createUserController = new CreateUsercontroler(createUserUseCase);

export { createUserUseCase, createUserController };
