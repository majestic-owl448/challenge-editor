export interface ChallengeData {
  name: string;
  id: string;
  path: string;
}

export interface ChallengeDataWithBlock {
  steps: ChallengeData[];
  currentBlock: string;
  currentSuperBlock: string;
  currentBlockLabel?: string;
}
