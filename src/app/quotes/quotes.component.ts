import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1,'Doug Hutchison'," “I think being in love with life is a key to eternal youth.”","Henry Kanyoro",new Date(2020,10,20)),
    new Quote(2,'Walter Hagen',"“You’re only here for a short visit. Don’t hurry, don’t worry. And be sure to smell the flowers along the way.”","Kerry Kogei",new Date(2018,2,13)),
    new Quote(3,'Charles Darwin',"“A man who dares to waste one hour of time has not discovered the value of life.”","Timothy Gathue",new Date(2017,4,5)),
    new Quote(4,'John Wooden',"“All of life is peaks and valleys. Don’t let the peaks get too high and the valleys too low.”","Anthony Relly",new Date(2016,20,7) ),
    new Quote(5,'Emily Dickinson',"“Find ecstasy in life; the mere sense of living is joy enough.”","Steven Nderitu",new Date(2017,10,2)),
  ];
  upvote(index){
    this.quotes[index].upvote++;
  }
  
  downvote(index){
    this.quotes[index].downvote++;
  }
  deleteQuote(isComplete, index){
    if(isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this quote. ${this.quotes[index].user}?`) 

      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.day = new Date(quote.day)
    this.quotes.push(quote)
  }

  fabQuote:number;
  worstQuote:number;
  description:string;
  author:string;
  user:string;
  day:Date;
  
  fabquote(){
    this.fabQuote=0;

for(let i=0; i <this.quotes.length; i++){
  if(this.quotes[i].upvote >this.fabQuote){
    this.fabQuote=this.quotes[i].upvote;
    this.worstQuote=this.quotes[i].downvote;
    this.description=this.quotes[i].description;
    this.day=this.quotes[i].day;
    this.author=this.quotes[i].author;
    this.user=this.quotes[i].user;
  }

  }
}
  
  constructor() {
    
  }

  ngOnInit(): void {
  }

}
