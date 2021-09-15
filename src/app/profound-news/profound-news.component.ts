import { Component, OnInit } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Post, Query, News  } from "../types";

export type QueryResponse = {
  newss: {
    nodes: [
      {
        acf: {
          newsUrl: string;
          newsText: string;
        }
        title: string;
        date: Date;
        featuredImage: {
          node: {
            sourceUrl: string;
          }
        }
      }
    ]
  }
};


@Component({
  selector: 'app-profound-news',
  templateUrl: './profound-news.component.html',
  styleUrls: ['./profound-news.component.scss']
})
export class ProfoundNewsComponent implements OnInit {
  newss: Observable<QueryResponse>;
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.newss = this.apollo
      .watchQuery<any>({
        query: gql`
          query MyQuery {
            newss {
              nodes {
                acf {
                  newsUrl
                  newsText
                }
                title
                date
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          }
        `
      })
      .valueChanges.pipe(map(result => result.data.newss.nodes));
  }
}
