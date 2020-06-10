import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'embedder',
  templateUrl: './embedder.component.html',
  styleUrls: ['./embedder.component.scss']
})
export class EmbedderComponent implements OnInit {
  // The embedder needs the actual name of the self-contained Component that should be 
  // embedded
  @Input() name: string;

  // here you would need to logic to handle the actual url
  // I am just setting this to localhost here

  // some logic
  expanded = false;

  embedContent: string;
  link: string;

  constructor() { }

  ngOnInit() {
    // if the actual implementation needs more config, 
    // you can use ngOnInit to be sure that services have been loaded etc.
    // then build the content 
    // here you can also check if the name is set to return an error otherwise
    this.link = 'http://localhost:4200/embed/' + this.name;
    this.embedContent = '<iframe src="' + this.link + '"></iframe>';
  }

}
