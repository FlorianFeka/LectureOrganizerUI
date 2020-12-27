import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lecture-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {
  comment: string = '';
  @Output() onCommentEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onComment() {
    this.onCommentEvent.emit(this.comment);
  }
}
