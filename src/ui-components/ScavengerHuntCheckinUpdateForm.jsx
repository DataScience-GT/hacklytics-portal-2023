/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { ScavengerHuntCheckin } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ScavengerHuntCheckinUpdateForm(props) {
  const {
    id: idProp,
    scavengerHuntCheckin,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    checkpointID: "",
    userID: "",
  };
  const [checkpointID, setCheckpointID] = React.useState(
    initialValues.checkpointID
  );
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = scavengerHuntCheckinRecord
      ? { ...initialValues, ...scavengerHuntCheckinRecord }
      : initialValues;
    setCheckpointID(cleanValues.checkpointID);
    setUserID(cleanValues.userID);
    setErrors({});
  };
  const [scavengerHuntCheckinRecord, setScavengerHuntCheckinRecord] =
    React.useState(scavengerHuntCheckin);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(ScavengerHuntCheckin, idProp)
        : scavengerHuntCheckin;
      setScavengerHuntCheckinRecord(record);
    };
    queryData();
  }, [idProp, scavengerHuntCheckin]);
  React.useEffect(resetStateValues, [scavengerHuntCheckinRecord]);
  const validations = {
    checkpointID: [{ type: "Required" }],
    userID: [{ type: "Required" }],
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
          checkpointID,
          userID,
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
            ScavengerHuntCheckin.copyOf(
              scavengerHuntCheckinRecord,
              (updated) => {
                Object.assign(updated, modelFields);
              }
            )
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
      {...getOverrideProps(overrides, "ScavengerHuntCheckinUpdateForm")}
      {...rest}
    >
      <TextField
        label="Checkpoint id"
        isRequired={true}
        isReadOnly={false}
        value={checkpointID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              checkpointID: value,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.checkpointID ?? value;
          }
          if (errors.checkpointID?.hasError) {
            runValidationTasks("checkpointID", value);
          }
          setCheckpointID(value);
        }}
        onBlur={() => runValidationTasks("checkpointID", checkpointID)}
        errorMessage={errors.checkpointID?.errorMessage}
        hasError={errors.checkpointID?.hasError}
        {...getOverrideProps(overrides, "checkpointID")}
      ></TextField>
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={userID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              checkpointID,
              userID: value,
            };
            const result = onChange(modelFields);
            value = result?.userID ?? value;
          }
          if (errors.userID?.hasError) {
            runValidationTasks("userID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("userID", userID)}
        errorMessage={errors.userID?.errorMessage}
        hasError={errors.userID?.hasError}
        {...getOverrideProps(overrides, "userID")}
      ></TextField>
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
          isDisabled={!(idProp || scavengerHuntCheckin)}
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
              !(idProp || scavengerHuntCheckin) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
