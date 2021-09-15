import { Component, OnInit } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Post, Query, News  } from "./types";

export type QueryResponse = {
  newss: {
    nodes: [
      {
        acf: {
          newsUrl: string;
          newsText: string;
          newsClassification: string;
        }
        title: string;
      }
    ]
  }
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'able-template';
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
                  newsClassification
                }
                title
              }
            }
          }
        `



        // `
        //   query allPosts {
        //     posts {
        //       id
        //       title
        //       votes
        //       author {
        //         id
        //         firstName
        //         lastName
        //       }
        //     }
        //   }
        // `
      })
      .valueChanges.pipe(map(result => result.data.newss.nodes));
      console.log(this.newss);
  }
}
