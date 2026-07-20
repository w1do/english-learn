$(document).ready(function () {
    const cabinetOnly = new URL(window.location.href).pathname
    const cabinetOnlySearch = new URLSearchParams(window.location.search)

    if (cabinetOnly.split('/')[1] == 'cabinet' && cabinetOnly.split('/')[2] != 'profile' && !cabinetOnlySearch.get('page')) {
        $('#overlay-loader').addClass('active').fadeIn(10);

        setTimeout(function () {
            $('#overlay-loader').removeClass('active').fadeOut(10);
        }, 1800)
    }

    setInterval(function () {
        if ($('#overlay-loader img.active').is(':last-child')) {
            $('#overlay-loader img.active').removeClass('active')
            $('#overlay-loader img:first-child').addClass('active')
        } else {
            $('#overlay-loader img.active').removeClass('active').next().addClass('active')
        }
    }, 300)

    $('.menu-toggle--js').on('click',function(e) {
        e.preventDefault()
        $(this).toggleClass('open')
        $('.header-menu--wrap').slideToggle()
    })
    $(document).click(function (event) {
        if (!$(event.target).closest(".menu-toggle--js, .header-menu--wrap").length && $(window).width() < 1200) {
            $('.menu-toggle--js').removeClass('open')
            $('.header-menu--wrap').hide()
        }
    });

    $('.subscription-notification .close').on('click',function(e) {
        e.preventDefault()
        $('.subscription-notification').hide()
        if ($(this).attr('data-notification_type') !== undefined) {
            $.post('/notification-read', {
                type: $(this).data("notification_type"),
            })
        }
    })

    $('.show-repeat--js,.close-repeat--js').on('click', function (e) {
        e.preventDefault()
        $('.repeat-list-wrap').toggleClass('open')
    })
    $(document).click(function (event) {
        if (!$(event.target).closest(".show-repeat--js, .repeat-list-wrap").length) {
            $(".repeat-list-wrap").removeClass('open');
        }
    });

    $('.show-sidebar--js').on('click', function (e) {
        e.preventDefault()
        const text_1 = $(this).data('text-1'),
            text_2 = $(this).data('text-2');
        if ($('.sidebar').is(':visible')) {
            $(this).text(text_1)
        } else {
            $(this).text(text_2)
        }
        $('.sidebar').slideToggle()
    })

    if ($('select').length > 0) {
        $('select').niceSelect();
    }

    $('.acc-btn').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('open').siblings('.acc-content').slideToggle()
    })

    if ($('.reviews').length > 0) {
        $('.reviews').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            focusOnSelect: true,
            infinite: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        })
    }

    const $questionBox = $('.question-box');
    const $currentTask = $('.current-task');
    const $taskActions = $('.actions');
    const $textError = $questionBox.find('.text-error');
    const $answerBox = $questionBox.find('.answer');
    const $input = $questionBox.find('#phraseInput');

    $('.promo-input').on('input', function () {
        const promoCode = $(this).val().trim();
        const subscriptionId = $(this).data('subscriptionId');
        const hintPromo = $(this).closest('.promo').find('.hint-promo')

        if (!promoCode) return;

        hintPromo.removeClass('error')
        hintPromo.removeClass('success')

        $.post('/checkout/apply-promo', {
            promoCode: promoCode,
            subscriptionId: subscriptionId,
        }).done(function (data) {
            if (data.success == false) {
                hintPromo.addClass('error')
                hintPromo.text(data.error)
            } else {
                hintPromo.addClass('success')
                hintPromo.text('Ваш код принят')
            }
        });
    });

    profileAvaUpload()

    modalInit();
    initTaskState();
    pjaxInit();
    initContentMediaPlayers();
});

function initContentMediaPlayers() {
    const AUDIO_EXT = /\.(mp3|wav|ogg|m4a|aac)(\?.*)?$/i;
    const VIDEO_EXT = /\.(mp4|webm|mov|m4v)(\?.*)?$/i;
    const containers = document.querySelectorAll('.page-content, .page-blog article');

    containers.forEach(function (container) {
        container.querySelectorAll('a[href]').forEach(function (link) {
            const href = link.getAttribute('href') || '';

            if (AUDIO_EXT.test(href)) {
                replaceAudioLink(link, href);
            } else if (VIDEO_EXT.test(href)) {
                replaceVideoLink(link, href);
            }
        });
    });
}

