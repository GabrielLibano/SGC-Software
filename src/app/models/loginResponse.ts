

export class LoginResponse {
    codigo: number = 0;
    mensagem: string = '';
  
    public constructor(
      fields?: {
        codigo: string;
        mensagem: string;
      }) {
      if (fields) {
        Object.assign(this, fields);
      }
    }
  }
  