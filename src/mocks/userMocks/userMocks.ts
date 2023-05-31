import { UserStateStructure, UserTokenStructure } from "../../store/user/types";

export const initialUserStateMock: UserStateStructure = {
  name: "",
  id: "",
  token: "",
  isLogged: false,
};

export const userDataTokenMock: UserTokenStructure = {
  id: "646f6f7baf9a198820caf98a",
  name: "Administrador",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZmNmY3YmFmOWExOTg4MjBjYWY5OGEiLCJuYW1lIjoiQWRtaW5pc3RyYWRvciIsImlhdCI6MTY4NTQ0NDI4NCwiZXhwIjoxNjg1NTMwNjg0fQ._UdYOb7yHIkBZg8feLE0VwbZlfxNGTVBx89wcrg5Zzc",
};

export const userCredentialsMock = {
  username: "admin",
  password: "admin",
};

export const tokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZmNmY3YmFmOWExOTg4MjBjYWY5OGEiLCJuYW1lIjoiQWRtaW5pc3RyYWRvciIsImlhdCI6MTY4NTQ0NDI4NCwiZXhwIjoxNjg1NTMwNjg0fQ._UdYOb7yHIkBZg8feLE0VwbZlfxNGTVBx89wcrg5Zzc";
