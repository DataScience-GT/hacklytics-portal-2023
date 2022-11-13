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
      start
      end
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
      start
      end
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
      start
      end
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
