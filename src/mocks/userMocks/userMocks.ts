import { UserStateStructure, UserTokenStructure } from "../../store/user/types";
import {
  getUserCredentialsMock,
  getUserDataMock,
} from "../factories/userFactory/userFactory";

export const initialUserStateMock: UserStateStructure = getUserDataMock(true, {
  id: "",
  name: "",
  token: "",
  image: "",
  isLogged: false,
});

export const currentUserStateMock: UserStateStructure = getUserDataMock(true, {
  isLogged: true,
});

export const userDataTokenMock: UserTokenStructure = getUserDataMock(false, {
  id: "646f6f7baf9a198820caf98a",
  name: "Administrador",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZmNmY3YmFmOWExOTg4MjBjYWY5OGEiLCJuYW1lIjoiQWRtaW5pc3RyYWRvciIsImlhdCI6MTY4NTQ0NDI4NCwiZXhwIjoxNjg1NTMwNjg0fQ._UdYOb7yHIkBZg8feLE0VwbZlfxNGTVBx89wcrg5Zzc",
  image:
    "https://res.cloudinary.com/dbpdytij2/image/upload/v1686332007/avatar_au9hja.png",
});

export const userDataMock: Partial<UserTokenStructure> = {
  id: "646f6f7baf9a198820caf98a",
  name: "Administrador",
  image:
    "https://res.cloudinary.com/dbpdytij2/image/upload/v1686332007/avatar_au9hja.png",
};

export const userCredentialsMock = getUserCredentialsMock({
  username: "admin",
  password: "admin",
});

export const tokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZmNmY3YmFmOWExOTg4MjBjYWY5OGEiLCJuYW1lIjoiQWRtaW5pc3RyYWRvciIsImlhdCI6MTY4NTQ0NDI4NCwiZXhwIjoxNjg1NTMwNjg0fQ._UdYOb7yHIkBZg8feLE0VwbZlfxNGTVBx89wcrg5Zzc";
