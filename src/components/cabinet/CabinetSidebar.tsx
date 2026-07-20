import React, { useState, useEffect } from 'react';
import { cabinetCategories, type SidebarItem } from '../../lib/cabinet-mock';
import SubCategories from './SubCategories';

interface CabinetSidebarProps {
  onSelectTheme: (id: string, categoryId: string) => void;
}

const CabinetSidebar: React.FC<CabinetSidebarProps> = ({ onSelectTheme }) => {
  const [selectedItem, setSelectedItem] = useState<SidebarItem | null>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  useEffect(() => {
    if (selectedItem) {
      const savedCategory = localStorage.getItem('category');
      if (savedCategory === selectedItem.id) {
        const savedItems = localStorage.getItem('selectedItems');
        if (savedItems) {
          try {
            setSelectedIds(JSON.parse(savedItems));
          } catch (e) {
            setSelectedIds([]);
          }
        }
      } else {
        setSelectedIds([]);
      }
    }
  }, [selectedItem]);

  const handleItemClick = (item: SidebarItem) => {
    setSelectedItem(item);
  };

  const handleCloseSubcat = () => {
    setSelectedItem(null);
  };

  const handleToggleCheck = (id: string) => {
    setSelectedIds(prev => {
      const newIds = prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id];
      updateStorage(newIds);
      return newIds;
    });
  };

  const handleBulkToggle = (ids: string[], shouldSelect: boolean) => {
    setSelectedIds(prev => {
      let newIds;
      if (shouldSelect) {
        // Add all that are not already in
        const toAdd = ids.filter(id => !prev.includes(id));
        newIds = [...prev, ...toAdd];
      } else {
        // Remove all that are in
        newIds = prev.filter(id => !ids.includes(id));
      }
      updateStorage(newIds);
      return newIds;
    });
  };

  const handleSelectTheme = (id: string) => {
    if (selectedItem) {
      localStorage.setItem('activeTheme', id);
      localStorage.setItem('activeCategory', selectedItem.id);
      onSelectTheme(id, selectedItem.id);
    }
    setSelectedItem(null);
  };

  const updateStorage = (ids: string[]) => {
    if (selectedItem) {
      localStorage.setItem('category', selectedItem.id);
      localStorage.setItem('selectedItems', JSON.stringify(ids));
    }
  };

  return (
    <aside className="sidebar">
      <div className="inner">
        <div className="users-categories first-categories">
          <div className="users-questions">
            <p>Мои темы</p>
            <a 
              className="btn btn-link modal-trigger" 
              href="javascript:void(0)" 
              data-modal="modalQC"
            >
              Добавить тему
            </a>
          </div>

          {cabinetCategories.map((group, groupIdx) => (
            <React.Fragment key={groupIdx}>
              <p>{group.title}</p>
              <ul>
                {group.items.map((item) => (
                  <li key={item.id}>
                    <a 
                      href="javascript:void(0)" 
                      className={`dropdown-toggle ${selectedItem?.id === item.id ? 'open' : ''}`}
                      onClick={() => handleItemClick(item)}
                      data-child={item.id}
                    >
                      {item.title}
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20" fill="none">
                        <path d="M0 20L10 10L0 0" fill="black" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ))}
        </div>

        <SubCategories 
          item={selectedItem} 
          onClose={handleCloseSubcat}
          onToggleCheck={handleToggleCheck}
          onBulkToggle={handleBulkToggle}
          onSelectTheme={handleSelectTheme}
          selectedIds={selectedIds}
        />
      </div>
    </aside>
  );
};

export default CabinetSidebar;
