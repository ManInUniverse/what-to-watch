import { NameSpace } from '../../../const';
import { State } from '../../../types/store';
import { AuthorizationStatus } from '../../../const';
import { UserData } from '../../../types/user-data';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export const getAuthCheckedStatus = (state: State): boolean => state[NameSpace.User].authorizationStatus !== AuthorizationStatus.Unknown;

export const getUserData = (state: State): UserData | null => state[NameSpace.User].userData;

export const getUserProcessingStatus = (state: State): boolean => state[NameSpace.User].isUserProcessing;
