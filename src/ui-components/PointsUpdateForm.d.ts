/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Points } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PointsUpdateFormInputValues = {
    userID?: string;
    userName?: string;
    points?: number;
};
export declare type PointsUpdateFormValidationValues = {
    userID?: ValidationFunction<string>;
    userName?: ValidationFunction<string>;
    points?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PointsUpdateFormOverridesProps = {
    PointsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    userName?: PrimitiveOverrideProps<TextFieldProps>;
    points?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PointsUpdateFormProps = React.PropsWithChildren<{
    overrides?: PointsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    points?: Points;
    onSubmit?: (fields: PointsUpdateFormInputValues) => PointsUpdateFormInputValues;
    onSuccess?: (fields: PointsUpdateFormInputValues) => void;
    onError?: (fields: PointsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PointsUpdateFormInputValues) => PointsUpdateFormInputValues;
    onValidate?: PointsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PointsUpdateForm(props: PointsUpdateFormProps): React.ReactElement;