let currentAudio = null;

function replaceAudioLink(link, href) {
    let label = (link.textContent || href).trim();
    // Убираем квадратные скобки из транскрипции, если они есть по краям
    if (label.startsWith('[') && label.endsWith(']')) {
        label = label.substring(1, label.length - 1);
    }
    const wrap = document.createElement('span');
    wrap.className = 'media-player media-player--audio';
    wrap.innerHTML =
        '<button type="button" class="media-player__play" aria-label="Воспроизвести">' +
        '<img src="/img/sound.svg" alt="">' +
        '<span class="media-player__label"></span>' +
        '</button>';
    wrap.querySelector('.media-player__label').textContent = label;

    const audio = new Audio(href);
    audio.preload = 'none';

    const playBtn = wrap.querySelector('.media-player__play');
    const togglePlay = function (e) {
        e.preventDefault();
        if (audio.paused) {
            if (currentAudio && currentAudio !== audio) {
                currentAudio.pause();
                document.querySelectorAll('.media-player--audio.is-playing').forEach(el => el.classList.remove('is-playing'));
            }
            audio.play();
            wrap.classList.add('is-playing');
            currentAudio = audio;
        } else {
            audio.pause();
            wrap.classList.remove('is-playing');
        }
    };
    playBtn.addEventListener('click', togglePlay);
    // wrap.querySelector('.media-player__label').addEventListener('click', togglePlay);
    audio.addEventListener('ended', function () { wrap.classList.remove('is-playing'); });

    link.replaceWith(wrap);
}

function replaceVideoLink(link, href) {
    const video = document.createElement('video');
    video.src = href;
    video.controls = true;
    video.preload = 'metadata';
    video.className = 'media-player media-player--video';
    link.replaceWith(video);
}

$(document).on('click', '#tasks-list .pagination li a', function (e) {
    e.preventDefault();
    const url = $(this).attr('href');
    loadPage(url);
    return false;
});

function loadPage(url) {
    const fullUrl = url;
    $('#overlay-loader').addClass('active').fadeIn(10);

    $.ajax({
        url: fullUrl,
        success: function (data, status, xhr) {
            const finalUrl = xhr.getResponseHeader('X-Redirect') || fullUrl;
            const $page = $(data);
            const $tasks = $page.find('#tasks-list');

            if (!$tasks.length || !$tasks.html()) {
                window.location.href = finalUrl !== fullUrl ? finalUrl : '/cabinet';
                return;
            }

            $('#tasks-list').html($tasks.html());
            window.history.pushState({ url: fullUrl }, '', fullUrl);
            modalInit();
            initTaskState();
            pjaxInit();
        },
        error: function () {
            window.location.href = '/cabinet';
        },
        complete: function () {
            $('#overlay-loader').removeClass('active').fadeOut(10);
        }
    });
}

window.onpopstate = function (e) {
    if (e.state && e.state.url) {
        loadPage(e.state.url);
    }
}

sendPost = (url, data) => $.post(url, data).then(res => res);

profileAvaUpload = () => {
    const userAva = document.getElementById('userAva')
    const userImage = document.getElementById('userImage')

    if (userAva && userImage) {
        userAva.onchange = (event) => {
            const [file] = userAva.files
            if (file) {
                userImage.style.display = 'block';
                userImage.src = URL.createObjectURL(file)
            }
        }

        document.getElementById('userAvaSave').addEventListener('click', function () {
            const file = userAva.files[0];

            if (!file) {
                console.log('No file selected');
                return;
            }

            const formData = new FormData();
            formData.append('avatar', file);
            formData.append('_csrf-frontend', yii.getCsrfToken());

            const btn = this;
            btn.disabled = true;
            btn.textContent = 'Загрузка...';

            fetch('/cabinet/profile/upload-avatar', {
                method: 'POST',
                body: formData,
            })
                .then(result => result.json())
                .then(data => {
                    if (data.success) {
                        btn.textContent = 'Сохранено ✓';
                        userImage.src = data.url;
                        URL.revokeObjectURL(userImage.src);
                    } else {
                        btn.textContent = 'Ошибка';
                        console.log(data.error ?? 'Upload failed');
                    }
                })
                .catch(() => {
                    btn.textContent = 'Ошибка';
                    console.log('Request failed');
                })
                .finally(() => {
                    setTimeout(() => {
                        btn.disabled = false;
                        btn.textContent = 'Сохранить';
                    }, 4000);
                });
        });
    }
}

