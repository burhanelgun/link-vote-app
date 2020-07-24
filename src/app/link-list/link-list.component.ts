import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
  links: Link[] = [
    { id: 1, title: 'Google', url:"www.google.com", point:0, creationTimestamp:"1"},
    { id: 2, title: 'Twitter', url:"www.twitter.com", point:0, creationTimestamp:"2"},
    { id: 3, title: 'Facebook', url:"www.facebook.com", point:0, creationTimestamp:"3" },
    { id: 4, title: 'Instagram', url:"www.instagram.com", point:0, creationTimestamp:"4"},
    { id: 5, title: 'Youtube', url:"www.youtube.com", point:0, creationTimestamp:"5" },
    { id: 6, title: 'Stackoverflow', url:"www.stackoverflow.com", point:0, creationTimestamp:"6" },
  ];

  selectedOrderByOption:string;

  constructor() { }

  ngOnInit(): void {
    this.sortByCreationTimestampDecreasingly();
  }

  sortByCreationTimestampDecreasingly(){
    this.links.sort((a,b) => b.creationTimestamp.localeCompare(a.creationTimestamp));
  }

  upVoteLinkBtnOnClick(link:Link){
    var oldIndexOfUpVotedLink=this.getLinkIndex(link);
    var properIndexOfUpVotedLink=this.getProperIndexForUpvotedLink(oldIndexOfUpVotedLink);
    this.insertLinkToProperIndex(oldIndexOfUpVotedLink,properIndexOfUpVotedLink);
  }

  downVoteLinkBtnOnClick(link:Link){
    var oldIndexOfDownVotedLink =this.getLinkIndex(link);
    var properIndexOfDownVotedLink=this.getProperIndexForDownvotedLink(oldIndexOfDownVotedLink);
    this.insertLinkToProperIndex(oldIndexOfDownVotedLink,properIndexOfDownVotedLink);
  }
  
  onChangeDropDownBox(selectedOrderByOption:string) {
    this.selectedOrderByOption = selectedOrderByOption;
    if(this.selectedOrderByOption=="mostToLess"){
      this.sortByPointDecreasingly();
    }
    else if(this.selectedOrderByOption=="lessToMost"){
      this.sortByPointIncreasingly();
    }
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

  getProperIndexForUpvotedLink(upVotedLinkOldIndex:number){
    var properIndexOfUpVotedLink = upVotedLinkOldIndex;
    if(this.selectedOrderByOption==null || this.selectedOrderByOption=="mostToLess"){
      for(let i=upVotedLinkOldIndex; i>=0; i--){
        if(this.links[i].point<this.links[upVotedLinkOldIndex].point){
          properIndexOfUpVotedLink = i;
        }
        else if(this.links[i].point==this.links[upVotedLinkOldIndex].point &&
           this.links[i].creationTimestamp<this.links[upVotedLinkOldIndex].creationTimestamp){
            properIndexOfUpVotedLink = i;
        }
      }
    }
    else if(this.selectedOrderByOption=="lessToMost"){
      for(let i=upVotedLinkOldIndex; i<this.links.length; i++){
        if(this.links[i].point<this.links[upVotedLinkOldIndex].point){
          properIndexOfUpVotedLink = i;
        }
        else if(this.links[i].point==this.links[upVotedLinkOldIndex].point &&
           this.links[i].creationTimestamp>this.links[upVotedLinkOldIndex].creationTimestamp){
            properIndexOfUpVotedLink = i;
        }
      }
    }
    return properIndexOfUpVotedLink;
  }

  getProperIndexForDownvotedLink(downVotedLinkOldIndex:number){
    var properIndexOfDownVotedLink = downVotedLinkOldIndex;
    if(this.selectedOrderByOption==null || this.selectedOrderByOption=="mostToLess"){
      for(let i=downVotedLinkOldIndex; i<this.links.length; i++){
        if(this.links[i].point>this.links[downVotedLinkOldIndex].point){
          properIndexOfDownVotedLink = i;
        }
        else if(this.links[i].point==this.links[downVotedLinkOldIndex].point && 
          this.links[i].creationTimestamp>this.links[downVotedLinkOldIndex].creationTimestamp){
            properIndexOfDownVotedLink = i;
        }
      }
    }
    else if(this.selectedOrderByOption=="lessToMost"){
      for(let i=downVotedLinkOldIndex; i>=0; i--){
        if(this.links[i].point>this.links[downVotedLinkOldIndex].point){
          properIndexOfDownVotedLink = i;
        }
        else if(this.links[i].point==this.links[downVotedLinkOldIndex].point && 
          this.links[i].creationTimestamp<this.links[downVotedLinkOldIndex].creationTimestamp){
            properIndexOfDownVotedLink = i;
        }
      }
    }
    return properIndexOfDownVotedLink;
  }

  insertLinkToProperIndex(oldIndexOfVotedLink:number,properIndexOfVotedLink:number){
    var downVotedLink = this.links[oldIndexOfVotedLink];
    this.links.splice(oldIndexOfVotedLink, 1); //remove the link from old location
    this.links.splice(properIndexOfVotedLink,0,downVotedLink); //insert the link proper location
  }
  
  sortByPointDecreasingly(){
    this.links.sort((a,b) => b.point - a.point);
  }

  sortByPointIncreasingly(){
    this.links.sort((a,b) => a.point - b.point);
  }
 







}
