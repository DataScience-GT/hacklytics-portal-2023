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
export declare type ClaimShirtCreateFormInputValues = {
    userID?: string;
    userName?: string;
};
export declare type ClaimShirtCreateFormValidationValues = {
    userID?: ValidationFunction<string>;
    userName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClaimShirtCreateFormOverridesProps = {
    ClaimShirtCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    userName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClaimShirtCreateFormProps = React.PropsWithChildren<{
    overrides?: ClaimShirtCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ClaimShirtCreateFormInputValues) => ClaimShirtCreateFormInputValues;
    onSuccess?: (fields: ClaimShirtCreateFormInputValues) => void;
    onError?: (fields: ClaimShirtCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClaimShirtCreateFormInputValues) => ClaimShirtCreateFormInputValues;
    onValidate?: ClaimShirtCreateFormValidationValues;
} & React.CSSProperties>;
export default function ClaimShirtCreateForm(props: ClaimShirtCreateFormProps): React.ReactElement;
