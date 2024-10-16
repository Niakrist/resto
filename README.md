# RestoApp

Andrei
andrei_58685

Всех проверяющих благодарю за замечания в багах и рекомендацих

# Debug task 1

## noregretccg

### Исправил:

- пересмотрел название секции feedback

## montto

### Исправил:

- Телефон в ссылке нужно указывать с кодом
- H1 лучше вынести из секции меню
- Ссылкой в секции меню лучше делать всю карточку
- Линейные градиенти для меню и карточек тоже можно вынести в переменные
- Можно указать inset: 0
- Картинки для меню можно сжать и сконвертировать в webp
- Если планируешь использовать article для карточек, то нужно добавить заголовок, иначе (Убрал article)

### Оставил как есть:

- Из-за дробного значения 1.33 у высоты строки появляются ситуации с не самым "красивым" размером

## vvaasd

### Исправил:

- карточки в меню лучше полностью обернуть в ссылку

# Debug task 2

## vvaasd

### Исправил:

- поставить кнопку чуть ниже, под product\_\_item (по правилам спецификации)
- по макету у кнопок блюд не должно быть border'а
- (.idea/.vscode) лучше заносить в .gitignore
- Кнопки можно отключить при помощи html-аттрибута disabled

## montto

### Исправил:

- По ТЗ есть четкое требование к структуре, расположению и названию папок
- Лишний черный бордер у кнопок
- У кнопок пропущен атрибут "type".
- Плюс межну цифрами в номере телефона можно поставить неразрывный пробел, а вместо тире "&#8209;", тогда вообще не останется варнингов и ошибок при валидации.
- Еще обрати внимание, в главном меню, хоть и указал высоту строки, но высота ссылки один фиг меньше
- По макету пока нет дизайна для состояния ссылок и кнопок в фокусе, но если так, то лучше хотя бы дефолтные оставить
- У тебя сейчас .account**login и .account**basket как будто разные кнопки, хотя, если я правильно понимаю БЭМ
- Картинки к блюдам лушче назвать осмысленно (Хотя некоторые наоборт рекомендуют пронумернованные)
- Часть картинок в разрешение 304 на 304, а часть 512 на 512
- Файлы popular.css и new-product.css по сути содержат одни и теже стили
- Бэйджи к блюдам лучше оформить как список, будет семантически более верно
- svg подключать как картинки

### Оставил как есть

- Мой редактор постоянно ругается на излишнюю / (привык зыкрывать все теги)
- Про высоту строк уже писал, она дробная
- Иначе возникают вот такие кейсы с висящими предлогами или неединообразно заполняется контент (не разобрался)

## eugene.lanets

### Исправил:

- Названия файлов и папок не соответствуют ТЗ.
- У кнопки в карточке блюда по макету рамки нет
- классы .new-product и .popular абсолютно идентичны
- Ещё глаз филолога зацепился за ul.product, а список включает себя несколько элементов
- В Баджи семантически верно использовать ul
- в баджах, вы не вполне верно применяете БЭМ

# Debug task 3

## vvaasd

### Исправил:

- Отступ от последней секции до низа экрана по макету должен быть 64px (в работе 32px)
- Неиспользуемый код: /_ object-fit: cover; _/ у .for-visitors\_\_img
- Кнопку event\_\_button можно тоже отключить
- Отключенные кнопки стилизовать через псевдокласс :disabled (cursor: not-allowed);

## montto

### Исправил:

- Сломались бэджи для карточек с блюдами
- Нижний падинг у последней секции должен быть по макету 64px, сейчас 32px
- висящий предлог
- доработать геометрию фокуса у карточек
- в хедере и в режимах работы использовать тег <time></time>
- Пожал картинки с 2,4 mb до 0,97 mb
- Можно добавить обращение к локальной версии шрифта src: local("Inter"), url
- два раза упоминаешь один и тот же класс
- в одном месте осталось захардкоженное значение шрифта
- остался закомментированный кусок стилей
- сейчас ссылки ведут на несуществующий якорь "#!", для полного соответствия лучше заменить на "/"

### Отложил на попозже:

- Попробуй собрать универсальную секцию и карточки

## eugene.lanets

### Исправил:

- по факту ul.product не превратился в ul.products
- Классы stocks\_\_title, event\_\_title, about-us\_\_title в разметке ни к чему, всё описывает wrapper\_\_title

# Debug task 4

## montto

### Исправил:

- Иконки внутри кнопок в хедере меньше чем по макету
- Отсуп в конце футера больше чем по макету
- Вместо неразрывного пробела в заголовках карточек можно использовать css-свойство – text-wrap: balance.
- Для указания контактных данных лучше использовать тег address

## vladimir_15728

### Исправил:

- h1 вообще вынести в header
- Символы лучше вставлять кодом &#8381;
