/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAdminSettings = /* GraphQL */ `
  mutation CreateAdminSettings(
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
    }
  }
`;
export const updateAdminSettings = /* GraphQL */ `
  mutation UpdateAdminSettings(
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
    }
  }
`;
export const deleteAdminSettings = /* GraphQL */ `
  mutation DeleteAdminSettings(
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
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
      id
      name
      description
      status
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
      id
      name
      description
      status
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
      id
      name
      description
      status
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
export const createCheckin = /* GraphQL */ `
  mutation CreateCheckin(
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
export const updateCheckin = /* GraphQL */ `
  mutation UpdateCheckin(
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
export const deleteCheckin = /* GraphQL */ `
  mutation DeleteCheckin(
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
export const createPoints = /* GraphQL */ `
  mutation CreatePoints(
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
    }
  }
`;
export const updatePoints = /* GraphQL */ `
  mutation UpdatePoints(
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
    }
  }
`;
export const deletePoints = /* GraphQL */ `
  mutation DeletePoints(
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
    }
  }
`;
export const createScavengerHunt = /* GraphQL */ `
  mutation CreateScavengerHunt(
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
    }
  }
`;
export const updateScavengerHunt = /* GraphQL */ `
  mutation UpdateScavengerHunt(
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
    }
  }
`;
export const deleteScavengerHunt = /* GraphQL */ `
  mutation DeleteScavengerHunt(
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
    }
  }
`;
export const createScavengerHuntCheckin = /* GraphQL */ `
  mutation CreateScavengerHuntCheckin(
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
    }
  }
`;
export const updateScavengerHuntCheckin = /* GraphQL */ `
  mutation UpdateScavengerHuntCheckin(
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
    }
  }
`;
export const deleteScavengerHuntCheckin = /* GraphQL */ `
  mutation DeleteScavengerHuntCheckin(
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
    }
  }
`;
export const createEventRSVP = /* GraphQL */ `
  mutation CreateEventRSVP(
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
    }
  }
`;
export const updateEventRSVP = /* GraphQL */ `
  mutation UpdateEventRSVP(
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
    }
  }
`;
export const deleteEventRSVP = /* GraphQL */ `
  mutation DeleteEventRSVP(
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
    }
  }
`;
