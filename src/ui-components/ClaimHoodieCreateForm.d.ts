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
export declare type ClaimHoodieCreateFormInputValues = {
    userID?: string;
    userName?: string;
    timestamp?: string;
};
export declare type ClaimHoodieCreateFormValidationValues = {
    userID?: ValidationFunction<string>;
    userName?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClaimHoodieCreateFormOverridesProps = {
    ClaimHoodieCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    userName?: PrimitiveOverrideProps<TextFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClaimHoodieCreateFormProps = React.PropsWithChildren<{
    overrides?: ClaimHoodieCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ClaimHoodieCreateFormInputValues) => ClaimHoodieCreateFormInputValues;
    onSuccess?: (fields: ClaimHoodieCreateFormInputValues) => void;
    onError?: (fields: ClaimHoodieCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClaimHoodieCreateFormInputValues) => ClaimHoodieCreateFormInputValues;
    onValidate?: ClaimHoodieCreateFormValidationValues;
} & React.CSSProperties>;
export default function ClaimHoodieCreateForm(props: ClaimHoodieCreateFormProps): React.ReactElement;
