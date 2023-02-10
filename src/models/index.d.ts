import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type AdminSettingsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CheckinMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PointsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ScavengerHuntMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ScavengerHuntCheckinMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EventRSVPMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LogMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClaimShirtMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerAdminSettings = {
  readonly id: string;
  readonly hacklyticsOpen?: boolean | null;
  readonly participantEmails?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAdminSettings = {
  readonly id: string;
  readonly hacklyticsOpen?: boolean | null;
  readonly participantEmails?: (string | null)[] | null;
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
  readonly requireRSVP?: boolean | null;
  readonly canRSVP?: boolean | null;
  readonly start?: string | null;
  readonly end?: string | null;
  readonly location?: string | null;
  readonly points?: number | null;
  readonly checkins?: (Checkin | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvent = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly status?: boolean | null;
  readonly requireRSVP?: boolean | null;
  readonly canRSVP?: boolean | null;
  readonly start?: string | null;
  readonly end?: string | null;
  readonly location?: string | null;
  readonly points?: number | null;
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

type EagerPoints = {
  readonly id: string;
  readonly userID: string;
  readonly userName?: string | null;
  readonly points: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPoints = {
  readonly id: string;
  readonly userID: string;
  readonly userName?: string | null;
  readonly points: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Points = LazyLoading extends LazyLoadingDisabled ? EagerPoints : LazyPoints

export declare const Points: (new (init: ModelInit<Points, PointsMetaData>) => Points) & {
  copyOf(source: Points, mutator: (draft: MutableModel<Points, PointsMetaData>) => MutableModel<Points, PointsMetaData> | void): Points;
}

type EagerScavengerHunt = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly status?: boolean | null;
  readonly points?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyScavengerHunt = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly status?: boolean | null;
  readonly points?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ScavengerHunt = LazyLoading extends LazyLoadingDisabled ? EagerScavengerHunt : LazyScavengerHunt

export declare const ScavengerHunt: (new (init: ModelInit<ScavengerHunt, ScavengerHuntMetaData>) => ScavengerHunt) & {
  copyOf(source: ScavengerHunt, mutator: (draft: MutableModel<ScavengerHunt, ScavengerHuntMetaData>) => MutableModel<ScavengerHunt, ScavengerHuntMetaData> | void): ScavengerHunt;
}

type EagerScavengerHuntCheckin = {
  readonly id: string;
  readonly checkpointID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyScavengerHuntCheckin = {
  readonly id: string;
  readonly checkpointID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ScavengerHuntCheckin = LazyLoading extends LazyLoadingDisabled ? EagerScavengerHuntCheckin : LazyScavengerHuntCheckin

export declare const ScavengerHuntCheckin: (new (init: ModelInit<ScavengerHuntCheckin, ScavengerHuntCheckinMetaData>) => ScavengerHuntCheckin) & {
  copyOf(source: ScavengerHuntCheckin, mutator: (draft: MutableModel<ScavengerHuntCheckin, ScavengerHuntCheckinMetaData>) => MutableModel<ScavengerHuntCheckin, ScavengerHuntCheckinMetaData> | void): ScavengerHuntCheckin;
}

type EagerEventRSVP = {
  readonly id: string;
  readonly userID: string;
  readonly userName: string;
  readonly eventID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEventRSVP = {
  readonly id: string;
  readonly userID: string;
  readonly userName: string;
  readonly eventID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EventRSVP = LazyLoading extends LazyLoadingDisabled ? EagerEventRSVP : LazyEventRSVP

export declare const EventRSVP: (new (init: ModelInit<EventRSVP, EventRSVPMetaData>) => EventRSVP) & {
  copyOf(source: EventRSVP, mutator: (draft: MutableModel<EventRSVP, EventRSVPMetaData>) => MutableModel<EventRSVP, EventRSVPMetaData> | void): EventRSVP;
}

type EagerLog = {
  readonly id: string;
  readonly userID: string;
  readonly userName: string;
  readonly type: string;
  readonly message: string;
  readonly timestamp: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLog = {
  readonly id: string;
  readonly userID: string;
  readonly userName: string;
  readonly type: string;
  readonly message: string;
  readonly timestamp: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Log = LazyLoading extends LazyLoadingDisabled ? EagerLog : LazyLog

export declare const Log: (new (init: ModelInit<Log, LogMetaData>) => Log) & {
  copyOf(source: Log, mutator: (draft: MutableModel<Log, LogMetaData>) => MutableModel<Log, LogMetaData> | void): Log;
}

type EagerClaimShirt = {
  readonly id: string;
  readonly userID: string;
  readonly userName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClaimShirt = {
  readonly id: string;
  readonly userID: string;
  readonly userName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ClaimShirt = LazyLoading extends LazyLoadingDisabled ? EagerClaimShirt : LazyClaimShirt

export declare const ClaimShirt: (new (init: ModelInit<ClaimShirt, ClaimShirtMetaData>) => ClaimShirt) & {
  copyOf(source: ClaimShirt, mutator: (draft: MutableModel<ClaimShirt, ClaimShirtMetaData>) => MutableModel<ClaimShirt, ClaimShirtMetaData> | void): ClaimShirt;
}