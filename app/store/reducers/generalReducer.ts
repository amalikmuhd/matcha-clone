import {fromTokenSelect} from '@/app/interface/FromTokenSelect';
import {FROM_TOKEN_SELECT, TO_TOKEN_SELECT} from '../types';
import {toTokenSelect} from '@/app/interface/ToTokenSelect';

const initialState: fromTokenSelect = {
  tokenData: {
    address: '0x6c862f803ff42a97d4a483ab761256ad8c90f4f8',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/13613/thumb/Elis-Symbol-Green.png?1610285892',
    name: 'ELIS',
    symbol: 'XLS',
  },
};

const toInitialState: toTokenSelect = {
  tokenData: {
    address: '0x6c862f803ff42a97d4a483ab761256ad8c90f4f8',
    chainId: 1,
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/13613/thumb/Elis-Symbol-Green.png?1610285892',
    name: 'ELIS',
    symbol: 'XLS',
  },
};

const fromTokenSelect = (
  state = initialState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    case FROM_TOKEN_SELECT:
      return {
        ...state,
        tokenData: action.payload,
      };
    default:
      return state;
  }
};

const toTokenSelect = (
  state = toInitialState,
  action: {type: string; payload: any},
) => {
  switch (action.type) {
    case TO_TOKEN_SELECT:
      return {
        ...state,
        tokenData: action.payload,
      };
    // other cases...
    default:
      return state;
  }
};

export {fromTokenSelect, toTokenSelect};
