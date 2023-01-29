/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ScavengerHunt } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ScavengerHuntUpdateFormInputValues = {
    name?: string;
    description?: string;
    status?: boolean;
    points?: number;
};
export declare type ScavengerHuntUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    status?: ValidationFunction<boolean>;
    points?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ScavengerHuntUpdateFormOverridesProps = {
    ScavengerHuntUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SwitchFieldProps>;
    points?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ScavengerHuntUpdateFormProps = React.PropsWithChildren<{
    overrides?: ScavengerHuntUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    scavengerHunt?: ScavengerHunt;
    onSubmit?: (fields: ScavengerHuntUpdateFormInputValues) => ScavengerHuntUpdateFormInputValues;
    onSuccess?: (fields: ScavengerHuntUpdateFormInputValues) => void;
    onError?: (fields: ScavengerHuntUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ScavengerHuntUpdateFormInputValues) => ScavengerHuntUpdateFormInputValues;
    onValidate?: ScavengerHuntUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ScavengerHuntUpdateForm(props: ScavengerHuntUpdateFormProps): React.ReactElement;
