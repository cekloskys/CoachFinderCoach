/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPositionCoach = /* GraphQL */ `
  query GetPositionCoach($id: ID!) {
    getPositionCoach(id: $id) {
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
export const listPositionCoaches = /* GraphQL */ `
  query ListPositionCoaches(
    $filter: ModelPositionCoachFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPositionCoaches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        coachID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        positionCoachPositionId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPositionCoaches = /* GraphQL */ `
  query SyncPositionCoaches(
    $filter: ModelPositionCoachFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPositionCoaches(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        coachID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        positionCoachPositionId
      }
      nextToken
      startedAt
    }
  }
`;
export const positionCoachesByCoachID = /* GraphQL */ `
  query PositionCoachesByCoachID(
    $coachID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPositionCoachFilterInput
    $limit: Int
    $nextToken: String
  ) {
    positionCoachesByCoachID(
      coachID: $coachID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        coachID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        positionCoachPositionId
      }
      nextToken
      startedAt
    }
  }
`;
export const getPosition = /* GraphQL */ `
  query GetPosition($id: ID!) {
    getPosition(id: $id) {
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
export const listPositions = /* GraphQL */ `
  query ListPositions(
    $filter: ModelPositionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPositions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
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
export const syncPositions = /* GraphQL */ `
  query SyncPositions(
    $filter: ModelPositionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPositions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
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
export const getAgeCoach = /* GraphQL */ `
  query GetAgeCoach($id: ID!) {
    getAgeCoach(id: $id) {
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
export const listAgeCoaches = /* GraphQL */ `
  query ListAgeCoaches(
    $filter: ModelAgeCoachFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAgeCoaches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        coachID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        ageCoachAgeId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAgeCoaches = /* GraphQL */ `
  query SyncAgeCoaches(
    $filter: ModelAgeCoachFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAgeCoaches(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        coachID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        ageCoachAgeId
      }
      nextToken
      startedAt
    }
  }
`;
export const ageCoachesByCoachID = /* GraphQL */ `
  query AgeCoachesByCoachID(
    $coachID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAgeCoachFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ageCoachesByCoachID(
      coachID: $coachID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        coachID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        ageCoachAgeId
      }
      nextToken
      startedAt
    }
  }
`;
export const getSpecialityCoach = /* GraphQL */ `
  query GetSpecialityCoach($id: ID!) {
    getSpecialityCoach(id: $id) {
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
export const listSpecialityCoaches = /* GraphQL */ `
  query ListSpecialityCoaches(
    $filter: ModelSpecialityCoachFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpecialityCoaches(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        coachID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        specialityCoachSpecialityId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSpecialityCoaches = /* GraphQL */ `
  query SyncSpecialityCoaches(
    $filter: ModelSpecialityCoachFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSpecialityCoaches(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        coachID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        specialityCoachSpecialityId
      }
      nextToken
      startedAt
    }
  }
`;
export const specialityCoachesByCoachID = /* GraphQL */ `
  query SpecialityCoachesByCoachID(
    $coachID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSpecialityCoachFilterInput
    $limit: Int
    $nextToken: String
  ) {
    specialityCoachesByCoachID(
      coachID: $coachID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        coachID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        specialityCoachSpecialityId
      }
      nextToken
      startedAt
    }
  }
`;
export const getAccreditationCoach = /* GraphQL */ `
  query GetAccreditationCoach($id: ID!) {
    getAccreditationCoach(id: $id) {
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
export const listAccreditationCoaches = /* GraphQL */ `
  query ListAccreditationCoaches(
    $filter: ModelAccreditationCoachFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccreditationCoaches(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        coachID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        accreditationCoachAccreditationId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAccreditationCoaches = /* GraphQL */ `
  query SyncAccreditationCoaches(
    $filter: ModelAccreditationCoachFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAccreditationCoaches(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        coachID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        accreditationCoachAccreditationId
      }
      nextToken
      startedAt
    }
  }
`;
export const accreditationCoachesByCoachID = /* GraphQL */ `
  query AccreditationCoachesByCoachID(
    $coachID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAccreditationCoachFilterInput
    $limit: Int
    $nextToken: String
  ) {
    accreditationCoachesByCoachID(
      coachID: $coachID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        coachID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        accreditationCoachAccreditationId
      }
      nextToken
      startedAt
    }
  }
`;
export const getAccreditation = /* GraphQL */ `
  query GetAccreditation($id: ID!) {
    getAccreditation(id: $id) {
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
export const listAccreditations = /* GraphQL */ `
  query ListAccreditations(
    $filter: ModelAccreditationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccreditations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
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
export const syncAccreditations = /* GraphQL */ `
  query SyncAccreditations(
    $filter: ModelAccreditationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAccreditations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
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
export const getSport = /* GraphQL */ `
  query GetSport($id: ID!) {
    getSport(id: $id) {
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
export const listSports = /* GraphQL */ `
  query ListSports(
    $filter: ModelSportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
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
export const syncSports = /* GraphQL */ `
  query SyncSports(
    $filter: ModelSportFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSports(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
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
export const getCoach = /* GraphQL */ `
  query GetCoach($id: ID!) {
    getCoach(id: $id) {
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
export const listCoaches = /* GraphQL */ `
  query ListCoaches(
    $filter: ModelCoachFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoaches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
export const syncCoaches = /* GraphQL */ `
  query SyncCoaches(
    $filter: ModelCoachFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCoaches(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
export const coachesBySportID = /* GraphQL */ `
  query CoachesBySportID(
    $sportID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCoachFilterInput
    $limit: Int
    $nextToken: String
  ) {
    coachesBySportID(
      sportID: $sportID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
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
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fullName
        email
        streetAddress
        city
        state
        zip
        phoneNbr
        sub
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
export const syncProfiles = /* GraphQL */ `
  query SyncProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        fullName
        email
        streetAddress
        city
        state
        zip
        phoneNbr
        sub
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
export const getAge = /* GraphQL */ `
  query GetAge($id: ID!) {
    getAge(id: $id) {
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
export const listAges = /* GraphQL */ `
  query ListAges(
    $filter: ModelAgeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
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
export const syncAges = /* GraphQL */ `
  query SyncAges(
    $filter: ModelAgeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAges(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
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
export const getSpeciality = /* GraphQL */ `
  query GetSpeciality($id: ID!) {
    getSpeciality(id: $id) {
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
export const listSpecialities = /* GraphQL */ `
  query ListSpecialities(
    $filter: ModelSpecialityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpecialities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
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
export const syncSpecialities = /* GraphQL */ `
  query SyncSpecialities(
    $filter: ModelSpecialityFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSpecialities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
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
export const getPackage = /* GraphQL */ `
  query GetPackage($id: ID!) {
    getPackage(id: $id) {
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
export const listPackages = /* GraphQL */ `
  query ListPackages(
    $filter: ModelPackageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPackages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        shortDesc
        longDesc
        length
        coachID
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
export const syncPackages = /* GraphQL */ `
  query SyncPackages(
    $filter: ModelPackageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPackages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        price
        shortDesc
        longDesc
        length
        coachID
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
export const getBooking = /* GraphQL */ `
  query GetBooking($id: ID!) {
    getBooking(id: $id) {
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
export const listBookings = /* GraphQL */ `
  query ListBookings(
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncBookings = /* GraphQL */ `
  query SyncBookings(
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBookings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const bookingsByCoachID = /* GraphQL */ `
  query BookingsByCoachID(
    $coachID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookingsByCoachID(
      coachID: $coachID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const bookingsByProfileID = /* GraphQL */ `
  query BookingsByProfileID(
    $profileID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookingsByProfileID(
      profileID: $profileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const bookingsByPackageID = /* GraphQL */ `
  query BookingsByPackageID(
    $packageID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBookingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bookingsByPackageID(
      packageID: $packageID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getAvailability = /* GraphQL */ `
  query GetAvailability($id: ID!) {
    getAvailability(id: $id) {
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
export const listAvailabilities = /* GraphQL */ `
  query ListAvailabilities(
    $filter: ModelAvailabilityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAvailabilities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncAvailabilities = /* GraphQL */ `
  query SyncAvailabilities(
    $filter: ModelAvailabilityFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAvailabilities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const availabilitiesByCoachID = /* GraphQL */ `
  query AvailabilitiesByCoachID(
    $coachID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAvailabilityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    availabilitiesByCoachID(
      coachID: $coachID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getRating = /* GraphQL */ `
  query GetRating($id: ID!) {
    getRating(id: $id) {
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
export const listRatings = /* GraphQL */ `
  query ListRatings(
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        rating
        review
        coachID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        ratingBookingId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRatings = /* GraphQL */ `
  query SyncRatings(
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRatings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        rating
        review
        coachID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        ratingBookingId
      }
      nextToken
      startedAt
    }
  }
`;
export const ratingsByCoachID = /* GraphQL */ `
  query RatingsByCoachID(
    $coachID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ratingsByCoachID(
      coachID: $coachID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        rating
        review
        coachID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        ratingBookingId
      }
      nextToken
      startedAt
    }
  }
`;
