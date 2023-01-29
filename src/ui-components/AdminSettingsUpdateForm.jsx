/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { AdminSettings } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
}) {
  const labelElement = <Text>{label}</Text>;
  const { tokens } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            color={tokens.colors.brand.primary[80]}
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function AdminSettingsUpdateForm(props) {
  const {
    id: idProp,
    adminSettings,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    hacklyticsOpen: false,
    participantEmails: [],
  };
  const [hacklyticsOpen, setHacklyticsOpen] = React.useState(
    initialValues.hacklyticsOpen
  );
  const [participantEmails, setParticipantEmails] = React.useState(
    initialValues.participantEmails
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = adminSettingsRecord
      ? { ...initialValues, ...adminSettingsRecord }
      : initialValues;
    setHacklyticsOpen(cleanValues.hacklyticsOpen);
    setParticipantEmails(cleanValues.participantEmails ?? []);
    setCurrentParticipantEmailsValue("");
    setErrors({});
  };
  const [adminSettingsRecord, setAdminSettingsRecord] =
    React.useState(adminSettings);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(AdminSettings, idProp)
        : adminSettings;
      setAdminSettingsRecord(record);
    };
    queryData();
  }, [idProp, adminSettings]);
  React.useEffect(resetStateValues, [adminSettingsRecord]);
  const [currentParticipantEmailsValue, setCurrentParticipantEmailsValue] =
    React.useState("");
  const participantEmailsRef = React.createRef();
  const validations = {
    hacklyticsOpen: [],
    participantEmails: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          hacklyticsOpen,
          participantEmails,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            AdminSettings.copyOf(adminSettingsRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "AdminSettingsUpdateForm")}
      {...rest}
    >
      <SwitchField
        label="Hacklytics open"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hacklyticsOpen}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              hacklyticsOpen: value,
              participantEmails,
            };
            const result = onChange(modelFields);
            value = result?.hacklyticsOpen ?? value;
          }
          if (errors.hacklyticsOpen?.hasError) {
            runValidationTasks("hacklyticsOpen", value);
          }
          setHacklyticsOpen(value);
        }}
        onBlur={() => runValidationTasks("hacklyticsOpen", hacklyticsOpen)}
        errorMessage={errors.hacklyticsOpen?.errorMessage}
        hasError={errors.hacklyticsOpen?.hasError}
        {...getOverrideProps(overrides, "hacklyticsOpen")}
      ></SwitchField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              hacklyticsOpen,
              participantEmails: values,
            };
            const result = onChange(modelFields);
            values = result?.participantEmails ?? values;
          }
          setParticipantEmails(values);
          setCurrentParticipantEmailsValue("");
        }}
        currentFieldValue={currentParticipantEmailsValue}
        label={"Participant emails"}
        items={participantEmails}
        hasError={errors.participantEmails?.hasError}
        setFieldValue={setCurrentParticipantEmailsValue}
        inputFieldRef={participantEmailsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Participant emails"
          isRequired={false}
          isReadOnly={false}
          value={currentParticipantEmailsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.participantEmails?.hasError) {
              runValidationTasks("participantEmails", value);
            }
            setCurrentParticipantEmailsValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "participantEmails",
              currentParticipantEmailsValue
            )
          }
          errorMessage={errors.participantEmails?.errorMessage}
          hasError={errors.participantEmails?.hasError}
          ref={participantEmailsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "participantEmails")}
        ></TextField>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || adminSettings)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || adminSettings) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
