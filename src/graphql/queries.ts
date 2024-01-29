/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUserById = /* GraphQL */ `query GetUserById($user_uuid: String) {
  getUserById(user_uuid: $user_uuid)
}
` as GeneratedQuery<
  APITypes.GetUserByIdQueryVariables,
  APITypes.GetUserByIdQuery
>;
export const listUsers = /* GraphQL */ `query ListUsers {
  listUsers
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getUserByName = /* GraphQL */ `query GetUserByName($userName: String) {
  getUserByName(userName: $userName)
}
` as GeneratedQuery<
  APITypes.GetUserByNameQueryVariables,
  APITypes.GetUserByNameQuery
>;
export const getAdminSettings = /* GraphQL */ `query GetAdminSettings($id: ID!) {
  getAdminSettings(id: $id) {
    id
    hacklyticsOpen
    participantEmails
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAdminSettingsQueryVariables,
  APITypes.GetAdminSettingsQuery
>;
export const listAdminSettings = /* GraphQL */ `query ListAdminSettings(
  $filter: ModelAdminSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  listAdminSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      hacklyticsOpen
      participantEmails
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAdminSettingsQueryVariables,
  APITypes.ListAdminSettingsQuery
>;
export const syncAdminSettings = /* GraphQL */ `query SyncAdminSettings(
  $filter: ModelAdminSettingsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncAdminSettings(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      hacklyticsOpen
      participantEmails
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncAdminSettingsQueryVariables,
  APITypes.SyncAdminSettingsQuery
>;
export const getEvent = /* GraphQL */ `query GetEvent($id: ID!) {
  getEvent(id: $id) {
    id
    name
    description
    status
    requireRSVP
    canRSVP
    start
    end
    location
    points
    checkins {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetEventQueryVariables, APITypes.GetEventQuery>;
export const listEvents = /* GraphQL */ `query ListEvents(
  $limit: Int
  $nextToken: String
) {
  listEvents(
    limit: $limit
    nextToken: $nextToken
    filter: {
      _deleted: {
        ne: true
      }
    }
  ) {
    items {
      id
      name
      description
      status
      requireRSVP
      canRSVP
      start
      end
      location
      points
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
    nextToken
    startedAt
  }
}
` as GeneratedQuery<
  APITypes.ListEventsQueryVariables,
  APITypes.ListEventsQuery
>;
export const getCheckin = /* GraphQL */ `query GetCheckin($id: ID!) {
  getCheckin(id: $id) {
    id
    createdBy
    createdByName
    user
    userName
    event {
      id
      name
      description
      status
      requireRSVP
      canRSVP
      start
      end
      location
      points
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    eventCheckinsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCheckinQueryVariables,
  APITypes.GetCheckinQuery
>;
export const listCheckins = /* GraphQL */ `query ListCheckins(
  $filter: ModelCheckinFilterInput
  $limit: Int
  $nextToken: String
) {
  listCheckins(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdBy
      createdByName
      user
      userName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      eventCheckinsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCheckinsQueryVariables,
  APITypes.ListCheckinsQuery
>;
export const syncCheckins = /* GraphQL */ `query SyncCheckins(
  $filter: ModelCheckinFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCheckins(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      createdBy
      createdByName
      user
      userName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      eventCheckinsId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCheckinsQueryVariables,
  APITypes.SyncCheckinsQuery
>;
export const getPoints = /* GraphQL */ `query GetPoints($id: ID!) {
  getPoints(id: $id) {
    userID
    userName
    points
    id
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPointsQueryVariables, APITypes.GetPointsQuery>;
export const listPoints = /* GraphQL */ `query ListPoints(
  $limit: Int
  $nextToken: String
) {
  listPoints(
    limit: $limit
    nextToken: $nextToken
    filter: {
      _deleted: {
        ne: true
      }
    }
  ) {
    items {
      userID
      userName
      points
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPointsQueryVariables,
  APITypes.ListPointsQuery
>;
export const syncPoints = /* GraphQL */ `query SyncPoints(
  $filter: ModelPointsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncPoints(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      userID
      userName
      points
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncPointsQueryVariables,
  APITypes.SyncPointsQuery
>;
export const getScavengerHunt = /* GraphQL */ `query GetScavengerHunt($id: ID!) {
  getScavengerHunt(id: $id) {
    id
    name
    description
    status
    points
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetScavengerHuntQueryVariables,
  APITypes.GetScavengerHuntQuery
>;
export const listScavengerHunts = /* GraphQL */ `query ListScavengerHunts(
  $filter: ModelScavengerHuntFilterInput
  $limit: Int
  $nextToken: String
) {
  listScavengerHunts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      status
      points
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListScavengerHuntsQueryVariables,
  APITypes.ListScavengerHuntsQuery
>;
export const syncScavengerHunts = /* GraphQL */ `query SyncScavengerHunts(
  $filter: ModelScavengerHuntFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncScavengerHunts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      description
      status
      points
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncScavengerHuntsQueryVariables,
  APITypes.SyncScavengerHuntsQuery
>;
export const getScavengerHuntCheckin = /* GraphQL */ `query GetScavengerHuntCheckin($id: ID!) {
  getScavengerHuntCheckin(id: $id) {
    id
    checkpointID
    userID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetScavengerHuntCheckinQueryVariables,
  APITypes.GetScavengerHuntCheckinQuery
>;
export const listScavengerHuntCheckins = /* GraphQL */ `query ListScavengerHuntCheckins(
  $filter: ModelScavengerHuntCheckinFilterInput
  $limit: Int
  $nextToken: String
) {
  listScavengerHuntCheckins(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      checkpointID
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListScavengerHuntCheckinsQueryVariables,
  APITypes.ListScavengerHuntCheckinsQuery
>;
export const syncScavengerHuntCheckins = /* GraphQL */ `query SyncScavengerHuntCheckins(
  $filter: ModelScavengerHuntCheckinFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncScavengerHuntCheckins(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      checkpointID
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncScavengerHuntCheckinsQueryVariables,
  APITypes.SyncScavengerHuntCheckinsQuery
>;
export const getEventRSVP = /* GraphQL */ `query GetEventRSVP($id: ID!) {
  getEventRSVP(id: $id) {
    id
    userID
    userName
    eventID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEventRSVPQueryVariables,
  APITypes.GetEventRSVPQuery
>;
export const listEventRSVPS = /* GraphQL */ `query ListEventRSVPS(
  $limit: Int
  $nextToken: String
) {
  listEventRSVPS(
    limit: $limit
    nextToken: $nextToken
    filter: {
      _deleted: {
        ne: true
      }
    }
  ) {
    items {
      id
      userID
      userName
      eventID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEventRSVPSQueryVariables,
  APITypes.ListEventRSVPSQuery
>;
export const syncEventRSVPS = /* GraphQL */ `query SyncEventRSVPS(
  $filter: ModelEventRSVPFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncEventRSVPS(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      userID
      userName
      eventID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncEventRSVPSQueryVariables,
  APITypes.SyncEventRSVPSQuery
>;
export const getLog = /* GraphQL */ `query GetLog($id: ID!) {
  getLog(id: $id) {
    id
    userID
    userName
    type
    message
    timestamp
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetLogQueryVariables, APITypes.GetLogQuery>;
export const listLogs = /* GraphQL */ `query ListLogs($filter: ModelLogFilterInput, $limit: Int, $nextToken: String) {
  listLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userID
      userName
      type
      message
      timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListLogsQueryVariables, APITypes.ListLogsQuery>;
export const syncLogs = /* GraphQL */ `query SyncLogs(
  $filter: ModelLogFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncLogs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      userID
      userName
      type
      message
      timestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncLogsQueryVariables, APITypes.SyncLogsQuery>;
export const getClaimShirt = /* GraphQL */ `query GetClaimShirt($id: ID!) {
  getClaimShirt(id: $id) {
    id
    userID
    userName
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetClaimShirtQueryVariables,
  APITypes.GetClaimShirtQuery
>;
export const listClaimShirts = /* GraphQL */ `query ListClaimShirts(
  $limit: Int
  $nextToken: String
) {
  listClaimShirts (
    limit: $limit
    nextToken: $nextToken
    filter: {
      _deleted: {
        ne: true
      }
    }
  ) {
    items {
      id
      userID
      userName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListClaimShirtsQueryVariables,
  APITypes.ListClaimShirtsQuery
>;
export const syncClaimShirts = /* GraphQL */ `query SyncClaimShirts(
  $filter: ModelClaimShirtFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncClaimShirts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      userID
      userName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncClaimShirtsQueryVariables,
  APITypes.SyncClaimShirtsQuery
>;
