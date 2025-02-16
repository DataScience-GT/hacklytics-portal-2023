import React, { useState } from "react";
import {
  Modal,
  Button,
  TextField,
  Heading,
  Flex,
  Text,
} from "@aws-amplify/ui-react";
import { Event } from "../../models";

interface CheckInModalProps {
  isOpen: boolean;
  event: Event;
  onClose: () => void;
  onSuccess: () => void; // Called when check-in is successful
}

const CheckInModal: React.FC<CheckInModalProps> = ({
  isOpen,
  event,
  onClose,
  onSuccess,
}) => {
  const [inputCode, setInputCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (inputCode.trim() === event.checkInCode?.trim()) {
      onSuccess();
      onClose();
    } else {
      setError("Incorrect code. Please try again.");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="small">
      <Flex direction="column" gap="1rem" padding="1rem">
        <Heading level={4}>Enter Check-In Code</Heading>
        <Text>Please enter the event check-in code:</Text>
        <TextField
          label="Check-In Code"
          placeholder="Enter code here"
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
        />
        {error && <Text color="red">{error}</Text>}
        <Flex direction="row" justifyContent="space-between">
          <Button onClick={onClose} variation="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default CheckInModal;
