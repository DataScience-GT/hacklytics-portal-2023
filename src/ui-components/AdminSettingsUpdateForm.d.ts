/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { AdminSettings } from "../models";
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
export declare type AdminSettingsUpdateFormInputValues = {
    hacklyticsOpen?: boolean;
    participantEmails?: string[];
};
export declare type AdminSettingsUpdateFormValidationValues = {
    hacklyticsOpen?: ValidationFunction<boolean>;
    participantEmails?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AdminSettingsUpdateFormOverridesProps = {
    AdminSettingsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    hacklyticsOpen?: PrimitiveOverrideProps<SwitchFieldProps>;
    participantEmails?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AdminSettingsUpdateFormProps = React.PropsWithChildren<{
    overrides?: AdminSettingsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    adminSettings?: AdminSettings;
    onSubmit?: (fields: AdminSettingsUpdateFormInputValues) => AdminSettingsUpdateFormInputValues;
    onSuccess?: (fields: AdminSettingsUpdateFormInputValues) => void;
    onError?: (fields: AdminSettingsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AdminSettingsUpdateFormInputValues) => AdminSettingsUpdateFormInputValues;
    onValidate?: AdminSettingsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AdminSettingsUpdateForm(props: AdminSettingsUpdateFormProps): React.ReactElement;
