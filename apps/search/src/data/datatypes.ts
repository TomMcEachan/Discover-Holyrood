export interface IArticle {
  id: string;
  title: string;
  content: string;
  categories: ICategory[];
  tags: ITag[];
  image: string;
}

export interface ICategory {
  id: string;
  name: string;
  description: string;
}

export interface ITag {
  id: string;
  name: string;
  description: string;
}

export interface IARScene {
  id: string;
  title: string;
  categories: ICategory[];
  link: string;
  tags: ITag[];
  image: string;
}
