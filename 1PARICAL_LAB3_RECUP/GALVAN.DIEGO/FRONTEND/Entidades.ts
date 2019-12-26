namespace Entidades
{
    export class Ropa
    {
        public codigo:number;
        public nombre:string;
        public precio:number;

        public constructor(codigo:number,nombre:string,precio:number)
        {
            this.codigo=codigo;
            this.nombre=nombre;
            this.precio=precio;
        }

        public ropaToString():string
        {
            return `"codigo":${this.codigo},"nombre":"${this.nombre}","precio":${this.precio}`;
        }
    }
    export class Campera extends Ropa
    {
        public talle:string;
        public color:string;

        public constructor(codigo:number,nombre:string,precio:number,talle:string,color:string)
        {
            super(codigo,nombre,precio);
            this.talle=talle;
            this.color=color;
        }

        public ToJSON():JSON
        {
            let retorno:string=`{${this.ropaToString()},"talle":"${this.talle}","color":"${this.color}"}`;
            return JSON.parse(retorno);
        }

        
    }
}