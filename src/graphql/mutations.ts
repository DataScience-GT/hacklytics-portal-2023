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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
