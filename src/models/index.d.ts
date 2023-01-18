import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type EagerPoints = {
  readonly id: string;
  readonly points: number;
  readonly userID: string;
}

type LazyPoints = {
  readonly id: string;
  readonly points: number;
  readonly userID: string;
}

export declare type Points = LazyLoading extends LazyLoadingDisabled ? EagerPoints : LazyPoints

export declare const Points: (new (init: ModelInit<Points>) => Points)

type AdminSettingsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CheckinMetaData = {
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
  readonly checkins?: (Checkin | null)[] | null;
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
  readonly checkins: AsyncCollection<Checkin>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Event = LazyLoading extends LazyLoadingDisabled ? EagerEvent : LazyEvent

export declare const Event: (new (init: ModelInit<Event, EventMetaData>) => Event) & {
  copyOf(source: Event, mutator: (draft: MutableModel<Event, EventMetaData>) => MutableModel<Event, EventMetaData> | void): Event;
}

type EagerCheckin = {
  readonly id: string;
  readonly createdBy: string;
  readonly createdByName: string;
  readonly user: string;
  readonly userName: string;
  readonly event: Event;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCheckin = {
  readonly id: string;
  readonly createdBy: string;
  readonly createdByName: string;
  readonly user: string;
  readonly userName: string;
  readonly event: AsyncItem<Event>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Checkin = LazyLoading extends LazyLoadingDisabled ? EagerCheckin : LazyCheckin

export declare const Checkin: (new (init: ModelInit<Checkin, CheckinMetaData>) => Checkin) & {
  copyOf(source: Checkin, mutator: (draft: MutableModel<Checkin, CheckinMetaData>) => MutableModel<Checkin, CheckinMetaData> | void): Checkin;
}