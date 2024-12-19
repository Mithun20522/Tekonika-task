import React from "react";

export type RouteComponentProps = {
  routeName?: string;
  parentName?: string;
};

export type RouteDataTypes = {
  id: number;
  name: string;
  element: React.ComponentType<RouteComponentProps>;
  subelements?: { name: string; path: string }[];
  path: string;
};
