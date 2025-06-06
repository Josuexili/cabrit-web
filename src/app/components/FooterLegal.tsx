import React, { useState } from "react";

const textos: Record<string, React.ReactNode> = {
  avisLegal: (
    <>
      <h2>Avís Legal</h2>
      <p>
        Titular de la web: Nom Empresa XYZ, CIF 12345678A.  
        Domicili: Carrer Exemplar, 123, 08260 Odena (Barcelona).  
        Contacte: info@empresa.xyz - Telèfon: 0123456789.
      </p>
      <p>
        Aquesta pàgina web és propietat de l’empresa XYZ i el seu ús implica l’acceptació de les condicions legals.
      </p>
    </>
  ),
  privacitat: (
    <>
      <h2>Política de Privacitat</h2>
      <p>
        Aquesta web no recull dades personals directament, ja que no disposa de formularis ni sistemes de registre.  
        Si contacta amb nosaltres per correu electrònic o telèfon, les dades facilitades seran tractades exclusivament per atendre la seva consulta i no seran cedides a tercers.
      </p>
    </>
  ),
  cookies: (
    <>
      <h2>Política de Cookies</h2>
      <p>
        Aquesta web no utilitza cookies pròpies ni de tercers, excepte les estrictament tècniques necessàries per al funcionament del lloc.
      </p>
      <p>
        No es recullen dades per a finalitats publicitàries ni d’anàlisi.
      </p>
    </>
  ),
};

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ visible, onClose, children }) => {
  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabIndex={-1}
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#fff",
          padding: 24,
          maxWidth: 600,
          maxHeight: "80vh",
          overflowY: "auto",
          borderRadius: 8,
          position: "relative",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Tancar modal"
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            background: "none",
            border: "none",
            fontSize: 24,
            cursor: "pointer",
            lineHeight: 1,
          }}
        >
          &times;
        </button>
        <div id="modal-title">{children}</div>
      </div>
    </div>
  );
};

const FooterLegal: React.FC = () => {
  const [modalTipus, setModalTipus] = useState<string | null>(null);

  return (
    <>
      <footer
        style={{
          textAlign: "center",
          padding: 1,
          backgroundColor: "#f5f5f5",
          bottom: 0,
          width: "100%",
          fontSize: 14,
          userSelect: "none",
          zIndex: 999,
        }}
      >
        <button
          onClick={() => setModalTipus("avisLegal")}
          style={{ margin: "0 8px", background: "none", border: "none", cursor: "pointer", color: "#0070f3" }}
        >
          Avís Legal
        </button>
        |
        <button
          onClick={() => setModalTipus("privacitat")}
          style={{ margin: "0 8px", background: "none", border: "none", cursor: "pointer", color: "#0070f3" }}
        >
          Política de Privacitat
        </button>
        |
        <button
          onClick={() => setModalTipus("cookies")}
          style={{ margin: "0 8px", background: "none", border: "none", cursor: "pointer", color: "#0070f3" }}
        >
          Política de Cookies
        </button>
      </footer>

      <Modal visible={!!modalTipus} onClose={() => setModalTipus(null)}>
        {modalTipus && textos[modalTipus]}
      </Modal>
    </>
  );
};

export default FooterLegal;
