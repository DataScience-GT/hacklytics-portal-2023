/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ScavengerHuntCheckin } from "../models";
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
export declare type ScavengerHuntCheckinUpdateFormInputValues = {
    checkpointID?: string;
    userID?: string;
};
export declare type ScavengerHuntCheckinUpdateFormValidationValues = {
    checkpointID?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ScavengerHuntCheckinUpdateFormOverridesProps = {
    ScavengerHuntCheckinUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    checkpointID?: PrimitiveOverrideProps<TextFieldProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ScavengerHuntCheckinUpdateFormProps = React.PropsWithChildren<{
    overrides?: ScavengerHuntCheckinUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    scavengerHuntCheckin?: ScavengerHuntCheckin;
    onSubmit?: (fields: ScavengerHuntCheckinUpdateFormInputValues) => ScavengerHuntCheckinUpdateFormInputValues;
    onSuccess?: (fields: ScavengerHuntCheckinUpdateFormInputValues) => void;
    onError?: (fields: ScavengerHuntCheckinUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ScavengerHuntCheckinUpdateFormInputValues) => ScavengerHuntCheckinUpdateFormInputValues;
    onValidate?: ScavengerHuntCheckinUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ScavengerHuntCheckinUpdateForm(props: ScavengerHuntCheckinUpdateFormProps): React.ReactElement;
