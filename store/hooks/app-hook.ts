import { useAppStore } from '../store';

export const useApp = () => {
  const {
    _getTaxonomies
  } = useAppStore();

  return {
    _getTaxonomies
  };
};
