// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const BookingStatus = {
  "PENDING": "PENDING",
  "IN_PROGRESS": "IN_PROGRESS",
  "DECLINED": "DECLINED",
  "COMPLETED": "COMPLETED",
  "CANCELLED": "CANCELLED",
  "PAID": "PAID"
};

const { PositionCoach, Position, AgeCoach, Age, SpecialityCoach, Speciality, AccreditationCoach, Accreditation, Sport, Coach, Rating, Booking, Availability, Profile, Package, PaymentIntent } = initSchema(schema);

export {
  PositionCoach,
  Position,
  AgeCoach,
  Age,
  SpecialityCoach,
  Speciality,
  AccreditationCoach,
  Accreditation,
  Sport,
  Coach,
  Rating,
  Booking,
  Availability,
  Profile,
  Package,
  BookingStatus,
  PaymentIntent
};