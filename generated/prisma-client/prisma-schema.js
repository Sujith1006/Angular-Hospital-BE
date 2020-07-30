module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateMedication {
  count: Int!
}

type AggregatePatientinfo {
  count: Int!
}

type AggregateRoomallocate {
  count: Int!
}

type AggregateRoominfo {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Medication {
  id: ID!
  Patient: Patientinfo
  Medicalrounds: Int
  Discharge: Boolean!
}

type MedicationConnection {
  pageInfo: PageInfo!
  edges: [MedicationEdge]!
  aggregate: AggregateMedication!
}

input MedicationCreateInput {
  id: ID
  Patient: PatientinfoCreateOneInput
  Medicalrounds: Int
  Discharge: Boolean!
}

type MedicationEdge {
  node: Medication!
  cursor: String!
}

enum MedicationOrderByInput {
  id_ASC
  id_DESC
  Medicalrounds_ASC
  Medicalrounds_DESC
  Discharge_ASC
  Discharge_DESC
}

type MedicationPreviousValues {
  id: ID!
  Medicalrounds: Int
  Discharge: Boolean!
}

type MedicationSubscriptionPayload {
  mutation: MutationType!
  node: Medication
  updatedFields: [String!]
  previousValues: MedicationPreviousValues
}

input MedicationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MedicationWhereInput
  AND: [MedicationSubscriptionWhereInput!]
  OR: [MedicationSubscriptionWhereInput!]
  NOT: [MedicationSubscriptionWhereInput!]
}

input MedicationUpdateInput {
  Patient: PatientinfoUpdateOneInput
  Medicalrounds: Int
  Discharge: Boolean
}

input MedicationUpdateManyMutationInput {
  Medicalrounds: Int
  Discharge: Boolean
}

input MedicationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  Patient: PatientinfoWhereInput
  Medicalrounds: Int
  Medicalrounds_not: Int
  Medicalrounds_in: [Int!]
  Medicalrounds_not_in: [Int!]
  Medicalrounds_lt: Int
  Medicalrounds_lte: Int
  Medicalrounds_gt: Int
  Medicalrounds_gte: Int
  Discharge: Boolean
  Discharge_not: Boolean
  AND: [MedicationWhereInput!]
  OR: [MedicationWhereInput!]
  NOT: [MedicationWhereInput!]
}

input MedicationWhereUniqueInput {
  id: ID
}

