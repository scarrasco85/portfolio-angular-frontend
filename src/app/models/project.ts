/* Definimos el modelo de la entidad Proyecto (Project)*/
export class Project {

	constructor(
		public _id: string,
		public name: string,
		public decription: string,
		public category: string,
		public year: number,
		public langs: string,
		public image: string
	){}
}
