/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreateEventInputValues = {
    name?: string;
    description?: string;
    location?: string;
    status?: boolean;
    start?: string;
    end?: string;
};
export declare type CreateEventValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    status?: ValidationFunction<boolean>;
    start?: ValidationFunction<string>;
    end?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateEventOverridesProps = {
    CreateEventGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    description?: FormProps<TextAreaFieldProps>;
    location?: FormProps<TextFieldProps>;
    status?: FormProps<SwitchFieldProps>;
    start?: FormProps<TextFieldProps>;
    end?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateEventProps = React.PropsWithChildren<{
    overrides?: CreateEventOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateEventInputValues) => CreateEventInputValues;
    onSuccess?: (fields: CreateEventInputValues) => void;
    onError?: (fields: CreateEventInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CreateEventInputValues) => CreateEventInputValues;
    onValidate?: CreateEventValidationValues;
}>;
export default function CreateEvent(props: CreateEventProps): React.ReactElement;