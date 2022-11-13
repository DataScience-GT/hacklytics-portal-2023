import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type AdminSettingsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerAdminSettings = {
  readonly id: string;
  readonly hacklyticsOpen?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAdminSettings = {
  readonly id: string;
  readonly hacklyticsOpen?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AdminSettings = LazyLoading extends LazyLoadingDisabled ? EagerAdminSettings : LazyAdminSettings

export declare const AdminSettings: (new (init: ModelInit<AdminSettings, AdminSettingsMetaData>) => AdminSettings) & {
  copyOf(source: AdminSettings, mutator: (draft: MutableModel<AdminSettings, AdminSettingsMetaData>) => MutableModel<AdminSettings, AdminSettingsMetaData> | void): AdminSettings;
}

type EagerEvent = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly status?: boolean | null;
  readonly start?: string | null;
  readonly end?: string | null;
  readonly location?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvent = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly status?: boolean | null;
  readonly start?: string | null;
  readonly end?: string | null;
  readonly location?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Event = LazyLoading extends LazyLoadingDisabled ? EagerEvent : LazyEvent

export declare const Event: (new (init: ModelInit<Event, EventMetaData>) => Event) & {
  copyOf(source: Event, mutator: (draft: MutableModel<Event, EventMetaData>) => MutableModel<Event, EventMetaData> | void): Event;
}