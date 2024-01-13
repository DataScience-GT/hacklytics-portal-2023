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
export declare type DeleteAllEventsInputValues = {};
export declare type DeleteAllEventsValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DeleteAllEventsOverridesProps = {
    DeleteAllEventsGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DeleteAllEventsProps = React.PropsWithChildren<{
    overrides?: DeleteAllEventsOverridesProps | undefined | null;
} & {
    initialData?: DeleteAllEventsInputValues;
    onSubmit: (fields: DeleteAllEventsInputValues) => void;
    onCancel?: () => void;
    onChange?: (fields: DeleteAllEventsInputValues) => DeleteAllEventsInputValues;
    onValidate?: DeleteAllEventsValidationValues;
} & React.CSSProperties>;
export default function DeleteAllEvents(props: DeleteAllEventsProps): React.ReactElement;
