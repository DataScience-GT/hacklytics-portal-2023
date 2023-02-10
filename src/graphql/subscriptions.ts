/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAdminSettings = /* GraphQL */ `
  subscription OnCreateAdminSettings(
    $filter: ModelSubscriptionAdminSettingsFilterInput
  ) {
    onCreateAdminSettings(filter: $filter) {
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
export const onUpdateAdminSettings = /* GraphQL */ `
  subscription OnUpdateAdminSettings(
    $filter: ModelSubscriptionAdminSettingsFilterInput
  ) {
    onUpdateAdminSettings(filter: $filter) {
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
export const onDeleteAdminSettings = /* GraphQL */ `
  subscription OnDeleteAdminSettings(
    $filter: ModelSubscriptionAdminSettingsFilterInput
  ) {
    onDeleteAdminSettings(filter: $filter) {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
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
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCheckin = /* GraphQL */ `
  subscription OnCreateCheckin($filter: ModelSubscriptionCheckinFilterInput) {
    onCreateCheckin(filter: $filter) {
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
export const onUpdateCheckin = /* GraphQL */ `
  subscription OnUpdateCheckin($filter: ModelSubscriptionCheckinFilterInput) {
    onUpdateCheckin(filter: $filter) {
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
export const onDeleteCheckin = /* GraphQL */ `
  subscription OnDeleteCheckin($filter: ModelSubscriptionCheckinFilterInput) {
    onDeleteCheckin(filter: $filter) {
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
export const onCreatePoints = /* GraphQL */ `
  subscription OnCreatePoints($filter: ModelSubscriptionPointsFilterInput) {
    onCreatePoints(filter: $filter) {
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
export const onUpdatePoints = /* GraphQL */ `
  subscription OnUpdatePoints($filter: ModelSubscriptionPointsFilterInput) {
    onUpdatePoints(filter: $filter) {
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
export const onDeletePoints = /* GraphQL */ `
  subscription OnDeletePoints($filter: ModelSubscriptionPointsFilterInput) {
    onDeletePoints(filter: $filter) {
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
export const onCreateScavengerHunt = /* GraphQL */ `
  subscription OnCreateScavengerHunt(
    $filter: ModelSubscriptionScavengerHuntFilterInput
  ) {
    onCreateScavengerHunt(filter: $filter) {
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
export const onUpdateScavengerHunt = /* GraphQL */ `
  subscription OnUpdateScavengerHunt(
    $filter: ModelSubscriptionScavengerHuntFilterInput
  ) {
    onUpdateScavengerHunt(filter: $filter) {
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
export const onDeleteScavengerHunt = /* GraphQL */ `
  subscription OnDeleteScavengerHunt(
    $filter: ModelSubscriptionScavengerHuntFilterInput
  ) {
    onDeleteScavengerHunt(filter: $filter) {
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
export const onCreateScavengerHuntCheckin = /* GraphQL */ `
  subscription OnCreateScavengerHuntCheckin(
    $filter: ModelSubscriptionScavengerHuntCheckinFilterInput
  ) {
    onCreateScavengerHuntCheckin(filter: $filter) {
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
export const onUpdateScavengerHuntCheckin = /* GraphQL */ `
  subscription OnUpdateScavengerHuntCheckin(
    $filter: ModelSubscriptionScavengerHuntCheckinFilterInput
  ) {
    onUpdateScavengerHuntCheckin(filter: $filter) {
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
export const onDeleteScavengerHuntCheckin = /* GraphQL */ `
  subscription OnDeleteScavengerHuntCheckin(
    $filter: ModelSubscriptionScavengerHuntCheckinFilterInput
  ) {
    onDeleteScavengerHuntCheckin(filter: $filter) {
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
export const onCreateEventRSVP = /* GraphQL */ `
  subscription OnCreateEventRSVP(
    $filter: ModelSubscriptionEventRSVPFilterInput
    $owner: String
  ) {
    onCreateEventRSVP(filter: $filter, owner: $owner) {
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
    }
  }
`;
export const onUpdateEventRSVP = /* GraphQL */ `
  subscription OnUpdateEventRSVP(
    $filter: ModelSubscriptionEventRSVPFilterInput
    $owner: String
  ) {
    onUpdateEventRSVP(filter: $filter, owner: $owner) {
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
    }
  }
`;
export const onDeleteEventRSVP = /* GraphQL */ `
  subscription OnDeleteEventRSVP(
    $filter: ModelSubscriptionEventRSVPFilterInput
    $owner: String
  ) {
    onDeleteEventRSVP(filter: $filter, owner: $owner) {
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
    }
  }
`;
export const onCreateLog = /* GraphQL */ `
  subscription OnCreateLog($filter: ModelSubscriptionLogFilterInput) {
    onCreateLog(filter: $filter) {
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
    }
  }
`;
export const onUpdateLog = /* GraphQL */ `
  subscription OnUpdateLog($filter: ModelSubscriptionLogFilterInput) {
    onUpdateLog(filter: $filter) {
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
    }
  }
`;
export const onDeleteLog = /* GraphQL */ `
  subscription OnDeleteLog($filter: ModelSubscriptionLogFilterInput) {
    onDeleteLog(filter: $filter) {
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
    }
  }
`;
export const onCreateClaimShirt = /* GraphQL */ `
  subscription OnCreateClaimShirt(
    $filter: ModelSubscriptionClaimShirtFilterInput
  ) {
    onCreateClaimShirt(filter: $filter) {
      id
      userID
      userName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateClaimShirt = /* GraphQL */ `
  subscription OnUpdateClaimShirt(
    $filter: ModelSubscriptionClaimShirtFilterInput
  ) {
    onUpdateClaimShirt(filter: $filter) {
      id
      userID
      userName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteClaimShirt = /* GraphQL */ `
  subscription OnDeleteClaimShirt(
    $filter: ModelSubscriptionClaimShirtFilterInput
  ) {
    onDeleteClaimShirt(filter: $filter) {
      id
      userID
      userName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
