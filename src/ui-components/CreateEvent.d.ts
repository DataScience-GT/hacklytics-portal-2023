/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, HeadingProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
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
    points?: number;
    requireRSVP?: boolean;
    canRSVP?: boolean;
};
export declare type CreateEventValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    status?: ValidationFunction<boolean>;
    start?: ValidationFunction<string>;
    end?: ValidationFunction<string>;
    points?: ValidationFunction<number>;
    requireRSVP?: ValidationFunction<boolean>;
    canRSVP?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateEventOverridesProps = {
    CreateEventGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextAreaFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SwitchFieldProps>;
    start?: PrimitiveOverrideProps<TextFieldProps>;
    end?: PrimitiveOverrideProps<TextFieldProps>;
    points?: PrimitiveOverrideProps<TextFieldProps>;
    requireRSVP?: PrimitiveOverrideProps<SwitchFieldProps>;
    canRSVP?: PrimitiveOverrideProps<SwitchFieldProps>;
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
} & React.CSSProperties>;
export default function CreateEvent(props: CreateEventProps): React.ReactElement;
