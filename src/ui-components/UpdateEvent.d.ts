/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Event } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UpdateEventInputValues = {
    name?: string;
    description?: string;
    location?: string;
    status?: boolean;
    start?: string;
    end?: string;
};
export declare type UpdateEventValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    status?: ValidationFunction<boolean>;
    start?: ValidationFunction<string>;
    end?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UpdateEventOverridesProps = {
    UpdateEventGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    description?: FormProps<TextAreaFieldProps>;
    location?: FormProps<TextFieldProps>;
    status?: FormProps<SwitchFieldProps>;
    start?: FormProps<TextFieldProps>;
    end?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UpdateEventProps = React.PropsWithChildren<{
    overrides?: UpdateEventOverridesProps | undefined | null;
} & {
    id?: string;
    event?: Event;
    onSubmit?: (fields: UpdateEventInputValues) => UpdateEventInputValues;
    onSuccess?: (fields: UpdateEventInputValues) => void;
    onError?: (fields: UpdateEventInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: UpdateEventInputValues) => UpdateEventInputValues;
    onValidate?: UpdateEventValidationValues;
}>;
export default function UpdateEvent(props: UpdateEventProps): React.ReactElement;
