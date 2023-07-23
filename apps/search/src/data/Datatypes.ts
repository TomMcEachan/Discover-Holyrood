export type IArticle = {
  id: string;
  title: string;
  content: string;
  categories: ICategory[];
  tags: ITag[];
  image: string;
  uniqueIdentifier: string;
  content_type: string;
};

export type IARScene = {
  id: string;
  title: string;
  categories: ICategory[];
  LinkToARScene: string;
  tags: ITag[];
  image: string;
  uniqueIdentifier: string;
  content_type: string;
  instructions: string;
  appLink: string;
};

export type ICategory = {
  id: string;
  name: string;
  description: string;
};

export type ITag = {
  id: string;
  name: string;
  description: string;
};
