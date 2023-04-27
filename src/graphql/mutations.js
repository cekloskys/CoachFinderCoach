/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPaymentIntent = /* GraphQL */ `
  mutation CreatePaymentIntent($amount: Int!) {
    createPaymentIntent(amount: $amount) {
      clientSecret
    }
  }
`;
export const createPositionCoach = /* GraphQL */ `
  mutation CreatePositionCoach(
    $input: CreatePositionCoachInput!
    $condition: ModelPositionCoachConditionInput
  ) {
    createPositionCoach(input: $input, condition: $condition) {
      id
      Position {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      coachID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      positionCoachPositionId
    }
  }
`;
export const updatePositionCoach = /* GraphQL */ `
  mutation UpdatePositionCoach(
    $input: UpdatePositionCoachInput!
    $condition: ModelPositionCoachConditionInput
  ) {
    updatePositionCoach(input: $input, condition: $condition) {
      id
      Position {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      coachID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      positionCoachPositionId
    }
  }
`;
export const deletePositionCoach = /* GraphQL */ `
  mutation DeletePositionCoach(
    $input: DeletePositionCoachInput!
    $condition: ModelPositionCoachConditionInput
  ) {
    deletePositionCoach(input: $input, condition: $condition) {
      id
      Position {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      coachID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      positionCoachPositionId
    }
  }
`;
export const createPosition = /* GraphQL */ `
  mutation CreatePosition(
    $input: CreatePositionInput!
    $condition: ModelPositionConditionInput
  ) {
    createPosition(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePosition = /* GraphQL */ `
  mutation UpdatePosition(
    $input: UpdatePositionInput!
    $condition: ModelPositionConditionInput
  ) {
    updatePosition(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePosition = /* GraphQL */ `
  mutation DeletePosition(
    $input: DeletePositionInput!
    $condition: ModelPositionConditionInput
  ) {
    deletePosition(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createAgeCoach = /* GraphQL */ `
  mutation CreateAgeCoach(
    $input: CreateAgeCoachInput!
    $condition: ModelAgeCoachConditionInput
  ) {
    createAgeCoach(input: $input, condition: $condition) {
      id
      Age {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      coachID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      ageCoachAgeId
    }
  }
`;
export const updateAgeCoach = /* GraphQL */ `
  mutation UpdateAgeCoach(
    $input: UpdateAgeCoachInput!
    $condition: ModelAgeCoachConditionInput
  ) {
    updateAgeCoach(input: $input, condition: $condition) {
      id
      Age {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      coachID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      ageCoachAgeId
    }
  }
`;
export const deleteAgeCoach = /* GraphQL */ `
  mutation DeleteAgeCoach(
    $input: DeleteAgeCoachInput!
    $condition: ModelAgeCoachConditionInput
  ) {
    deleteAgeCoach(input: $input, condition: $condition) {
      id
      Age {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      coachID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      ageCoachAgeId
    }
  }
`;
export const createSpecialityCoach = /* GraphQL */ `
  mutation CreateSpecialityCoach(
    $input: CreateSpecialityCoachInput!
    $condition: ModelSpecialityCoachConditionInput
  ) {
    createSpecialityCoach(input: $input, condition: $condition) {
      id
      Speciality {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      coachID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      specialityCoachSpecialityId
    }
  }
`;
export const updateSpecialityCoach = /* GraphQL */ `
  mutation UpdateSpecialityCoach(
    $input: UpdateSpecialityCoachInput!
    $condition: ModelSpecialityCoachConditionInput
  ) {
    updateSpecialityCoach(input: $input, condition: $condition) {
      id
      Speciality {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      coachID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      specialityCoachSpecialityId
    }
  }
`;
export const deleteSpecialityCoach = /* GraphQL */ `
  mutation DeleteSpecialityCoach(
    $input: DeleteSpecialityCoachInput!
    $condition: ModelSpecialityCoachConditionInput
  ) {
    deleteSpecialityCoach(input: $input, condition: $condition) {
      id
      Speciality {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      coachID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      specialityCoachSpecialityId
    }
  }
`;
export const createAccreditationCoach = /* GraphQL */ `
  mutation CreateAccreditationCoach(
    $input: CreateAccreditationCoachInput!
    $condition: ModelAccreditationCoachConditionInput
  ) {
    createAccreditationCoach(input: $input, condition: $condition) {
      id
      Accreditation {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      coachID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      accreditationCoachAccreditationId
    }
  }
`;
export const updateAccreditationCoach = /* GraphQL */ `
  mutation UpdateAccreditationCoach(
    $input: UpdateAccreditationCoachInput!
    $condition: ModelAccreditationCoachConditionInput
  ) {
    updateAccreditationCoach(input: $input, condition: $condition) {
      id
      Accreditation {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      coachID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      accreditationCoachAccreditationId
    }
  }
`;
export const deleteAccreditationCoach = /* GraphQL */ `
  mutation DeleteAccreditationCoach(
    $input: DeleteAccreditationCoachInput!
    $condition: ModelAccreditationCoachConditionInput
  ) {
    deleteAccreditationCoach(input: $input, condition: $condition) {
      id
      Accreditation {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      coachID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      accreditationCoachAccreditationId
    }
  }
`;
export const createAccreditation = /* GraphQL */ `
  mutation CreateAccreditation(
    $input: CreateAccreditationInput!
    $condition: ModelAccreditationConditionInput
  ) {
    createAccreditation(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAccreditation = /* GraphQL */ `
  mutation UpdateAccreditation(
    $input: UpdateAccreditationInput!
    $condition: ModelAccreditationConditionInput
  ) {
    updateAccreditation(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAccreditation = /* GraphQL */ `
  mutation DeleteAccreditation(
    $input: DeleteAccreditationInput!
    $condition: ModelAccreditationConditionInput
  ) {
    deleteAccreditation(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createSport = /* GraphQL */ `
  mutation CreateSport(
    $input: CreateSportInput!
    $condition: ModelSportConditionInput
  ) {
    createSport(input: $input, condition: $condition) {
      id
      name
      Coaches {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSport = /* GraphQL */ `
  mutation UpdateSport(
    $input: UpdateSportInput!
    $condition: ModelSportConditionInput
  ) {
    updateSport(input: $input, condition: $condition) {
      id
      name
      Coaches {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSport = /* GraphQL */ `
  mutation DeleteSport(
    $input: DeleteSportInput!
    $condition: ModelSportConditionInput
  ) {
    deleteSport(input: $input, condition: $condition) {
      id
      name
      Coaches {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCoach = /* GraphQL */ `
  mutation CreateCoach(
    $input: CreateCoachInput!
    $condition: ModelCoachConditionInput
  ) {
    createCoach(input: $input, condition: $condition) {
      id
      highlights
      sessionPlan
      background
      yearsCoaching
      yearsPlaying
      college
      shortDesc
      image
      startPrice
      fullName
      email
      streetAddress
      city
      state
      zip
      phoneNbr
      dob
      sub
      sportID
      Ratings {
        nextToken
        startedAt
      }
      Availabilities {
        nextToken
        startedAt
      }
      Bookings {
        nextToken
        startedAt
      }
      AccreditationCoaches {
        nextToken
        startedAt
      }
      SpecialityCoaches {
        nextToken
        startedAt
      }
      AgeCoaches {
        nextToken
        startedAt
      }
      PositionCoaches {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCoach = /* GraphQL */ `
  mutation UpdateCoach(
    $input: UpdateCoachInput!
    $condition: ModelCoachConditionInput
  ) {
    updateCoach(input: $input, condition: $condition) {
      id
      highlights
      sessionPlan
      background
      yearsCoaching
      yearsPlaying
      college
      shortDesc
      image
      startPrice
      fullName
      email
      streetAddress
      city
      state
      zip
      phoneNbr
      dob
      sub
      sportID
      Ratings {
        nextToken
        startedAt
      }
      Availabilities {
        nextToken
        startedAt
      }
      Bookings {
        nextToken
        startedAt
      }
      AccreditationCoaches {
        nextToken
        startedAt
      }
      SpecialityCoaches {
        nextToken
        startedAt
      }
      AgeCoaches {
        nextToken
        startedAt
      }
      PositionCoaches {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCoach = /* GraphQL */ `
  mutation DeleteCoach(
    $input: DeleteCoachInput!
    $condition: ModelCoachConditionInput
  ) {
    deleteCoach(input: $input, condition: $condition) {
      id
      highlights
      sessionPlan
      background
      yearsCoaching
      yearsPlaying
      college
      shortDesc
      image
      startPrice
      fullName
      email
      streetAddress
      city
      state
      zip
      phoneNbr
      dob
      sub
      sportID
      Ratings {
        nextToken
        startedAt
      }
      Availabilities {
        nextToken
        startedAt
      }
      Bookings {
        nextToken
        startedAt
      }
      AccreditationCoaches {
        nextToken
        startedAt
      }
      SpecialityCoaches {
        nextToken
        startedAt
      }
      AgeCoaches {
        nextToken
        startedAt
      }
      PositionCoaches {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
      id
      fullName
      email
      streetAddress
      city
      state
      zip
      phoneNbr
      sub
      Bookings {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
      id
      fullName
      email
      streetAddress
      city
      state
      zip
      phoneNbr
      sub
      Bookings {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
      id
      fullName
      email
      streetAddress
      city
      state
      zip
      phoneNbr
      sub
      Bookings {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createAge = /* GraphQL */ `
  mutation CreateAge(
    $input: CreateAgeInput!
    $condition: ModelAgeConditionInput
  ) {
    createAge(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAge = /* GraphQL */ `
  mutation UpdateAge(
    $input: UpdateAgeInput!
    $condition: ModelAgeConditionInput
  ) {
    updateAge(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAge = /* GraphQL */ `
  mutation DeleteAge(
    $input: DeleteAgeInput!
    $condition: ModelAgeConditionInput
  ) {
    deleteAge(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createSpeciality = /* GraphQL */ `
  mutation CreateSpeciality(
    $input: CreateSpecialityInput!
    $condition: ModelSpecialityConditionInput
  ) {
    createSpeciality(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSpeciality = /* GraphQL */ `
  mutation UpdateSpeciality(
    $input: UpdateSpecialityInput!
    $condition: ModelSpecialityConditionInput
  ) {
    updateSpeciality(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSpeciality = /* GraphQL */ `
  mutation DeleteSpeciality(
    $input: DeleteSpecialityInput!
    $condition: ModelSpecialityConditionInput
  ) {
    deleteSpeciality(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPackage = /* GraphQL */ `
  mutation CreatePackage(
    $input: CreatePackageInput!
    $condition: ModelPackageConditionInput
  ) {
    createPackage(input: $input, condition: $condition) {
      id
      name
      price
      shortDesc
      longDesc
      length
      coachID
      Bookings {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePackage = /* GraphQL */ `
  mutation UpdatePackage(
    $input: UpdatePackageInput!
    $condition: ModelPackageConditionInput
  ) {
    updatePackage(input: $input, condition: $condition) {
      id
      name
      price
      shortDesc
      longDesc
      length
      coachID
      Bookings {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePackage = /* GraphQL */ `
  mutation DeletePackage(
    $input: DeletePackageInput!
    $condition: ModelPackageConditionInput
  ) {
    deletePackage(input: $input, condition: $condition) {
      id
      name
      price
      shortDesc
      longDesc
      length
      coachID
      Bookings {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createBooking = /* GraphQL */ `
  mutation CreateBooking(
    $input: CreateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    createBooking(input: $input, condition: $condition) {
      id
      athleteName
      startDate
      startTime
      status
      atheleteAge
      coachID
      profileID
      packageID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateBooking = /* GraphQL */ `
  mutation UpdateBooking(
    $input: UpdateBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    updateBooking(input: $input, condition: $condition) {
      id
      athleteName
      startDate
      startTime
      status
      atheleteAge
      coachID
      profileID
      packageID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteBooking = /* GraphQL */ `
  mutation DeleteBooking(
    $input: DeleteBookingInput!
    $condition: ModelBookingConditionInput
  ) {
    deleteBooking(input: $input, condition: $condition) {
      id
      athleteName
      startDate
      startTime
      status
      atheleteAge
      coachID
      profileID
      packageID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createAvailability = /* GraphQL */ `
  mutation CreateAvailability(
    $input: CreateAvailabilityInput!
    $condition: ModelAvailabilityConditionInput
  ) {
    createAvailability(input: $input, condition: $condition) {
      id
      day
      time
      coachID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAvailability = /* GraphQL */ `
  mutation UpdateAvailability(
    $input: UpdateAvailabilityInput!
    $condition: ModelAvailabilityConditionInput
  ) {
    updateAvailability(input: $input, condition: $condition) {
      id
      day
      time
      coachID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAvailability = /* GraphQL */ `
  mutation DeleteAvailability(
    $input: DeleteAvailabilityInput!
    $condition: ModelAvailabilityConditionInput
  ) {
    deleteAvailability(input: $input, condition: $condition) {
      id
      day
      time
      coachID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createRating = /* GraphQL */ `
  mutation CreateRating(
    $input: CreateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    createRating(input: $input, condition: $condition) {
      id
      rating
      review
      coachID
      Booking {
        id
        athleteName
        startDate
        startTime
        status
        atheleteAge
        coachID
        profileID
        packageID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      ratingBookingId
    }
  }
`;
export const updateRating = /* GraphQL */ `
  mutation UpdateRating(
    $input: UpdateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    updateRating(input: $input, condition: $condition) {
      id
      rating
      review
      coachID
      Booking {
        id
        athleteName
        startDate
        startTime
        status
        atheleteAge
        coachID
        profileID
        packageID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      ratingBookingId
    }
  }
`;
export const deleteRating = /* GraphQL */ `
  mutation DeleteRating(
    $input: DeleteRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    deleteRating(input: $input, condition: $condition) {
      id
      rating
      review
      coachID
      Booking {
        id
        athleteName
        startDate
        startTime
        status
        atheleteAge
        coachID
        profileID
        packageID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      ratingBookingId
    }
  }
`;