checkTimestamp = () => {
    const selectedDate = $('#datepickerWrap').datepicker('getDate');
    const date = selectedDate.val();
    const parts = date.match(/(\d{2})\.(\d{2})\.(\d{4}) (\d{2}):(\d{2})/);
    const iso = `${parts[3]}-${parts[2]}-${parts[1]}T${parts[4]}:${parts[5]}`;
    const milliseconds = Date.parse(iso);
    const unixTimestamp = milliseconds / 1000;

    return unixTimestamp;
}

function initTaskState() {
    const $questionBox = $('.question-box');
    const $currentTask = $('.current-task');
    const $taskActions = $('.actions');
    const $input = $questionBox.find('input[name="translate"]');

    $input.on('copy cut selectstart paste', e => e.preventDefault());
    $currentTask.on('submit', () => false);

    $taskActions.find('.check').addClass('disabled');

    if ($currentTask.data('helpCount') == 0) {
        $taskActions.find('.help').addClass('disabled');
    }
}

function updateUI(data, isHelp = false) {
    const $questionBox = $('.question-box');
    const $taskActions = $('.actions');
    const $textError = $questionBox.find('.text-error');
    const $answerBox = $questionBox.find('.answer');
    const $input = $questionBox.find('#phraseInput');

    $input.removeClass('error success warning');
    $textError.text('');
    $answerBox.text('');

    if (data.status === 0) {
        $input.addClass('error');
        $textError.text('Проверьте правильность написания');
    } else {
        $input.addClass('success');
        $textError.text(isHelp ? '' : (data.message || ''));
        if (data.answer) $answerBox.text(data.answer);
        if (data.transcription) $('.transcription').text(data.transcription);

        if (data.status >= 1) {
            $taskActions.find('.check').removeClass('disabled');
            $('#play-audio').css('display', 'flex');
            $('.save-translate').show();
        }
        confetti({
            particleCount: 100,
            spread: 70,
            origin: {
                y: 0.6
            }
        });
    }
}

function updatePlaceholder() {
    const $input = $('#phraseInput');
    $input.toggleClass('is-empty', $input.text().trim() === '');
}

function moveCursorToEnd(el) {
    if (!el) return;

    const sel = window.getSelection();
    const range = document.createRange();

    const lastChild = el.lastChild;

    if (lastChild) {
        if (lastChild.nodeType === Node.TEXT_NODE) {
            range.setStart(lastChild, lastChild.length);
        } else {
            range.setStartAfter(lastChild);
        }
    } else {
        range.setStart(el, 0);
    }

    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
}

function renderHintResult(payload) {
    const input = document.getElementById('phraseInput');
    let words = getWords();
    if (words === 0) words = [];

    let matched = new Set(payload.matched || []);
    let extras = new Set(payload.extras || []);
    let hintIndex = -1;

    if (payload.status === 'hint') {
        const pos = Math.max(0, Math.min(payload.position, words.length));
        if (payload.action === 'insert') {
            words.splice(pos, 0, payload.word);
            const shift = (set) => new Set([...set].map(i => i >= pos ? i + 1 : i));
            matched = shift(matched);
            extras = shift(extras);
        } else {
            words[pos] = payload.word;
            matched.delete(pos);
            extras.delete(pos);
        }
        hintIndex = pos;
    }

    const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const html = words.map((w, i) => {
        if (i === hintIndex) return `<span class="correct-word">${escape(w)}</span>`;
        if (extras.has(i)) return `<span class="extra-word">${escape(w)}</span>`;
        if (matched.has(i)) return `<span class="matched-word">${escape(w)}</span>`;
        return escape(w);
    }).join(' ');

    input.innerHTML = html + '&nbsp;';
    input.classList.remove('is-empty');
    updatePlaceholder();
    moveCursorToEnd(input);
}

