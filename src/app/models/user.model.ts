export interface UserModel {
  readonly id: number;
  readonly name: {firstname: string, lastname: string};
  readonly email: string;
  readonly firstname: string;
  readonly lastname: string;
}
