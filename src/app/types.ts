export type Author = {
  id: number;
  firstName: string;
  lastName: string;
}

export type Post = {
  id: number;
  title: string;
  votes: number;
}


export type Mutation = {
  upvotePost: Post;
}

// export type News = {
//   fieldGroupName: String;
//   newsClassification: String;
//   newsText: String;
//   newsUrl: String;
// }

export type NewsResponse = {
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

export type Acf = {
  fieldGroupName: String;
  newsClassification: String;
  newsText: String;
  newsUrl: String;
}
export type News = {
  Acf;
  title: string;
}

export type Query = {
  news: NewsResponse;
}
