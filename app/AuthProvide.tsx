"use client";
import {KindeProvider} from "@kinde-oss/kinde-auth-nextjs";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthProvider = ({children}: {children: any}) => {
  return <KindeProvider>{children}</KindeProvider>;
};