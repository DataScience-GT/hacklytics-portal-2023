/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type CreatePointsInputValues = {
    Field0?: string;
    Field1?: string;
    Field2?: string;
};
export declare type CreatePointsValidationValues = {
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
    Field2?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreatePointsOverridesProps = {
    CreatePointsGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Field1?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Field2?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreatePointsProps = React.PropsWithChildren<{
    overrides?: CreatePointsOverridesProps | undefined | null;
} & {
    onSubmit: (fields: CreatePointsInputValues) => void;
    onCancel?: () => void;
    onChange?: (fields: CreatePointsInputValues) => CreatePointsInputValues;
    onValidate?: CreatePointsValidationValues;
} & React.CSSProperties>;
export default function CreatePoints(props: CreatePointsProps): React.ReactElement;