function highlightExtraWords(positions) {
    const input = document.getElementById('phraseInput');
    const words = getWords();
    if (words === 0) return;

    const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const html = words.map((w, i) =>
        positions.includes(i)
            ? `<span class="extra-word">${escape(w)}</span>`
            : escape(w)
    ).join(' ');

    input.innerHTML = html + '&nbsp;';
    input.classList.remove('is-empty');
    updatePlaceholder();
    moveCursorToEnd(input);
}

function getWords() {
    const input = document.getElementById('phraseInput');
    return input.innerText.trim().length > 0 ? input.innerText.trim().split(/\s+/) : 0;
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + days);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

/*
function questionCheck() {
    const $questionCheckbox = $('.questions-check');
    const $btnCheckPost = $('.btn-check-post');
    const arrayChecked = [];
    $questionCheckbox.prop('checked', false);

    $btnCheckPost.hide();

    $questionCheckbox.on('change', function (e) {
        e.preventDefault();

        let btnCheckPostUl = $(this).closest('.sub-categories.open').find('.btn-check-post');

        if ($(this).is(':checked')) {
            arrayChecked.push($(this).val());
        } else {
            arrayChecked.splice(arrayChecked.indexOf($(this).val()), 1);
        }

        if (arrayChecked.length > 1) {
            btnCheckPostUl.show();
        } else {
            btnCheckPostUl.hide();
        }
    });

    $btnCheckPost.on('click', async function (e) {
        e.preventDefault();

        await sendPost($(this).data('slug'), {
            firstTask: 1,
            questionsCheck: arrayChecked
        });
    });
}
*/
function questionCheck() {}

