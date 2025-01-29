/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ClaimSleepingBag } from "../models";
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
export declare type ClaimSleepingBagUpdateFormInputValues = {
    userID?: string;
    userName?: string;
    timestamp?: string;
};
export declare type ClaimSleepingBagUpdateFormValidationValues = {
    userID?: ValidationFunction<string>;
    userName?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClaimSleepingBagUpdateFormOverridesProps = {
    ClaimSleepingBagUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    userName?: PrimitiveOverrideProps<TextFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClaimSleepingBagUpdateFormProps = React.PropsWithChildren<{
    overrides?: ClaimSleepingBagUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    claimSleepingBag?: ClaimSleepingBag;
    onSubmit?: (fields: ClaimSleepingBagUpdateFormInputValues) => ClaimSleepingBagUpdateFormInputValues;
    onSuccess?: (fields: ClaimSleepingBagUpdateFormInputValues) => void;
    onError?: (fields: ClaimSleepingBagUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClaimSleepingBagUpdateFormInputValues) => ClaimSleepingBagUpdateFormInputValues;
    onValidate?: ClaimSleepingBagUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ClaimSleepingBagUpdateForm(props: ClaimSleepingBagUpdateFormProps): React.ReactElement;
