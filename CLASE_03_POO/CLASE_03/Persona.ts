namespace NPersona{
export abstract class Persona{

  private _apellido:string;
  private _dni:number;
  private _nombre:string;
  private _sexo:string;

  public constructor(apellido:string,dni:number,nombre:string,sexo:string)
  {
    this._apellido=apellido;
    this._dni=dni;
    this._nombre=nombre;
    this._sexo=sexo;
  }

  public get Apellido():string{return this._apellido;}
  public get Dni():number{return this._dni;}
  public get Nombre():string{return this._nombre;}
  public get Sexo():string{return this._sexo;}

  public abstract Hablar(idioma:string):string;

  public ToString():string
  {
    return `${this.Nombre}-${this.Apellido}-${this.Dni}-${this.Sexo}`;
  }
}
}