type Mutation {
  createMedication(data: MedicationCreateInput!): Medication!
  updateMedication(data: MedicationUpdateInput!, where: MedicationWhereUniqueInput!): Medication
  updateManyMedications(data: MedicationUpdateManyMutationInput!, where: MedicationWhereInput): BatchPayload!
  upsertMedication(where: MedicationWhereUniqueInput!, create: MedicationCreateInput!, update: MedicationUpdateInput!): Medication!
  deleteMedication(where: MedicationWhereUniqueInput!): Medication
  deleteManyMedications(where: MedicationWhereInput): BatchPayload!
  createPatientinfo(data: PatientinfoCreateInput!): Patientinfo!
  updatePatientinfo(data: PatientinfoUpdateInput!, where: PatientinfoWhereUniqueInput!): Patientinfo
  updateManyPatientinfoes(data: PatientinfoUpdateManyMutationInput!, where: PatientinfoWhereInput): BatchPayload!
  upsertPatientinfo(where: PatientinfoWhereUniqueInput!, create: PatientinfoCreateInput!, update: PatientinfoUpdateInput!): Patientinfo!
  deletePatientinfo(where: PatientinfoWhereUniqueInput!): Patientinfo
  deleteManyPatientinfoes(where: PatientinfoWhereInput): BatchPayload!
  createRoomallocate(data: RoomallocateCreateInput!): Roomallocate!
  updateRoomallocate(data: RoomallocateUpdateInput!, where: RoomallocateWhereUniqueInput!): Roomallocate
  updateManyRoomallocates(data: RoomallocateUpdateManyMutationInput!, where: RoomallocateWhereInput): BatchPayload!
  upsertRoomallocate(where: RoomallocateWhereUniqueInput!, create: RoomallocateCreateInput!, update: RoomallocateUpdateInput!): Roomallocate!
  deleteRoomallocate(where: RoomallocateWhereUniqueInput!): Roomallocate
  deleteManyRoomallocates(where: RoomallocateWhereInput): BatchPayload!
  createRoominfo(data: RoominfoCreateInput!): Roominfo!
  updateRoominfo(data: RoominfoUpdateInput!, where: RoominfoWhereUniqueInput!): Roominfo
  updateManyRoominfoes(data: RoominfoUpdateManyMutationInput!, where: RoominfoWhereInput): BatchPayload!
  upsertRoominfo(where: RoominfoWhereUniqueInput!, create: RoominfoCreateInput!, update: RoominfoUpdateInput!): Roominfo!
  deleteRoominfo(where: RoominfoWhereUniqueInput!): Roominfo
  deleteManyRoominfoes(where: RoominfoWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Patientinfo {
  id: ID!
  Patientname: String!
  PatientAddress: String!
  PatientGender: String!
  PatientPhonenumber: String!
  PatientBloodgroup: String!
  PatientSymptoms: String!
  Roomallocated: Boolean!
  Discharged: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PatientinfoConnection {
  pageInfo: PageInfo!
  edges: [PatientinfoEdge]!
  aggregate: AggregatePatientinfo!
}

input PatientinfoCreateInput {
  id: ID
  Patientname: String!
  PatientAddress: String!
  PatientGender: String!
  PatientPhonenumber: String!
  PatientBloodgroup: String!
  PatientSymptoms: String!
  Roomallocated: Boolean!
  Discharged: Boolean!
}

input PatientinfoCreateOneInput {
  create: PatientinfoCreateInput
  connect: PatientinfoWhereUniqueInput
}

type PatientinfoEdge {
  node: Patientinfo!
  cursor: String!
}

enum PatientinfoOrderByInput {
  id_ASC
  id_DESC
  Patientname_ASC
  Patientname_DESC
  PatientAddress_ASC
  PatientAddress_DESC
  PatientGender_ASC
  PatientGender_DESC
  PatientPhonenumber_ASC
  PatientPhonenumber_DESC
  PatientBloodgroup_ASC
  PatientBloodgroup_DESC
  PatientSymptoms_ASC
  PatientSymptoms_DESC
  Roomallocated_ASC
  Roomallocated_DESC
  Discharged_ASC
  Discharged_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PatientinfoPreviousValues {
  id: ID!
  Patientname: String!
  PatientAddress: String!
  PatientGender: String!
  PatientPhonenumber: String!
  PatientBloodgroup: String!
  PatientSymptoms: String!
  Roomallocated: Boolean!
  Discharged: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PatientinfoSubscriptionPayload {
  mutation: MutationType!
  node: Patientinfo
  updatedFields: [String!]
  previousValues: PatientinfoPreviousValues
}

input PatientinfoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PatientinfoWhereInput
  AND: [PatientinfoSubscriptionWhereInput!]
  OR: [PatientinfoSubscriptionWhereInput!]
  NOT: [PatientinfoSubscriptionWhereInput!]
}

input PatientinfoUpdateDataInput {
  Patientname: String
  PatientAddress: String
  PatientGender: String
  PatientPhonenumber: String
  PatientBloodgroup: String
  PatientSymptoms: String
  Roomallocated: Boolean
  Discharged: Boolean
}

input PatientinfoUpdateInput {
  Patientname: String
  PatientAddress: String
  PatientGender: String
  PatientPhonenumber: String
  PatientBloodgroup: String
  PatientSymptoms: String
  Roomallocated: Boolean
  Discharged: Boolean
}

input PatientinfoUpdateManyMutationInput {
  Patientname: String
  PatientAddress: String
  PatientGender: String
  PatientPhonenumber: String
  PatientBloodgroup: String
  PatientSymptoms: String
  Roomallocated: Boolean
  Discharged: Boolean
}

input PatientinfoUpdateOneInput {
  create: PatientinfoCreateInput
  update: PatientinfoUpdateDataInput
  upsert: PatientinfoUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: PatientinfoWhereUniqueInput
}

input PatientinfoUpsertNestedInput {
  update: PatientinfoUpdateDataInput!
  create: PatientinfoCreateInput!
}

input PatientinfoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  Patientname: String
  Patientname_not: String
  Patientname_in: [String!]
  Patientname_not_in: [String!]
  Patientname_lt: String
  Patientname_lte: String
  Patientname_gt: String
  Patientname_gte: String
  Patientname_contains: String
  Patientname_not_contains: String
  Patientname_starts_with: String
  Patientname_not_starts_with: String
  Patientname_ends_with: String
  Patientname_not_ends_with: String
  PatientAddress: String
  PatientAddress_not: String
  PatientAddress_in: [String!]
  PatientAddress_not_in: [String!]
  PatientAddress_lt: String
  PatientAddress_lte: String
  PatientAddress_gt: String
  PatientAddress_gte: String
  PatientAddress_contains: String
  PatientAddress_not_contains: String
  PatientAddress_starts_with: String
  PatientAddress_not_starts_with: String
  PatientAddress_ends_with: String
  PatientAddress_not_ends_with: String
  PatientGender: String
  PatientGender_not: String
  PatientGender_in: [String!]
  PatientGender_not_in: [String!]
  PatientGender_lt: String
  PatientGender_lte: String
  PatientGender_gt: String
  PatientGender_gte: String
  PatientGender_contains: String
  PatientGender_not_contains: String
  PatientGender_starts_with: String
  PatientGender_not_starts_with: String
  PatientGender_ends_with: String
  PatientGender_not_ends_with: String
  PatientPhonenumber: String
  PatientPhonenumber_not: String
  PatientPhonenumber_in: [String!]
  PatientPhonenumber_not_in: [String!]
  PatientPhonenumber_lt: String
  PatientPhonenumber_lte: String
  PatientPhonenumber_gt: String
  PatientPhonenumber_gte: String
  PatientPhonenumber_contains: String
  PatientPhonenumber_not_contains: String
  PatientPhonenumber_starts_with: String
  PatientPhonenumber_not_starts_with: String
  PatientPhonenumber_ends_with: String
  PatientPhonenumber_not_ends_with: String
  PatientBloodgroup: String
  PatientBloodgroup_not: String
  PatientBloodgroup_in: [String!]
  PatientBloodgroup_not_in: [String!]
  PatientBloodgroup_lt: String
  PatientBloodgroup_lte: String
  PatientBloodgroup_gt: String
  PatientBloodgroup_gte: String
  PatientBloodgroup_contains: String
  PatientBloodgroup_not_contains: String
  PatientBloodgroup_starts_with: String
  PatientBloodgroup_not_starts_with: String
  PatientBloodgroup_ends_with: String
  PatientBloodgroup_not_ends_with: String
  PatientSymptoms: String
  PatientSymptoms_not: String
  PatientSymptoms_in: [String!]
  PatientSymptoms_not_in: [String!]
  PatientSymptoms_lt: String
  PatientSymptoms_lte: String
  PatientSymptoms_gt: String
  PatientSymptoms_gte: String
  PatientSymptoms_contains: String
  PatientSymptoms_not_contains: String
  PatientSymptoms_starts_with: String
  PatientSymptoms_not_starts_with: String
  PatientSymptoms_ends_with: String
  PatientSymptoms_not_ends_with: String
  Roomallocated: Boolean
  Roomallocated_not: Boolean
  Discharged: Boolean
  Discharged_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [PatientinfoWhereInput!]
  OR: [PatientinfoWhereInput!]
  NOT: [PatientinfoWhereInput!]
}

input PatientinfoWhereUniqueInput {
  id: ID
}

type Query {
  medication(where: MedicationWhereUniqueInput!): Medication
  medications(where: MedicationWhereInput, orderBy: MedicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Medication]!
  medicationsConnection(where: MedicationWhereInput, orderBy: MedicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MedicationConnection!
  patientinfo(where: PatientinfoWhereUniqueInput!): Patientinfo
  patientinfoes(where: PatientinfoWhereInput, orderBy: PatientinfoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Patientinfo]!
  patientinfoesConnection(where: PatientinfoWhereInput, orderBy: PatientinfoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PatientinfoConnection!
  roomallocate(where: RoomallocateWhereUniqueInput!): Roomallocate
  roomallocates(where: RoomallocateWhereInput, orderBy: RoomallocateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Roomallocate]!
  roomallocatesConnection(where: RoomallocateWhereInput, orderBy: RoomallocateOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoomallocateConnection!
  roominfo(where: RoominfoWhereUniqueInput!): Roominfo
  roominfoes(where: RoominfoWhereInput, orderBy: RoominfoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Roominfo]!
  roominfoesConnection(where: RoominfoWhereInput, orderBy: RoominfoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoominfoConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Roomallocate {
  id: ID!
  Roomid: Roominfo
  Personid: Patientinfo
  Patientstatus: Boolean
  createdAt: DateTime!
  updatedAt: DateTime!
}

type RoomallocateConnection {
  pageInfo: PageInfo!
  edges: [RoomallocateEdge]!
  aggregate: AggregateRoomallocate!
}

input RoomallocateCreateInput {
  id: ID
  Roomid: RoominfoCreateOneInput
  Personid: PatientinfoCreateOneInput
  Patientstatus: Boolean
}

type RoomallocateEdge {
  node: Roomallocate!
  cursor: String!
}

enum RoomallocateOrderByInput {
  id_ASC
  id_DESC
  Patientstatus_ASC
  Patientstatus_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RoomallocatePreviousValues {
  id: ID!
  Patientstatus: Boolean
  createdAt: DateTime!
  updatedAt: DateTime!
}

type RoomallocateSubscriptionPayload {
  mutation: MutationType!
  node: Roomallocate
  updatedFields: [String!]
  previousValues: RoomallocatePreviousValues
}

input RoomallocateSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RoomallocateWhereInput
  AND: [RoomallocateSubscriptionWhereInput!]
  OR: [RoomallocateSubscriptionWhereInput!]
  NOT: [RoomallocateSubscriptionWhereInput!]
}

input RoomallocateUpdateInput {
  Roomid: RoominfoUpdateOneInput
  Personid: PatientinfoUpdateOneInput
  Patientstatus: Boolean
}

input RoomallocateUpdateManyMutationInput {
  Patientstatus: Boolean
}

input RoomallocateWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  Roomid: RoominfoWhereInput
  Personid: PatientinfoWhereInput
  Patientstatus: Boolean
  Patientstatus_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [RoomallocateWhereInput!]
  OR: [RoomallocateWhereInput!]
  NOT: [RoomallocateWhereInput!]
}

input RoomallocateWhereUniqueInput {
  id: ID
}

type Roominfo {
  id: ID!
  Status: Boolean!
}

type RoominfoConnection {
  pageInfo: PageInfo!
  edges: [RoominfoEdge]!
  aggregate: AggregateRoominfo!
}

input RoominfoCreateInput {
  id: ID
  Status: Boolean!
}

input RoominfoCreateOneInput {
  create: RoominfoCreateInput
  connect: RoominfoWhereUniqueInput
}

type RoominfoEdge {
  node: Roominfo!
  cursor: String!
}

enum RoominfoOrderByInput {
  id_ASC
  id_DESC
  Status_ASC
  Status_DESC
}

type RoominfoPreviousValues {
  id: ID!
  Status: Boolean!
}

type RoominfoSubscriptionPayload {
  mutation: MutationType!
  node: Roominfo
  updatedFields: [String!]
  previousValues: RoominfoPreviousValues
}

input RoominfoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RoominfoWhereInput
  AND: [RoominfoSubscriptionWhereInput!]
  OR: [RoominfoSubscriptionWhereInput!]
  NOT: [RoominfoSubscriptionWhereInput!]
}

input RoominfoUpdateDataInput {
  Status: Boolean
}

input RoominfoUpdateInput {
  Status: Boolean
}

input RoominfoUpdateManyMutationInput {
  Status: Boolean
}

input RoominfoUpdateOneInput {
  create: RoominfoCreateInput
  update: RoominfoUpdateDataInput
  upsert: RoominfoUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: RoominfoWhereUniqueInput
}

input RoominfoUpsertNestedInput {
  update: RoominfoUpdateDataInput!
  create: RoominfoCreateInput!
}

input RoominfoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  Status: Boolean
  Status_not: Boolean
  AND: [RoominfoWhereInput!]
  OR: [RoominfoWhereInput!]
  NOT: [RoominfoWhereInput!]
}

input RoominfoWhereUniqueInput {
  id: ID
}

type Subscription {
  medication(where: MedicationSubscriptionWhereInput): MedicationSubscriptionPayload
  patientinfo(where: PatientinfoSubscriptionWhereInput): PatientinfoSubscriptionPayload
  roomallocate(where: RoomallocateSubscriptionWhereInput): RoomallocateSubscriptionPayload
  roominfo(where: RoominfoSubscriptionWhereInput): RoominfoSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  username: String!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  username: String!
  password: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  username: String
  password: String
}

input UserUpdateManyMutationInput {
  username: String
  password: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  username: String
}
`
      }
    