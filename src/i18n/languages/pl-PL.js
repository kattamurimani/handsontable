/**
 * @preserve
 * Authors: Wojciech Szymański
 * Last updated: 12.10.2017
 *
 * Description: Definition file for Polish - Poland language-country.
 */
import * as C from '../constants';

const dictionary = {
  languageCode: 'pl-PL',
  [C.CONTEXTMENU_ITEMS_ROW_ABOVE]: 'Wstaw wiersz powyżej',
  [C.CONTEXTMENU_ITEMS_ROW_BELOW]: 'Wstaw wiersz poniżej',
  [C.CONTEXTMENU_ITEMS_INSERT_LEFT]: 'Wstaw kolumnę po lewej',
  [C.CONTEXTMENU_ITEMS_INSERT_RIGHT]: 'Wstaw kolumnę po prawej',
  [C.CONTEXTMENU_ITEMS_REMOVE_ROW]: ['Usuń wiersz', 'Usuń wiersze'],
  [C.CONTEXTMENU_ITEMS_REMOVE_COLUMN]: ['Usuń kolumnę', 'Usuń kolumny'],
  [C.CONTEXTMENU_ITEMS_UNDO]: 'Cofnij',
  [C.CONTEXTMENU_ITEMS_REDO]: 'Przywróć',
  [C.CONTEXTMENU_ITEMS_READ_ONLY]: 'Tylko do odczytu',
  [C.CONTEXTMENU_ITEMS_CLEAR_COLUMN]: 'Wyczyść kolumnę',

  [C.CONTEXTMENU_ITEMS_ALIGNMENT]: 'Wyrównanie',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_LEFT]: 'Lewo',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_CENTER]: 'Środek',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_RIGHT]: 'Prawo',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_JUSTIFY]: 'Wyjustowane',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_TOP]: 'Góra',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_MIDDLE]: 'Środek',
  [C.CONTEXTMENU_ITEMS_ALIGNMENT_BOTTOM]: 'Dół',

  [C.CONTEXTMENU_ITEMS_FREEZE_COLUMN]: 'Zamróź kolumnę',
  [C.CONTEXTMENU_ITEMS_UNFREEZE_COLUMN]: 'Odmróź kolumnę',

  [C.CONTEXTMENU_ITEMS_BORDERS]: 'Obramowanie',
  [C.CONTEXTMENU_ITEMS_BORDERS_TOP]: 'Góra',
  [C.CONTEXTMENU_ITEMS_BORDERS_RIGHT]: 'Prawo',
  [C.CONTEXTMENU_ITEMS_BORDERS_BOTTOM]: 'Dół',
  [C.CONTEXTMENU_ITEMS_BORDERS_LEFT]: 'Lewo',
  [C.CONTEXTMENU_ITEMS_REMOVE_BORDERS]: 'Usuń obramowanie(a)',

  [C.CONTEXTMENU_ITEMS_ADD_COMMENT]: 'Dodaj komentarz',
  [C.CONTEXTMENU_ITEMS_EDIT_COMMENT]: 'Edytuj komentarz',
  [C.CONTEXTMENU_ITEMS_REMOVE_COMMENT]: 'Usuń komentarz',
  [C.CONTEXTMENU_ITEMS_READ_ONLY_COMMENT]: 'Komentarz tylko do odczytu',

  [C.CONTEXTMENU_ITEMS_MERGE_CELLS]: 'Scal komórki',
  [C.CONTEXTMENU_ITEMS_UNMERGE_CELLS]: 'Rozłącz komórki',

  [C.CONTEXTMENU_ITEMS_COPY]: 'Kopiuj',
  [C.CONTEXTMENU_ITEMS_CUT]: 'Wytnij',

  [C.CONTEXTMENU_ITEMS_NESTED_ROWS_INSERT_CHILD]: 'Wstaw wiersz dziecko',
  [C.CONTEXTMENU_ITEMS_NESTED_ROWS_DETACH_CHILD]: 'Odłącz od ojca',

  [C.CONTEXTMENU_ITEMS_HIDE_COLUMN]: ['Ukryj kolumnę', 'Ukryj kolumny'],
  [C.CONTEXTMENU_ITEMS_SHOW_COLUMN]: ['Pokaż kolumnę', 'Pokaż kolumny'],

  [C.CONTEXTMENU_ITEMS_HIDE_ROW]: ['Ukryj wiersz', 'Ukryj wiersze'],
  [C.CONTEXTMENU_ITEMS_SHOW_ROW]: ['Pokaż wiersz', 'Pokaż wiersz'],

  [C.FILTERS_CONDITIONS_NONE]: 'Brak',
  [C.FILTERS_CONDITIONS_EMPTY]: 'Jest pusty',
  [C.FILTERS_CONDITIONS_NOT_EMPTY]: 'Nie jest pusty',
  [C.FILTERS_CONDITIONS_EQUAL]: 'Jest równy',
  [C.FILTERS_CONDITIONS_NOT_EQUAL]: 'Nie jest równy',
  [C.FILTERS_CONDITIONS_BEGINS_WITH]: 'Zaczyna się od',
  [C.FILTERS_CONDITIONS_ENDS_WITH]: 'Kończy się na',
  [C.FILTERS_CONDITIONS_CONTAINS]: 'Zawiera',
  [C.FILTERS_CONDITIONS_NOT_CONTAIN]: 'Nie zawiera',
  [C.FILTERS_CONDITIONS_BY_VALUE]: 'By value',
  [C.FILTERS_CONDITIONS_GREATER_THAN]: 'Większe niż',
  [C.FILTERS_CONDITIONS_GREATER_THAN_OR_EQUAL]: 'Większe lub równe',
  [C.FILTERS_CONDITIONS_LESS_THAN]: 'Mniejsze niż',
  [C.FILTERS_CONDITIONS_LESS_THAN_OR_EQUAL]: 'Mniejsze lub równe',
  [C.FILTERS_CONDITIONS_BETWEEN]: 'Pomiędzy',
  [C.FILTERS_CONDITIONS_NOT_BETWEEN]: 'Nie jest pomiędzy',
  [C.FILTERS_CONDITIONS_AFTER]: 'Po',
  [C.FILTERS_CONDITIONS_BEFORE]: 'Przed',
  [C.FILTERS_CONDITIONS_TODAY]: 'Dzisiaj',
  [C.FILTERS_CONDITIONS_TOMORROW]: 'Jutro',
  [C.FILTERS_CONDITIONS_YESTERDAY]: 'Wczoraj',

  [C.FILTERS_VALUES_BLANK_CELLS]: 'Puste komórki',

  [C.FILTERS_LABELS_FILTER_BY_CONDITION]: 'Filtruj na podstawie warunku',
  [C.FILTERS_LABELS_FILTER_BY_VALUE]: 'Filtruj na podstawie wartości',
  [C.FILTERS_LABELS_CONJUNCTION]: 'Oraz',
  [C.FILTERS_LABELS_DISJUNCTION]: 'Lub',

  [C.FILTERS_BUTTONS_SELECT_ALL]: 'Wybierz wszystkie',
  [C.FILTERS_BUTTONS_CLEAR]: 'Wyczyść',
  [C.FILTERS_BUTTONS_OK]: 'OK',
  [C.FILTERS_BUTTONS_CANCEL]: 'Anuluj',

  [C.FILTERS_BUTTONS_PLACEHOLDER_SEARCH]: 'Szukaj...',
  [C.FILTERS_BUTTONS_PLACEHOLDER_VALUE]: 'Wartość',
  [C.FILTERS_BUTTONS_PLACEHOLDER_SECOND_VALUE]: 'Druga wartość'
};

export default dictionary;
