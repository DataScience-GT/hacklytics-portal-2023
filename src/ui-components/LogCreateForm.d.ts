/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type LogCreateFormInputValues = {
    userID?: string;
    userName?: string;
    type?: string;
    message?: string;
    timestamp?: string;
};
export declare type LogCreateFormValidationValues = {
    userID?: ValidationFunction<string>;
    userName?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LogCreateFormOverridesProps = {
    LogCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    userName?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LogCreateFormProps = React.PropsWithChildren<{
    overrides?: LogCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LogCreateFormInputValues) => LogCreateFormInputValues;
    onSuccess?: (fields: LogCreateFormInputValues) => void;
    onError?: (fields: LogCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LogCreateFormInputValues) => LogCreateFormInputValues;
    onValidate?: LogCreateFormValidationValues;
} & React.CSSProperties>;
export default function LogCreateForm(props: LogCreateFormProps): React.ReactElement;
