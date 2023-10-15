"use client";

import Link from "next/link";
import { Button } from "./Button";
import { ILinkButton } from "@/interfaces";

export const LinkButton = ({ link, children, ...props }: ILinkButton) => {
  return (
    <Link href={link}>
      <Button {...props}>{children}</Button>
    </Link>
  );
};
