import { Injectable } from '@angular/core';
import { Link } from './models/link';

@Injectable({
  providedIn: 'root'
})
export class LinkListService {
  selectedOrderByOption:string;
  links: Link[] = [
    { title: 'Google', url:"www.google.com", point:0, creationTimestamp:1},
    { title: 'Twitter', url:"www.twitter.com", point:0, creationTimestamp:2},
    { title: 'Facebook', url:"www.facebook.com", point:0, creationTimestamp:3 },
    { title: 'Instagram', url:"www.instagram.com", point:0, creationTimestamp:4},
    { title: 'Youtube', url:"www.youtube.com", point:0, creationTimestamp:5 },
    { title: 'Stackoverflow', url:"www.stackoverflow.com", point:0, creationTimestamp:6 },
  ];
  constructor() { }

  addLink(link:Link){
    this.links.push(link);
    if(this.selectedOrderByOption==null || this.selectedOrderByOption=="mostToLess"){    
        this.selectedOrderByOption="mostToLess";
        this.sortByPointDecreasingly();
    }
    else if(this.selectedOrderByOption=="lessToMost"){
        this.sortByPointIncreasingly();

    }
  }

  setSelectedOrderByOption(selectedOrderByOption:string){
    this.selectedOrderByOption=selectedOrderByOption;
  }

  sortByCreationTimestampDecreasingly(){
    this.links.sort((a,b) => b.creationTimestamp - a.creationTimestamp);
  }

  getLinkIndex(link:Link){
    var linkIndex;
    for (let i=0; i<this.links.length;i++) {
      if(link.creationTimestamp==this.links[i].creationTimestamp){
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
    console.log("oldIndexOfVotedLink:",oldIndexOfVotedLink);
    console.log("properIndexOfVotedLink:",properIndexOfVotedLink);
    var downVotedLink = this.links[oldIndexOfVotedLink];
    this.links.splice(oldIndexOfVotedLink, 1); //remove the link from old location
    this.links.splice(properIndexOfVotedLink,0,downVotedLink); //insert the link proper location
  }
  
  sortByPointDecreasingly(){
    console.log("decr");
    this.links.sort((a,b) => {
      if(b.point-a.point==0){
        return b.creationTimestamp-a.creationTimestamp;
      }
      else{
        return b.point - a.point;
      }
    });
  }

  sortByPointIncreasingly(){
    console.log("incr");
    this.links.sort((a,b) => {
      if(a.point-b.point==0){
        return b.creationTimestamp-a.creationTimestamp;
      }
      else{
        return a.point - b.point;
      }
    });  
  }
 





}
