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
import { createCheckin, createPoints } from "../../graphql/mutations";
import SimpleModal from "./SimpleModal";
import { Event } from "../../models";

interface CheckInModalProps {
  isOpen: boolean;
  event: Event;
  onClose: () => void;
  onSuccess: (message: string) => void;
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

  // Helper function to propagate points
  const createIndividualPoints = async (
    userId: string,
    userEmail: string,
    points: number
  ) => {
    try {
      await API.graphql(
        graphqlOperation(createPoints, {
          input: {
            userID: userId,
            userName: userEmail,
            points: points,
          },
        })
      );
    } catch (err) {
      console.error("Error creating points:", err);
    }
  };

  const handleSubmit = async () => {
    if (inputCode.trim() === event.checkInCode?.trim()) {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        const userSub = currentUser.attributes?.sub;
        const userEmail = currentUser.attributes?.email;
        // Create check-in record
        const checkinInput = {
          createdBy: userSub,
          createdByName: currentUser.attributes?.name,
          user: userSub,
          userName: currentUser.attributes?.name,
          eventCheckinsId: event.id,
        };

        const result: any = await API.graphql(
          graphqlOperation(createCheckin, { input: checkinInput })
        );
        console.log("Check-in successful:", result);

        // Award points using event.points (fallback to 10)
        const pointsToAward = event.points ?? 10;
        await createIndividualPoints(userSub, userEmail, pointsToAward);

        // Create success message and call onSuccess callback
        const successMsg = `${userEmail} successfully scanned for event "${event.name}"`;
        onSuccess(successMsg);
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputCode(e.target.value)
          }
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
