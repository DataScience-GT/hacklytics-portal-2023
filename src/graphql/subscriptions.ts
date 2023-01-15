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
      start
      end
      location
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
      start
      end
      location
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
      start
      end
      location
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
        start
        end
        location
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
        start
        end
        location
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
        start
        end
        location
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
