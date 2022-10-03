export type ErrorState = null | 'retriable' | 'non-retriable';

export type Action =
  | { type: 'TRY_UPLOAD'; payload: { file: File; uuid: string } }
  | { type: 'RETRY_UPLOAD'; payload: { uuid: string } }
  | { type: 'CANCEL_UPLOAD'; payload: { uuid: string } }
  | {
      type: 'SET_SHAREABLE_LINK';
      payload: { uuid: string; shareableLink: string };
    }
  | {
      type: 'SET_ERROR';
      payload: {
        uuid: string;
        error: {
          state: ErrorState;
          text: string;
          hint?: string;
        };
      };
    }
  | {
      type: 'UPDATE_PROGRESS';
      payload: { uuid: string; progress: number };
    };

export type SugarFileState = {
  file: File | { name: string };
  shareableLink: string;
  uuid: string;
  upload: {
    state: boolean;
    progress: number;
  };
  error: {
    state: ErrorState;
    text?: string;
    hint?: string;
  };
};
