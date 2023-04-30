import {
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  Timestamp as FirestoreTimestamp
} from '@firebase/firestore'
import { Timestamp, User, Word, LvSession, DiceSession } from '~/functions/src/types'

type NestedTypeMapper<T, I, O> = T extends I
  ? O
  : {
      [Property in keyof T]: T[Property] extends
        | Date
        | FirestoreTimestamp
        | Timestamp
        ? T[Property] extends I
          ? O
          : T[Property]
        : NestedTypeMapper<T[Property], I, O>
    }

type DatabaseUserType = NestedTypeMapper<User, Timestamp, FirestoreTimestamp>
export type LocalUserType = NestedTypeMapper<User, Timestamp, Date>
export const userConverter: FirestoreDataConverter<LocalUserType> = {
  toFirestore: item => item,
  fromFirestore: (
    snapshot: QueryDocumentSnapshot<DatabaseUserType>,
    options
  ) => {
    const data = snapshot.data(options)
    return {
      ...data,
      id: snapshot.id,
      creationDate: data.creationDate.toDate(),
      updateDate: data.updateDate.toDate()
    }
  }
}

type databaseWordType = NestedTypeMapper<Word, Timestamp, FirestoreTimestamp>
export type LocalWordType = NestedTypeMapper<Word, Timestamp, Date>
export const wordConverter: FirestoreDataConverter<LocalWordType> = {
  toFirestore: item => item,
  fromFirestore: (
    snapshot: QueryDocumentSnapshot<databaseWordType>,
    options
  ) => {
    const data = snapshot.data(options)
    return {
      ...data,
      id: snapshot.id
    }
  }
}

type DatabaseLvSessionType = NestedTypeMapper<
  LvSession,
  Timestamp,
  FirestoreTimestamp
>
export type LocalLvSessionType = NestedTypeMapper<LvSession, Timestamp, Date>
export const lvSessionConverter: FirestoreDataConverter<LocalLvSessionType> = {
  toFirestore: item => item,
  fromFirestore: (
    snapshot: QueryDocumentSnapshot<DatabaseLvSessionType>,
    options
  ) => {
    const data = snapshot.data(options)
    return {
      ...data,
      id: snapshot.id,
      creationDate: data.creationDate.toDate()
    }
  }
}

type DatabaseDiceSessionType = NestedTypeMapper<
  DiceSession,
  Timestamp,
  FirestoreTimestamp
>
export type LocalDiceSessionType = NestedTypeMapper<DiceSession, Timestamp, Date>
export const diceSessionConverter: FirestoreDataConverter<LocalDiceSessionType> = {
  toFirestore: item => item,
  fromFirestore: (
    snapshot: QueryDocumentSnapshot<DatabaseDiceSessionType>,
    options
  ) => {
    const data = snapshot.data(options)
    return {
      ...data,
      id: snapshot.id,
      creationDate: data.creationDate.toDate()
    }
  }
}
