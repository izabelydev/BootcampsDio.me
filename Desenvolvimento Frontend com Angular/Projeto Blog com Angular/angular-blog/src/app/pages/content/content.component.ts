import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataNotice } from '../../data/dataNotice'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  imgCover: string = ""
  imgAlt: string = ""
  contentTitle: string = ""
  contentDescription: string = ""
  private id: string | null = ""

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = (value.get("id")))
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    const result = dataNotice.filter(article => article.id == id)[0]

    this.imgCover = result.img
    this.imgAlt = result.imgAlt
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.id = result.id

  }

}
