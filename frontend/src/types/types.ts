export type User = {
  id: string;
  email: string;
  username: string;
  firstname: string;
  lastname: string;
  birthdate: Date;
  gender: string;
  followers: number;
};

export interface Comment {
  id: string;
  content: string;
  creatorImage: string;
  creatorUrl: string;
  creatorUserName: string;
  postId: string;
  createdAt: Date;
}

export interface ReactPost {
  id: String;
  number: Number;
  postId: String;
  reactId: String;
  userId: String;
}
