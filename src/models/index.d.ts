import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum BookingStatus {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  DECLINED = "DECLINED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
  PAID = "PAID"
}

type EagerPaymentIntent = {
  readonly clientSecret: string;
}

type LazyPaymentIntent = {
  readonly clientSecret: string;
}

export declare type PaymentIntent = LazyLoading extends LazyLoadingDisabled ? EagerPaymentIntent : LazyPaymentIntent

export declare const PaymentIntent: (new (init: ModelInit<PaymentIntent>) => PaymentIntent)

type EagerPositionCoach = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PositionCoach, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Position?: Position | null;
  readonly coachID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly positionCoachPositionId?: string | null;
}

type LazyPositionCoach = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PositionCoach, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Position: AsyncItem<Position | undefined>;
  readonly coachID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly positionCoachPositionId?: string | null;
}

export declare type PositionCoach = LazyLoading extends LazyLoadingDisabled ? EagerPositionCoach : LazyPositionCoach

export declare const PositionCoach: (new (init: ModelInit<PositionCoach>) => PositionCoach) & {
  copyOf(source: PositionCoach, mutator: (draft: MutableModel<PositionCoach>) => MutableModel<PositionCoach> | void): PositionCoach;
}

type EagerPosition = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Position, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPosition = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Position, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Position = LazyLoading extends LazyLoadingDisabled ? EagerPosition : LazyPosition

export declare const Position: (new (init: ModelInit<Position>) => Position) & {
  copyOf(source: Position, mutator: (draft: MutableModel<Position>) => MutableModel<Position> | void): Position;
}

type EagerAgeCoach = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AgeCoach, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Age?: Age | null;
  readonly coachID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly ageCoachAgeId?: string | null;
}

type LazyAgeCoach = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AgeCoach, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Age: AsyncItem<Age | undefined>;
  readonly coachID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly ageCoachAgeId?: string | null;
}

export declare type AgeCoach = LazyLoading extends LazyLoadingDisabled ? EagerAgeCoach : LazyAgeCoach

export declare const AgeCoach: (new (init: ModelInit<AgeCoach>) => AgeCoach) & {
  copyOf(source: AgeCoach, mutator: (draft: MutableModel<AgeCoach>) => MutableModel<AgeCoach> | void): AgeCoach;
}

type EagerAge = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Age, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAge = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Age, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Age = LazyLoading extends LazyLoadingDisabled ? EagerAge : LazyAge

export declare const Age: (new (init: ModelInit<Age>) => Age) & {
  copyOf(source: Age, mutator: (draft: MutableModel<Age>) => MutableModel<Age> | void): Age;
}

type EagerSpecialityCoach = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SpecialityCoach, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Speciality?: Speciality | null;
  readonly coachID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly specialityCoachSpecialityId?: string | null;
}

type LazySpecialityCoach = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SpecialityCoach, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Speciality: AsyncItem<Speciality | undefined>;
  readonly coachID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly specialityCoachSpecialityId?: string | null;
}

export declare type SpecialityCoach = LazyLoading extends LazyLoadingDisabled ? EagerSpecialityCoach : LazySpecialityCoach

export declare const SpecialityCoach: (new (init: ModelInit<SpecialityCoach>) => SpecialityCoach) & {
  copyOf(source: SpecialityCoach, mutator: (draft: MutableModel<SpecialityCoach>) => MutableModel<SpecialityCoach> | void): SpecialityCoach;
}

type EagerSpeciality = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Speciality, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySpeciality = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Speciality, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Speciality = LazyLoading extends LazyLoadingDisabled ? EagerSpeciality : LazySpeciality

export declare const Speciality: (new (init: ModelInit<Speciality>) => Speciality) & {
  copyOf(source: Speciality, mutator: (draft: MutableModel<Speciality>) => MutableModel<Speciality> | void): Speciality;
}

type EagerAccreditationCoach = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AccreditationCoach, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Accreditation?: Accreditation | null;
  readonly coachID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly accreditationCoachAccreditationId?: string | null;
}

