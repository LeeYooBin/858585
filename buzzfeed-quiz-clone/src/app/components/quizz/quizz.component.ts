import { Component, OnInit } from '@angular/core';
import questions from "../../../assets/questions.json"

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})

export class QuizzComponent implements OnInit {
  title: string = "";

  questions: any;
  questionSelected: any;

  answers: string[] = [];
  answerSelected: string = "";

  questionIndex: number = 0;
  questionMaxIndex: number = 0;

  finished: boolean = false;

  constructor() {};

  ngOnInit(): void {
    if(questions){
      this.finished = false;
      this.title = questions.title;

      this.questions = questions.questions;
      this.questionSelected = this.questions[this.questionIndex];

      this.questionIndex = 0;
      this.questionMaxIndex = this.questions.length;

      console.log(this.questionIndex);
      console.log(this.questionMaxIndex);
    }
  };

  playerChoose(value: string){
    this.answers.push(value);
    this.nextStep();

  }

  async nextStep(){
    this.questionIndex += 1;

    if (this.questionMaxIndex > this.questionIndex) {
      this.questionSelected = this.questions[this.questionIndex];
    } else {
      const finalAnswer: string = await this.checkResult(this.answers);
      this.finished = true;
      this.answerSelected = questions.results[finalAnswer as keyof typeof questions.results];
    }
  }

  async checkResult(answers: string[]) {
    const result = answers.reduce((previous, current, i, arr)=>{
      if (arr.filter(item => item === previous).length > arr.filter(item => item === current).length) {
        return previous;
      }

      return current;
    })

    return result;
  }

}
