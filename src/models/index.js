// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const BookingStatus = {
  "PENDING": "PENDING",
  "IN_PROGRESS": "IN_PROGRESS",
  "DECLINED": "DECLINED",
  "COMPLETED": "COMPLETED",
  "CANCELLED": "CANCELLED"
};

const { Booking, Accreditation, Time, Day, Coach, Profile, Age, Speciality, Position, Sport, Package } = initSchema(schema);

export {
  Booking,
  Accreditation,
  Time,
  Day,
  Coach,
  Profile,
  Age,
  Speciality,
  Position,
  Sport,
  Package,
  BookingStatus
};