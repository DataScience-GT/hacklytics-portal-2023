import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type AdminSettingsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerAdminSettings = {
  readonly id: string;
  readonly eventStarted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAdminSettings = {
  readonly id: string;
  readonly eventStarted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AdminSettings = LazyLoading extends LazyLoadingDisabled ? EagerAdminSettings : LazyAdminSettings

export declare const AdminSettings: (new (init: ModelInit<AdminSettings, AdminSettingsMetaData>) => AdminSettings) & {
  copyOf(source: AdminSettings, mutator: (draft: MutableModel<AdminSettings, AdminSettingsMetaData>) => MutableModel<AdminSettings, AdminSettingsMetaData> | void): AdminSettings;
}