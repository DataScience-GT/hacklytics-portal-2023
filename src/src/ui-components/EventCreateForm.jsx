/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { Event } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function EventCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    description: "",
    status: false,
    requireRSVP: false,
    canRSVP: false,
    start: "",
    end: "",
    location: "",
    points: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [requireRSVP, setRequireRSVP] = React.useState(
    initialValues.requireRSVP
  );
  const [canRSVP, setCanRSVP] = React.useState(initialValues.canRSVP);
  const [start, setStart] = React.useState(initialValues.start);
  const [end, setEnd] = React.useState(initialValues.end);
  const [location, setLocation] = React.useState(initialValues.location);
  const [points, setPoints] = React.useState(initialValues.points);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setDescription(initialValues.description);
    setStatus(initialValues.status);
    setRequireRSVP(initialValues.requireRSVP);
    setCanRSVP(initialValues.canRSVP);
    setStart(initialValues.start);
    setEnd(initialValues.end);
    setLocation(initialValues.location);
    setPoints(initialValues.points);
    setErrors({});
  };
  const validations = {
    name: [{ type: "Required" }],
    description: [],
    status: [],
    requireRSVP: [],
    canRSVP: [],
    start: [],
    end: [],
    location: [],
    points: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          name,
          description,
          status,
          requireRSVP,
          canRSVP,
          start,
          end,
          location,
          points,
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
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new Event(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "EventCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              description,
              status,
              requireRSVP,
              canRSVP,
              start,
              end,
              location,
              points,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              status,
              requireRSVP,
              canRSVP,
              start,
              end,
              location,
              points,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <SwitchField
        label="Status"
        defaultChecked={false}
        isDisabled={false}
        isChecked={status}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              description,
              status: value,
              requireRSVP,
              canRSVP,
              start,
              end,
              location,
              points,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></SwitchField>
      <SwitchField
        label="Require rsvp"
        defaultChecked={false}
        isDisabled={false}
        isChecked={requireRSVP}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              description,
              status,
              requireRSVP: value,
              canRSVP,
              start,
              end,
              location,
              points,
            };
            const result = onChange(modelFields);
            value = result?.requireRSVP ?? value;
          }
          if (errors.requireRSVP?.hasError) {
            runValidationTasks("requireRSVP", value);
          }
          setRequireRSVP(value);
        }}
        onBlur={() => runValidationTasks("requireRSVP", requireRSVP)}
        errorMessage={errors.requireRSVP?.errorMessage}
        hasError={errors.requireRSVP?.hasError}
        {...getOverrideProps(overrides, "requireRSVP")}
      ></SwitchField>
      <SwitchField
        label="Can rsvp"
        defaultChecked={false}
        isDisabled={false}
        isChecked={canRSVP}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              description,
              status,
              requireRSVP,
              canRSVP: value,
              start,
              end,
              location,
              points,
            };
            const result = onChange(modelFields);
            value = result?.canRSVP ?? value;
          }
          if (errors.canRSVP?.hasError) {
            runValidationTasks("canRSVP", value);
          }
          setCanRSVP(value);
        }}
        onBlur={() => runValidationTasks("canRSVP", canRSVP)}
        errorMessage={errors.canRSVP?.errorMessage}
        hasError={errors.canRSVP?.hasError}
        {...getOverrideProps(overrides, "canRSVP")}
      ></SwitchField>
      <TextField
        label="Start"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={start && convertToLocal(new Date(start))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              description,
              status,
              requireRSVP,
              canRSVP,
              start: value,
              end,
              location,
              points,
            };
            const result = onChange(modelFields);
            value = result?.start ?? value;
          }
          if (errors.start?.hasError) {
            runValidationTasks("start", value);
          }
          setStart(value);
        }}
        onBlur={() => runValidationTasks("start", start)}
        errorMessage={errors.start?.errorMessage}
        hasError={errors.start?.hasError}
        {...getOverrideProps(overrides, "start")}
      ></TextField>
      <TextField
        label="End"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={end && convertToLocal(new Date(end))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              description,
              status,
              requireRSVP,
              canRSVP,
              start,
              end: value,
              location,
              points,
            };
            const result = onChange(modelFields);
            value = result?.end ?? value;
          }
          if (errors.end?.hasError) {
            runValidationTasks("end", value);
          }
          setEnd(value);
        }}
        onBlur={() => runValidationTasks("end", end)}
        errorMessage={errors.end?.errorMessage}
        hasError={errors.end?.hasError}
        {...getOverrideProps(overrides, "end")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        value={location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              status,
              requireRSVP,
              canRSVP,
              start,
              end,
              location: value,
              points,
            };
            const result = onChange(modelFields);
            value = result?.location ?? value;
          }
          if (errors.location?.hasError) {
            runValidationTasks("location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("location", location)}
        errorMessage={errors.location?.errorMessage}
        hasError={errors.location?.hasError}
        {...getOverrideProps(overrides, "location")}
      ></TextField>
      <TextField
        label="Points"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={points}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              status,
              requireRSVP,
              canRSVP,
              start,
              end,
              location,
              points: value,
            };
            const result = onChange(modelFields);
            value = result?.points ?? value;
          }
          if (errors.points?.hasError) {
            runValidationTasks("points", value);
          }
          setPoints(value);
        }}
        onBlur={() => runValidationTasks("points", points)}
        errorMessage={errors.points?.errorMessage}
        hasError={errors.points?.hasError}
        {...getOverrideProps(overrides, "points")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
