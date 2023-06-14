import {
  DocumentData,
  QueryDocumentSnapshot,
  Timestamp,
} from "firebase-admin/firestore";

export {Timestamp};

export type CardUser = {
  id: string
  username: string
}

export type Dice = {
  id: number
  face: number
  isOnBoard: boolean
}

export const userConverter = {
  toFirestore: (user: User): DocumentData => user,
  fromFirestore(snapshot: QueryDocumentSnapshot<User>): User {
    return snapshot.data();
  },
};

export const diceSessionConverter = {
  toFirestore: (session: DiceSession): DocumentData => session,
  fromFirestore(snapshot: QueryDocumentSnapshot<DiceSession>): DiceSession {
    return snapshot.data();
  },
};

export const diceScoreboardConverter = {
  toFirestore: (scoreboard: DiceScoreboard): DocumentData => scoreboard,
  fromFirestore(
      snapshot: QueryDocumentSnapshot<DiceScoreboard>
  ): DiceScoreboard {
    return snapshot.data();
  },
};

export const diceSessionPlayerTurnConverter = {
  toFirestore: (playerTurn: DiceSessionPlayerTurn): DocumentData => playerTurn,
  fromFirestore(
      snapshot: QueryDocumentSnapshot<DiceSessionPlayerTurn>
  ): DiceSessionPlayerTurn {
    return snapshot.data();
  },
};

export const diceSessionRemainingTurnsConverter = {
  toFirestore: (remainingTurns: DiceSessionRemainingTurns): DocumentData =>
    remainingTurns,
  fromFirestore(
      snapshot: QueryDocumentSnapshot<DiceSessionRemainingTurns>
  ): DiceSessionRemainingTurns {
    return snapshot.data();
  },
};

export const diceSessionDicesConverter = {
  toFirestore: (dices: DiceSessionDices): DocumentData => dices,
  fromFirestore(
      snapshot: QueryDocumentSnapshot<DiceSessionDices>
  ): DiceSessionDices {
    return snapshot.data();
  },
};

export const diceSessionPlayerTriesConverter = {
  toFirestore: (playerTries: DiceSessionPlayerTries): DocumentData =>
    playerTries,
  fromFirestore(
      snapshot: QueryDocumentSnapshot<DiceSessionPlayerTries>
  ): DiceSessionPlayerTries {
    return snapshot.data();
  },
};

export const diceSessionChatConverter = {
  toFirestore: (chat: DiceSessionChat): DocumentData => chat,
  fromFirestore(
      snapshot: QueryDocumentSnapshot<DiceSessionChat>
  ): DiceSessionChat {
    return snapshot.data();
  },
};

export const diceSessionScoreConverter = {
  toFirestore: (score: DiceSessionScore): DocumentData => score,
  fromFirestore(
      snapshot: QueryDocumentSnapshot<DiceSessionScore>
  ): DiceSessionScore {
    return snapshot.data();
  },
};

export type User = {
  id: string
  email: string
  username: string
  creationDate: Timestamp
  updateDate: Timestamp
}

export type DiceSession = {
  id: string
  players: CardUser[]
  isFull: boolean
  isStarted: boolean
  isFinished: boolean
  creationDate: Timestamp
}

export type DiceSessionPlayerTurn = {
  id: string
  playerId: string
}

export type DiceSessionRemainingTurns = {
  id: string
  remainingTurns: number
}

export type DiceSessionDices = {
  id: string
  dices: Dice[]
}

export type DiceSessionPlayerTries = {
  id: string
  tries: number
}

export type DiceSessionChat = {
  id: string
  messages?: {
    userId: string
    username: string
    message: string
  }[]
}

export type DiceScoreboard = {
  userId: string
  username: string
  games: number
  maxScore: number
  averageScore: number
  totalScore: number
  victories: number
  dice: number
}


export type DiceSessionScore = {
  id: string
  playerOne: {
    id: string
    username: string
    one: number|null
    two: number|null
    three: number|null
    four: number|null
    five: number|null
    six: number|null
    bonus: number
    threeOfAKind: number|null
    fourOfAKind: number|null
    fullHouse: number|null
    smallStraight: number|null
    largeStraight: number|null
    chance: number|null
    dice: number|null
    total: number
  }
  playerTwo: {
    id: string
    username: string
    one: number|null
    two: number|null
    three: number|null
    four: number|null
    five: number|null
    six: number|null
    bonus: number
    threeOfAKind: number|null
    fourOfAKind: number|null
    fullHouse: number|null
    smallStraight: number|null
    largeStraight: number|null
    chance: number|null
    dice: number|null
    total: number
  }
  playerThree?: {
    id: string
    username: string
    one: number|null
    two: number|null
    three: number|null
    four: number|null
    five: number|null
    six: number|null
    bonus: number
    threeOfAKind: number|null
    fourOfAKind: number|null
    fullHouse: number|null
    smallStraight: number|null
    largeStraight: number|null
    chance: number|null
    dice: number|null
    total: number
  }
  playerFour?: {
    id: string
    username: string
    one: number|null
    two: number|null
    three: number|null
    four: number|null
    five: number|null
    six: number|null
    bonus: number
    threeOfAKind: number|null
    fourOfAKind: number|null
    fullHouse: number|null
    smallStraight: number|null
    largeStraight: number|null
    chance: number|null
    dice: number|null
    total: number
  }
  creationDate?: Timestamp
}
