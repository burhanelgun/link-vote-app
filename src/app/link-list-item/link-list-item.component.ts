import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Link } from '../models/link';

@Component({
  selector: 'app-link-list-item',
  templateUrl: './link-list-item.component.html',
  styleUrls: ['./link-list-item.component.css']
})
export class LinkListItemComponent implements OnInit {
  
  @Input() link: Link;
  @Output() upVoteLink = new EventEmitter<Link>();
  @Output() downVoteLink = new EventEmitter<Link>();

  constructor() { }

  ngOnInit(): void {
  }

  upVoteBtnClick(){
    console.log("upVote");
    this.link.point++;
    this.upVoteLink.emit(this.link);

  }

  downVoteBtnClick(){
    console.log("downVote");
    this.link.point--;
    this.downVoteLink.emit(this.link);
  }

}
