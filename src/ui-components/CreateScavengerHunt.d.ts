/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, HeadingProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreateScavengerHuntInputValues = {
    name?: string;
    description?: string;
    status?: boolean;
    points?: number;
};
export declare type CreateScavengerHuntValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    status?: ValidationFunction<boolean>;
    points?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateScavengerHuntOverridesProps = {
    CreateScavengerHuntGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextAreaFieldProps>;
    status?: PrimitiveOverrideProps<SwitchFieldProps>;
    points?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateScavengerHuntProps = React.PropsWithChildren<{
    overrides?: CreateScavengerHuntOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateScavengerHuntInputValues) => CreateScavengerHuntInputValues;
    onSuccess?: (fields: CreateScavengerHuntInputValues) => void;
    onError?: (fields: CreateScavengerHuntInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CreateScavengerHuntInputValues) => CreateScavengerHuntInputValues;
    onValidate?: CreateScavengerHuntValidationValues;
} & React.CSSProperties>;
export default function CreateScavengerHunt(props: CreateScavengerHuntProps): React.ReactElement;
