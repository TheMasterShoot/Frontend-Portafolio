export class ProjectI {
    constructor(
        public _id: string,
        public name: string,
        public description: string,
        public category: string,
        public year: number,
        public langs: string,
        public image: string
    ){}
}