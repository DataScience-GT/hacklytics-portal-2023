import React from "react";
import Modal from "react-modal";
import { API, graphqlOperation } from "aws-amplify";
import { createEvent } from "../../graphql/mutations";
import CreateEvent from "../../ui-components/CreateEvent";
import modalFormStyle from "../../misc/ModalStyle";
import StatusAlert from "../../components/StatusAlert/StatusAlert";
import { Event } from "../../models";
import Status from "../../Types/Status";

interface CreateEventModalProps {
  createEventModalOpen: boolean;
  setCreateEventModalOpen: (open: boolean) => void;
  events: Event[];
  setEvents: (events: Event[]) => void;
  setCreateEventStatus: (status: Status) => void;
}

const CreateEventModal: React.FC<CreateEventModalProps> = ({
  createEventModalOpen,
  setCreateEventModalOpen,
  events,
  setEvents,
  setCreateEventStatus,
}) => {
  return (
    <Modal
      contentLabel="Create Event Modal"
      isOpen={createEventModalOpen}
      onRequestClose={() => {
        setCreateEventModalOpen(false);
      }}
      appElement={document.getElementById("modal-container") as HTMLElement}
      parentSelector={() => document.getElementById("modal-container")!}
      style={modalFormStyle}
    >
      <StatusAlert status={{ show: false }} />
      <CreateEvent
        onCancel={() => {
          setCreateEventModalOpen(false);
        }}
        onSubmit={(fields) => {
          const updatedFields: any = {};
          const fieldRecord = fields as Record<string, any>;
          Object.keys(fieldRecord).forEach((key) => {
            if (typeof fieldRecord[key] === "string") {
              updatedFields[key] = fieldRecord[key].trim();
            } else {
              updatedFields[key] = fieldRecord[key];
            }
          });
          return updatedFields;
        }}
        onSuccess={async (processedFields) => {
          try {
            // Call the GraphQL mutation to create the event.
            const result: any = await API.graphql(
              graphqlOperation(createEvent, { input: processedFields })
            );
            const newEvent = result.data.createEvent;
            console.log("Event created successfully:", newEvent);
            // Update local state with the new event.
            setEvents([...events, newEvent as Event]);
            setCreateEventModalOpen(false);
          } catch (err) {
            console.error("Error in createEvent mutation:", err);
            setCreateEventStatus({
              show: true,
              type: "error",
              message: "Error creating event",
            });
          }
          // Return the processedFields (the CreateEvent component expects a return value)
          return processedFields;
        }}
        onError={(error) => {
          console.error("Error creating event:", error);
          setCreateEventStatus({
            show: true,
            type: "error",
            message: "Error creating event",
          });
        }}
      />
    </Modal>
  );
};

export default CreateEventModal;
