"use client";

import { StoreModal } from "@/components/modal/store-modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  if (!isMount) {
    return null;
  }

  return (
    <>
      <StoreModal />
    </>
  );
};
