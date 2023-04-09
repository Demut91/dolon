import circle from './palette.svg';

export enum Colour {
    blue = '#3660F4',
    green = '#2BBB6A',
    purple = '#9C27B0',
    black = 'black',
    orange = 'orange',
    palette = 'palette'
}
type PropType = {
    colour: Colour;
};

export const Circle = (props: PropType) => {
    switch (props.colour) {
        case Colour.palette:
            return (
                <img src={circle} />
            );
        case Colour.black:
            return (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_189_3747)">
                        <circle cx="7" cy="7" r="5.75" stroke="#DDDDDF" />
                        <path d="M10.15 5.95V4.9H11.2V5.95H10.15ZM10.15 7V5.95L9.1 5.95V7L10.15 7ZM10.15 4.9V3.85H9.1V4.9H10.15ZM9.1 2.191V2.8H10.15C9.81925 2.5585 9.47275 2.35375 9.1 2.191ZM10.15 2.8V3.85H11.2C10.8955 3.45625 10.5437 3.1045 10.15 2.8ZM11.2 3.85V4.9H11.809C11.6462 4.52725 11.4415 4.18075 11.2 3.85ZM12.25 7C12.25 6.643 12.2132 6.29125 12.145 5.95H11.2V7H12.25ZM9.1 3.85V2.8H8.05V3.85H9.1ZM9.1 9.1H10.15V8.05H9.1V9.1ZM10.15 10.15H11.2V9.1H10.15V10.15ZM9.1 11.2H10.15V10.15H9.1V11.2ZM8.05 12.145C8.4175 12.0715 8.764 11.956 9.1 11.809V11.2H8.05V12.145ZM10.15 8.05H11.2V7H10.15V8.05ZM9.1 4.9H8.05V5.95H9.1V4.9ZM11.2 9.1H11.809C11.956 8.764 12.0715 8.4175 12.145 8.05H11.2V9.1ZM9.1 7H8.05V8.05H9.1V7ZM7 10.15L7 9.1H8.05V8.05H7V7H8.05V5.95H7V4.9H8.05V3.85H7V2.8L8.05 2.8V1.855C7.70875 1.78675 7.36225 1.75 7 1.75C4.1125 1.75 1.75 4.1125 1.75 7C1.75 9.8875 4.1125 12.25 7 12.25V11.2H8.05V10.15H7ZM8.05 10.15H9.1V9.1H8.05V10.15Z" fill="url(#paint0_linear_189_3747)" />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_189_3747" x1="7" y1="1.75" x2="7" y2="12.25" gradientUnits="userSpaceOnUse">
                            <stop />
                            <stop offset="1" stop-opacity="0" />
                        </linearGradient>
                        <clipPath id="clip0_189_3747">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            );
        case Colour.orange:
            return (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_189_3771)">
                        <circle cx="7" cy="7" r="5.75" stroke="#DDDDDF" />
                        <path d="M10.15 5.95V4.9H11.2V5.95H10.15ZM10.15 7V5.95L9.1 5.95V7L10.15 7ZM10.15 4.9V3.85H9.1V4.9H10.15ZM9.1 2.191V2.8H10.15C9.81925 2.5585 9.47275 2.35375 9.1 2.191ZM10.15 2.8V3.85H11.2C10.8955 3.45625 10.5437 3.1045 10.15 2.8ZM11.2 3.85V4.9H11.809C11.6462 4.52725 11.4415 4.18075 11.2 3.85ZM12.25 7C12.25 6.643 12.2132 6.29125 12.145 5.95H11.2V7H12.25ZM9.1 3.85V2.8H8.05V3.85H9.1ZM9.1 9.1H10.15V8.05H9.1V9.1ZM10.15 10.15H11.2V9.1H10.15V10.15ZM9.1 11.2H10.15V10.15H9.1V11.2ZM8.05 12.145C8.4175 12.0715 8.764 11.956 9.1 11.809V11.2H8.05V12.145ZM10.15 8.05H11.2V7H10.15V8.05ZM9.1 4.9H8.05V5.95H9.1V4.9ZM11.2 9.1H11.809C11.956 8.764 12.0715 8.4175 12.145 8.05H11.2V9.1ZM9.1 7H8.05V8.05H9.1V7ZM7 10.15L7 9.1H8.05V8.05H7V7H8.05V5.95H7V4.9H8.05V3.85H7V2.8L8.05 2.8V1.855C7.70875 1.78675 7.36225 1.75 7 1.75C4.1125 1.75 1.75 4.1125 1.75 7C1.75 9.8875 4.1125 12.25 7 12.25V11.2H8.05V10.15H7ZM8.05 10.15H9.1V9.1H8.05V10.15Z" fill="url(#paint0_linear_189_3771)" />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_189_3771" x1="7" y1="1.75" x2="7" y2="12.25" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FCAF60" />
                            <stop offset="1" stop-color="#FCAF60" stop-opacity="0" />
                        </linearGradient>
                        <clipPath id="clip0_189_3771">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            );

        case Colour.blue:
        case Colour.green:
        case Colour.purple:
            return (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7" cy="7" r="5.75" fill={props.colour} stroke="#DDDDDF" />
                </svg>
            );
        default:
            return (
                <img src={circle} />
            );
    }
};
