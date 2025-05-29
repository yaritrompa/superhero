export interface Hero {
  id: number;
  name: string;
  slug: string;
  
  biography: {
    firstAppearance: string;
    placeOfBirth:string; 
    aliases: [];
    fullName: string;
    publisher: string;
    alterEgos: string;
    alignment: string;     
  };

  work: {
    occupation: string;
    base: string;
  },

  images: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };

  appearance: {
    weight: [];
    hairColor: string;
    gender:string;
    race?: string;
    eyeColor:string;
    height:[]
  };

  connections: {
    groupAffiliation: string;
    relatives: string;
  },

  powerstats: {
    combat: number;
    power: number;
    strength: number;
    speed: number;
    intelligence: number;
    durability: number;
  }
}

export interface HeroApiResponse {
  length: number;
  size: number;
  page: number;
  firstPage: number;
  lastPage: number;
  startIndex: number;
  endIndex: number;
  items: Hero[];
}