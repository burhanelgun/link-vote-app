import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
  links: Link[] = [
    { id: 1, title: 'Google', url:"www.google.com", point:0},
    { id: 2, title: 'Twitter', url:"www.twitter.com", point:0 },
    { id: 3, title: 'Facebook', url:"www.facebook.com", point:0 },
    { id: 4, title: 'Instagram', url:"www.instagram.com", point:0},
    { id: 5, title: 'Youtube', url:"www.youtube.com", point:0 },
    { id: 6, title: 'Stackoverflow', url:"www.stackoverflow.com", point:0 },
  ];


  constructor() { }

  ngOnInit(): void {
  }

  upVoteLink(link:Link){
    var upVotedLinkOldIndex =this.getLinkIndex(link);
    this.relocateUpVotedLink(upVotedLinkOldIndex);
  }

  downVoteLink(link:Link){
    var downVotedLinkOldIndex =this.getLinkIndex(link);
    this.relocateDownVotedLink(downVotedLinkOldIndex);
  }

  getLinkIndex(link:Link){
    var linkIndex;
    for (let i=0; i<this.links.length;i++) {
      if(link.id==this.links[i].id){
        linkIndex=i;
      }
    }
    return linkIndex;
  }

  relocateUpVotedLink(upVotedLinkOldIndex:number){
    var insertionIndex = upVotedLinkOldIndex;
    for(let i=upVotedLinkOldIndex; i>=0; i--){
      if(this.links[i].point<this.links[upVotedLinkOldIndex].point){
        insertionIndex = i;
      }
      else if(this.links[i].point==this.links[upVotedLinkOldIndex].point){
        insertionIndex = i;
      }
    }
    var upVotedLink = this.links[upVotedLinkOldIndex];
    this.links.splice(upVotedLinkOldIndex, 1); //remove the link from old location
    this.links.splice(insertionIndex,0,upVotedLink); //insert the link proper location
  }

  relocateDownVotedLink(downVotedLinkOldIndex:number){
    var insertionIndex = downVotedLinkOldIndex;
    for(let i=downVotedLinkOldIndex; i<this.links.length; i++){
      if(this.links[i].point>this.links[downVotedLinkOldIndex].point){
        insertionIndex = i;
      }
      else if(this.links[i].point==this.links[downVotedLinkOldIndex].point){
      }
    }
    var downVotedLink = this.links[downVotedLinkOldIndex];
    this.links.splice(downVotedLinkOldIndex, 1); //remove the link from old location
    this.links.splice(insertionIndex,0,downVotedLink); //insert the link proper location
  }

}
