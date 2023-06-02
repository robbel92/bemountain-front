export interface RouteStructure {
  id: string;
  name: string;
  author: string;
  description: string;
  difficulty: string;
  distance: number;
  ubication: string;
  photo: string;
  elevationGain: number;
}

export interface RoutesStateStructure {
  routes: RouteStructure[];
}