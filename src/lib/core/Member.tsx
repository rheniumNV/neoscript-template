import React, { FC } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
      member: any;
    }
  }
}

export type id<T> = string;

export type member<T> = { value: T; id: id<T> } | T;

interface MemberInput {
  type: string;
  name: string;
  content: member<any>;
}

export const Member: FC<MemberInput> = ({ type, name, content }) => {
  if (content == undefined) {
    return <></>;
  }
  const { value, id } = content;
  if (id == undefined) {
    return <member name={name} type={type} value={JSON.stringify(content)} />;
  }
  return (
    <member id={id} name={name} type={type} value={JSON.stringify(value)} />
  );
};
