"use client";

import { Modal } from "@/components/ui/modal";

const SetupPage = () => {
  return (
    <>
      <Modal title="test" description="test desc" isOpen onClose={() => {}}>
        Children
      </Modal>
    </>
  );
};

export default SetupPage;
