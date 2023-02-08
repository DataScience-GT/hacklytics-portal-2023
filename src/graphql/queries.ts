/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserById = /* GraphQL */ `
  query GetUserById($user_uuid: String) {
    getUserById(user_uuid: $user_uuid)
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers {
    listUsers
  }
`;
export const getAdminSettings = /* GraphQL */ `
  query GetAdminSettings($id: ID!) {
    getAdminSettings(id: $id) {
      id
      hacklyticsOpen
      participantEmails
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listAdminSettings = /* GraphQL */ `
  query ListAdminSettings(
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
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAdminSettings = /* GraphQL */ `
  query SyncAdminSettings(
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
      }
      nextToken
      startedAt
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      name
      description
      status
      start
      end
      location
      points
      checkins {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        status
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
`;
export const syncEvents = /* GraphQL */ `
  query SyncEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEvents(
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
`;
export const getCheckin = /* GraphQL */ `
  query GetCheckin($id: ID!) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      eventCheckinsId
    }
  }
`;
export const listCheckins = /* GraphQL */ `
  query ListCheckins(
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
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCheckins = /* GraphQL */ `
  query SyncCheckins(
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
      }
      nextToken
      startedAt
    }
  }
`;
export const getPoints = /* GraphQL */ `
  query GetPoints($id: ID!) {
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
    }
  }
`;
export const listPoints = /* GraphQL */ `
  query ListPoints(
    $filter: ModelPointsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPoints(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPoints = /* GraphQL */ `
  query SyncPoints(
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
      }
      nextToken
      startedAt
    }
  }
`;
export const getScavengerHunt = /* GraphQL */ `
  query GetScavengerHunt($id: ID!) {
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
    }
  }
`;
export const listScavengerHunts = /* GraphQL */ `
  query ListScavengerHunts(
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
      }
      nextToken
      startedAt
    }
  }
`;
export const syncScavengerHunts = /* GraphQL */ `
  query SyncScavengerHunts(
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
      }
      nextToken
      startedAt
    }
  }
`;
export const getScavengerHuntCheckin = /* GraphQL */ `
  query GetScavengerHuntCheckin($id: ID!) {
    getScavengerHuntCheckin(id: $id) {
      id
      checkpointID
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listScavengerHuntCheckins = /* GraphQL */ `
  query ListScavengerHuntCheckins(
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
      }
      nextToken
      startedAt
    }
  }
`;
export const syncScavengerHuntCheckins = /* GraphQL */ `
  query SyncScavengerHuntCheckins(
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
      }
      nextToken
      startedAt
    }
  }
`;
export const getEventRSVP = /* GraphQL */ `
  query GetEventRSVP($id: ID!) {
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
    }
  }
`;
export const listEventRSVPS = /* GraphQL */ `
  query ListEventRSVPS(
    $filter: ModelEventRSVPFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventRSVPS(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEventRSVPS = /* GraphQL */ `
  query SyncEventRSVPS(
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
      }
      nextToken
      startedAt
    }
  }
`;
