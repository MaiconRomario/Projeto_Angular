import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerTheQuestionComponent } from './answer-the-question.component';

describe('AnswerTheQuestionComponent', () => {
  let component: AnswerTheQuestionComponent;
  let fixture: ComponentFixture<AnswerTheQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerTheQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerTheQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
