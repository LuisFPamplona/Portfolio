export interface Project {
  title: string;
  description: string;
  techs: Tech[];
  github: string;
  demo?: string;
}

export interface Tech {
  name: string;
  link: string;
}
