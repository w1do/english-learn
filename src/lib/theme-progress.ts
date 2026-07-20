export interface ThemeProgressState {
  category: string;
  answers: {
    success: number;
    fail: number;
  };
  lastDate?: string;
}

type ThemeProgressMap = Record<string, ThemeProgressState>;

const STORAGE_KEY = 'themeProgress';

const readMap = (): ThemeProgressMap => {
  if (typeof window === 'undefined') return {};

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
};

const writeMap = (map: ThemeProgressMap) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
};

export const getAllThemeProgress = (): ThemeProgressMap => readMap();

export const getThemeProgress = (themeId: string): ThemeProgressState => {
  const map = readMap();
  return map[themeId] || { category: themeId, answers: { success: 0, fail: 0 } };
};

export const registerThemeAnswer = (themeId: string, categoryId: string, isCorrect: boolean): ThemeProgressState => {
  const map = readMap();
  const current = map[themeId] || { category: categoryId, answers: { success: 0, fail: 0 } };

  const updated: ThemeProgressState = {
    category: categoryId,
    answers: {
      success: current.answers.success + (isCorrect ? 1 : 0),
      fail: current.answers.fail + (isCorrect ? 0 : 1),
    },
    lastDate: new Date().toLocaleDateString('ru-RU'),
  };

  map[themeId] = updated;
  writeMap(map);

  return updated;
};

export const resetThemeProgress = (themeId: string): void => {
  const map = readMap();
  delete map[themeId];
  writeMap(map);
};
