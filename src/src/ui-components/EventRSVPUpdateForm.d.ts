/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EventRSVP } from "../models";
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
export declare type EventRSVPUpdateFormInputValues = {
    userID?: string;
    userName?: string;
    eventID?: string;
};
export declare type EventRSVPUpdateFormValidationValues = {
    userID?: ValidationFunction<string>;
    userName?: ValidationFunction<string>;
    eventID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventRSVPUpdateFormOverridesProps = {
    EventRSVPUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    userName?: PrimitiveOverrideProps<TextFieldProps>;
    eventID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EventRSVPUpdateFormProps = React.PropsWithChildren<{
    overrides?: EventRSVPUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    eventRSVP?: EventRSVP;
    onSubmit?: (fields: EventRSVPUpdateFormInputValues) => EventRSVPUpdateFormInputValues;
    onSuccess?: (fields: EventRSVPUpdateFormInputValues) => void;
    onError?: (fields: EventRSVPUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EventRSVPUpdateFormInputValues) => EventRSVPUpdateFormInputValues;
    onValidate?: EventRSVPUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EventRSVPUpdateForm(props: EventRSVPUpdateFormProps): React.ReactElement;
