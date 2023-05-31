import { Factory } from "fishery";
import { UserCredentials, UserStateStructure } from "../../../store/user/types";
import { faker } from "@faker-js/faker";

const userDataFactory = Factory.define<UserStateStructure>(() => ({
  name: faker.person.fullName(),
  id: faker.database.mongodbObjectId().toString(),
  token: faker.string.alphanumeric(25),
  isLogged: false,
}));

export const getUserDataMock = (
  withIsLogged?: boolean,
  data?: UserStateStructure
) => {
  const userData = userDataFactory.build(data);

  if (withIsLogged) {
    return userData;
  } else {
    delete userData.isLogged;
    return userData;
  }
};

const userCredentialsFactory = Factory.define<UserCredentials>(() => ({
  username: faker.internet.userName(),
  password: faker.string.alphanumeric(10),
}));

export const getUserCredentialsMock = (data?: UserCredentials) => {
  return userCredentialsFactory.build(data);
};