function modalInit() {
    $(document).on('click', '.end-lesson', async function (e) {
        e.preventDefault();

        const $currentTask = $('.current-task');

        const data = await sendPost('/cabinet/stats', {
            categoryId: $currentTask.data('categoryId'),
        });

        const modalEndLesson = $('#modalEndLesson');
        modalEndLesson.find('.total').text(data.stats.total);
        modalEndLesson.find('.passed').text(data.stats.passed);
        modalEndLesson.find('.fail').text(data.stats.fail);

        $('#modalEndLesson').fadeIn(150);

        return false
    });

    $(document).on('click', '.end-lesson-all', async function (e) {
        e.preventDefault();

        const $currentTask = $('.current-task');

        const data = await sendPost('/cabinet/stats-all', {
            categoryId: $currentTask.data('containerId') || $currentTask.data('categoryId'),
        });

        const modalEndLessonAll = $('#modalEndLessonAll');
        modalEndLessonAll.find('.total').text(data.stats.total);
        modalEndLessonAll.find('.passed').text(data.stats.passed);
        modalEndLessonAll.find('.fail').text(data.stats.fail);

        const containerSlug = $currentTask.data('containerSlug') || $currentTask.data('categorySlug');
        const isAll = String($currentTask.data('isAll') || '') === '1';
        const isChecked = String($currentTask.data('isChecked') || '') === '1';
        const modeParam = isAll ? 'is_all=1' : (isChecked ? 'is_check=1' : '');
        const repeatUrl = containerSlug
            ? '/cabinet/theme/' + containerSlug + (modeParam ? '?' + modeParam : '')
            : '/cabinet';
        $('#repeat-all-btn').attr('href', repeatUrl);

        $('#modalEndLessonAll').fadeIn(150);
    });

    $(document).on('click', '.end-lesson-finish', async function () {
        const $currentTask = $('.current-task');
        if ($currentTask.data('categoryId')) {
            await sendPost('/cabinet/user-history-save', {
                categoryId: $currentTask.data('categoryId'),
            });
        }
        location.href = '/cabinet?home=1';
    });

    $(document).on('click', '.save-translate', function (e) {
        e.preventDefault();
        $('#modalSaveTranslate').fadeIn(150);
    });

    $(document).on('click', '.first-solve', function (e) {
        e.preventDefault();
        $('#modalFirstSolve').fadeIn(150);
    });

    $(document).on('click', '.base-translate', function (e) {
        e.preventDefault();
        $('#modalReturnTranslation').fadeIn(150);
    });

    $(document).on('click', '.theme-list-item', async function (e) {
        e.preventDefault();

        const categoryId = $(this).data('categoryId');
        const categoryUrl = $(this).data('categoryUrl');
        const categoryPage = $(this).data('categoryPage');
        const historyTime = $(this).data('historyTime');

        const data = await sendPost('/cabinet/stats', {
            categoryId: categoryId,
        });

        const modalCompletedOn = $('#modalCompletedOn');
        modalCompletedOn.find('.history-time').text(historyTime);
        modalCompletedOn.find('.total').text(data.stats.total);
        modalCompletedOn.find('.passed').text(data.stats.passed);
        modalCompletedOn.find('.fail').text(data.stats.fail);
        modalCompletedOn.find('.repeat-all').attr('href', categoryUrl);
        modalCompletedOn.find('.theme-more').attr('href', categoryUrl + '?page=' + categoryPage);

        modalCompletedOn.find('.repeat-is-fail').hide();
        modalCompletedOn.find('.repeat-is-passed').hide();

        if (data.stats.fail > 0) {
            modalCompletedOn.find('.repeat-is-fail').show();
            modalCompletedOn.find('.repeat-is-fail').attr('href', categoryUrl + '?is_fail=1');
        }

        if (data.stats.passed > 0) {
            modalCompletedOn.find('.repeat-is-passed').show();
            modalCompletedOn.find('.repeat-is-passed').attr('href', categoryUrl + '?is_passed=1');
        }

        modalCompletedOn.fadeIn(150);
    });

    $('.modal-trigger').click(function (e) {
        e.preventDefault();
        $('.modal').hide();
        const target = $(this).data('modal');
        $('#' + target).show();
        $('body').css('overflow-y', 'hidden');
    });

    $('.close-modal, .modal-sandbox').click(() => {
        $('.modal').hide();
        $('body').css('overflow-y', 'auto');
    });

/*
    $('.dropdown-toggle').on('click', function (e) {
        e.preventDefault();
        const $id = $(this).data('child')
        $('.dropdown-toggle.open').removeClass('open')
        $(this).addClass('open')
        $('.sub-categories > div').hide()
        $('.sub-categories').addClass('open')
        $('[data-parent=' + $id + ']').show()
        questionCheck()
    });
    $(document).click(function (event) {
        if (!$(event.target).closest(".dropdown-toggle, .sub-categories").length) {
            $(".sub-categories > div").hide();
            $('.sub-categories').removeClass('open')
            $('.dropdown-toggle.open').removeClass('open')
            questionCheck()
        }
    });
    $('.close-subcat--js').on('click', function (e) {
        e.preventDefault()
        $(".sub-categories > div").hide();
        $('.sub-categories').removeClass('open')
        questionCheck()
    })
*/

    const todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + 1);
    todayDate.setHours(0, 0);
    const dateRemind = $('#datepickerWrap').datepicker({
        timepicker: true,
        startDate: todayDate,
        minDate: todayDate,
    }).data('datepicker');

    setTimeout(function () {
        dateRemind.clear();
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 1);
        targetDate.setHours(2, 0, 0, 0);
        dateRemind.selectDate(targetDate)
    }, 2000)


    $(document).on('click', '#modalSheduleRepeat .close-modal', function () {
        location.href = '/cabinet?home=1';
    });

    $(document).on('click', '.postpone-repeat', function () {
        const categoryId = $(this).data('categoryId');
        if (categoryId) {
            $('#modalChooseDate').attr('data-category-id', categoryId);
        }
    });

    $('#modalChooseDate').on('click', 'button', async function (e) {
        e.preventDefault();

        const fromModal = parseInt($('#modalChooseDate').attr('data-category-id'), 10) || null;
        const fromTask = $('.current-task').data('categoryId') || null;
        const categoryId = fromModal || fromTask;

        if (categoryId) {
            const theme = await sendPost('/cabinet/user-repeat-save', {
                categoryId: categoryId,
                repeatedAt: checkTimestamp()
            });

            if (theme.status == 1) {
                $('#modalChooseDate').removeAttr('data-category-id');
                location.href = '/cabinet';
            }
        }

        return false;
    });

    const todayTime = new Date().getTime();

    $('.repeat-list li').each(function () {
        const dataModalDelete = $(this).find('a.delete-repeat').data('modalDelete');

        $('#' + dataModalDelete).on('click', '.close-modal-delete', async function (e) {
            e.preventDefault();

            const closeModal = await sendPost('/cabinet/user-repeat-delete', {
                repeatId: $('#' + dataModalDelete).data('repeatId')
            });

            if (closeModal.status == 1) {
                location.href = '/cabinet?home=1'
            }

            return false;
        });
    });

    autoOpenRepeatReminder();
}

