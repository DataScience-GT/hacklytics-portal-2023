/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type DeleteAllEmailsInputValues = {};
export declare type DeleteAllEmailsValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DeleteAllEmailsOverridesProps = {
    DeleteAllEmailsGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DeleteAllEmailsProps = React.PropsWithChildren<{
    overrides?: DeleteAllEmailsOverridesProps | undefined | null;
} & {
    initialData?: DeleteAllEmailsInputValues;
    onSubmit: (fields: DeleteAllEmailsInputValues) => void;
    onCancel?: () => void;
    onChange?: (fields: DeleteAllEmailsInputValues) => DeleteAllEmailsInputValues;
    onValidate?: DeleteAllEmailsValidationValues;
} & React.CSSProperties>;
export default function DeleteAllEmails(props: DeleteAllEmailsProps): React.ReactElement;
