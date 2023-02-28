export interface Club {
  id:string;
  name:string;
  shortname:string;
}

export interface Course {
  id:string;
  name:string;
  club:string;
  par: number[];
  courseNumber: number;
}

export interface Score {
  id:string;
  user:string;
  course:string;
  strokes: number[];
  created:string;
}