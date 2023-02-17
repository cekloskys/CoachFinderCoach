import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum BookingStatus {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  DECLINED = "DECLINED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED"
}



type EagerBooking = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Booking, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly athleteName: string;
  readonly athleteAge: string;
  readonly startDate: string;
  readonly startTime: string;
  readonly status?: BookingStatus | keyof typeof BookingStatus | null;
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
  readonly athleteName: string;
  readonly athleteAge: string;
  readonly startDate: string;
  readonly startTime: string;
  readonly status?: BookingStatus | keyof typeof BookingStatus | null;
  readonly profileID: string;
  readonly packageID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Booking = LazyLoading extends LazyLoadingDisabled ? EagerBooking : LazyBooking

export declare const Booking: (new (init: ModelInit<Booking>) => Booking) & {
  copyOf(source: Booking, mutator: (draft: MutableModel<Booking>) => MutableModel<Booking> | void): Booking;
}

type EagerAccreditation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Accreditation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAccreditation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Accreditation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Accreditation = LazyLoading extends LazyLoadingDisabled ? EagerAccreditation : LazyAccreditation

export declare const Accreditation: (new (init: ModelInit<Accreditation>) => Accreditation) & {
  copyOf(source: Accreditation, mutator: (draft: MutableModel<Accreditation>) => MutableModel<Accreditation> | void): Accreditation;
}

type EagerTime = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Time, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTime = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Time, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Time = LazyLoading extends LazyLoadingDisabled ? EagerTime : LazyTime

export declare const Time: (new (init: ModelInit<Time>) => Time) & {
  copyOf(source: Time, mutator: (draft: MutableModel<Time>) => MutableModel<Time> | void): Time;
}

type EagerDay = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Day, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDay = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Day, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Day = LazyLoading extends LazyLoadingDisabled ? EagerDay : LazyDay

export declare const Day: (new (init: ModelInit<Day>) => Day) & {
  copyOf(source: Day, mutator: (draft: MutableModel<Day>) => MutableModel<Day> | void): Day;
}

type EagerCoach = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Coach, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly highlights: string;
  readonly sessionPlan: string;
  readonly background: string;
  readonly yearsCoaching: number;
  readonly yearsPlaying: number;
  readonly college: string;
  readonly shortDesc: string;
  readonly image?: string | null;
  readonly startPrice?: number | null;
  readonly Profile?: Profile | null;
  readonly sportID: string;
  readonly fullName: string;
  readonly email: string;
  readonly streetAddress: string;
  readonly city: string;
  readonly state: string;
  readonly zip: string;
  readonly phoneNbr?: string | null;
  readonly dob?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly coachProfileId?: string | null;
}

type LazyCoach = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Coach, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly highlights: string;
  readonly sessionPlan: string;
  readonly background: string;
  readonly yearsCoaching: number;
  readonly yearsPlaying: number;
  readonly college: string;
  readonly shortDesc: string;
  readonly image?: string | null;
  readonly startPrice?: number | null;
  readonly Profile: AsyncItem<Profile | undefined>;
  readonly sportID: string;
  readonly fullName: string;
  readonly email: string;
  readonly streetAddress: string;
  readonly city: string;
  readonly state: string;
  readonly zip: string;
  readonly phoneNbr?: string | null;
  readonly dob?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly coachProfileId?: string | null;
}

export declare type Coach = LazyLoading extends LazyLoadingDisabled ? EagerCoach : LazyCoach

export declare const Coach: (new (init: ModelInit<Coach>) => Coach) & {
  copyOf(source: Coach, mutator: (draft: MutableModel<Coach>) => MutableModel<Coach> | void): Coach;
}

type EagerProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Profile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly fullName: string;
  readonly email: string;
  readonly streetAddress: string;
  readonly city: string;
  readonly state: string;
  readonly zip: string;
  readonly phoneNbr?: string | null;
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
  readonly fullName: string;
  readonly email: string;
  readonly streetAddress: string;
  readonly city: string;
  readonly state: string;
  readonly zip: string;
  readonly phoneNbr?: string | null;
  readonly Bookings: AsyncCollection<Booking>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Profile = LazyLoading extends LazyLoadingDisabled ? EagerProfile : LazyProfile

export declare const Profile: (new (init: ModelInit<Profile>) => Profile) & {
  copyOf(source: Profile, mutator: (draft: MutableModel<Profile>) => MutableModel<Profile> | void): Profile;
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

type EagerSpeciality = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Speciality, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySpeciality = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Speciality, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Speciality = LazyLoading extends LazyLoadingDisabled ? EagerSpeciality : LazySpeciality

export declare const Speciality: (new (init: ModelInit<Speciality>) => Speciality) & {
  copyOf(source: Speciality, mutator: (draft: MutableModel<Speciality>) => MutableModel<Speciality> | void): Speciality;
}

type EagerPosition = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Position, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPosition = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Position, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Position = LazyLoading extends LazyLoadingDisabled ? EagerPosition : LazyPosition

export declare const Position: (new (init: ModelInit<Position>) => Position) & {
  copyOf(source: Position, mutator: (draft: MutableModel<Position>) => MutableModel<Position> | void): Position;
}

type EagerSport = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sport, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nam: string;
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
  readonly nam: string;
  readonly Coaches: AsyncCollection<Coach>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Sport = LazyLoading extends LazyLoadingDisabled ? EagerSport : LazySport

export declare const Sport: (new (init: ModelInit<Sport>) => Sport) & {
  copyOf(source: Sport, mutator: (draft: MutableModel<Sport>) => MutableModel<Sport> | void): Sport;
}

type EagerPackage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Package, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly shortDesc: string;
  readonly longDesc: string;
  readonly length: number;
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
  readonly name: string;
  readonly price: number;
  readonly shortDesc: string;
  readonly longDesc: string;
  readonly length: number;
  readonly Bookings: AsyncCollection<Booking>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Package = LazyLoading extends LazyLoadingDisabled ? EagerPackage : LazyPackage

export declare const Package: (new (init: ModelInit<Package>) => Package) & {
  copyOf(source: Package, mutator: (draft: MutableModel<Package>) => MutableModel<Package> | void): Package;
}