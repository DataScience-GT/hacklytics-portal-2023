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
export declare type DeleteEventInputValues = {};
export declare type DeleteEventValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DeleteEventOverridesProps = {
    DeleteEventGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DeleteEventProps = React.PropsWithChildren<{
    overrides?: DeleteEventOverridesProps | undefined | null;
} & {
    initialData?: DeleteEventInputValues;
    onSubmit: (fields: DeleteEventInputValues) => void;
    onCancel?: () => void;
    onChange?: (fields: DeleteEventInputValues) => DeleteEventInputValues;
    onValidate?: DeleteEventValidationValues;
} & React.CSSProperties>;
export default function DeleteEvent(props: DeleteEventProps): React.ReactElement;
