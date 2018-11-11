import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SET1 } from "../../questions";

@Component({
  selector: 'new-game',
  templateUrl: 'new-game.html'
})
export class NewGame {

  activeInput: boolean = false;
  intro: boolean = true;
  uname: string = '';
  questions: any = [];
  activeQuestion: number = 0;
  shuffledAnswer: string;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
  }

  onFocus() {
    this.activeInput = true;
  }

  onBlur() {
    this.activeInput = false;
  }

  startTheGame() {
    this.intro = false;
    this.questions = SET1;

    if (this.questions.length) {
      this.questions[this.activeQuestion].image = "assets/imgs/quiz/" + this.questions[this.activeQuestion].image;

      this.shuffledAnswer = this.shuffleWord(this.questions[this.activeQuestion].answer).split("");
      console.log('this.shuffledAnswer: ', this.shuffledAnswer);
    }
  }

  shuffleWord(word) {
    let a = word.split(""),
      n = a.length;

    for (let i = n - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a.join("");
  }

}
