/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAdminSettingsInput = {
  id?: string | null,
  hacklyticsOpen?: boolean | null,
  _version?: number | null,
};

export type ModelAdminSettingsConditionInput = {
  hacklyticsOpen?: ModelBooleanInput | null,
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


export type AdminSettings = {
  __typename: "AdminSettings",
  id: string,
  hacklyticsOpen?: boolean | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateAdminSettingsInput = {
  id: string,
  hacklyticsOpen?: boolean | null,
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
  start?: string | null,
  end?: string | null,
  location?: string | null,
  _version?: number | null,
};

export type ModelEventConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  status?: ModelBooleanInput | null,
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelEventConditionInput | null > | null,
  or?: Array< ModelEventConditionInput | null > | null,
  not?: ModelEventConditionInput | null,
};

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

export type Event = {
  __typename: "Event",
  id: string,
  name: string,
  description?: string | null,
  status?: boolean | null,
  start?: string | null,
  end?: string | null,
  location?: string | null,
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
  start?: string | null,
  end?: string | null,
  location?: string | null,
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
  id?: string | null,
  points: number,
  userID: string,
  _version?: number | null,
};

export type ModelPointsConditionInput = {
  points?: ModelIntInput | null,
  userID?: ModelStringInput | null,
  and?: Array< ModelPointsConditionInput | null > | null,
  or?: Array< ModelPointsConditionInput | null > | null,
  not?: ModelPointsConditionInput | null,
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

export type Points = {
  __typename: "Points",
  id: string,
  points: number,
  userID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdatePointsInput = {
  id: string,
  points?: number | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeletePointsInput = {
  id: string,
  _version?: number | null,
};

export type ModelAdminSettingsFilterInput = {
  id?: ModelIDInput | null,
  hacklyticsOpen?: ModelBooleanInput | null,
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
  start?: ModelStringInput | null,
  end?: ModelStringInput | null,
  location?: ModelStringInput | null,
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
  id?: ModelIDInput | null,
  points?: ModelIntInput | null,
  userID?: ModelStringInput | null,
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

export type ModelSubscriptionAdminSettingsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  hacklyticsOpen?: ModelSubscriptionBooleanInput | null,
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

export type ModelSubscriptionEventFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionBooleanInput | null,
  start?: ModelSubscriptionStringInput | null,
  end?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEventFilterInput | null > | null,
  or?: Array< ModelSubscriptionEventFilterInput | null > | null,
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
  id?: ModelSubscriptionIDInput | null,
  points?: ModelSubscriptionIntInput | null,
  userID?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPointsFilterInput | null > | null,
  or?: Array< ModelSubscriptionPointsFilterInput | null > | null,
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

export type CreateAdminSettingsMutationVariables = {
  input: CreateAdminSettingsInput,
  condition?: ModelAdminSettingsConditionInput | null,
};

export type CreateAdminSettingsMutation = {
  createAdminSettings?:  {
    __typename: "AdminSettings",
    id: string,
    hacklyticsOpen?: boolean | null,
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
    start?: string | null,
    end?: string | null,
    location?: string | null,
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
    start?: string | null,
    end?: string | null,
    location?: string | null,
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
    start?: string | null,
    end?: string | null,
    location?: string | null,
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
      start?: string | null,
      end?: string | null,
      location?: string | null,
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
      start?: string | null,
      end?: string | null,
      location?: string | null,
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
      start?: string | null,
      end?: string | null,
      location?: string | null,
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
    id: string,
    points: number,
    userID: string,
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
    id: string,
    points: number,
    userID: string,
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
    id: string,
    points: number,
    userID: string,
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
    start?: string | null,
    end?: string | null,
    location?: string | null,
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
      start?: string | null,
      end?: string | null,
      location?: string | null,
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
      start?: string | null,
      end?: string | null,
      location?: string | null,
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
      start?: string | null,
      end?: string | null,
      location?: string | null,
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
    id: string,
    points: number,
    userID: string,
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
      id: string,
      points: number,
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
      id: string,
      points: number,
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

export type OnCreateAdminSettingsSubscriptionVariables = {
  filter?: ModelSubscriptionAdminSettingsFilterInput | null,
};

export type OnCreateAdminSettingsSubscription = {
  onCreateAdminSettings?:  {
    __typename: "AdminSettings",
    id: string,
    hacklyticsOpen?: boolean | null,
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
    start?: string | null,
    end?: string | null,
    location?: string | null,
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
    start?: string | null,
    end?: string | null,
    location?: string | null,
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
    start?: string | null,
    end?: string | null,
    location?: string | null,
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
      start?: string | null,
      end?: string | null,
      location?: string | null,
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
      start?: string | null,
      end?: string | null,
      location?: string | null,
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
      start?: string | null,
      end?: string | null,
      location?: string | null,
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
    id: string,
    points: number,
    userID: string,
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
    id: string,
    points: number,
    userID: string,
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
    id: string,
    points: number,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
