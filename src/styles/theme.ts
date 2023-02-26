export interface ThemeData {
    palette: {
        common: {
            facebookBlue: string;
            black: string;
            white: string;
            red: string;
            primary: string;
            secondary: string;
            tertiary: string;
        };
    };
}

export const theme: ThemeData = {
    palette: {
        common: {
            facebookBlue: "#1877F2",
            black: "#000000",
            white: "#FFFFFF",
            red: "#BA2010",
            primary: "#18AC4D",
            secondary: "#E8E6E3",
            tertiary: "#A59D92",
        },
    },
};

export default theme;
