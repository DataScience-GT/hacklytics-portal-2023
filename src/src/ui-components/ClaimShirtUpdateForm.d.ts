/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ClaimShirt } from "../models";
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
export declare type ClaimShirtUpdateFormInputValues = {
    userID?: string;
    userName?: string;
    timestamp?: string;
};
export declare type ClaimShirtUpdateFormValidationValues = {
    userID?: ValidationFunction<string>;
    userName?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClaimShirtUpdateFormOverridesProps = {
    ClaimShirtUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    userName?: PrimitiveOverrideProps<TextFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClaimShirtUpdateFormProps = React.PropsWithChildren<{
    overrides?: ClaimShirtUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    claimShirt?: ClaimShirt;
    onSubmit?: (fields: ClaimShirtUpdateFormInputValues) => ClaimShirtUpdateFormInputValues;
    onSuccess?: (fields: ClaimShirtUpdateFormInputValues) => void;
    onError?: (fields: ClaimShirtUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClaimShirtUpdateFormInputValues) => ClaimShirtUpdateFormInputValues;
    onValidate?: ClaimShirtUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ClaimShirtUpdateForm(props: ClaimShirtUpdateFormProps): React.ReactElement;
