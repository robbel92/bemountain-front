export interface RouteStructure {
  id: string;
  name: string;
  author: string;
  authorImage: string;
  authorName: string;
  description: string;
  difficulty: string;
  distance: number;
  ubication: string;
  photo: string;
  elevationGain: number;
}

export interface RoutesStateStructure {
  routes: Partial<RouteStructure>[];
  totalRoutes: number;
}

export interface PayloadRemove {
  routeId: string | undefined;
}
