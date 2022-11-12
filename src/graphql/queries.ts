/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAdminSettings = /* GraphQL */ `
  query GetAdminSettings($id: ID!) {
    getAdminSettings(id: $id) {
      id
      eventStarted
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
        eventStarted
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
        eventStarted
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
