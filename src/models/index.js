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

const { Rating, Booking, Availability, AccreditationCoach, Accreditation, SpecialityCoach, Speciality, AgeCoach, Age, PositionCoach, Position, Package, Profile, Coach, Sport } = initSchema(schema);

export {
  Rating,
  Booking,
  Availability,
  AccreditationCoach,
  Accreditation,
  SpecialityCoach,
  Speciality,
  AgeCoach,
  Age,
  PositionCoach,
  Position,
  Package,
  Profile,
  Coach,
  Sport,
  BookingStatus
};