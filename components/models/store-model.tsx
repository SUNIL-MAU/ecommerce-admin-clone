import React from "react";
import Modal from "../ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";

const StoreModel = () => {
  const storeModal = useStoreModal((state) => state);
  return (
    <Modal
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
      title="Create store"
      description="Add a new store to manage products and categories."
    >
      <div>StoreModel</div>
    </Modal>
  );
};

export default StoreModel;
