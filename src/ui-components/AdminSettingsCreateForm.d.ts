/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type AdminSettingsCreateFormInputValues = {
    hacklyticsOpen?: boolean;
    participantEmails?: string[];
};
export declare type AdminSettingsCreateFormValidationValues = {
    hacklyticsOpen?: ValidationFunction<boolean>;
    participantEmails?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AdminSettingsCreateFormOverridesProps = {
    AdminSettingsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    hacklyticsOpen?: PrimitiveOverrideProps<SwitchFieldProps>;
    participantEmails?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AdminSettingsCreateFormProps = React.PropsWithChildren<{
    overrides?: AdminSettingsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AdminSettingsCreateFormInputValues) => AdminSettingsCreateFormInputValues;
    onSuccess?: (fields: AdminSettingsCreateFormInputValues) => void;
    onError?: (fields: AdminSettingsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AdminSettingsCreateFormInputValues) => AdminSettingsCreateFormInputValues;
    onValidate?: AdminSettingsCreateFormValidationValues;
} & React.CSSProperties>;
export default function AdminSettingsCreateForm(props: AdminSettingsCreateFormProps): React.ReactElement;
