
import React, { useState, useEffect, useRef } from 'react';
import { questionsMock, type Question } from '../../lib/questions-mock';
import { registerThemeAnswer, getThemeProgress, resetThemeProgress } from '../../lib/theme-progress';
import { cabinetCategories } from '../../lib/cabinet-mock';

interface ExerciseFormProps {
  themeId: string;
  categoryId?: string;
}

const ExerciseForm: React.FC<ExerciseFormProps> = ({ themeId, categoryId }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [themeTitle, setThemeTitle] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [gaveUp, setGaveUp] = useState(false);
  const [hintCount, setHintCount] = useState(3);
  const [progress, setProgress] = useState({ correct: 0, incorrect: 0 });
  const [finished, setFinished] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const focusInputAfterRetryRef = useRef(false);

  useEffect(() => {
    let themeQuestions: Question[] = [];
    let title = '';
    
    // Поиск заголовка темы и вопросов
    for (const group of cabinetCategories) {
      const item = group.items.find((i: any) => i.id === themeId);
      if (item) {
        title = item.title;
        if (questionsMock[themeId]) {
          themeQuestions = [...questionsMock[themeId]];
        }
        item.subItems.forEach((sub: any) => {
          if (questionsMock[sub.id]) {
            themeQuestions = [...themeQuestions, ...questionsMock[sub.id]];
          }
        });
        break;
      }
      
      const parentItem = group.items.find(i => i.subItems.some(s => s.id === themeId));
      const subItem = parentItem?.subItems.find(s => s.id === themeId);
      if (subItem) {
        title = subItem.title;
        if (questionsMock[themeId]) {
          themeQuestions = questionsMock[themeId];
        } else if (parentItem) {
          // Если у subItem нет своих вопросов — берём все вопросы родительской категории
          title = parentItem.title + ' — ' + subItem.title;
          if (questionsMock[parentItem.id]) {
            themeQuestions = [...questionsMock[parentItem.id]];
          }
          parentItem.subItems.forEach((sub: any) => {
            if (questionsMock[sub.id]) {
              themeQuestions = [...themeQuestions, ...questionsMock[sub.id]];
            }
          });
        }
        break;
      }
    }

    // Если все еще пусто, пробуем найти по категории (categoryId)
    if (themeQuestions.length === 0 && categoryId && questionsMock[categoryId]) {
      themeQuestions = questionsMock[categoryId];
    }

    setQuestions(themeQuestions);
    setThemeTitle(title || 'Упражнение');
    // Продолжить с последнего: стартуем с индекса = кол-во успешных ответов
    const params = new URLSearchParams(window.location.search);
    const pageParam = params.get('page');
    const savedProgress = getThemeProgress(themeId);
    
    let startIndex = 0;
    if (pageParam) {
      const p = parseInt(pageParam) - 1;
      if (!isNaN(p) && p >= 0 && (themeQuestions.length === 0 || p < themeQuestions.length)) {
        startIndex = p;
      }
    } else {
      startIndex = Math.min(savedProgress.answers.success, themeQuestions.length > 0 ? themeQuestions.length - 1 : 0);
    }
    
    setCurrentIndex(startIndex);
    setProgress({ correct: savedProgress.answers.success, incorrect: savedProgress.answers.fail });
    setUserInput('');
    setShowResult(false);
    setHintCount(3);
  }, [themeId]);

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const page = params.get('page');
      if (page) {
        const p = parseInt(page) - 1;
        if (!isNaN(p) && p >= 0 && p < questions.length) {
          setCurrentIndex(p);
          setUserInput('');
          setShowResult(false);
          setIsCorrect(false);
          setGaveUp(false);
          setHintCount(3);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [questions]);

  useEffect(() => {
    if (questions.length > 0) {
      // Синхронизация состояния вопроса в зависимости от прогресса
      if (currentIndex < progress.correct) {
        // Пройденный вопрос: показываем правильный ответ и отключаем редактирование
        const ans = questions[currentIndex]?.answer || '';
        setUserInput(ans);
        setShowResult(true);
        setIsCorrect(true);
        setGaveUp(false);
      } else {
        // Текущий или будущий вопрос: сбрасываем состояние и разрешаем ввод только для текущего
        setUserInput('');
        setShowResult(false);
        setIsCorrect(false);
        setGaveUp(false);
        setHintCount(3);
      }
    }
  }, [currentIndex, questions, progress.correct]);

  useEffect(() => {
    if (!showResult && focusInputAfterRetryRef.current && inputRef.current) {
      const input = inputRef.current;
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
      focusInputAfterRetryRef.current = false;
    }
  }, [showResult]);

  const currentQuestion = questions[currentIndex];

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(e.currentTarget.value);
  };

  const handleRetry = () => {
    if (showResult && !isCorrect && currentIndex === progress.correct) {
      focusInputAfterRetryRef.current = true;
      setShowResult(false);
      setGaveUp(false);
    }
  };

  const handleResultKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleRetry();
    }
  };

  const handleCheck = () => {
    if (!currentQuestion) return;
    
    if (userInput.trim() === '') {
      setShowResult(true);
      setIsCorrect(false);
      setGaveUp(false);
      return;
    }
    
    const normalizedUser = userInput.trim().toLowerCase().replace(/[.,!?;]/g, '');
    const normalizedAnswer = currentQuestion.answer.toLowerCase().replace(/[.,!?;]/g, '');
    
    const correct = normalizedUser === normalizedAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    setGaveUp(false);
    
    if (correct) {
      setProgress(prev => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setProgress(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }

    registerThemeAnswer(themeId, categoryId || themeId, correct);

    if (correct) {
      setTimeout(() => {
        if (currentIndex < questions.length - 1) {
          const nextIndex = currentIndex + 1;
          const url = new URL(window.location.href);
          url.searchParams.set('page', (nextIndex + 1).toString());
          window.location.href = url.toString();
        } else {
          setFinished(true);
        }
      }, 800);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      const nextIndex = currentIndex + 1;
      const url = new URL(window.location.href);
      url.searchParams.set('page', (nextIndex + 1).toString());
      window.location.href = url.toString();
    } else if (currentIndex === questions.length - 1 && showResult) {
      setFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      const url = new URL(window.location.href);
      url.searchParams.set('page', (prevIndex + 1).toString());
      window.location.href = url.toString();
    }
  };

  const handleHint = () => {
    if (hintCount > 0 && currentQuestion) {
      const words = currentQuestion.answer.split(' ');
      const currentWords = userInput.trim().split(' ').filter(w => w !== '');
      const nextWordIndex = currentWords.length;
      
      if (nextWordIndex < words.length) {
        const nextWord = words[nextWordIndex];
        const newInput = [...currentWords, nextWord].join(' ') + ' ';
        setUserInput(newInput);
        setHintCount(prev => prev - 1);
        if (showResult) {
          focusInputAfterRetryRef.current = true;
          setShowResult(false);
          setGaveUp(false);
        } else {
          requestAnimationFrame(() => {
            if (inputRef.current) {
              inputRef.current.focus();
              inputRef.current.setSelectionRange(newInput.length, newInput.length);
            }
          });
        }
      }
    }
  };

  const handleGiveUp = () => {
    setShowResult(true);
    setIsCorrect(false);
    setGaveUp(true);
    setProgress(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));

    registerThemeAnswer(themeId, categoryId || themeId, false);

    if (currentIndex === questions.length - 1) {
      setTimeout(() => {
        setFinished(true);
      }, 1500);
    }
  };

  const handlePlayAudio = () => {
    if (currentQuestion?.audio) {
      const audio = new Audio(currentQuestion.audio);
      audio.play().catch(err => console.error("Audio playback failed:", err));
    }
  };

  const handleRepeat = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('page', '1');
    window.location.href = url.toString();
  };

  const handleCloseModal = () => {
    setFinished(false);
  };

  const progressPercent = questions.length > 0 ? (currentIndex / questions.length) * 100 : 0;

  if (questions.length === 0) {
    return (
        <div className="list-view">
            <div className="question-title">{themeTitle || 'Загрузка...'}</div>
            <div className="quest-flex d-flex">
              <div className="box question-box" data-exercise-owner="react">
                  <div className="text" style={{ textAlign: 'center', padding: '40px' }}>
                      Для этой темы упражнения еще не добавлены. Попробуйте другую тему или выберите "Тренировать все" в основной категории.
                  </div>
              </div>
            </div>
        </div>
    );
  }

  const inputClasses = [
    'phrase-input',
    userInput.trim().length === 0 ? 'is-empty' : '',
    showResult ? (isCorrect ? 'success' : 'error') : ''
  ].filter(Boolean).join(' ');

  const renderResultContent = () => {
    if (isCorrect) {
      return <span>{currentQuestion.answer}</span>;
    }

    if (!showResult) {
      return null;
    }

    const userWords = userInput.trim().split(/\s+/);
    const correctWords = currentQuestion.answer.trim().split(/\s+/);

    return userWords.map((word, i) => {
      if (!word) return null;
      
      const normalizedUser = word.toLowerCase().replace(/[.,!?;]/g, '');
      const normalizedCorrect = correctWords[i] ? correctWords[i].toLowerCase().replace(/[.,!?;]/g, '') : null;
      
      let className = '';
      if (normalizedUser === normalizedCorrect) {
        className = 'matched-word';
      } else {
        className = 'correct-word';
      }
      
      return <span key={i} className={className}>{word}{' '}</span>;
    });
  };

  return (
    <div className="list-view">
      <div className="question-title">{themeTitle}</div>
      <div className="quest-flex d-flex">
        <div className="box question-box" data-exercise-owner="react">
          <div className="progress" title="Ваш прогресс">
            <span style={{ width: `${progressPercent}%` }} className={`fill-${Math.round(progressPercent / 10) * 10}`}></span>
          </div>

          <div className="text">{currentQuestion.text}</div>
          
          <div className="res">
            <div className="green">{progress.correct} верно</div>
            <div className="orange">{progress.incorrect} неверно</div>
          </div>

          <div className="cover_outside">
            <div className="form-block">
              <div className="current-task" data-question-id={currentQuestion.id} data-help-count={hintCount}>
                <div className="label" style={{ display: 'none' }}>Введите перевод фразы в поле ниже</div>

                <div className="input-wrapper">
                  {showResult ? (
                    <div
                      className={inputClasses}
                      id="phraseInputResult"
                      onClick={handleRetry}
                      onKeyDown={handleResultKeyDown}
                      role={!isCorrect && currentIndex === progress.correct ? 'button' : undefined}
                      tabIndex={!isCorrect && currentIndex === progress.correct ? 0 : undefined}
                      aria-label={!isCorrect && currentIndex === progress.correct ? 'Исправить ответ' : 'Результат ответа'}
                    >
                      {renderResultContent()}
                    </div>
                  ) : (
                    <textarea
                      ref={inputRef}
                      className={`${inputClasses} phrase-input-editor`}
                      value={userInput}
                      onChange={handleInputChange}
                      id="phraseInput"
                      spellCheck={false}
                      placeholder="Введите свой ответ здесь ..."
                      aria-label="Введите перевод фразы"
                      disabled={currentIndex !== progress.correct}
                    />
                  )}
                  
                  <div className="text-error">
                    {showResult && !isCorrect && !gaveUp ? (
                      userInput.trim() === '' 
                        ? 'Заполните ответ и нажмите далее для перехода к следующему заданию' 
                        : 'Проверьте правильность написания'
                    ) : ''}
                  </div>

                  <div className="answer" style={{ display: showResult ? 'block' : 'none' }}>
                    {showResult ? (
                      (gaveUp || isCorrect || userInput.trim() !== '') 
                        ? currentQuestion.answer 
                        : 'Заполните перевод, чтобы увидеть ответ'
                    ) : ''}
                  </div>
                </div>

                {/* 
                {isCorrect && (
                  <div className="secondary-actions">
                    <button 
                      className="btn btn-orange" 
                      type="button" 
                      id="play-audio" 
                      style={{ display: 'flex' }}
                      onClick={handlePlayAudio}
                      data-audio={currentQuestion.audio}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                        <path d="M12 6.92819L-6.52533e-07 13.8564L-4.68497e-08 -1.14918e-05L12 6.92819Z" fill="white"></path>
                      </svg>
                      Прослушать перевод
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-link save-translate"
                      style={{ display: 'block' }}
                    >
                      Добавить свой перевод
                    </button>
                  </div>
                )}
                */}

                <div className="actions">
                  <button 
                    className={`btn btn-blue show-answer ${currentIndex !== progress.correct || (showResult && isCorrect) ? 'disabled' : ''}`} 
                    onClick={handleCheck}
                    disabled={currentIndex !== progress.correct || (showResult && isCorrect)}
                  >
                    Проверить
                  </button>
                  
                  <button 
                    className={`btn btn-blue check ${(currentIndex === questions.length - 1 && !showResult) ? 'disabled' : ''}`} 
                    onClick={handleNext}
                    disabled={currentIndex === questions.length - 1 && !showResult}
                  >
                    {currentIndex === questions.length - 1 ? 'Завершить' : 'Далее'}
                  </button>
                  
                  <button 
                    className={`btn btn-link help ${currentIndex !== progress.correct || isCorrect ? 'disabled' : ''}`} 
                    onClick={handleHint} 
                    disabled={currentIndex !== progress.correct || isCorrect || hintCount === 0}
                  >
                    Подсказка ({isCorrect ? 0 : hintCount})
                  </button>
                  
                  <button 
                    className={`btn btn-gray give-up ${currentIndex !== progress.correct || showResult ? 'disabled' : ''}`} 
                    onClick={handleGiveUp}
                    disabled={currentIndex !== progress.correct || showResult}
                  >
                    Сдаться
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ul className="pagination">
        <li className={`prev ${currentIndex === 0 ? 'disabled' : ''}`} onClick={handlePrev}>
          <span><img src="/img/btn-prev.svg" alt="" /></span>
        </li>
        <li><span>{currentIndex + 1}</span></li>
        <li><span> / </span></li>
        <li><span>{questions.length}</span></li>
        <li className={`next ${currentIndex === questions.length - 1 ? 'disabled' : ''}`} onClick={handleNext}>
          <span><img src="/img/btn-next.svg" alt="" /></span>
        </li>
      </ul>

      <div className="other-actions">
        <button type="button" className="btn btn-gray end">Закончить</button>
        <button type="button" className="btn btn-link">Пожаловаться</button>
      </div>

      {finished && (
        <div className="modal active" id="modalRemindRepeat" style={{ display: 'block' }}>
            <div className="modal-sandbox" onClick={handleCloseModal}></div>
            <div className="modal-box">
                <div className="modal-body">
                    <div className="close-modal" onClick={handleCloseModal}><img src="/img/close.svg" alt="Close" /></div>
                    <div className="dialog-wrap">
                        <div className="dialog-title">Поздравляем вы прошли тренировку полностью</div>
                        <p>Вы прошли <span className="total">{questions.length}</span> заданий</p>
                        <div className="res">
                            <p className="green"><span className="passed">{progress.correct}</span> верно</p>
                            <p className="orange"><span className="fail">{progress.incorrect}</span> неверно</p>
                        </div>
                        <div className="gray-text" style={{ marginTop: 'auto' }}>Весь текущий прогресс будет сохранен</div>
                        <div className="btns">
                            <button type="button" className="btn btn-gray close-modal" onClick={handleCloseModal}>Закрыть</button>
                            <button type="button" className="btn btn-blue add-to-repeat modal-trigger"
                                onClick={handleRepeat}
                                style={{ width: '264px' }}>Повторить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default ExerciseForm;
