import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//Domain method
class Joke{
  setup: string;
  punchline: string;
  hide: boolean;
  
  constructor(setup: string, punchline: string){
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }
  
  toggle(){
    this.hide = !this.hide;
  }
}

let joke = new Joke(",")


// Domain Method

@Component({
  selector: 'joke',
  template:`
  <h1>{{ setup }}</h1>
  <p>{{ punchline }}</p>
  `
})
class JokeComponent {
  setup: string;
  punchline: string;
  
  constructor(){
    this.setup = "What did the cheese say when it looked in the mirror?";
    this.punchline = "Halloumi (hello me)";
  } 
}

@Component({
  selector: 'joke-list',
  template:`
    <div class="card card-block"
      *ngFor="let joke of jokes"
    >
    <h4 class="card-title">{{ joke.setup }}</h4>
    <p class="card-text" [hidden]=joke.hide>{{ joke.punchline }}</p>
    <button class="btn btn-primary"
            (click)= "toggle(joke)">Tell me a joke
    </button>
    </div>
  `
})
class JokeListComponent{
   jokes: Object[];
   
   constructor(){
     this.jokes = [
       {
         setup: "What did the cheese say when it looked in the mirror ? ",
         punchline: "Halloumi (hello me)",
         hide: true
       },
       {
         setup: "What kind of cheese do you use to disguise a small horse?" ,
         punchline: "Mask-a-pony (Mascarpone)",
         hide: true
       },
       {
         setup: "A kid threw a lump of cheddar at me",
         punchline: "I thought ‘That’s not very mature",
         hide: true
       }
      ]
   }
   
   toggle(joke){
     joke.hide = !joke.hide;
   }
}

/*let joke = new JokeComponent();
console.log(joke.setup);
console.log(joke.punchline); */

@NgModule({
  imports: [BrowserModule],
  declarations: [JokeComponent, JokeListComponent],
  bootstrap: [JokeListComponent]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
