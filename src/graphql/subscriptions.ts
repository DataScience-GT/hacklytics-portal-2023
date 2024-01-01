/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAdminSettings = /* GraphQL */ `subscription OnCreateAdminSettings(
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAdminSettingsSubscriptionVariables,
  APITypes.OnCreateAdminSettingsSubscription
>;
export const onUpdateAdminSettings = /* GraphQL */ `subscription OnUpdateAdminSettings(
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAdminSettingsSubscriptionVariables,
  APITypes.OnUpdateAdminSettingsSubscription
>;
export const onDeleteAdminSettings = /* GraphQL */ `subscription OnDeleteAdminSettings(
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAdminSettingsSubscriptionVariables,
  APITypes.OnDeleteAdminSettingsSubscription
>;
export const onCreateEvent = /* GraphQL */ `subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEventSubscriptionVariables,
  APITypes.OnCreateEventSubscription
>;
export const onUpdateEvent = /* GraphQL */ `subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEventSubscriptionVariables,
  APITypes.OnUpdateEventSubscription
>;
export const onDeleteEvent = /* GraphQL */ `subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEventSubscriptionVariables,
  APITypes.OnDeleteEventSubscription
>;
export const onCreateCheckin = /* GraphQL */ `subscription OnCreateCheckin($filter: ModelSubscriptionCheckinFilterInput) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCheckinSubscriptionVariables,
  APITypes.OnCreateCheckinSubscription
>;
export const onUpdateCheckin = /* GraphQL */ `subscription OnUpdateCheckin($filter: ModelSubscriptionCheckinFilterInput) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCheckinSubscriptionVariables,
  APITypes.OnUpdateCheckinSubscription
>;
export const onDeleteCheckin = /* GraphQL */ `subscription OnDeleteCheckin($filter: ModelSubscriptionCheckinFilterInput) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCheckinSubscriptionVariables,
  APITypes.OnDeleteCheckinSubscription
>;
export const onCreatePoints = /* GraphQL */ `subscription OnCreatePoints($filter: ModelSubscriptionPointsFilterInput) {
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePointsSubscriptionVariables,
  APITypes.OnCreatePointsSubscription
>;
export const onUpdatePoints = /* GraphQL */ `subscription OnUpdatePoints($filter: ModelSubscriptionPointsFilterInput) {
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePointsSubscriptionVariables,
  APITypes.OnUpdatePointsSubscription
>;
export const onDeletePoints = /* GraphQL */ `subscription OnDeletePoints($filter: ModelSubscriptionPointsFilterInput) {
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePointsSubscriptionVariables,
  APITypes.OnDeletePointsSubscription
>;
export const onCreateScavengerHunt = /* GraphQL */ `subscription OnCreateScavengerHunt(
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateScavengerHuntSubscriptionVariables,
  APITypes.OnCreateScavengerHuntSubscription
>;
export const onUpdateScavengerHunt = /* GraphQL */ `subscription OnUpdateScavengerHunt(
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateScavengerHuntSubscriptionVariables,
  APITypes.OnUpdateScavengerHuntSubscription
>;
export const onDeleteScavengerHunt = /* GraphQL */ `subscription OnDeleteScavengerHunt(
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteScavengerHuntSubscriptionVariables,
  APITypes.OnDeleteScavengerHuntSubscription
>;
export const onCreateScavengerHuntCheckin = /* GraphQL */ `subscription OnCreateScavengerHuntCheckin(
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateScavengerHuntCheckinSubscriptionVariables,
  APITypes.OnCreateScavengerHuntCheckinSubscription
>;
export const onUpdateScavengerHuntCheckin = /* GraphQL */ `subscription OnUpdateScavengerHuntCheckin(
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateScavengerHuntCheckinSubscriptionVariables,
  APITypes.OnUpdateScavengerHuntCheckinSubscription
>;
export const onDeleteScavengerHuntCheckin = /* GraphQL */ `subscription OnDeleteScavengerHuntCheckin(
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteScavengerHuntCheckinSubscriptionVariables,
  APITypes.OnDeleteScavengerHuntCheckinSubscription
>;
export const onCreateEventRSVP = /* GraphQL */ `subscription OnCreateEventRSVP(
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateEventRSVPSubscriptionVariables,
  APITypes.OnCreateEventRSVPSubscription
>;
export const onUpdateEventRSVP = /* GraphQL */ `subscription OnUpdateEventRSVP(
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateEventRSVPSubscriptionVariables,
  APITypes.OnUpdateEventRSVPSubscription
>;
export const onDeleteEventRSVP = /* GraphQL */ `subscription OnDeleteEventRSVP(
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEventRSVPSubscriptionVariables,
  APITypes.OnDeleteEventRSVPSubscription
>;
export const onCreateLog = /* GraphQL */ `subscription OnCreateLog($filter: ModelSubscriptionLogFilterInput) {
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLogSubscriptionVariables,
  APITypes.OnCreateLogSubscription
>;
export const onUpdateLog = /* GraphQL */ `subscription OnUpdateLog($filter: ModelSubscriptionLogFilterInput) {
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLogSubscriptionVariables,
  APITypes.OnUpdateLogSubscription
>;
export const onDeleteLog = /* GraphQL */ `subscription OnDeleteLog($filter: ModelSubscriptionLogFilterInput) {
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLogSubscriptionVariables,
  APITypes.OnDeleteLogSubscription
>;
export const onCreateClaimShirt = /* GraphQL */ `subscription OnCreateClaimShirt(
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateClaimShirtSubscriptionVariables,
  APITypes.OnCreateClaimShirtSubscription
>;
export const onUpdateClaimShirt = /* GraphQL */ `subscription OnUpdateClaimShirt(
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateClaimShirtSubscriptionVariables,
  APITypes.OnUpdateClaimShirtSubscription
>;
export const onDeleteClaimShirt = /* GraphQL */ `subscription OnDeleteClaimShirt(
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteClaimShirtSubscriptionVariables,
  APITypes.OnDeleteClaimShirtSubscription
>;
