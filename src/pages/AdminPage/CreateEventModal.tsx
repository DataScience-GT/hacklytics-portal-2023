import React from "react";
import Modal from "react-modal";
import { API, graphqlOperation } from "aws-amplify";
import { createEvent } from "../../graphql/mutations";
import { listEvents } from "../../graphql/queries";
import CreateEvent from "../../ui-components/CreateEvent";
import modalFormStyle from "../../misc/ModalStyle";
import StatusAlert from "../../components/StatusAlert/StatusAlert";
import { Event } from "../../models";
import Status from "../../Types/Status";

interface CreateEventModalProps {
  createEventModalOpen: boolean;
  setCreateEventModalOpen: (open: boolean) => void;
  setEvents: (events: Event[]) => void;
  setCreateEventStatus: (status: Status) => void;
}

const CreateEventModal: React.FC<CreateEventModalProps> = ({
  createEventModalOpen,
  setCreateEventModalOpen,
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
          // Process fields (trimming strings, etc.)
          const updatedFields: Record<string, any> = {};
          const fieldRecord = fields as Record<string, any>;
          Object.keys(fieldRecord).forEach((key) => {
            updatedFields[key] =
              typeof fieldRecord[key] === "string"
                ? fieldRecord[key].trim()
                : fieldRecord[key];
          });
          console.log("Processed fields for createEvent:", updatedFields);
          return updatedFields;
        }}
        onSuccess={async (processedFields) => {
          try {
            // Call the GraphQL mutation to create the event.
            // const result: any = await API.graphql(
            //   graphqlOperation(createEvent, { input: processedFields })
            // );
            // console.log("Mutation result:", result);
            // Instead of appending the event to local state,
            // re-fetch the entire events list from the backend.
            // const res: any = await API.graphql(
            //   graphqlOperation(listEvents, {
            //     filter: { _deleted: { ne: true } },
            //   })
            // );
            // const refreshedEvents: Event[] = res.data.listEvents.items;
            // console.log("Refreshed events list:", refreshedEvents);
            // setEvents(refreshedEvents);
            setCreateEventModalOpen(false);
          } catch (err) {
            console.error("Error in createEvent mutation:", err);
            setCreateEventStatus({
              show: true,
              type: "error",
              message: "Error creating event",
            });
          }
          // Return processedFields to satisfy CreateEvent's expectations.
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
