
import React, { useState, useEffect } from 'react';
import CabinetSidebar from './CabinetSidebar';
import ExerciseForm from './ExerciseForm';
import { cabinetCategories } from '../../lib/cabinet-mock';
import { useSubscription } from '../../hooks/useSubscription';
import { canAccessExercise } from '../../lib/subscription-access';

const CabinetModule: React.FC = () => {
  const [selectedThemeId, setSelectedThemeId] = useState<string | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const { isSubscribed, loading: subscriptionLoading } = useSubscription();

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
      <style>{`
        .lock-inline {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-left: auto;
          color: #ff9d00;
          font-size: 11px;
          font-weight: 500;
          flex-shrink: 0;
        }
        .lock-inline img {
          width: 18px !important;
          height: 18px !important;
          margin-bottom: 0 !important;
        }
        .list-category-3 li.locked {
          position: relative;
        }
        .list-category-3 li a {
          display: flex !important;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding-right: 5px;
          overflow: hidden;
          flex-wrap: nowrap;
        }
        .list-category-3 li.locked a {
          opacity: 0.6;
        }
        .sub-item-title {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          flex: 1;
          min-width: 0;
        }
      `}</style>
      <CabinetSidebar onSelectTheme={handleSelectTheme} />
      <main className="main-secondary">
        <div id="tasks-list">
          {subscriptionLoading ? (
            <div className="list-view">
              <div className="question-title">Проверяю доступ…</div>
            </div>
          ) : selectedThemeId && canAccessExercise(selectedThemeId, isSubscribed) ? (
            <ExerciseForm
              themeId={selectedThemeId}
              categoryId={selectedCategoryId || undefined}
              isSubscribed={isSubscribed}
            />
          ) : selectedThemeId ? (
            <div className="list-view">
              <div className="question-title">Это упражнение доступно после оплаты</div>
              <div className="quest-flex d-flex">
                <div className="box question-box" data-exercise-owner="react">
                  <div className="text" style={{ textAlign: 'center', padding: '40px' }}>
                    <a className="btn btn-blue" href="/checkout">Выбрать тариф</a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="list-view">
              <div className="question-title">Выберите тему в сайдбаре, чтобы начать</div>
              <div className="quest-flex d-flex">
                <div className="box question-box" data-exercise-owner="react">
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
