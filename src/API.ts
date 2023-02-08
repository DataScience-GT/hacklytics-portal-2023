/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAdminSettingsInput = {
  id?: string | null,
  hacklyticsOpen?: boolean | null,
  participantEmails?: Array< string | null > | null,
  _version?: number | null,
};

export type ModelAdminSettingsConditionInput = {
  hacklyticsOpen?: ModelBooleanInput | null,
  participantEmails?: ModelStringInput | null,
  and?: Array< ModelAdminSettingsConditionInput | null > | null,
  or?: Array< ModelAdminSettingsConditionInput | null > | null,
  not?: ModelAdminSettingsConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type AdminSettings = {
  __typename: "AdminSettings",
  id: string,
  hacklyticsOpen?: boolean | null,
  participantEmails?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateAdminSettingsInput = {
  id: string,
  hacklyticsOpen?: boolean | null,
  participantEmails?: Array< string | null > | null,
  _version?: number | null,
};

export type DeleteAdminSettingsInput = {
  id: string,
  _version?: number | null,
};

export type CreateEventInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  status?: boolean | null,
  canRSVP?: boolean | null,
  start?: string | null,
  end?: string | null,
  location?: string | null,
  points?: number | null,
  _version?: number | null,
};

export type ModelEventConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelBooleanInput | null,
  canRSVP?: ModelBooleanInput | null,
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  location?: ModelStringInput | null,
  points?: ModelIntInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Event = {
  __typename: "Event",
  id: string,
  name: string,
  description?: string | null,
  status?: boolean | null,
  canRSVP?: boolean | null,
  start?: string | null,
  end?: string | null,
  location?: string | null,
  points?: number | null,
  checkins?: ModelCheckinConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelCheckinConnection = {
  __typename: "ModelCheckinConnection",
  items:  Array<Checkin | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Checkin = {
  __typename: "Checkin",
  id: string,
  createdBy: string,
  createdByName: string,
  user: string,
  userName: string,
  event: Event,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  eventCheckinsId?: string | null,
};

export type UpdateEventInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  status?: boolean | null,
  canRSVP?: boolean | null,
  start?: string | null,
  end?: string | null,
  location?: string | null,
  points?: number | null,
  _version?: number | null,
};

export type DeleteEventInput = {
  id: string,
  _version?: number | null,
};

export type CreateCheckinInput = {
  id?: string | null,
  createdBy: string,
  createdByName: string,
  user: string,
  userName: string,
  _version?: number | null,
  eventCheckinsId?: string | null,
};

export type ModelCheckinConditionInput = {
  createdBy?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  user?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  and?: Array< ModelCheckinConditionInput | null > | null,
  or?: Array< ModelCheckinConditionInput | null > | null,
  not?: ModelCheckinConditionInput | null,
  eventCheckinsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCheckinInput = {
  id: string,
  createdBy?: string | null,
  createdByName?: string | null,
  user?: string | null,
  userName?: string | null,
  _version?: number | null,
  eventCheckinsId?: string | null,
};

export type DeleteCheckinInput = {
  id: string,
  _version?: number | null,
};

export type CreatePointsInput = {
  userID: string,
  userName?: string | null,
  points: number,
  id?: string | null,
  _version?: number | null,
};

export type ModelPointsConditionInput = {
  userID?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  points?: ModelIntInput | null,
  and?: Array< ModelPointsConditionInput | null > | null,
  or?: Array< ModelPointsConditionInput | null > | null,
  not?: ModelPointsConditionInput | null,
};

export type Points = {
  __typename: "Points",
  userID: string,
  userName?: string | null,
  points: number,
  id: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdatePointsInput = {
  userID?: string | null,
  userName?: string | null,
  points?: number | null,
  id: string,
  _version?: number | null,
};

export type DeletePointsInput = {
  id: string,
  _version?: number | null,
};

export type CreateScavengerHuntInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  status?: boolean | null,
  points?: number | null,
  _version?: number | null,
};

export type ModelScavengerHuntConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelBooleanInput | null,
  points?: ModelIntInput | null,
  and?: Array< ModelScavengerHuntConditionInput | null > | null,
  or?: Array< ModelScavengerHuntConditionInput | null > | null,
  not?: ModelScavengerHuntConditionInput | null,
};

export type ScavengerHunt = {
  __typename: "ScavengerHunt",
  id: string,
  name: string,
  description?: string | null,
  status?: boolean | null,
  points?: number | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateScavengerHuntInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  status?: boolean | null,
  points?: number | null,
  _version?: number | null,
};

export type DeleteScavengerHuntInput = {
  id: string,
  _version?: number | null,
};

export type CreateScavengerHuntCheckinInput = {
  id?: string | null,
  checkpointID: string,
  userID: string,
  _version?: number | null,
};

export type ModelScavengerHuntCheckinConditionInput = {
  checkpointID?: ModelStringInput | null,
  userID?: ModelStringInput | null,
  and?: Array< ModelScavengerHuntCheckinConditionInput | null > | null,
  or?: Array< ModelScavengerHuntCheckinConditionInput | null > | null,
  not?: ModelScavengerHuntCheckinConditionInput | null,
};

export type ScavengerHuntCheckin = {
  __typename: "ScavengerHuntCheckin",
  id: string,
  checkpointID: string,
  userID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateScavengerHuntCheckinInput = {
  id: string,
  checkpointID?: string | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeleteScavengerHuntCheckinInput = {
  id: string,
  _version?: number | null,
};

export type CreateEventRSVPInput = {
  id?: string | null,
  userID: string,
  userName: string,
  eventID: string,
  _version?: number | null,
};

export type ModelEventRSVPConditionInput = {
  userID?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  eventID?: ModelStringInput | null,
  and?: Array< ModelEventRSVPConditionInput | null > | null,
  or?: Array< ModelEventRSVPConditionInput | null > | null,
  not?: ModelEventRSVPConditionInput | null,
};

export type EventRSVP = {
  __typename: "EventRSVP",
  id: string,
  userID: string,
  userName: string,
  eventID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateEventRSVPInput = {
  id: string,
  userID?: string | null,
  userName?: string | null,
  eventID?: string | null,
  _version?: number | null,
};

export type DeleteEventRSVPInput = {
  id: string,
  _version?: number | null,
};

export type ModelAdminSettingsFilterInput = {
  id?: ModelIDInput | null,
  hacklyticsOpen?: ModelBooleanInput | null,
  participantEmails?: ModelStringInput | null,
  and?: Array< ModelAdminSettingsFilterInput | null > | null,
  or?: Array< ModelAdminSettingsFilterInput | null > | null,
  not?: ModelAdminSettingsFilterInput | null,
};

export type ModelAdminSettingsConnection = {
  __typename: "ModelAdminSettingsConnection",
  items:  Array<AdminSettings | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelEventFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelBooleanInput | null,
  canRSVP?: ModelBooleanInput | null,
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  location?: ModelStringInput | null,
  points?: ModelIntInput | null,
  and?: Array< ModelEventFilterInput | null > | null,
  or?: Array< ModelEventFilterInput | null > | null,
  not?: ModelEventFilterInput | null,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCheckinFilterInput = {
  id?: ModelIDInput | null,
  createdBy?: ModelStringInput | null,
  createdByName?: ModelStringInput | null,
  user?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  and?: Array< ModelCheckinFilterInput | null > | null,
  or?: Array< ModelCheckinFilterInput | null > | null,
  not?: ModelCheckinFilterInput | null,
  eventCheckinsId?: ModelIDInput | null,
};

export type ModelPointsFilterInput = {
  userID?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  points?: ModelIntInput | null,
  and?: Array< ModelPointsFilterInput | null > | null,
  or?: Array< ModelPointsFilterInput | null > | null,
  not?: ModelPointsFilterInput | null,
};

export type ModelPointsConnection = {
  __typename: "ModelPointsConnection",
  items:  Array<Points | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelScavengerHuntFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelBooleanInput | null,
  points?: ModelIntInput | null,
  and?: Array< ModelScavengerHuntFilterInput | null > | null,
  or?: Array< ModelScavengerHuntFilterInput | null > | null,
  not?: ModelScavengerHuntFilterInput | null,
};

export type ModelScavengerHuntConnection = {
  __typename: "ModelScavengerHuntConnection",
  items:  Array<ScavengerHunt | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelScavengerHuntCheckinFilterInput = {
  id?: ModelIDInput | null,
  checkpointID?: ModelStringInput | null,
  userID?: ModelStringInput | null,
  and?: Array< ModelScavengerHuntCheckinFilterInput | null > | null,
  or?: Array< ModelScavengerHuntCheckinFilterInput | null > | null,
  not?: ModelScavengerHuntCheckinFilterInput | null,
};

export type ModelScavengerHuntCheckinConnection = {
  __typename: "ModelScavengerHuntCheckinConnection",
  items:  Array<ScavengerHuntCheckin | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelEventRSVPFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  eventID?: ModelStringInput | null,
  and?: Array< ModelEventRSVPFilterInput | null > | null,
  or?: Array< ModelEventRSVPFilterInput | null > | null,
  not?: ModelEventRSVPFilterInput | null,
};

export type ModelEventRSVPConnection = {
  __typename: "ModelEventRSVPConnection",
  items:  Array<EventRSVP | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionAdminSettingsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  hacklyticsOpen?: ModelSubscriptionBooleanInput | null,
  participantEmails?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAdminSettingsFilterInput | null > | null,
  or?: Array< ModelSubscriptionAdminSettingsFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionEventFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionBooleanInput | null,
  canRSVP?: ModelSubscriptionBooleanInput | null,
  start?: ModelSubscriptionStringInput | null,
  end?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  points?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionEventFilterInput | null > | null,
  or?: Array< ModelSubscriptionEventFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionCheckinFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdBy?: ModelSubscriptionStringInput | null,
  createdByName?: ModelSubscriptionStringInput | null,
  user?: ModelSubscriptionStringInput | null,
  userName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCheckinFilterInput | null > | null,
  or?: Array< ModelSubscriptionCheckinFilterInput | null > | null,
};

export type ModelSubscriptionPointsFilterInput = {
  userID?: ModelSubscriptionStringInput | null,
  userName?: ModelSubscriptionStringInput | null,
  points?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionPointsFilterInput | null > | null,
  or?: Array< ModelSubscriptionPointsFilterInput | null > | null,
};

export type ModelSubscriptionScavengerHuntFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionBooleanInput | null,
  points?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionScavengerHuntFilterInput | null > | null,
  or?: Array< ModelSubscriptionScavengerHuntFilterInput | null > | null,
};

export type ModelSubscriptionScavengerHuntCheckinFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  checkpointID?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionScavengerHuntCheckinFilterInput | null > | null,
  or?: Array< ModelSubscriptionScavengerHuntCheckinFilterInput | null > | null,
};

export type ModelSubscriptionEventRSVPFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionStringInput | null,
  userName?: ModelSubscriptionStringInput | null,
  eventID?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEventRSVPFilterInput | null > | null,
  or?: Array< ModelSubscriptionEventRSVPFilterInput | null > | null,
};

export type CreateAdminSettingsMutationVariables = {
  input: CreateAdminSettingsInput,
  condition?: ModelAdminSettingsConditionInput | null,
};

export type CreateAdminSettingsMutation = {
  createAdminSettings?:  {
    __typename: "AdminSettings",
    id: string,
    hacklyticsOpen?: boolean | null,
    participantEmails?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAdminSettingsMutationVariables = {
  input: UpdateAdminSettingsInput,
  condition?: ModelAdminSettingsConditionInput | null,
};

export type UpdateAdminSettingsMutation = {
  updateAdminSettings?:  {
    __typename: "AdminSettings",
    id: string,
    hacklyticsOpen?: boolean | null,
    participantEmails?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAdminSettingsMutationVariables = {
  input: DeleteAdminSettingsInput,
  condition?: ModelAdminSettingsConditionInput | null,
};

export type DeleteAdminSettingsMutation = {
  deleteAdminSettings?:  {
    __typename: "AdminSettings",
    id: string,
    hacklyticsOpen?: boolean | null,
    participantEmails?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateEventMutationVariables = {
  input: CreateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description?: string | null,
    status?: boolean | null,
    canRSVP?: boolean | null,
    start?: string | null,
    end?: string | null,
    location?: string | null,
    points?: number | null,
    checkins?:  {
      __typename: "ModelCheckinConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateEventMutationVariables = {
  input: UpdateEventInput,
  condition?: ModelEventConditionInput | null,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description?: string | null,
    status?: boolean | null,
    canRSVP?: boolean | null,
    start?: string | null,
    end?: string | null,
    location?: string | null,
    points?: number | null,
    checkins?:  {
      __typename: "ModelCheckinConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteEventMutationVariables = {
  input: DeleteEventInput,
  condition?: ModelEventConditionInput | null,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description?: string | null,
    status?: boolean | null,
    canRSVP?: boolean | null,
    start?: string | null,
    end?: string | null,
    location?: string | null,
    points?: number | null,
    checkins?:  {
      __typename: "ModelCheckinConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCheckinMutationVariables = {
  input: CreateCheckinInput,
  condition?: ModelCheckinConditionInput | null,
};

export type CreateCheckinMutation = {
  createCheckin?:  {
    __typename: "Checkin",
    id: string,
    createdBy: string,
    createdByName: string,
    user: string,
    userName: string,
    event:  {
      __typename: "Event",
      id: string,
      name: string,
      description?: string | null,
      status?: boolean | null,
      canRSVP?: boolean | null,
      start?: string | null,
      end?: string | null,
      location?: string | null,
      points?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    eventCheckinsId?: string | null,
  } | null,
};

export type UpdateCheckinMutationVariables = {
  input: UpdateCheckinInput,
  condition?: ModelCheckinConditionInput | null,
};

export type UpdateCheckinMutation = {
  updateCheckin?:  {
    __typename: "Checkin",
    id: string,
    createdBy: string,
    createdByName: string,
    user: string,
    userName: string,
    event:  {
      __typename: "Event",
      id: string,
      name: string,
      description?: string | null,
      status?: boolean | null,
      canRSVP?: boolean | null,
      start?: string | null,
      end?: string | null,
      location?: string | null,
      points?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    eventCheckinsId?: string | null,
  } | null,
};

export type DeleteCheckinMutationVariables = {
  input: DeleteCheckinInput,
  condition?: ModelCheckinConditionInput | null,
};

export type DeleteCheckinMutation = {
  deleteCheckin?:  {
    __typename: "Checkin",
    id: string,
    createdBy: string,
    createdByName: string,
    user: string,
    userName: string,
    event:  {
      __typename: "Event",
      id: string,
      name: string,
      description?: string | null,
      status?: boolean | null,
      canRSVP?: boolean | null,
      start?: string | null,
      end?: string | null,
      location?: string | null,
      points?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    eventCheckinsId?: string | null,
  } | null,
};

export type CreatePointsMutationVariables = {
  input: CreatePointsInput,
  condition?: ModelPointsConditionInput | null,
};

export type CreatePointsMutation = {
  createPoints?:  {
    __typename: "Points",
    userID: string,
    userName?: string | null,
    points: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePointsMutationVariables = {
  input: UpdatePointsInput,
  condition?: ModelPointsConditionInput | null,
};

export type UpdatePointsMutation = {
  updatePoints?:  {
    __typename: "Points",
    userID: string,
    userName?: string | null,
    points: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePointsMutationVariables = {
  input: DeletePointsInput,
  condition?: ModelPointsConditionInput | null,
};

export type DeletePointsMutation = {
  deletePoints?:  {
    __typename: "Points",
    userID: string,
    userName?: string | null,
    points: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateScavengerHuntMutationVariables = {
  input: CreateScavengerHuntInput,
  condition?: ModelScavengerHuntConditionInput | null,
};

export type CreateScavengerHuntMutation = {
  createScavengerHunt?:  {
    __typename: "ScavengerHunt",
    id: string,
    name: string,
    description?: string | null,
    status?: boolean | null,
    points?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateScavengerHuntMutationVariables = {
  input: UpdateScavengerHuntInput,
  condition?: ModelScavengerHuntConditionInput | null,
};

export type UpdateScavengerHuntMutation = {
  updateScavengerHunt?:  {
    __typename: "ScavengerHunt",
    id: string,
    name: string,
    description?: string | null,
    status?: boolean | null,
    points?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteScavengerHuntMutationVariables = {
  input: DeleteScavengerHuntInput,
  condition?: ModelScavengerHuntConditionInput | null,
};

export type DeleteScavengerHuntMutation = {
  deleteScavengerHunt?:  {
    __typename: "ScavengerHunt",
    id: string,
    name: string,
    description?: string | null,
    status?: boolean | null,
    points?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateScavengerHuntCheckinMutationVariables = {
  input: CreateScavengerHuntCheckinInput,
  condition?: ModelScavengerHuntCheckinConditionInput | null,
};

export type CreateScavengerHuntCheckinMutation = {
  createScavengerHuntCheckin?:  {
    __typename: "ScavengerHuntCheckin",
    id: string,
    checkpointID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateScavengerHuntCheckinMutationVariables = {
  input: UpdateScavengerHuntCheckinInput,
  condition?: ModelScavengerHuntCheckinConditionInput | null,
};

export type UpdateScavengerHuntCheckinMutation = {
  updateScavengerHuntCheckin?:  {
    __typename: "ScavengerHuntCheckin",
    id: string,
    checkpointID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteScavengerHuntCheckinMutationVariables = {
  input: DeleteScavengerHuntCheckinInput,
  condition?: ModelScavengerHuntCheckinConditionInput | null,
};

export type DeleteScavengerHuntCheckinMutation = {
  deleteScavengerHuntCheckin?:  {
    __typename: "ScavengerHuntCheckin",
    id: string,
    checkpointID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateEventRSVPMutationVariables = {
  input: CreateEventRSVPInput,
  condition?: ModelEventRSVPConditionInput | null,
};

export type CreateEventRSVPMutation = {
  createEventRSVP?:  {
    __typename: "EventRSVP",
    id: string,
    userID: string,
    userName: string,
    eventID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateEventRSVPMutationVariables = {
  input: UpdateEventRSVPInput,
  condition?: ModelEventRSVPConditionInput | null,
};

export type UpdateEventRSVPMutation = {
  updateEventRSVP?:  {
    __typename: "EventRSVP",
    id: string,
    userID: string,
    userName: string,
    eventID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteEventRSVPMutationVariables = {
  input: DeleteEventRSVPInput,
  condition?: ModelEventRSVPConditionInput | null,
};

export type DeleteEventRSVPMutation = {
  deleteEventRSVP?:  {
    __typename: "EventRSVP",
    id: string,
    userID: string,
    userName: string,
    eventID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetUserByIdQueryVariables = {
  user_uuid?: string | null,
};

export type GetUserByIdQuery = {
  getUserById?: string | null,
};

export type ListUsersQuery = {
  listUsers?: string | null,
};

export type GetAdminSettingsQueryVariables = {
  id: string,
};

export type GetAdminSettingsQuery = {
  getAdminSettings?:  {
    __typename: "AdminSettings",
    id: string,
    hacklyticsOpen?: boolean | null,
    participantEmails?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAdminSettingsQueryVariables = {
  filter?: ModelAdminSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAdminSettingsQuery = {
  listAdminSettings?:  {
    __typename: "ModelAdminSettingsConnection",
    items:  Array< {
      __typename: "AdminSettings",
      id: string,
      hacklyticsOpen?: boolean | null,
      participantEmails?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAdminSettingsQueryVariables = {
  filter?: ModelAdminSettingsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAdminSettingsQuery = {
  syncAdminSettings?:  {
    __typename: "ModelAdminSettingsConnection",
    items:  Array< {
      __typename: "AdminSettings",
      id: string,
      hacklyticsOpen?: boolean | null,
      participantEmails?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description?: string | null,
    status?: boolean | null,
    canRSVP?: boolean | null,
    start?: string | null,
    end?: string | null,
    location?: string | null,
    points?: number | null,
    checkins?:  {
      __typename: "ModelCheckinConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      name: string,
      description?: string | null,
      status?: boolean | null,
      canRSVP?: boolean | null,
      start?: string | null,
      end?: string | null,
      location?: string | null,
      points?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEventsQuery = {
  syncEvents?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      id: string,
      name: string,
      description?: string | null,
      status?: boolean | null,
      canRSVP?: boolean | null,
      start?: string | null,
      end?: string | null,
      location?: string | null,
      points?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCheckinQueryVariables = {
  id: string,
};

export type GetCheckinQuery = {
  getCheckin?:  {
    __typename: "Checkin",
    id: string,
    createdBy: string,
    createdByName: string,
    user: string,
    userName: string,
    event:  {
      __typename: "Event",
      id: string,
      name: string,
      description?: string | null,
      status?: boolean | null,
      canRSVP?: boolean | null,
      start?: string | null,
      end?: string | null,
      location?: string | null,
      points?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    eventCheckinsId?: string | null,
  } | null,
};

export type ListCheckinsQueryVariables = {
  filter?: ModelCheckinFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCheckinsQuery = {
  listCheckins?:  {
    __typename: "ModelCheckinConnection",
    items:  Array< {
      __typename: "Checkin",
      id: string,
      createdBy: string,
      createdByName: string,
      user: string,
      userName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      eventCheckinsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCheckinsQueryVariables = {
  filter?: ModelCheckinFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCheckinsQuery = {
  syncCheckins?:  {
    __typename: "ModelCheckinConnection",
    items:  Array< {
      __typename: "Checkin",
      id: string,
      createdBy: string,
      createdByName: string,
      user: string,
      userName: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      eventCheckinsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPointsQueryVariables = {
  id: string,
};

export type GetPointsQuery = {
  getPoints?:  {
    __typename: "Points",
    userID: string,
    userName?: string | null,
    points: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPointsQueryVariables = {
  filter?: ModelPointsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPointsQuery = {
  listPoints?:  {
    __typename: "ModelPointsConnection",
    items:  Array< {
      __typename: "Points",
      userID: string,
      userName?: string | null,
      points: number,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPointsQueryVariables = {
  filter?: ModelPointsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPointsQuery = {
  syncPoints?:  {
    __typename: "ModelPointsConnection",
    items:  Array< {
      __typename: "Points",
      userID: string,
      userName?: string | null,
      points: number,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetScavengerHuntQueryVariables = {
  id: string,
};

export type GetScavengerHuntQuery = {
  getScavengerHunt?:  {
    __typename: "ScavengerHunt",
    id: string,
    name: string,
    description?: string | null,
    status?: boolean | null,
    points?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListScavengerHuntsQueryVariables = {
  filter?: ModelScavengerHuntFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListScavengerHuntsQuery = {
  listScavengerHunts?:  {
    __typename: "ModelScavengerHuntConnection",
    items:  Array< {
      __typename: "ScavengerHunt",
      id: string,
      name: string,
      description?: string | null,
      status?: boolean | null,
      points?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncScavengerHuntsQueryVariables = {
  filter?: ModelScavengerHuntFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncScavengerHuntsQuery = {
  syncScavengerHunts?:  {
    __typename: "ModelScavengerHuntConnection",
    items:  Array< {
      __typename: "ScavengerHunt",
      id: string,
      name: string,
      description?: string | null,
      status?: boolean | null,
      points?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetScavengerHuntCheckinQueryVariables = {
  id: string,
};

export type GetScavengerHuntCheckinQuery = {
  getScavengerHuntCheckin?:  {
    __typename: "ScavengerHuntCheckin",
    id: string,
    checkpointID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListScavengerHuntCheckinsQueryVariables = {
  filter?: ModelScavengerHuntCheckinFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListScavengerHuntCheckinsQuery = {
  listScavengerHuntCheckins?:  {
    __typename: "ModelScavengerHuntCheckinConnection",
    items:  Array< {
      __typename: "ScavengerHuntCheckin",
      id: string,
      checkpointID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncScavengerHuntCheckinsQueryVariables = {
  filter?: ModelScavengerHuntCheckinFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncScavengerHuntCheckinsQuery = {
  syncScavengerHuntCheckins?:  {
    __typename: "ModelScavengerHuntCheckinConnection",
    items:  Array< {
      __typename: "ScavengerHuntCheckin",
      id: string,
      checkpointID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEventRSVPQueryVariables = {
  id: string,
};

export type GetEventRSVPQuery = {
  getEventRSVP?:  {
    __typename: "EventRSVP",
    id: string,
    userID: string,
    userName: string,
    eventID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListEventRSVPSQueryVariables = {
  filter?: ModelEventRSVPFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventRSVPSQuery = {
  listEventRSVPS?:  {
    __typename: "ModelEventRSVPConnection",
    items:  Array< {
      __typename: "EventRSVP",
      id: string,
      userID: string,
      userName: string,
      eventID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEventRSVPSQueryVariables = {
  filter?: ModelEventRSVPFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEventRSVPSQuery = {
  syncEventRSVPS?:  {
    __typename: "ModelEventRSVPConnection",
    items:  Array< {
      __typename: "EventRSVP",
      id: string,
      userID: string,
      userName: string,
      eventID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateAdminSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionAdminSettingsFilterInput | null,
};

export type OnCreateAdminSettingsSubscription = {
  onCreateAdminSettings?:  {
    __typename: "AdminSettings",
    id: string,
    hacklyticsOpen?: boolean | null,
    participantEmails?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAdminSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionAdminSettingsFilterInput | null,
};

export type OnUpdateAdminSettingsSubscription = {
  onUpdateAdminSettings?:  {
    __typename: "AdminSettings",
    id: string,
    hacklyticsOpen?: boolean | null,
    participantEmails?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAdminSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionAdminSettingsFilterInput | null,
};

export type OnDeleteAdminSettingsSubscription = {
  onDeleteAdminSettings?:  {
    __typename: "AdminSettings",
    id: string,
    hacklyticsOpen?: boolean | null,
    participantEmails?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description?: string | null,
    status?: boolean | null,
    canRSVP?: boolean | null,
    start?: string | null,
    end?: string | null,
    location?: string | null,
    points?: number | null,
    checkins?:  {
      __typename: "ModelCheckinConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description?: string | null,
    status?: boolean | null,
    canRSVP?: boolean | null,
    start?: string | null,
    end?: string | null,
    location?: string | null,
    points?: number | null,
    checkins?:  {
      __typename: "ModelCheckinConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    id: string,
    name: string,
    description?: string | null,
    status?: boolean | null,
    canRSVP?: boolean | null,
    start?: string | null,
    end?: string | null,
    location?: string | null,
    points?: number | null,
    checkins?:  {
      __typename: "ModelCheckinConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCheckinSubscriptionVariables = {
  filter?: ModelSubscriptionCheckinFilterInput | null,
};

export type OnCreateCheckinSubscription = {
  onCreateCheckin?:  {
    __typename: "Checkin",
    id: string,
    createdBy: string,
    createdByName: string,
    user: string,
    userName: string,
    event:  {
      __typename: "Event",
      id: string,
      name: string,
      description?: string | null,
      status?: boolean | null,
      canRSVP?: boolean | null,
      start?: string | null,
      end?: string | null,
      location?: string | null,
      points?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    eventCheckinsId?: string | null,
  } | null,
};

export type OnUpdateCheckinSubscriptionVariables = {
  filter?: ModelSubscriptionCheckinFilterInput | null,
};

export type OnUpdateCheckinSubscription = {
  onUpdateCheckin?:  {
    __typename: "Checkin",
    id: string,
    createdBy: string,
    createdByName: string,
    user: string,
    userName: string,
    event:  {
      __typename: "Event",
      id: string,
      name: string,
      description?: string | null,
      status?: boolean | null,
      canRSVP?: boolean | null,
      start?: string | null,
      end?: string | null,
      location?: string | null,
      points?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    eventCheckinsId?: string | null,
  } | null,
};

export type OnDeleteCheckinSubscriptionVariables = {
  filter?: ModelSubscriptionCheckinFilterInput | null,
};

export type OnDeleteCheckinSubscription = {
  onDeleteCheckin?:  {
    __typename: "Checkin",
    id: string,
    createdBy: string,
    createdByName: string,
    user: string,
    userName: string,
    event:  {
      __typename: "Event",
      id: string,
      name: string,
      description?: string | null,
      status?: boolean | null,
      canRSVP?: boolean | null,
      start?: string | null,
      end?: string | null,
      location?: string | null,
      points?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    eventCheckinsId?: string | null,
  } | null,
};

export type OnCreatePointsSubscriptionVariables = {
  filter?: ModelSubscriptionPointsFilterInput | null,
};

export type OnCreatePointsSubscription = {
  onCreatePoints?:  {
    __typename: "Points",
    userID: string,
    userName?: string | null,
    points: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePointsSubscriptionVariables = {
  filter?: ModelSubscriptionPointsFilterInput | null,
};

export type OnUpdatePointsSubscription = {
  onUpdatePoints?:  {
    __typename: "Points",
    userID: string,
    userName?: string | null,
    points: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePointsSubscriptionVariables = {
  filter?: ModelSubscriptionPointsFilterInput | null,
};

export type OnDeletePointsSubscription = {
  onDeletePoints?:  {
    __typename: "Points",
    userID: string,
    userName?: string | null,
    points: number,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateScavengerHuntSubscriptionVariables = {
  filter?: ModelSubscriptionScavengerHuntFilterInput | null,
};

export type OnCreateScavengerHuntSubscription = {
  onCreateScavengerHunt?:  {
    __typename: "ScavengerHunt",
    id: string,
    name: string,
    description?: string | null,
    status?: boolean | null,
    points?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateScavengerHuntSubscriptionVariables = {
  filter?: ModelSubscriptionScavengerHuntFilterInput | null,
};

export type OnUpdateScavengerHuntSubscription = {
  onUpdateScavengerHunt?:  {
    __typename: "ScavengerHunt",
    id: string,
    name: string,
    description?: string | null,
    status?: boolean | null,
    points?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteScavengerHuntSubscriptionVariables = {
  filter?: ModelSubscriptionScavengerHuntFilterInput | null,
};

export type OnDeleteScavengerHuntSubscription = {
  onDeleteScavengerHunt?:  {
    __typename: "ScavengerHunt",
    id: string,
    name: string,
    description?: string | null,
    status?: boolean | null,
    points?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateScavengerHuntCheckinSubscriptionVariables = {
  filter?: ModelSubscriptionScavengerHuntCheckinFilterInput | null,
};

export type OnCreateScavengerHuntCheckinSubscription = {
  onCreateScavengerHuntCheckin?:  {
    __typename: "ScavengerHuntCheckin",
    id: string,
    checkpointID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateScavengerHuntCheckinSubscriptionVariables = {
  filter?: ModelSubscriptionScavengerHuntCheckinFilterInput | null,
};

export type OnUpdateScavengerHuntCheckinSubscription = {
  onUpdateScavengerHuntCheckin?:  {
    __typename: "ScavengerHuntCheckin",
    id: string,
    checkpointID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteScavengerHuntCheckinSubscriptionVariables = {
  filter?: ModelSubscriptionScavengerHuntCheckinFilterInput | null,
};

export type OnDeleteScavengerHuntCheckinSubscription = {
  onDeleteScavengerHuntCheckin?:  {
    __typename: "ScavengerHuntCheckin",
    id: string,
    checkpointID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateEventRSVPSubscriptionVariables = {
  filter?: ModelSubscriptionEventRSVPFilterInput | null,
};

export type OnCreateEventRSVPSubscription = {
  onCreateEventRSVP?:  {
    __typename: "EventRSVP",
    id: string,
    userID: string,
    userName: string,
    eventID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateEventRSVPSubscriptionVariables = {
  filter?: ModelSubscriptionEventRSVPFilterInput | null,
};

export type OnUpdateEventRSVPSubscription = {
  onUpdateEventRSVP?:  {
    __typename: "EventRSVP",
    id: string,
    userID: string,
    userName: string,
    eventID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteEventRSVPSubscriptionVariables = {
  filter?: ModelSubscriptionEventRSVPFilterInput | null,
};

export type OnDeleteEventRSVPSubscription = {
  onDeleteEventRSVP?:  {
    __typename: "EventRSVP",
    id: string,
    userID: string,
    userName: string,
    eventID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
