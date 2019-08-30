import React, { Component } from "react";
import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  // _(items) lodash Object로 만든다.
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
