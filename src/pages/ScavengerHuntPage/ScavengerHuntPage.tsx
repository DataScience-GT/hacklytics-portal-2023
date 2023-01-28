import React, { FC, useEffect } from "react";
import styles from "./ScavengerHuntPage.module.scss";

import Modal from "react-modal";
import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";
import { ScavengerHunt } from "../../models";
import { listScavengerHunts } from "../../graphql";
import { API } from "aws-amplify";
import {
  Text,
  Badge,
  Button,
  Flex,
  Loader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  ToggleButton,
  View,
  Heading,
  SearchField,
  SelectField,
  Pagination,
} from "@aws-amplify/ui-react";
import Status from "../../Types/Status";
import { modalFormStyle } from "../../misc/ModalStyle";
import StatusAlert from "../../components/StatusAlert/StatusAlert";
import CreateScavengerHunt from "../../ui-components/CreateScavengerHunt";

interface ScavengerHuntPageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const ScavengerHuntPage: FC<ScavengerHuntPageProps> = ({
  user,
  signOut,
}: ScavengerHuntPageProps) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [scavengerHunts, setScavengerHunts] = React.useState<ScavengerHunt[]>(
    []
  );
  const [filteredHunts, setFilteredHunts] = React.useState<ScavengerHunt[]>([]);
  const [huntSearch, setHuntSearch] = React.useState<string>("");

  const [huntPage, setHuntPage] = React.useState<number>(1);
  const [huntPageSize, setHuntPageSize] = React.useState<number>(10);

  const [createHuntModalOpen, setCreateHuntModalOpen] = React.useState(false);
  const [createHuntStatus, setCreateHuntStatus] = React.useState<Status>({
    show: false,
  });

  useEffect(() => {
    loadScavengerHunts(() => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setFilteredHunts(
      scavengerHunts.filter((x) =>
        `${x.name} ${x.description} ${x.status ? "open" : "closed"} ${x.points}`
          .toLowerCase()
          .includes(huntSearch)
      )
    );
  }, [scavengerHunts, huntSearch]);

  const loadScavengerHunts = async (callback?: () => void) => {
    const hunts: any = await API.graphql({ query: listScavengerHunts });
    setScavengerHunts(hunts.data.listScavengerHunts.items);
    if (callback) callback();
  };

  return (
    <div className={styles.ScavengerHuntPage}>
      <View padding="medium">
        <Heading level={3} marginBottom={"medium"} marginTop={"medium"}>
          Scavenger Hunt
        </Heading>
        <Flex
          direction={"row"}
          gap={"medium"}
          marginBottom={"medium"}
          wrap={"wrap"}
        >
          <SearchField
            label=""
            labelHidden={true}
            placeholder={"Search"}
            onChange={(e) => {
              setHuntSearch(e.target.value.toLowerCase());
              let maxPages = Math.ceil(filteredHunts.length / huntPageSize);
              if (huntPage > maxPages && maxPages !== 0) {
                setHuntPage(maxPages);
              }
              if (huntPage < 1) {
                setHuntPage(1);
              }
            }}
            onClear={() => {
              setHuntSearch("");
              if (huntPage < 1) {
                setHuntPage(1);
              }
            }}
            isDisabled={loading || scavengerHunts.length === 0}
          />
          <Button
            onClick={(e) => {
              // window.history.pushState({}, "Admin Settings", "/admin/settings");
              setCreateHuntModalOpen(true);
            }}
            isDisabled={loading}
          >
            Create
          </Button>
          <ToggleButton
            isDisabled={loading || scavengerHunts.length === 0}
            onClick={(e) => {
              // window.history.pushState({}, "Admin Settings", "/admin/settings");
              // if (eventAction === "edit") {
              //   setEventAction("");
              //   return;
              // }
              // setEventAction("edit");
              // toast.info("Select an event to edit", {
              //   position: "top-center",
              //   autoClose: 5000,
              //   hideProgressBar: false,
              //   closeOnClick: true,
              //   pauseOnHover: true,
              //   draggable: true,
              //   progress: undefined,
              //   theme: "light",
              // });
            }}
            // isPressed={eventAction === "edit"}
          >
            Edit
          </ToggleButton>
          <ToggleButton
            isDisabled={loading || scavengerHunts.length === 0}
            onClick={(e) => {
              // window.history.pushState({}, "Admin Settings", "/admin/settings");
              // if (eventAction === "delete") {
              //   setEventAction("");
              //   return;
              // }
              // setEventAction("delete");
              // toast.info("Select an event to delete", {
              //   position: "top-center",
              //   autoClose: 5000,
              //   hideProgressBar: false,
              //   closeOnClick: true,
              //   pauseOnHover: true,
              //   draggable: true,
              //   progress: undefined,
              //   theme: "light",
              // });
            }}
            // isPressed={eventAction === "delete"}
          >
            Delete
          </ToggleButton>
        </Flex>
        {loading ? (
          <Flex
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Loader size="large" />
          </Flex>
        ) : (
          <Flex direction={"column"}>
            <View maxWidth={"100vw"} overflow={"auto"}>
              <Table
              // highlightOnHover={events.length >= 1 && eventAction !== ""}
              >
                <TableHead>
                  <TableRow>
                    <TableCell as="th">Name</TableCell>
                    <TableCell as="th">Description</TableCell>
                    <TableCell as="th">Status</TableCell>
                    <TableCell as="th">Points</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody
                // border={eventAction !== "" ? "2px solid red" : ""}
                // boxShadow={eventAction !== "" ? "5px 5px 5px white" : "none"}
                >
                  {scavengerHunts.length <= 0 ? (
                    <>
                      <TableRow>
                        <TableCell
                          colSpan={6}
                          onClick={() => {
                            // setCreateEventModalOpen(true);
                          }}
                        >
                          <Text style={{ textAlign: "center" }}>
                            Create a scavenger hunt checkpoint to get started
                          </Text>
                        </TableCell>
                      </TableRow>
                    </>
                  ) : (
                    <>
                      {!scavengerHunts.length && (
                        <TableRow>
                          <TableCell
                            colSpan={7}
                            // onClick={() => {
                            //   setCreateEventModalOpen(true);
                            // }}
                          >
                            <Text style={{ textAlign: "center" }}>
                              Create a scavenger hunt checkpoint to get started
                            </Text>
                          </TableCell>
                        </TableRow>
                      )}
                      {filteredHunts
                        .slice(
                          (huntPage - 1) * huntPageSize,
                          (huntPage - 1) * huntPageSize + huntPageSize
                        )
                        .map((hunt) => (
                          <TableRow
                            key={hunt.id}
                            onClick={async () => {
                              // if (eventAction === "") {
                              //   return;
                              // }
                              // if (eventAction === "edit") {
                              //   const ev = await DataStore.query(Event, (e) =>
                              //     e.id("eq", event.id)
                              //   );
                              //   if (!ev) return;
                              //   setEventEditing(ev[0]);
                              //   setEditEventModalOpen(true);
                              // } else if (eventAction === "delete") {
                              //   // show delete modal
                              //   // const ev = await DataStore.query(Event, (e) =>
                              //   //   e.id("eq", event.id)
                              //   // );
                              //   // if (!ev) return;
                              //   // setEventEditing(ev[0]);
                              //   // setDeleteEventModalOpen(true);
                              // }
                              // setEventAction("");
                            }}
                          >
                            <TableCell>{hunt.name}</TableCell>
                            <TableCell>
                              {hunt.description ?? <Badge>Undefined</Badge>}
                            </TableCell>
                            <TableCell>
                              {hunt.status ? (
                                <Badge variation="success">Open</Badge>
                              ) : (
                                <Badge variation="error">Closed</Badge>
                              )}
                            </TableCell>
                            <TableCell>
                              {hunt.points ?? <Badge>Undefined</Badge>}
                            </TableCell>
                          </TableRow>
                        ))}
                    </>
                  )}
                </TableBody>
              </Table>
            </View>
            <Flex
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"large"}
            >
              <Pagination
                currentPage={huntPage}
                totalPages={Math.ceil(filteredHunts.length / huntPageSize)}
                siblingCount={1}
                onChange={(newPageIndex, previousPageIndex) => {
                  setHuntPage(newPageIndex);
                }}
                onNext={() => {
                  setHuntPage(huntPage + 1);
                }}
                onPrevious={() => {
                  setHuntPage(huntPage - 1);
                }}
              />
              <Flex direction={"row"} alignItems={"center"}>
                <SelectField
                  label=""
                  labelHidden={true}
                  onChange={(e) => {
                    setHuntPageSize(parseInt(e.target.value));
                    // update local storage
                    localStorage.setItem("eventPageSize", e.target.value);
                  }}
                  defaultValue={huntPageSize.toString()}
                  size={"small"}
                >
                  <option value={1}>1</option>
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={30}>30</option>
                </SelectField>
                <Text>events per page</Text>
              </Flex>
            </Flex>
          </Flex>
        )}

        {/* CREATE SCAVENGER HUNT MODAL */}
        <Modal
          contentLabel="Create Scavenger Hunt Checkpoint Modal"
          isOpen={createHuntModalOpen}
          onRequestClose={() => {
            setCreateHuntModalOpen(false);
          }}
          appElement={document.getElementById("modal-container") as HTMLElement}
          parentSelector={() => document.getElementById("modal-container")!}
          style={modalFormStyle}
        >
          <StatusAlert status={createHuntStatus} />
          <CreateScavengerHunt
            onSubmit={(fields) => {
              // Example function to trim all string inputs
              // console.log(fields);
              // return fields;
              const updatedFields: any = {};
              //foreach field that is a string, trim it
              Object.keys(fields).forEach((key) => {
                if (typeof fields[key as keyof typeof fields] === "string") {
                  updatedFields[key] = (
                    fields[key as keyof typeof fields] as string
                  ).trim();
                } else {
                  updatedFields[key] = fields[key as keyof typeof fields];
                }
              });
              return updatedFields;
            }}
            onCancel={() => {
              setCreateHuntModalOpen(false);
            }}
            onSuccess={(fields) => {
              // create new scavenger hunt checkpoint in database
              // console.log(fields);

              setCreateHuntModalOpen(false);
              setScavengerHunts([...scavengerHunts, fields as ScavengerHunt]);
            }}
            onError={(error) => {
              console.error(error);
              setCreateHuntStatus({
                show: true,
                type: "error",
                message: "Error creating scavenger hunt checkpoint",
              });
            }}
          />
        </Modal>
      </View>
    </div>
  );
};

export default ScavengerHuntPage;
