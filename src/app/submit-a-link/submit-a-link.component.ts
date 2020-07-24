import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Link } from '../models/link';
import { LinkListService } from '../service/link-list.service';

@Component({
  selector: 'app-submit-a-link',
  templateUrl: './submit-a-link.component.html',
  styleUrls: ['./submit-a-link.component.css']
})
export class SubmitALinkComponent implements OnInit {

  link: Link =new Link();
  constructor(private router: Router,public linkListService: LinkListService) { }

  ngOnInit(): void {
  }

  returnToListBtnOnClick(){
    this.router.navigate(['']);
  }

  addBtnOnClick(){
    this.link.point=0;
    this.link.creationTimestamp=Date.now();
    this.linkListService.addLink(this.link);
  }
}