type LazyAccreditationCoach = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AccreditationCoach, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Accreditation: AsyncItem<Accreditation | undefined>;
  readonly coachID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly accreditationCoachAccreditationId?: string | null;
}

export declare type AccreditationCoach = LazyLoading extends LazyLoadingDisabled ? EagerAccreditationCoach : LazyAccreditationCoach

export declare const AccreditationCoach: (new (init: ModelInit<AccreditationCoach>) => AccreditationCoach) & {
  copyOf(source: AccreditationCoach, mutator: (draft: MutableModel<AccreditationCoach>) => MutableModel<AccreditationCoach> | void): AccreditationCoach;
}

type EagerAccreditation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Accreditation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAccreditation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Accreditation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Accreditation = LazyLoading extends LazyLoadingDisabled ? EagerAccreditation : LazyAccreditation

export declare const Accreditation: (new (init: ModelInit<Accreditation>) => Accreditation) & {
  copyOf(source: Accreditation, mutator: (draft: MutableModel<Accreditation>) => MutableModel<Accreditation> | void): Accreditation;
}

type EagerSport = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sport, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly Coaches?: (Coach | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySport = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sport, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly Coaches: AsyncCollection<Coach>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Sport = LazyLoading extends LazyLoadingDisabled ? EagerSport : LazySport

export declare const Sport: (new (init: ModelInit<Sport>) => Sport) & {
  copyOf(source: Sport, mutator: (draft: MutableModel<Sport>) => MutableModel<Sport> | void): Sport;
}

type EagerCoach = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Coach, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly highlights?: string | null;
  readonly sessionPlan?: string | null;
  readonly background?: string | null;
  readonly yearsCoaching?: number | null;
  readonly yearsPlaying?: number | null;
  readonly college?: string | null;
  readonly shortDesc?: string | null;
  readonly image?: string | null;
  readonly startPrice?: number | null;
  readonly fullName?: string | null;
  readonly email?: string | null;
  readonly streetAddress?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly zip?: string | null;
  readonly phoneNbr?: string | null;
  readonly dob?: string | null;
  readonly sub?: string | null;
  readonly sportID: string;
  readonly Ratings?: (Rating | null)[] | null;
  readonly Availabilities?: (Availability | null)[] | null;
  readonly Bookings?: (Booking | null)[] | null;
  readonly AccreditationCoaches?: (AccreditationCoach | null)[] | null;
  readonly SpecialityCoaches?: (SpecialityCoach | null)[] | null;
  readonly AgeCoaches?: (AgeCoach | null)[] | null;
  readonly PositionCoaches?: (PositionCoach | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCoach = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Coach, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly highlights?: string | null;
  readonly sessionPlan?: string | null;
  readonly background?: string | null;
  readonly yearsCoaching?: number | null;
  readonly yearsPlaying?: number | null;
  readonly college?: string | null;
  readonly shortDesc?: string | null;
  readonly image?: string | null;
  readonly startPrice?: number | null;
  readonly fullName?: string | null;
  readonly email?: string | null;
  readonly streetAddress?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly zip?: string | null;
  readonly phoneNbr?: string | null;
  readonly dob?: string | null;
  readonly sub?: string | null;
  readonly sportID: string;
  readonly Ratings: AsyncCollection<Rating>;
  readonly Availabilities: AsyncCollection<Availability>;
  readonly Bookings: AsyncCollection<Booking>;
  readonly AccreditationCoaches: AsyncCollection<AccreditationCoach>;
  readonly SpecialityCoaches: AsyncCollection<SpecialityCoach>;
  readonly AgeCoaches: AsyncCollection<AgeCoach>;
  readonly PositionCoaches: AsyncCollection<PositionCoach>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Coach = LazyLoading extends LazyLoadingDisabled ? EagerCoach : LazyCoach

export declare const Coach: (new (init: ModelInit<Coach>) => Coach) & {
  copyOf(source: Coach, mutator: (draft: MutableModel<Coach>) => MutableModel<Coach> | void): Coach;
}

type EagerRating = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Rating, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rating?: number | null;
  readonly review?: string | null;
  readonly coachID: string;
  readonly Booking?: Booking | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly ratingBookingId?: string | null;
}

type LazyRating = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Rating, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rating?: number | null;
  readonly review?: string | null;
  readonly coachID: string;
  readonly Booking: AsyncItem<Booking | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly ratingBookingId?: string | null;
}

