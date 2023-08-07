import { useState } from "react";
import { CusttomModal } from "./CusttomModal";

export default function App() {
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  return (
    <div style={{ position: "relative", marginTop: "20px" }}>
      <button onClick={() => setIsCustomModalOpen(true)}>
        Show Custom Modal
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
    </div>
  );
}
