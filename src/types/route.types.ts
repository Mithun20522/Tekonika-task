import React from "react";

export type RouteDataTypes = {
  id: number;
  name: string;
  element: React.ComponentType;
  subelements?: { name: string; path: string }[];
  path: string;
};
