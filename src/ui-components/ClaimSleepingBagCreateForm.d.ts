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
export declare type ClaimSleepingBagCreateFormInputValues = {
    userID?: string;
    userName?: string;
    timestamp?: string;
};
export declare type ClaimSleepingBagCreateFormValidationValues = {
    userID?: ValidationFunction<string>;
    userName?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ClaimSleepingBagCreateFormOverridesProps = {
    ClaimSleepingBagCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    userName?: PrimitiveOverrideProps<TextFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ClaimSleepingBagCreateFormProps = React.PropsWithChildren<{
    overrides?: ClaimSleepingBagCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ClaimSleepingBagCreateFormInputValues) => ClaimSleepingBagCreateFormInputValues;
    onSuccess?: (fields: ClaimSleepingBagCreateFormInputValues) => void;
    onError?: (fields: ClaimSleepingBagCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ClaimSleepingBagCreateFormInputValues) => ClaimSleepingBagCreateFormInputValues;
    onValidate?: ClaimSleepingBagCreateFormValidationValues;
} & React.CSSProperties>;
export default function ClaimSleepingBagCreateForm(props: ClaimSleepingBagCreateFormProps): React.ReactElement;