export declare type Rating = LazyLoading extends LazyLoadingDisabled ? EagerRating : LazyRating

export declare const Rating: (new (init: ModelInit<Rating>) => Rating) & {
  copyOf(source: Rating, mutator: (draft: MutableModel<Rating>) => MutableModel<Rating> | void): Rating;
}

type EagerBooking = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Booking, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly athleteName?: string | null;
  readonly startDate?: string | null;
  readonly startTime?: string | null;
  readonly status?: BookingStatus | keyof typeof BookingStatus | null;
  readonly atheleteAge?: string | null;
  readonly coachID: string;
  readonly profileID: string;
  readonly packageID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBooking = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Booking, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly athleteName?: string | null;
  readonly startDate?: string | null;
  readonly startTime?: string | null;
  readonly status?: BookingStatus | keyof typeof BookingStatus | null;
  readonly atheleteAge?: string | null;
  readonly coachID: string;
  readonly profileID: string;
  readonly packageID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Booking = LazyLoading extends LazyLoadingDisabled ? EagerBooking : LazyBooking

export declare const Booking: (new (init: ModelInit<Booking>) => Booking) & {
  copyOf(source: Booking, mutator: (draft: MutableModel<Booking>) => MutableModel<Booking> | void): Booking;
}

type EagerAvailability = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Availability, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly day?: string | null;
  readonly time?: string | null;
  readonly coachID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAvailability = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Availability, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly day?: string | null;
  readonly time?: string | null;
  readonly coachID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Availability = LazyLoading extends LazyLoadingDisabled ? EagerAvailability : LazyAvailability

export declare const Availability: (new (init: ModelInit<Availability>) => Availability) & {
  copyOf(source: Availability, mutator: (draft: MutableModel<Availability>) => MutableModel<Availability> | void): Availability;
}

type EagerProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fullName?: string | null;
  readonly email?: string | null;
  readonly streetAddress?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly zip?: string | null;
  readonly phoneNbr?: string | null;
  readonly sub?: string | null;
  readonly Bookings?: (Booking | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fullName?: string | null;
  readonly email?: string | null;
  readonly streetAddress?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly zip?: string | null;
  readonly phoneNbr?: string | null;
  readonly sub?: string | null;
  readonly Bookings: AsyncCollection<Booking>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Profile = LazyLoading extends LazyLoadingDisabled ? EagerProfile : LazyProfile

export declare const Profile: (new (init: ModelInit<Profile>) => Profile) & {
  copyOf(source: Profile, mutator: (draft: MutableModel<Profile>) => MutableModel<Profile> | void): Profile;
}

type EagerPackage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Package, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly price?: number | null;
  readonly shortDesc?: string | null;
  readonly longDesc?: string | null;
  readonly length?: number | null;
  readonly coachID?: string | null;
  readonly Bookings?: (Booking | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPackage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Package, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly price?: number | null;
  readonly shortDesc?: string | null;
  readonly longDesc?: string | null;
  readonly length?: number | null;
  readonly coachID?: string | null;
  readonly Bookings: AsyncCollection<Booking>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Package = LazyLoading extends LazyLoadingDisabled ? EagerPackage : LazyPackage

export declare const Package: (new (init: ModelInit<Package>) => Package) & {
  copyOf(source: Package, mutator: (draft: MutableModel<Package>) => MutableModel<Package> | void): Package;
}