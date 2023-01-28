import React, { FC, useEffect } from "react";
import styles from "./ScavengerHuntPage.module.scss";

import Modal from "react-modal";
import { AmplifyUser, AuthEventData } from "@aws-amplify/ui";
import { EagerScavengerHunt, ScavengerHunt } from "../../models";
import { listScavengerHunts } from "../../graphql";
import { API, DataStore } from "aws-amplify";
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
import { toast } from "react-toastify";
import EditScavengerHunt from "../../ui-components/EditScavengerHunt";

import { CopyToClipboard } from "react-copy-to-clipboard";

interface ScavengerHuntPageProps {
  user?: AmplifyUser;
  signOut?: (data?: AuthEventData | undefined) => void;
}

const CHECKPOINT_URL = process.env.REACT_APP_CHECKPOINT_URL;

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
  const [huntPageSize, setHuntPageSize] = React.useState<number>(
    localStorage.getItem("huntPageSize")
      ? parseInt(localStorage.getItem("huntPageSize") as string)
      : 10
  );

  const [createHuntModalOpen, setCreateHuntModalOpen] = React.useState(false);
  const [createHuntStatus, setCreateHuntStatus] = React.useState<Status>({
    show: false,
  });

  const [huntAction, setHuntAction] = React.useState<string>("");

  const [editHuntModalOpen, setEditHuntModalOpen] = React.useState(false);
  const [huntEditing, setHuntEditing] = React.useState<EagerScavengerHunt>(
    {} as EagerScavengerHunt
  );
  const [editHuntStatus, setEditHuntStatus] = React.useState<Status>({
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
              if (huntAction === "edit") {
                setHuntAction("");
                return;
              }
              setHuntAction("edit");
              toast.info("Select a checkpoint to edit", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }}
            // isPressed={eventAction === "edit"}
          >
            Edit
          </ToggleButton>
          <ToggleButton
            isDisabled={loading || scavengerHunts.length === 0}
            onClick={(e) => {
              // window.history.pushState({}, "Admin Settings", "/admin/settings");
              if (huntAction === "delete") {
                setHuntAction("");
                return;
              }
              setHuntAction("delete");
              toast.info("Select a checkpoint to delete", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
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
                highlightOnHover={
                  scavengerHunts.length >= 1 && huntAction !== ""
                }
              >
                <TableHead>
                  <TableRow>
                    <TableCell as="th">Name</TableCell>
                    <TableCell as="th">Description</TableCell>
                    <TableCell as="th">Status</TableCell>
                    <TableCell as="th">Points</TableCell>
                    <TableCell as="th">URL (Make into QR Code)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody
                  border={huntAction !== "" ? "2px solid red" : ""}
                  boxShadow={huntAction !== "" ? "5px 5px 5px white" : "none"}
                >
                  {scavengerHunts.length <= 0 ? (
                    <>
                      <TableRow>
                        <TableCell
                          colSpan={5}
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
                            colSpan={5}
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
                              if (huntAction === "") {
                                return;
                              }
                              if (huntAction === "edit") {
                                const ev = await DataStore.query(
                                  ScavengerHunt,
                                  (e) => e.id("eq", hunt.id)
                                );
                                if (!ev) return;
                                setHuntEditing(ev[0]);
                                setEditHuntModalOpen(true);
                              } else if (huntAction === "delete") {
                                // show delete modal
                                // const ev = await DataStore.query(Event, (e) =>
                                //   e.id("eq", event.id)
                                // );
                                // if (!ev) return;
                                // setEventEditing(ev[0]);
                                // setDeleteEventModalOpen(true);
                              }
                              setHuntAction("");
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
                            <TableCell>
                              <CopyToClipboard
                                text={`${CHECKPOINT_URL}${hunt.id}`}
                                onCopy={() => {
                                  alert("Copied to clipboard!");
                                }}
                              >
                                <span style={{ cursor: "pointer" }}>
                                  Copy to Clipboard
                                </span>
                              </CopyToClipboard>
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
                    localStorage.setItem("huntPageSize", e.target.value);
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
                <Text>checkpoints per page</Text>
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

        {/* EDIT SCAVENGER HUNT CHECKPOINT MODAL */}
        <Modal
          contentLabel="Edit Scavenger Hunt Checkpoint Modal"
          isOpen={editHuntModalOpen}
          onRequestClose={() => {
            setEditHuntModalOpen(false);
          }}
          appElement={document.getElementById("modal-container") as HTMLElement}
          parentSelector={() => document.getElementById("modal-container")!}
          style={modalFormStyle}
        >
          <StatusAlert status={editHuntStatus} />
          <EditScavengerHunt
            scavengerHunt={huntEditing}
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
              setEditHuntModalOpen(false);
            }}
            onSuccess={(fields) => {
              // create new hunt in database
              // console.log(fields);
              let newEvent = { ...huntEditing, ...fields };
              setEditHuntModalOpen(false);
              let x = [...scavengerHunts];
              // remove huntEditing from hunts
              x = x.map((e) => (e.id === huntEditing.id ? newEvent : e));
              setScavengerHunts(x);
            }}
            onError={(error) => {
              console.error(error);
              setEditHuntStatus({
                show: true,
                type: "error",
                message: "Error updating checkpoint",
              });
            }}
          />
        </Modal>
      </View>
    </div>
  );
};

export default ScavengerHuntPage;
