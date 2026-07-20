import React from 'react';
import type { SidebarItem, SubItem } from '../../lib/cabinet-mock';
import { questionsMock } from '../../lib/questions-mock';
import { getThemeProgress, resetThemeProgress } from '../../lib/theme-progress';

interface SubCategoriesProps {
  item: SidebarItem | null;
  onClose: () => void;
  onToggleCheck: (id: string) => void;
  onBulkToggle: (ids: string[], shouldSelect: boolean) => void;
  onSelectTheme: (id: string) => void;
  selectedIds: string[];
}

const SubCategories: React.FC<SubCategoriesProps> = ({ item, onClose, onToggleCheck, onBulkToggle, onSelectTheme, selectedIds }) => {
  const handleSubItemClick = (subItem: SubItem) => {
    const { answers } = getThemeProgress(subItem.id);
    if (answers.success > 0) {
      // Заполняем данные в modalCompletedOn
      const modal = document.getElementById('modalCompletedOn');
      if (modal) {
        const progress = getThemeProgress(subItem.id);
        const dateStr = progress.lastDate || new Date().toLocaleDateString('ru-RU');
        const total = progress.answers.success + progress.answers.fail;

        const historyTime = modal.querySelector('.history-time');
        const totalEl = modal.querySelector('.total');
        const passedEl = modal.querySelector('.passed');
        const failEl = modal.querySelector('.fail');
        const dialogTitle = modal.querySelector('.dialog-title');

        if (historyTime) historyTime.textContent = dateStr;
        if (totalEl) totalEl.textContent = String(total);
        if (passedEl) passedEl.textContent = String(progress.answers.success);
        if (failEl) failEl.textContent = String(progress.answers.fail);
        if (dialogTitle) dialogTitle.innerHTML = `Вы проходили эту тему <br><span class="history-time">${dateStr}</span>`;

        // Кнопка "Начать заново" — сбрасывает прогресс
        const repeatBtn = modal.querySelector('.repeat-all');
        const continueBtn = modal.querySelector('.theme-more');
        if (repeatBtn) {
          (repeatBtn as HTMLElement).onclick = (e) => {
            e.preventDefault();
            modal.style.display = 'none';
            resetThemeProgress(subItem.id);
            onSelectTheme(subItem.id);
          };
        }
        // Кнопка "Продолжить" — продолжает с последнего
        if (continueBtn) {
          (continueBtn as HTMLElement).onclick = (e) => {
            e.preventDefault();
            modal.style.display = 'none';
            onSelectTheme(subItem.id);
          };
        }

        // Закрытие по крестику
        const closeBtn = modal.querySelector('.close-modal');
        if (closeBtn) {
          (closeBtn as HTMLElement).onclick = () => { modal.style.display = 'none'; };
        }

        modal.style.display = 'block';
      } else {
        onSelectTheme(subItem.id);
      }
    } else {
      onSelectTheme(subItem.id);
    }
  };

  // Группировка подтем по уровням (A1, A2, B1, B2 и т.д.)
  const groupedSubItems: Record<string, SubItem[]> = {};
  
  if (item && item.subItems) {
    item.subItems.forEach(subItem => {
      // Пытаемся извлечь уровень из заголовка или URL
      // В URL обычно есть формат -a1-, -a2-
      const match = subItem.url.match(/-([ab][12])-/i);
      const level = match ? match[1].toUpperCase() : 'Другое';
      
      if (!groupedSubItems[level]) {
        groupedSubItems[level] = [];
      }
      groupedSubItems[level].push(subItem);
    });
  }

  const levels = Object.keys(groupedSubItems).sort();

  const handleLevelToggle = (level: string) => {
    const levelSubItemIds = groupedSubItems[level].map(si => si.id);
    const allSelected = levelSubItemIds.every(id => selectedIds.includes(id));
    
    onBulkToggle(levelSubItemIds, !allSelected);
  };

  const isLevelSelected = (level: string) => {
    return groupedSubItems[level].every(si => selectedIds.includes(si.id));
  };

  return (
    <div className={`sub-categories ${item ? 'open' : ''}`}>
      <button type="button" className="close-subcat close-subcat--js" onClick={onClose}>
        <img src="/img/close.svg" alt="Закрыть" />
      </button>
      
      {item && (
        <div data-parent={item.id} style={{ display: 'block' }}>
          <div className="subcat-title">{item.title}</div>
          
          <a 
            className="btn btn-blue" 
            href="javascript:void(0)"
            onClick={() => {
              if (item.subItems && item.subItems.length > 0) {
                onBulkToggle(item.subItems.map(s => s.id), true);
              }
              onSelectTheme(item.id);
            }}
          >
            Тренировать все
          </a>
          

          <ul className="list-category-2">
            {levels.map(level => (
              <li key={level} className="">
                <input 
                  type="checkbox" 
                  className="questions-check" 
                  checked={isLevelSelected(level)}
                  onChange={() => handleLevelToggle(level)}
                />
                <div className="list-header">
                  <a href="javascript:void(0)">{level}</a>
                  <div className="th">Прогресс</div>
                  <div className="th">Верно / Неверно</div>
                </div>
                
                <ul className="list-category-3">
                  {groupedSubItems[level].map(subItem => (
                    <li key={subItem.id}>
                      <input 
                        type="checkbox" 
                        className="questions-check" 
                        checked={selectedIds.includes(subItem.id)}
                        onChange={() => onToggleCheck(subItem.id)}
                      />
                      <a 
                        href="javascript:void(0)" 
                        onClick={(e) => {
                          e.preventDefault();
                          handleSubItemClick(subItem);
                        }}
                      >
                        {subItem.title}
                      </a>
                      
                      {(() => {
                        const total = (questionsMock[subItem.id] || []).length;
                        const { answers } = getThemeProgress(subItem.id);
                        const percent = total > 0 ? Math.min(100, Math.round((answers.success / total) * 100)) : 0;

                        return (
                          <>
                            <div className="item-progress">
                              <div className="val">
                                {answers.success} / {total}
                              </div>
                              <div className="bar">
                                <span style={{ width: `${percent}%` }}></span>
                              </div>
                            </div>

                            <div className="item-counter">
                              <span className="green">{answers.success}</span> / <span className="red">{answers.fail}</span>
                            </div>
                          </>
                        );
                      })()}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SubCategories;
