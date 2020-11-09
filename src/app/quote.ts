export class Quote {
    id: number;
    author: string;
    user:string;
    upvote:number;
    description:string;
    downvote:number;
    day:Date;
    constructor( id:number, author:string,description:string, user:string, day:Date ){
        this.id=id;
        this.upvote = 0 ;
        this. downvote = 0 ;
        this.day = day;
        this.author = author ;
        this.description = description;
        this.user = user;
    }
}
