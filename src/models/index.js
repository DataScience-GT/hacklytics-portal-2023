// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AdminSettings, Event, Checkin, Points, ScavengerHunt, ScavengerHuntCheckin } = initSchema(schema);

export {
  AdminSettings,
  Event,
  Checkin,
  Points,
  ScavengerHunt,
  ScavengerHuntCheckin
};