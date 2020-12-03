export default interface IHashProvider {
  generateHash(payload: string): Promise<string>;
  compareHash(hash: string, hashed: string): Promise<boolean>;
}
