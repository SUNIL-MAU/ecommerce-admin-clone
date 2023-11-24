"use client";

import { useState, useEffect, use } from "react";
import StoreModal from "@/components/models/store-model";

const ModalProvider = () => {
  const [isMounted, setisMounted] = useState(false);
  useEffect(() => {
    setisMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return <StoreModal />;
};

export default ModalProvider;