$(document).on('submit', '#complain-form', async function (e) {
    e.preventDefault();

    const $form = $(this);
    const $result = $form.find('.complain-result');
    const text = $form.find('textarea[name="text"]').val().trim();
    const captcha = typeof grecaptcha !== 'undefined' ? grecaptcha.getResponse() : '';

    if (!text) {
        $result.text('Введите текст жалобы').css('color', '');
        return;
    }

    if (!captcha) {
        $result.text('Подтвердите, что вы не робот').css('color', '');
        return;
    }

    const questionId = $('.current-task').data('questionId') || 0;

    const data = await sendPost('/cabinet/complain-save', {
        text: text,
        questionId: questionId,
        'g-recaptcha-response': captcha,
    });

    if (data && data.status == 1) {
        $form.find('textarea[name="text"]').val('');
        $form.find('textarea[name="text"]').prop('disabled', true);
        $form.find('[type="submit"]').prop('disabled', true);
        if (typeof grecaptcha !== 'undefined') grecaptcha.reset();
        $result.text('Спасибо! Жалоба отправлена.').css('color', 'green');
        setTimeout(() => {
            $('#modalComplain').hide();
            $('body').css('overflow-y', 'auto');
            $result.text('');
        }, 1000);
    } else {
        if (typeof grecaptcha !== 'undefined') grecaptcha.reset();
        $result.text((data && data.error) || 'Не удалось отправить').css('color', '');
    }
});

$(document).on('click', '.modal[data-repeat-id] .i-am-ready', function () {
    const repeatId = $(this).closest('.modal[data-repeat-id]').data('repeatId');
    if (!repeatId) return;

    const payload = new FormData();
    payload.append('repeatId', repeatId);
    const csrfName = $('meta[name="csrf-param"]').attr('content');
    const csrfToken = $('meta[name="csrf-token"]').attr('content');
    if (csrfName && csrfToken) payload.append(csrfName, csrfToken);

    if (navigator.sendBeacon) {
        navigator.sendBeacon('/cabinet/user-repeat-delete', payload);
    } else {
        $.ajax({
            url: '/cabinet/user-repeat-delete',
            type: 'POST',
            data: { repeatId: repeatId, _csrf: csrfToken },
            async: false,
        });
    }
});

function autoOpenRepeatReminder() {
    const now = Math.floor(Date.now() / 1000);
    const $items = $('.repeat-list li[data-repeated-at]');
    if (!$items.length) return;

    let opened = false;
    $items.each(function () {
        if (opened) return;
        const repeatedAt = parseInt($(this).data('repeatedAt'), 10);
        if (!repeatedAt || repeatedAt > now) return;

        const modalId = $(this).find('a.modal-trigger').first().data('modal');
        if (!modalId) return;

        const $modal = $('#' + modalId);
        if ($modal.length) {
            $('.modal').hide();
            $modal.fadeIn(150);
            opened = true;
        }
    });
}

