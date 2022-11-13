// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AdminSettings, Event } = initSchema(schema);

export {
  AdminSettings,
  Event
};