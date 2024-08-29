export class Login {
  user: string = '';
  password: string = '';

  constructor(fields?: { user?: string; password?: string }) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}