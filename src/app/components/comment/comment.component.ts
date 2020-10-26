import { Component, Input, OnInit } from '@angular/core';
import { LectureComment } from 'src/api';

@Component({
  selector: 'lecture-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: LectureComment;
  constructor() {}

  ngOnInit(): void {}
}
