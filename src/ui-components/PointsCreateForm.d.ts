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
export declare type PointsCreateFormInputValues = {
    userID?: string;
    userName?: string;
    points?: number;
};
export declare type PointsCreateFormValidationValues = {
    userID?: ValidationFunction<string>;
    userName?: ValidationFunction<string>;
    points?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PointsCreateFormOverridesProps = {
    PointsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    userName?: PrimitiveOverrideProps<TextFieldProps>;
    points?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PointsCreateFormProps = React.PropsWithChildren<{
    overrides?: PointsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PointsCreateFormInputValues) => PointsCreateFormInputValues;
    onSuccess?: (fields: PointsCreateFormInputValues) => void;
    onError?: (fields: PointsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PointsCreateFormInputValues) => PointsCreateFormInputValues;
    onValidate?: PointsCreateFormValidationValues;
} & React.CSSProperties>;
export default function PointsCreateForm(props: PointsCreateFormProps): React.ReactElement;
