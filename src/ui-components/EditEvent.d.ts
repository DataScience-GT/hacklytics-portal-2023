/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Event } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EditEventInputValues = {
    name?: string;
    description?: string;
    status?: boolean;
    start?: string;
    end?: string;
    location?: string;
    points?: number;
};
export declare type EditEventValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    status?: ValidationFunction<boolean>;
    start?: ValidationFunction<string>;
    end?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    points?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EditEventOverridesProps = {
    EditEventGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SwitchFieldProps>;
    start?: PrimitiveOverrideProps<TextFieldProps>;
    end?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    points?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EditEventProps = React.PropsWithChildren<{
    overrides?: EditEventOverridesProps | undefined | null;
} & {
    id?: string;
    event?: Event;
    onSubmit?: (fields: EditEventInputValues) => EditEventInputValues;
    onSuccess?: (fields: EditEventInputValues) => void;
    onError?: (fields: EditEventInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: EditEventInputValues) => EditEventInputValues;
    onValidate?: EditEventValidationValues;
} & React.CSSProperties>;
export default function EditEvent(props: EditEventProps): React.ReactElement;
