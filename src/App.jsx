import { useState } from "react";
import { CusttomModal } from "./CusttomModal";
import { DialogModal } from "./DialogMoadal";

export default function App() {
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [isDialogModalOpen, setIsDialogModalOpen] = useState(false);

  return (
    <div style={{ position: "relative", marginTop: "20px" }}>
      <button onClick={() => setIsCustomModalOpen(true)}>
        Show Custom Modal
      </button>
      <br></br>
      <button onClick={() => setIsDialogModalOpen(true)}>
        Show Dialog Modal
      </button>
      <CusttomModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
      >
        <p>
          This is a <strong>CUSTOM</strong> modal
        </p>
        <button onClick={() => setIsCustomModalOpen(false)}>Close</button>
      </CusttomModal>
      <DialogModal
        isOpen={isDialogModalOpen}
        onClose={() => setIsDialogModalOpen(false)}
      >
        <p>
          This is a <strong>Dialog</strong> modal
        </p>
        <button onClick={() => setIsDialogModalOpen(false)}>Close</button>
      </DialogModal>
    </div>
  );
}
