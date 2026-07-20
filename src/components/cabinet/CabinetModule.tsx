
import React, { useState, useEffect } from 'react';
import CabinetSidebar from './CabinetSidebar';
import ExerciseForm from './ExerciseForm';
import { cabinetCategories } from '../../lib/cabinet-mock';

const CabinetModule: React.FC = () => {
  const [selectedThemeId, setSelectedThemeId] = useState<string | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  useEffect(() => {
    const syncFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const themeId = params.get('category');
      
      if (themeId) {
        setSelectedThemeId(themeId);
        // Найти родительскую категорию для сайдбара
        let foundCategoryId = null;
        for (const group of cabinetCategories) {
          const item = group.items.find(i => i.id === themeId || i.subItems.some(s => s.id === themeId));
          if (item) {
            foundCategoryId = item.id;
            break;
          }
        }
        setSelectedCategoryId(foundCategoryId);
      } else {
        const savedTheme = localStorage.getItem('activeTheme');
        const savedCategory = localStorage.getItem('activeCategory');
        if (savedTheme && savedCategory) {
          setSelectedThemeId(savedTheme);
          setSelectedCategoryId(savedCategory);
        }
      }
    };

    syncFromUrl();
    window.addEventListener('popstate', syncFromUrl);
    return () => window.removeEventListener('popstate', syncFromUrl);
  }, []);

  const handleSelectTheme = (themeId: string, categoryId: string) => {
    setSelectedThemeId(themeId);
    setSelectedCategoryId(categoryId);
    
    const url = new URL(window.location.href);
    url.searchParams.set('category', themeId);
    url.searchParams.delete('page'); // Сброс страницы при смене темы
    window.location.href = url.toString();
  };

  return (
    <div className="pt-76 d-flex w-100">
      <CabinetSidebar onSelectTheme={handleSelectTheme} />
      <main className="main-secondary">
        <div id="tasks-list">
          {selectedThemeId ? (
            <ExerciseForm themeId={selectedThemeId} categoryId={selectedCategoryId || undefined} />
          ) : (
            <div className="list-view">
              <div className="question-title">Выберите тему в сайдбаре, чтобы начать</div>
              <div className="quest-flex d-flex">
                <div className="box question-box">
                    <div className="text" style={{ textAlign: 'center', padding: '40px' }}>
                        Здесь будут отображаться ваши упражнения
                    </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CabinetModule;
