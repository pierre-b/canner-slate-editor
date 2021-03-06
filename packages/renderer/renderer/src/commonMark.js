// @flow
import * as React from "react";
import type { nodeProps } from "./type";
import mapValues from "lodash.mapvalues";

export default function(Tag, stylesAttr) {
  const MarkComponent = ({ attributes, children, mark }: nodeProps) => {
    return (
      <Tag
        {...attributes}
        style={mapValues(stylesAttr, val => val && val(mark))}
        data-slate-type={Tag}
      >
        {children}
      </Tag>
    );
  };

  MarkComponent.displayName = `${Tag}-mark`;

  return MarkComponent;
}
