'use client';
import {toTokenSelect} from '@/app/interface/toTokenSelect';
import {FROM_TOKEN_SELECT, TO_TOKEN_SELECT} from '../types';
import {fromTokenSelect} from '@/app/interface/FromTokenSelect';

export const getFromTokenSelect = (tokenData: fromTokenSelect) => {
  return {
    type: FROM_TOKEN_SELECT,
    payload: tokenData,
  };
};

export const getToTokenSelect = (tokenData: toTokenSelect) => {
  return {
    type: TO_TOKEN_SELECT,
    payload: tokenData,
  };
};
