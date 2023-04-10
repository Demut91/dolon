export interface InputProps {
    name: string;
    defaultValue: number | string | boolean | null;
};

export const inputFields: InputProps[] = [
    {
        name: 'Наименование',
        defaultValue: 'line-2'
    },
    {
        name: 'Кол-во точек',
        defaultValue: 14
    },
    {
        name: 'Длина',
        defaultValue: 12.53
    },
    {
        name: 'Проецир-я длина',
        defaultValue: 7.29
    },
    {
        name: 'Площадь',
        defaultValue: 10.88
    },
    {
        name: 'Проецир-я площадь',
        defaultValue: 0.16
    },
    {
        name: 'Узор',
        defaultValue: null
    },
    {
        name: 'Цвет',
        defaultValue: "#FCAF60"
    },
    {
        name: 'Метки точек',
        defaultValue: false
    },
    {
        name: 'Метки полилиний',
        defaultValue: true
    },
    {
        name: 'Показать точки',
        defaultValue: false
    },
    {
        name: 'Показать точку опоры',
        defaultValue: false
    },
    {
        name: 'Обратить порядок точек',
        defaultValue: false
    },
    {
        name: 'Метка точки',
        defaultValue: 4
    },
    {
        name: 'X',
        defaultValue: 10477.242
    },
    {
        name: 'Y',
        defaultValue: 64570.262
    },
    {
        name: 'Z',
        defaultValue: 3534.319
    }
];