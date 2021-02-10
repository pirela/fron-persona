//typeScript de personas el cual se utiliza en varios modulo
export default interface TypePersona {
  id?: string;
  img: string;
  nombre: string;
  apellido: string;
  email: string;
  identificacion: string;
  genero?: string;
  handleClick?: Function;
  handleView?: Function;
  handleDelete?: Function;
}
