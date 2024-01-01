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
export declare type ScavengerHuntCreateFormInputValues = {
    name?: string;
    description?: string;
    status?: boolean;
    points?: number;
};
export declare type ScavengerHuntCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    status?: ValidationFunction<boolean>;
    points?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ScavengerHuntCreateFormOverridesProps = {
    ScavengerHuntCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SwitchFieldProps>;
    points?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ScavengerHuntCreateFormProps = React.PropsWithChildren<{
    overrides?: ScavengerHuntCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ScavengerHuntCreateFormInputValues) => ScavengerHuntCreateFormInputValues;
    onSuccess?: (fields: ScavengerHuntCreateFormInputValues) => void;
    onError?: (fields: ScavengerHuntCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ScavengerHuntCreateFormInputValues) => ScavengerHuntCreateFormInputValues;
    onValidate?: ScavengerHuntCreateFormValidationValues;
} & React.CSSProperties>;
export default function ScavengerHuntCreateForm(props: ScavengerHuntCreateFormProps): React.ReactElement;
