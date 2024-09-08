import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizzComponent } from './quizz/quizz.component';

@NgModule({
  declarations: [QuizzComponent],
  imports: [CommonModule],
  exports: [QuizzComponent]
})
export class ComponentsModule {}
