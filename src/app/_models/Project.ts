import { Tag } from "./Tag";

export interface Project {
  id: number;
  name: string;
  summary: string;
  description: string;
  projectLink: string;
  demoOnline: string;
  pictures: string[];
  tags: Tag[];
}
