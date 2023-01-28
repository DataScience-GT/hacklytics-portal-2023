/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, HeadingProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ScavengerHunt } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EditScavengerHuntInputValues = {
    name?: string;
    description?: string;
    status?: boolean;
    points?: number;
};
export declare type EditScavengerHuntValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    status?: ValidationFunction<boolean>;
    points?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EditScavengerHuntOverridesProps = {
    EditScavengerHuntGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextAreaFieldProps>;
    status?: PrimitiveOverrideProps<SwitchFieldProps>;
    points?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EditScavengerHuntProps = React.PropsWithChildren<{
    overrides?: EditScavengerHuntOverridesProps | undefined | null;
} & {
    id?: string;
    scavengerHunt?: ScavengerHunt;
    onSubmit?: (fields: EditScavengerHuntInputValues) => EditScavengerHuntInputValues;
    onSuccess?: (fields: EditScavengerHuntInputValues) => void;
    onError?: (fields: EditScavengerHuntInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: EditScavengerHuntInputValues) => EditScavengerHuntInputValues;
    onValidate?: EditScavengerHuntValidationValues;
} & React.CSSProperties>;
export default function EditScavengerHunt(props: EditScavengerHuntProps): React.ReactElement;