function pjaxInit() {
    const $questionBox = $('.question-box');
    const $currentTask = $('.current-task');
    const $taskActions = $('.actions');
    const $textError = $questionBox.find('.text-error');
    const $answerBox = $questionBox.find('.answer');
    const $input = $questionBox.find('#phraseInput');

    function updatePlaceholder() {
        if ($input.text().trim() === '') {
            $input.addClass('is-empty');
        } else {
            $input.removeClass('is-empty');
        }
    }

    $input.on('input', updatePlaceholder);
    updatePlaceholder();

    const $audioBtn = $('#play-audio');
    if ($audioBtn.length && $audioBtn.data('audio')) {
        const rollSound = new Audio($audioBtn.data('audio'));
        $audioBtn.on('click', () => rollSound.play());
    }

    questionCheck();

    $questionBox.on('click', '.show-answer', async function (e) {
        e.preventDefault();

        const $btn = $(this);
        if ($btn.hasClass('disabled')) return false;

        const val = $input.text().trim();
        if (!val) {
            $input.addClass('warning');
            $answerBox.text('Заполните перевод, чтобы увидеть ответ');
            return false;
        }

        const data = await sendPost('/cabinet/check-answer', {
            questionId: $currentTask.data('questionId'),
            nextTask: $currentTask.data('nextTask'),
            nextPage: $currentTask.data('nextPage'),
            translate: val
        });

        updateUI(data);

        if (data.status >= 1) {
            const slug = $currentTask.data('categorySlug');

            $('.question-btns').find('.first-solve').addClass('save-translate').removeClass('first-solve');
            $('.lesson-aside').show(200);

            if ($('.check').hasClass('last-task')) {
                if (slug === 'all') {
                    $('.check').addClass('end-lesson-all');
                } else if ($currentTask.data('isDemo') == 1) {
                    $('.check').attr('data-modal', 'modalDemoCompleted');
                } else {
                    $('.check').attr('data-modal', 'modalRemindRepeat');
                }
            } else {
                const url = $('.pagination li.next a').attr('href');
                $('.check').attr('href', url);
            }
        }
    });

    $questionBox.on('click', '.last-task', async function () {
        const questionId = $currentTask.data('questionId');
        const categoryId = $currentTask.data('categoryId');
        const categorySlug = $currentTask.data('categorySlug');
        const catId = $currentTask.data('categoryId');

        const data = await sendPost(
            categorySlug == 'all'
                ? `/cabinet/last-answer?category_id=${catId}`
                : `/cabinet/last-answer`, {
            questionId: questionId,
            categoryId: categoryId
        });

        if (data) {
            const modalRemindRepeat = $('#modalRemindRepeat');
            modalRemindRepeat.find('.total').text(data.stats.total);
            modalRemindRepeat.find('.passed').text(data.stats.passed);
            modalRemindRepeat.find('.fail').text(data.stats.fail);

            const modalEndLesson = $('#modalEndLesson');
            modalEndLesson.find('.total').text(data.stats.total);
            modalEndLesson.find('.passed').text(data.stats.passed);
            modalEndLesson.find('.fail').text(data.stats.fail);

            const modalCompletedOn = $('#modalCompletedOn' + categoryId);
            modalCompletedOn.find('.total').text(data.stats.total);
            modalCompletedOn.find('.passed').text(data.stats.passed);
            modalCompletedOn.find('.fail').text(data.stats.fail);
        }

        return false;
    });

    $questionBox.on('click', '.give-up', async function () {
        const data = await sendPost('/cabinet/giveup-answer', {
            questionId: $currentTask.data('questionId')
        });

        updateUI(data, true);
        $('.lesson-aside').show(200);
        $answerBox.text(data.answer);
        $textError.text('Заполните ответ и нажмите далее для перехода к следующему заданию');
    });

    $questionBox.on('click', '.help', async function () {
        const $btn = $(this);
        if ($btn.hasClass('disabled') || $btn.data('count') == 0) return false;

        const data = await sendPost('/cabinet/help-answer', {
            questionId: $currentTask.data('questionId'),
            translate: $input.text()
        });

        const helpAnswer = data.helpAnswer || {};

        $btn.text(`Подсказка (${data.helpCount})`).data('count', data.helpCount);
        $input.removeClass('error success');

        if (helpAnswer.status === 'hint') {
            renderHintResult(helpAnswer);
            $textError.text('');
        } else if (helpAnswer.status === 'extras') {
            renderHintResult(helpAnswer);
            $textError.text('Удалите лишние слова');
        } else if (helpAnswer.status === 'order') {
            renderHintResult(helpAnswer);
            $textError.text('Проверьте порядок слов');
        } else if (helpAnswer.status === 'done') {
            renderHintResult(helpAnswer);
            $textError.text('Ответ уже совпадает с правильным');
        }

        if (data.helpCount == 0) $btn.addClass('disabled');
    });

    $('[data-modal="modalSaveTranslate"]').on('click', async function (e) {
        e.preventDefault();

        let questionTranslate = $('#modalSaveTranslate').find('.user-question-modal');
        let answerTranslate = $('#modalSaveTranslate').find('.user-answer-modal');

        const data = await sendPost('/cabinet/user-answer', {
            questionId: $currentTask.data('questionId'),
        });

        questionTranslate.text(data.question);
        answerTranslate.text(data.answer);

        return false;
    });

    $(document).on('click', '.user-answer-save', async function (e) {
        e.preventDefault();
        const $modal = $(this).closest('.modal-box');
        const $userInput = $modal.find('[name="user-answer-input"]');

        if (!$userInput.val().trim()) {
            $userInput.addClass('warning');
            $modal.find('.user-answer-warning').addClass('text-error').text('Введите свой вариант ответа');
            return false;
        }

        const data = await sendPost('/cabinet/user-answer-save', {
            questionId: $currentTask.data('questionId'),
            userAnswer: $userInput.val()
        });

        if (data.status === 1) {
            $('#modalSaveTranslate').hide();
            $('.save-translate').hide();
            $('#modalSuccessTranslate').show();
        }
    });

    $(document).on('click', '.user-answer-success', async function (e) {
        e.preventDefault();
        $('#modalSuccessTranslate').hide();
    });

    $(document).on('click', '.user-answer-reset', async function (e) {
        e.preventDefault();

        const data = await sendPost('/cabinet/user-answer-reset', {
            questionId: $currentTask.data('questionId'),
        });
        if (data.status === 1) location.reload();
    });

    $(document).on('click', '.shedule-repeat', async function (e) {
        e.preventDefault();

        const categoryId = await sendPost('/cabinet/user-history-save', {
            categoryId: $currentTask.data('categoryId'),
        });

        return false;
    });

    $(document).on('click', '.end-lesson-modal', async function (e) {
        e.preventDefault();

        await sendPost('/cabinet/user-history-save', {
            categoryId: $currentTask.data('categoryId'),
        });

        return false;
    });

    const modalTextPopupTheme = $('#modalTextPopupTheme');
    const nameCookieTextPopup = 'textpopup' + $currentTask.data('categoryId');

    $(document).on('click', '#modalTextPopupTheme .close-modal', function () {
        modalTextPopupTheme.hide();
        setCookie(nameCookieTextPopup, 1, 30 * 24 * 60 * 60 * 1000);
    });

    if (!getCookie(nameCookieTextPopup)) {
        setTimeout(() => {
            modalTextPopupTheme.show();
        }, 1000);
    }

    const cookiesAccept = $('.cookies-accept');
    const cookiesAcceptName = 'cookies-accept';

    $(document).on('click', '.cookies-accept', function () {
        cookiesAccept.hide();
        setCookie(cookiesAcceptName, 1, 666 * 24 * 60 * 60 * 1000);
    });

    if (!getCookie(cookiesAcceptName)) {
        cookiesAccept.css('display', 'flex');;
    }
}

$(document).on('beforeSubmit', '#signup-form', function (e) {
    const $form = $(this);

    $.post($form.attr('action'), $form.serialize())
        .done(function (response) {
            if (response.success) {
                window.location.href = response.redirect;
                return;
            }
            Object.entries(response.errors || {}).forEach(([field, messages]) => {
                $form.find(`.field-signupform-${field}`)
                    .addClass('has-error')
                    .find('.error-message').text(messages[0]);
            });
        })
        .fail(function () {
            alert('Ошибка сервера, попробуйте позже');
        });

    return false;
});

$(document).ready(function () {
    $('.form_change_page_reg').click(function(){
        $('.cover_inside_block .reg').hide();
        $('.cover_inside_block .sign').show();
    });
    $('.form_change_page_sign').click(function(){
        $('.cover_inside_block .reg').show();
        $('.cover_inside_block .sign').hide();
    });
});
