import { SugarFileState, Action } from './types';

export default function uploadReducer(
  state: SugarFileState[],
  action: Action
): SugarFileState[] {
  switch (action.type) {
    case 'TRY_UPLOAD': {
      const { file, uuid } = action.payload;

      const newFile: SugarFileState = {
        file,
        uuid,
        shareableLink: '',
        upload: {
          state: true,
          progress: 0,
        },
        error: {
          state: null,
        },
      };

      return [newFile, ...state];
    }

    case 'RETRY_UPLOAD': {
      const { uuid } = action.payload;
      
      const newState = state.map((file) => {
        if (file.uuid === uuid) {
          return {
            ...file,
            upload: {
              state: true,
              progress: 0,
            },
            error: {
              state: null,
            },
          };
        }
        return file;
      });

      return newState;
    }

    case 'SET_SHAREABLE_LINK': {
      const { uuid, shareableLink } = action.payload;

      const newState = state.map((file) => {
        if (file.uuid === uuid) {
          return {
            ...file,
            shareableLink: shareableLink,
          };
        }
        return file;
      });

      return newState;
    }

    case 'SET_ERROR': {
      const { uuid, error } = action.payload;
      const { state: errorState, text, hint } = error;

      const newState = state.map((file) => {
        if (file.uuid === uuid) {
          return {
            ...file,
            error: {
              state: errorState,
              text,
              hint,
            },
          };
        }
        return file;
      });

      return newState;
    }

    case 'CANCEL_UPLOAD': {
      const { uuid } = action.payload;

      return [...state.filter((file) => file.uuid !== uuid)];
    }

    case 'UPDATE_PROGRESS': {
      const { uuid, progress } = action.payload;

      const newState = state.map((file) => {
        if (file.uuid === uuid) {
          return {
            ...file,
            upload: {
              ...file.upload,
              progress,
            },
          };
        }
        return file;
      });

      return newState;
    }
  }
}
