import React, { useState } from "react";
import {
  Button,
  TextField,
  Heading,
  Flex,
  Text,
  useTheme,
} from "@aws-amplify/ui-react";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { createCheckin } from "../../graphql/mutations";
import SimpleModal from "./SimpleModal"; // Adjust path as needed
import { Event } from "../../models";

interface CheckInModalProps {
  isOpen: boolean;
  event: Event;
  onClose: () => void;
  onSuccess: () => void;
}

const CheckInModal: React.FC<CheckInModalProps> = ({
  isOpen,
  event,
  onClose,
  onSuccess,
}) => {
  const [inputCode, setInputCode] = useState("");
  const [error, setError] = useState("");
  const { tokens } = useTheme();

  const handleSubmit = async () => {
    if (inputCode.trim() === event.checkInCode?.trim()) {
      const currentUser = await Auth.currentAuthenticatedUser();

      try {
        const checkinInput = {
          createdBy: currentUser.attributes?.sub, // user's unique ID
          createdByName: currentUser.attributes?.name, // user's name
          user: currentUser.attributes?.sub, // same as createdBy
          userName: currentUser.attributes?.name, // same as createdByName
          eventCheckinsId: event.id, // event's ID
        };

        const result: any = await API.graphql(
          graphqlOperation(createCheckin, { input: checkinInput })
        );
        console.log("Check-in successful:", result);
        onSuccess();
        onClose();
      } catch (err) {
        console.error("Check-in failed:", err);
        setError("Check-in failed, please try again.");
      }
    } else {
      setError("Incorrect code. Please try again.");
    }
  };

  return (
    <SimpleModal isOpen={isOpen} onClose={onClose}>
      <Flex direction="column" gap={tokens.space.medium as unknown as string}>
        <Heading level={4}>Enter Check-In Code</Heading>
        <Text>Please enter the event check-in code:</Text>
        <TextField
          label="Check-In Code"
          placeholder="Enter code here"
          value={inputCode}
          onChange={(e: any) => setInputCode(e.target.value)}
        />
        {error && (
          <Text color={tokens.colors.red[60] as unknown as string}>
            {error}
          </Text>
        )}
        <Flex direction="row" justifyContent="space-between">
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} variation="primary">
            Submit
          </Button>
        </Flex>
      </Flex>
    </SimpleModal>
  );
};

export default CheckInModal;
