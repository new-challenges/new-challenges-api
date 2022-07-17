import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthController } from "../controllers/auth.controller";
import { LevelController } from "../controllers/level.controller";
import { UserController } from "../controllers/user.controller";
import { JwtStrategy } from "../jwt/strategies/jwt.strategy";
import { AuthenticationRepository } from "../repositories/authentication.repository";
import { ChallengesDetailsRepository } from "../repositories/challenges-details.repository";
import { ChallengesRepository } from "../repositories/challenges.repository";
import { DictionaryExampleRepository } from "../repositories/dictionary-example.repository";
import { DictionaryRepository } from "../repositories/dictionary.repository";
import { LevelRepository } from "../repositories/level.repository";
import { OTPRepository } from "../repositories/opt.repository";
import { QuestionRepository } from "../repositories/question.repository";
import { RoleRepository } from "../repositories/role.repository";
import { TokenPuzzlePiecesRepository } from "../repositories/token-puzzle-pieces.repository";
import { TokenRepository } from "../repositories/token.repository";
import { TransactionRepository } from "../repositories/transaction.repository";
import { UserWalletRefRepository } from "../repositories/user-wallet-ref..repository";
import { UserRepository } from "../repositories/user.repository";
import { WalletTokenRefRepository } from "../repositories/wallet-token-ref.repository";
import { AuthService } from "../services/auth.service";
import { LevelService } from "../services/level.service";
import { UserService } from "../services/user.service";
import { AuthenticationEntity } from "./entities/authentication.entity";
import { ChallengesDetailsEntity } from "./entities/challenges-details.entity";
import { ChallengesEntity } from "./entities/challenges.entity";
import { DictionaryExampleEntity } from "./entities/dictionary-example.entity";
import { DictionaryEnity } from "./entities/dictionary.entity";
import { LevelEntity } from "./entities/level.entity";
import { OTPEnity } from "./entities/opt.entity";
import { QuestionEntity } from "./entities/question.entity";
import { RoleEntity } from "./entities/role.entity";
import { TokenPuzzlePiecesEntity } from "./entities/token-puzzle-pieces.entity";
import { TokenEntity } from "./entities/token.entity";
import { TransactionEntity } from "./entities/transaction.entity";
import { UserWalletRefEntity } from "./entities/user-wallet-ref.entity";
import { UserEntity } from "./entities/user.entity";
import { WalletTokenRefEntity } from "./entities/wallet-token-ref.entity";
import { BcryptService } from "./services/bcrypt.service";
import { TokenService } from "./services/token.service";

const repositories = [
  LevelRepository,
  AuthenticationRepository,
  ChallengesDetailsRepository,
  ChallengesRepository,
  DictionaryExampleRepository,
  DictionaryRepository,
  QuestionRepository,
  RoleRepository,
  TokenPuzzlePiecesRepository,
  TokenRepository,
  TransactionRepository,
  UserWalletRefRepository,
  UserRepository,
  WalletTokenRefRepository,
  OTPRepository
];

const services = [
  LevelService,
  AuthService,
  UserService,
  BcryptService,
  TokenService
];

const controllers= [
  AuthController,
  LevelController,
  UserController
];

const entities = [
  LevelEntity,
  AuthenticationEntity,
  ChallengesDetailsEntity,
  ChallengesEntity,
  DictionaryEnity,
  DictionaryExampleEntity,
  LevelEntity,
  QuestionEntity,
  RoleEntity,
  TokenPuzzlePiecesEntity,
  TokenEntity,
  TransactionEntity,
  UserEntity,
  UserWalletRefEntity,
  WalletTokenRefEntity,
  OTPEnity
];


@Module({
  imports: [
    
    TypeOrmModule.forFeature([...entities])
  ],
  controllers: [...controllers],
  providers: [...services, ...repositories],
  exports: [],
})
export class SharedModule { }