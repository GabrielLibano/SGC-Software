

export class CadastroDeCursosModel {
    codigo: number = 0;
    data: string = '';
    equipes: Array<String> = [];
    nomeCurso: string = '';
  
    public constructor(
      fields?: {
        codigo?: string;
        data?: string;
        equipes?: Array<String>;
        nomeCurso?: string;
      }) {
      if (fields) {
        Object.assign(this, fields);
      }
    }
  }
  