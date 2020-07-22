import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {

  links: Link[] = [
    { id: 1, title: 'Google', url:"www.google.com", point:20 },
    { id: 2, title: 'Twitter', url:"www.twitter.com", point:30 },
    { id: 3, title: 'Facebook', url:"www.facebook.com", point:40 },
    { id: 4, title: 'Instagram', url:"www.instagram.com", point:50 },
    { id: 5, title: 'Youtube', url:"www.youtube.com", point:60 },
    { id: 6, title: 'Stackoverflow', url:"www.stackoverflow.com", point:70 },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
