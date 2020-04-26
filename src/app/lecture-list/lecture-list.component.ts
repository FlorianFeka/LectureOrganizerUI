import { Component, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { GetLectures } from "../store/lecture.actions";
import { Lecture } from "src/api";
import { Observable } from "rxjs";

@Component({
  selector: "app-lecture-list",
  templateUrl: "./lecture-list.component.html",
  styleUrls: ["./lecture-list.component.css"],
})
export class LectureListComponent implements OnInit {
  lectures$: Observable<Lecture[]>;
  constructor(private store: Store) {
    this.store.dispatch(GetLectures);
    this.lectures$ = this.store.select((state) => state.lectures);
  }

  ngOnInit(): void {}
}
