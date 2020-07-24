import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link';
import { LinkListService } from 'src/app/link-list.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
 

  selectedOrderByOption:string;

  constructor(private router: Router, public linkListService: LinkListService) { }

  ngOnInit(): void {
  
    console.log("ngOnInit");
    console.log(this.selectedOrderByOption);
    if(this.linkListService.selectedOrderByOption==null){
      this.linkListService.sortByCreationTimestampDecreasingly();
    }
    else if(this.linkListService.selectedOrderByOption=="mostToLess"){
      this.selectedOrderByOption="mostToLess";
      this.linkListService.sortByPointDecreasingly();
    }
    else if(this.linkListService.selectedOrderByOption=="lessToMost"){
      this.selectedOrderByOption="lessToMost";
      this.linkListService.sortByPointIncreasingly();
    }
  }

  submitALinkBtnOnClick(){
    this.router.navigate(['submitALink']);
  }

  upVoteLinkBtnOnClick(link:Link){
    var oldIndexOfUpVotedLink=this.linkListService.getLinkIndex(link);
    var properIndexOfUpVotedLink=this.linkListService.getProperIndexForUpvotedLink(oldIndexOfUpVotedLink);
    this.linkListService.insertLinkToProperIndex(oldIndexOfUpVotedLink,properIndexOfUpVotedLink);
  }

  downVoteLinkBtnOnClick(link:Link){
    var oldIndexOfDownVotedLink =this.linkListService.getLinkIndex(link);
    var properIndexOfDownVotedLink=this.linkListService.getProperIndexForDownvotedLink(oldIndexOfDownVotedLink);
    this.linkListService.insertLinkToProperIndex(oldIndexOfDownVotedLink,properIndexOfDownVotedLink);
  }

  removeLinkBtnOnClick(link:Link){
    this.linkListService.remove(link);
  }
 
  onChangeDropDownBox(selectedOrderByOption:string) {
    this.selectedOrderByOption = selectedOrderByOption;
    if(this.selectedOrderByOption=="mostToLess"){
      this.linkListService.setSelectedOrderByOption("mostToLess");
      this.linkListService.sortByPointDecreasingly();
    }
    else if(this.selectedOrderByOption=="lessToMost"){
      this.linkListService.setSelectedOrderByOption("lessToMost");
      this.linkListService.sortByPointIncreasingly();
    }
  }



}
