/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createAdminSettings = /* GraphQL */ `mutation CreateAdminSettings(
  $input: CreateAdminSettingsInput!
  $condition: ModelAdminSettingsConditionInput
) {
  createAdminSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAdminSettingsMutationVariables,
  APITypes.CreateAdminSettingsMutation
>;
export const updateAdminSettings = /* GraphQL */ `mutation UpdateAdminSettings(
  $input: UpdateAdminSettingsInput!
  $condition: ModelAdminSettingsConditionInput
) {
  updateAdminSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAdminSettingsMutationVariables,
  APITypes.UpdateAdminSettingsMutation
>;
export const deleteAdminSettings = /* GraphQL */ `mutation DeleteAdminSettings(
  $input: DeleteAdminSettingsInput!
  $condition: ModelAdminSettingsConditionInput
) {
  deleteAdminSettings(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAdminSettingsMutationVariables,
  APITypes.DeleteAdminSettingsMutation
>;
export const createEvent = /* GraphQL */ `mutation CreateEvent(
  $input: CreateEventInput!
  $condition: ModelEventConditionInput
) {
  createEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateEventMutationVariables,
  APITypes.CreateEventMutation
>;
export const updateEvent = /* GraphQL */ `mutation UpdateEvent(
  $input: UpdateEventInput!
  $condition: ModelEventConditionInput
) {
  updateEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateEventMutationVariables,
  APITypes.UpdateEventMutation
>;
export const deleteEvent = /* GraphQL */ `mutation DeleteEvent(
  $input: DeleteEventInput!
  $condition: ModelEventConditionInput
) {
  deleteEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteEventMutationVariables,
  APITypes.DeleteEventMutation
>;
export const createCheckin = /* GraphQL */ `mutation CreateCheckin(
  $input: CreateCheckinInput!
  $condition: ModelCheckinConditionInput
) {
  createCheckin(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCheckinMutationVariables,
  APITypes.CreateCheckinMutation
>;
export const updateCheckin = /* GraphQL */ `mutation UpdateCheckin(
  $input: UpdateCheckinInput!
  $condition: ModelCheckinConditionInput
) {
  updateCheckin(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCheckinMutationVariables,
  APITypes.UpdateCheckinMutation
>;
export const deleteCheckin = /* GraphQL */ `mutation DeleteCheckin(
  $input: DeleteCheckinInput!
  $condition: ModelCheckinConditionInput
) {
  deleteCheckin(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCheckinMutationVariables,
  APITypes.DeleteCheckinMutation
>;
export const createPoints = /* GraphQL */ `mutation CreatePoints(
  $input: CreatePointsInput!
  $condition: ModelPointsConditionInput
) {
  createPoints(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePointsMutationVariables,
  APITypes.CreatePointsMutation
>;
export const updatePoints = /* GraphQL */ `mutation UpdatePoints(
  $input: UpdatePointsInput!
  $condition: ModelPointsConditionInput
) {
  updatePoints(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePointsMutationVariables,
  APITypes.UpdatePointsMutation
>;
export const deletePoints = /* GraphQL */ `mutation DeletePoints(
  $input: DeletePointsInput!
  $condition: ModelPointsConditionInput
) {
  deletePoints(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePointsMutationVariables,
  APITypes.DeletePointsMutation
>;
export const createScavengerHunt = /* GraphQL */ `mutation CreateScavengerHunt(
  $input: CreateScavengerHuntInput!
  $condition: ModelScavengerHuntConditionInput
) {
  createScavengerHunt(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateScavengerHuntMutationVariables,
  APITypes.CreateScavengerHuntMutation
>;
export const updateScavengerHunt = /* GraphQL */ `mutation UpdateScavengerHunt(
  $input: UpdateScavengerHuntInput!
  $condition: ModelScavengerHuntConditionInput
) {
  updateScavengerHunt(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateScavengerHuntMutationVariables,
  APITypes.UpdateScavengerHuntMutation
>;
export const deleteScavengerHunt = /* GraphQL */ `mutation DeleteScavengerHunt(
  $input: DeleteScavengerHuntInput!
  $condition: ModelScavengerHuntConditionInput
) {
  deleteScavengerHunt(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteScavengerHuntMutationVariables,
  APITypes.DeleteScavengerHuntMutation
>;
export const createScavengerHuntCheckin = /* GraphQL */ `mutation CreateScavengerHuntCheckin(
  $input: CreateScavengerHuntCheckinInput!
  $condition: ModelScavengerHuntCheckinConditionInput
) {
  createScavengerHuntCheckin(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateScavengerHuntCheckinMutationVariables,
  APITypes.CreateScavengerHuntCheckinMutation
>;
export const updateScavengerHuntCheckin = /* GraphQL */ `mutation UpdateScavengerHuntCheckin(
  $input: UpdateScavengerHuntCheckinInput!
  $condition: ModelScavengerHuntCheckinConditionInput
) {
  updateScavengerHuntCheckin(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateScavengerHuntCheckinMutationVariables,
  APITypes.UpdateScavengerHuntCheckinMutation
>;
export const deleteScavengerHuntCheckin = /* GraphQL */ `mutation DeleteScavengerHuntCheckin(
  $input: DeleteScavengerHuntCheckinInput!
  $condition: ModelScavengerHuntCheckinConditionInput
) {
  deleteScavengerHuntCheckin(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteScavengerHuntCheckinMutationVariables,
  APITypes.DeleteScavengerHuntCheckinMutation
>;
export const createEventRSVP = /* GraphQL */ `mutation CreateEventRSVP(
  $input: CreateEventRSVPInput!
  $condition: ModelEventRSVPConditionInput
) {
  createEventRSVP(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateEventRSVPMutationVariables,
  APITypes.CreateEventRSVPMutation
>;
export const updateEventRSVP = /* GraphQL */ `mutation UpdateEventRSVP(
  $input: UpdateEventRSVPInput!
  $condition: ModelEventRSVPConditionInput
) {
  updateEventRSVP(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateEventRSVPMutationVariables,
  APITypes.UpdateEventRSVPMutation
>;
export const deleteEventRSVP = /* GraphQL */ `mutation DeleteEventRSVP(
  $input: DeleteEventRSVPInput!
  $condition: ModelEventRSVPConditionInput
) {
  deleteEventRSVP(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteEventRSVPMutationVariables,
  APITypes.DeleteEventRSVPMutation
>;
export const createLog = /* GraphQL */ `mutation CreateLog(
  $input: CreateLogInput!
  $condition: ModelLogConditionInput
) {
  createLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateLogMutationVariables,
  APITypes.CreateLogMutation
>;
export const updateLog = /* GraphQL */ `mutation UpdateLog(
  $input: UpdateLogInput!
  $condition: ModelLogConditionInput
) {
  updateLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateLogMutationVariables,
  APITypes.UpdateLogMutation
>;
export const deleteLog = /* GraphQL */ `mutation DeleteLog(
  $input: DeleteLogInput!
  $condition: ModelLogConditionInput
) {
  deleteLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteLogMutationVariables,
  APITypes.DeleteLogMutation
>;
export const createClaimShirt = /* GraphQL */ `mutation CreateClaimShirt(
  $input: CreateClaimShirtInput!
  $condition: ModelClaimShirtConditionInput
) {
  createClaimShirt(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateClaimShirtMutationVariables,
  APITypes.CreateClaimShirtMutation
>;
export const updateClaimShirt = /* GraphQL */ `mutation UpdateClaimShirt(
  $input: UpdateClaimShirtInput!
  $condition: ModelClaimShirtConditionInput
) {
  updateClaimShirt(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateClaimShirtMutationVariables,
  APITypes.UpdateClaimShirtMutation
>;
export const deleteClaimShirt = /* GraphQL */ `mutation DeleteClaimShirt(
  $input: DeleteClaimShirtInput!
  $condition: ModelClaimShirtConditionInput
) {
  deleteClaimShirt(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteClaimShirtMutationVariables,
  APITypes.DeleteClaimShirtMutation
>;
