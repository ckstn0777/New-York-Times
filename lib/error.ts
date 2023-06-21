export class TooManyRequestError extends Error {
  constructor(message: string) {
    super(message); // (1)
    this.name = "TooManyRequest"; // (2)
  }
}
