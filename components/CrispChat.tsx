"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("948ec89e-5c7d-4d75-8cd3-ebb9287ce0b4");
  }, []);
  return null;
};
