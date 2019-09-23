/// <reference path="./Persona.ts"/>


namespace NPersona{
export class Empleado extends Persona{

  protected _legajo:number;
  protected _sueldo:number;

  public constructor(nombre:string,apellido:string,dni:number,sexo:string,legajo:number,sueldo:number)
  {
    super(apellido,dni,nombre,sexo);
    this._legajo=legajo;
    this._sueldo=sueldo;
  }

public get Legajo():number{return this._legajo;}
public get Sueldo():number{return this._sueldo;}

public Hablar(idioma:string):string{
  return `El empleado `+this.Nombre+` habla ${idioma}`;
}

public ToString():string{
  return `${super.ToString()}-${this.Legajo}-${this.Sueldo}`;
}


}
}
