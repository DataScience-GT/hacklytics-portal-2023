import React from "react";
import { useTheme } from "@aws-amplify/ui-react";

interface SimpleModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const SimpleModal: React.FC<SimpleModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const { tokens } = useTheme();

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0, // shorthand for top, right, bottom, left = 0
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: tokens.colors.background
            .primary as unknown as string,
          color: tokens.colors.font.primary as unknown as string,
          padding: tokens.space.medium as unknown as string,
          borderRadius: tokens.radii.medium as unknown as string,
          maxWidth: "400px",
          width: "90%",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default SimpleModal;
